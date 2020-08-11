<template>
  <div class="vee-upload">
      <UploadDragger 
        v-if="drag"
        :accept="accept"
        @file="uploadFiles"
      />
      <template v-else>
        <div @click="handleClick" class="vee-upload-button">
            <slot></slot>
        </div>
        <input type="file" 
            :accept="accept" 
            :multiple="multiple"
            :name="name"
            @change="handleChange"
            ref="input"
            class="native-input"
        />
      </template>
      <div class="vee-upload-tip" >
          <slot name="tip"></slot>
      </div>
      <ul>
          <li v-for="file in files" :key="file.uid">
              <div class="list-item">
                  <vee-icon icon="document"></vee-icon>
                  {{file.name}}
                  <vee-progress v-if="file.status == 'uploading'" :percentage="file.percentage"></vee-progress>
                  {{file.status}}
                  <vee-icon icon="close"></vee-icon>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
import ajax from './utils/ajax.js';
import UploadDragger from '@/packages/Upload/upload-dragger.vue';
export default {
    name: 'vee-upload',
    components: {
        UploadDragger
    },
    props: {
        name: {
            type: String,
            default: 'file'
        },
        fileList: {
            type: Array,
            default: () => []
        },
        action: {
            type: String,
            required: true
        },
        accept: {
            type: String
        },
        limit: Number,
        multiple: Boolean,
        onExceed: Function,
        onChange: Function,
        onSuccess: Function,
        onError: Function,
        onProgress: Function,
        beforeUpload: Function,
        httpRequest: {
            type: Function,
            default: ajax
        },
        drag: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            tempIndex: 1,
            files: [],
            reqs: {

            }
        }
    },
    watch: {
        fileList: {
            immediate: true,
            handler(fileList, oldValue) {
                this.files = fileList.map(item => {
                    item.uid = Date.now() + this.tempIndex++;
                    item.status = 'success';
                    return item;
                })
            }
        }
    },
    methods: {
        handleClick() {
            this.$refs.input.value = '';
            this.$refs.input.click();
        },
        handleStart(rawFile) {
            // 给文件生成唯一id标识
            rawFile.uid = Math.random() + this.tempIndex++;
            let file = {
                status: 'ready',
                name: rawFile.name,
                size: rawFile.size,
                percentage: 0, // 上传进度
                uid: rawFile.uid,
                raw: rawFile
            }
            this.files.push(file);
            this.onChange && this.onChange(file)
        },
        getFile(rawFile) {
            return this.files.find(file => file.uid == rawFile.uid);
        },
        post(rawFile) {
            // 真正发送请求
            const uid = rawFile.uid;
            const options = {
                file: rawFile,
                filename: this.name,
                action: this.action,
                onProgress: ev => {
                    // 处理上传中的状态
                    this.handleProgress(ev, rawFile);
                },
                onSuccess: res => {
                    // 处理成功的状态
                    this.handleSuccess(res, rawFile);
                },
                onError: err => {
                    // 处理失败的状态
                    this.handleError(err, rawFile);
                }
            };
            const req = this.httpRequest(options);
            this.reqs[uid] = req;
            // 允许用户使用promise的ajax
            if(req && req.then) {
                req.then(options.onSuccess, options.onError)
            }
        },
        upload(rawFile) {
            // 真正上传文件
            if(!this.beforeUpload) {
                // 直接上传
                return this.post(rawFile)
            }
            let flag = this.beforeUpload(rawFile);
            if(flag) {
                // 直接上传
                return this.post(rawFile)
            }
        },
        uploadFiles(files) {
            if(this.limit && this.fileList.length + files.length > this.limit) {
                return this.onExceed && this.onExceed(files, this.fileList)
            }
            [...files].forEach(rawFile => {
                // 用户可能频繁上传同一文件
                this.handleStart(rawFile);
                this.upload(rawFile);
            })
        },
        handleChange(e) {
            const files = e.target.files;
            this.uploadFiles(files);
        },
        handleProgress(ev, rawFile) {
            let file = this.getFile(rawFile);
            file.status = 'uploading';
            file.percentage = ev.percent || 0;
            this.onProgress(ev, rawFile); // 调用用户的回调
        },
        handleSuccess(res, rawFile) {
            let file = this.getFile(rawFile);
            file.status = 'success';
            this.onSuccess(res, rawFile);
            this.onChange(file);
        },
        handleError(err, rawFile) {
            let file = this.getFile(rawFile);
            file.status = 'fail';
            this.onSuccess(err, rawFile);
            this.onChange(file);
            delete this.reqs[file.uid];
        }
    }
}
</script>

<style lang="scss">
.vee-upload {

    ul>li {
        list-style: none;
    }

    &-tip {
        padding: 10px;
        font-size: 12px;
        color: #ccc;
    }

    &-button {
        display: inline-block;
    }

    .native-input {
        display: none;
    }
}
</style>