<template>
  <img class="logo" src="https://vleedesigntheory.github.io/design/vi/veevi20200808/veedesign.png" alt="logo">
  <p class="title">Vee UI @3.x</p>
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
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    
  }
});
</script>

<style lang="scss">
@import '@/styles/_var.scss';
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
  .vee-infinite-box {
    width: 300px;
    height: 300px;
    border: 1px solid $primary;
  }
}

.logo {
  width: 200px;
  display: block;
  margin: 20px auto;
}

.title {
  text-align: center;
  font-size: 20px;
  color: #333;
  font-weight: bold;
}
</style>
