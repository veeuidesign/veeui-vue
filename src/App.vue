<template>
  <div id="app">
    <vee-button>默认按钮</vee-button>

    <vee-button type="primary">普通按钮</vee-button>
    <vee-button type="warning">警告按钮</vee-button>
    <vee-button type="danger">危险按钮</vee-button>
    <vee-button type="info">提示按钮</vee-button>
    <vee-button type="success">成功按钮</vee-button>

    <vee-button type="info" icon="search">图标按钮</vee-button>
    <vee-button type="info" icon="warning-outline"></vee-button>
    <vee-button type="info" icon="plus" @click="fn" icon-position="right">图标按钮</vee-button>

    <vee-button type="success" loading>加载按钮</vee-button><br>

    <vee-button-group>
      <vee-button icon="arrow-left" icon-position="left">上一页</vee-button>
      <vee-button icon="arrow-right" icon-position="right">下一页</vee-button>
    </vee-button-group>

    <vee-icon icon="location"></vee-icon>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    fn(e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss">

</style>
