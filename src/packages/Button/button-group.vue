<template>
  <div class="vee-button-group">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'vee-button-group',
    mounted() {
        // 校验内部是否为button组件
        let children = this.$el.children;
        for(let i = 0; i< children.length; i++) {
            console.assert(children[i].tagName == 'BUTTON', '子元素必须是button')
        } 
    }
}
</script>

<style lang="scss">
@import '@/styles/_var.scss';
.vee-button-group {
    display: inline-flex;
    vertical-align: middle;

    button {
        position: relative;
        border-radius: 0;

        &:not(:first-child) {
            margin-left: -1px;
        }

        &:first-child {
            border-radius: 4px 0 0 4px;
        }

        &:last-child {
            border-radius: 0 4px 4px 0;
        }

        &:hover {
            z-index: 1;
        }

        &:focus {
            z-index: 2;
        }
    }
}
</style>