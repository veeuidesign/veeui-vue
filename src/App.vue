<template>
  <div id="app" class="vee-app">
    <ul>
      <li>
        <h3>按钮</h3>
        <span class="vee-break"></span>
        <vee-button>默认按钮</vee-button>&nbsp;
        <vee-button type="primary">普通按钮</vee-button>&nbsp;
        <vee-button type="warning">警告按钮</vee-button>&nbsp;
        <vee-button type="danger">危险按钮</vee-button>&nbsp;
        <vee-button type="info">提示按钮</vee-button>&nbsp;
        <vee-button type="success">成功按钮</vee-button>
        <span class="vee-break"></span>
        <vee-button type="info" icon="search">图标按钮</vee-button>&nbsp;
        <vee-button type="info" icon="warning-outline"></vee-button>&nbsp;
        <vee-button type="info" icon="plus" @click="fn" icon-position="right">图标按钮</vee-button>&nbsp;
        <vee-button type="success" loading>加载按钮</vee-button>
        <span class="vee-break"></span>
        <vee-button-group>
          <vee-button icon="arrow-left" icon-position="left">上一页</vee-button>
          <vee-button icon="arrow-right" icon-position="right">下一页</vee-button>
        </vee-button-group>
      </li>
      <li>
        <h3>图标</h3>
        <span class="vee-break"></span>
        <vee-icon icon="location"></vee-icon>&nbsp;
        <vee-icon icon="plus"></vee-icon>&nbsp;
        <vee-icon icon="warning-outline"></vee-icon>&nbsp;
        <vee-icon icon="search"></vee-icon>&nbsp;
        <vee-icon icon="star-on"></vee-icon>&nbsp;
        <vee-icon icon="success"></vee-icon>&nbsp;
        <vee-icon icon="paperclip"></vee-icon>&nbsp;
      </li>
      <li>
        <h3>布局</h3>
        <span class="vee-break"></span>
        <vee-row>
          <vee-col :span="12">
            <div class="vee-col-dark"></div>
          </vee-col>
          <vee-col :span="12">
            <div class="vee-col-light"></div>
          </vee-col>
        </vee-row>
        <span class="vee-break"></span>
        <vee-row>
          <vee-col :span="24">
            <div class="vee-col-medium"></div>
          </vee-col>
        </vee-row>
        <span class="vee-break"></span>
        <vee-row>
          <vee-col :span="6" :offset="1">
            <div class="vee-col-dark"></div>
          </vee-col>
          <vee-col :span="6" :offset="3">
            <div class="vee-col-light"></div>
          </vee-col>
        </vee-row>
        <span class="vee-break"></span>
        <vee-row :gutter="20">
          <vee-col :span="6">
            <div class="vee-col-dark"></div>
          </vee-col>
          <vee-col :span="6">
            <div class="vee-col-light"></div>
          </vee-col>
          <vee-col :span="6">
            <div class="vee-col-dark"></div>
          </vee-col>
          <vee-col :span="6">
            <div class="vee-col-light"></div>
          </vee-col>
        </vee-row>
        <span class="vee-break"></span>
        <vee-row justify="end">
          <vee-col :span="6">
            <div class="vee-col-dark"></div>
          </vee-col>
          <vee-col :span="6">
            <div class="vee-col-light"></div>
          </vee-col>
        </vee-row>
        <span class="vee-break"></span>
        <vee-row :gutter="10">
          <vee-col :xs="8" :sm="6" :md="4" :lg="3" :xl="{'span':2,'offset':23,'aaa':1}">
            <div class="vee-col-dark"></div>
          </vee-col>
          <vee-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
            <div class="vee-col-light"></div>
          </vee-col>
          <vee-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
            <div class="vee-col-dark"></div>
          </vee-col>
          <vee-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
            <div class="vee-col-light"></div>
          </vee-col>
        </vee-row>
      </li>
      <li>
        <h3>容器</h3>
        <span class="vee-break"></span>
        <vee-container>
          <vee-header class="vee-container-dark">Header</vee-header>
          <vee-main class="vee-container-medium">Main</vee-main>
        </vee-container>
        <span class="vee-break"></span>
        <vee-container>
          <vee-header class="vee-container-dark">Header</vee-header>
          <vee-main class="vee-container-medium">Main</vee-main>
          <vee-footer class="vee-container-dark">Footer</vee-footer>
        </vee-container>
        <span class="vee-break"></span>
        <vee-container>
          <vee-aside class="vee-container-light" width="200px">Aside</vee-aside>
          <vee-main class="vee-container-medium">Main</vee-main>
        </vee-container>
        <span class="vee-break"></span>
        <vee-container>
          <vee-header class="vee-container-dark">Header</vee-header>
          <vee-container>
            <vee-aside class="vee-container-light" width="200px">Aside</vee-aside>
            <vee-main class="vee-container-medium">Main</vee-main>
          </vee-container>
        </vee-container>
        <span class="vee-break"></span>
        <vee-container>
          <vee-header class="vee-container-dark">Header</vee-header>
          <vee-container>
            <vee-aside class="vee-container-light" width="200px">Aside</vee-aside>
            <vee-container>
              <vee-main class="vee-container-medium">Main</vee-main>
              <vee-footer class="vee-container-dark">Footer</vee-footer>
            </vee-container>
          </vee-container>
        </vee-container>
        <span class="vee-break"></span>
        <vee-container>
          <vee-aside class="vee-container-light" width="200px">Aside</vee-aside>
          <vee-container>
            <vee-header class="vee-container-dark">Header</vee-header>
            <vee-main class="vee-container-medium">Main</vee-main>
          </vee-container>
        </vee-container>
        <span class="vee-break"></span>
        <vee-container>
          <vee-aside class="vee-container-light" width="200px">Aside</vee-aside>
          <vee-container>
            <vee-header class="vee-container-dark">Header</vee-header>
            <vee-main class="vee-container-medium">Main</vee-main>
            <vee-footer class="vee-container-dark">Footer</vee-footer>
          </vee-container>
        </vee-container>
      </li>
      <li>
        <h3>输入框</h3>
        <span class="vee-break"></span>
        <vee-input v-model="value" type="text" placeholder="请输入内容" name="username"></vee-input>&nbsp;
        <vee-input v-model="value" type="password" placeholder="请输入内容" name="userpassword"></vee-input>&nbsp;
        <vee-input v-model="value" disabled type="text" placeholder="请输入内容" name="username"></vee-input>&nbsp;
        <vee-input v-model="value" clearable type="text" placeholder="请输入内容" name="username"></vee-input>&nbsp;
        <vee-input v-model="value" show-password type="password" placeholder="请输入内容" name="userpassword"></vee-input>
        <span class="vee-break"></span>
        <vee-input v-model="value" prefix-icon="time" type="password" placeholder="请输入内容" name="userpassword"></vee-input>&nbsp;
        <vee-input v-model="value" suffix-icon="time" type="password" placeholder="请输入内容" name="userpassword"></vee-input>&nbsp;
        {{value}}
      </li>
      <li>
        <h3>文件上传</h3>
        <span class="vee-break"></span>
        <p class="vee-note">
          name 输入框提交到后台的字段名字<br>
          action 提交到后端的路径<br>
          limit 限制提交个数<br>
          on-exceed 用来如果超出限制后方法<br>
          on-change 上传文件发生变化后执行方法<br>
          on-success 上传成功时候会触发<br>
          on-error 上传失败时候会触发<br>
          fileList 显示已经上传过的文件<br>
        </p>
        <span class="vee-break"></span>
        <vee-upload
          name="avatar"
          action="http://localhost:3000/upload"
          :file-list="fileList"
          :limit="3"
          accept="image/jpeg"
          multiple
          :on-exceed="handleExceed"
          :on-change="handleChange"
          :on-success="handleSuccess"
          :on-error="handleError"
          :on-progress="handleProgress"
          :beforeUpload="beforeUpload"
          drag
        >
          <vee-button type="primary" icon="upload1">上传文件</vee-button>
          <div slot="tip">
            只能上传jpg/png文件，且不超过500kb
          </div>
        </vee-upload>
      </li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>

    
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      value: '',
      fileList: [
        {
          url: 'xxx',
          name: 'aaa'
        },
        {
          url: 'xxx',
          name: 'bbb'
        },
      ]
    }
  },
  methods: {
    fn(e) {
      console.log(e)
    },
    handleExceed(files, fileList) {
      console.log('超过限制了')
    },
    handleChange(file) {
      // console.log('file', file)
    },
    handleSuccess() {

    },
    handleError() {

    },
    handleProgress() {

    },
    beforeUpload(rawFile) {
      if(rawFile.size / 1024 > 500) {
        console.log('当前超过了最大限制');
        return false;
      } else if ( !( /\.(?:jpg|png|jpeg)$/i.test(rawFile.name)) ) {
        console.log('上传文件类型不符合要求');
        return false
      }
      return true;
    }
  }
}
</script>

<style lang="scss">
$height: 30px;
$border-radius: 4px;

.vee-app {
  padding: 10px;

  .vee-break {
    display:block;
    margin: 10px;
  }

  .vee-note {
    font-size: 12px;
    color: #999;
  }

  ul>li {
    padding: 5px;
  }

  .vee-col {
    &-dark,
    &-medium,
    &-light {
      height: $height;
      border-radius: $border-radius;
    }
    

    &-dark {
      background: #333;
    }

    &-medium {
      background: #999;
    }

    &-light {
      background: #ccc;
    }
  }

  .vee-container {
    &-dark,
    &-medium,
    &-light {
      color: #fff;
      text-align: center;
    }
    

    &-dark {
      background: #222;
      line-height: 60px;
    }

    &-medium {
      background: #666;
      line-height: 160px;
    }

    &-light {
      background: #aaa;
      line-height: 200px;
    }
  }
}
</style>
