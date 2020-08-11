<template>
  <div class="vee-upload-dragger" 
    @drop.prevent="handleDrop" 
    @dragover.prevent 
    @dragleave.prevent
  >
    <vee-icon class="icon" icon="upload"></vee-icon>
    <span>将文件拖拽到此区域即可上传</span>
  </div>
</template>

<script>
export default {
    name: 'vee-upload-dragger',
    props: {
        accept: {
            type: String
        }
    },
    methods: {
        handleDrop(e) {
            if(!this.accept) {
                this.$emit('file', e.dataTransfer.files);
            } else {
                // 做过滤 image/jpeg
                this.$emit('file', e.dataTransfer.files);
            }
        }
    }
}
</script>

<style lang="scss">
.vee-upload-dragger {
    background: #eee;
    border: 1px dashed #ccc;
    border-radius: 10px;
    width:360px;
    height: 180px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: center;
    justify-content: center;
    .icon {
        display: flex;
        width: 40px;
        height: 40px;
    }
}
</style>