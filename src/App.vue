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
      <li></li>
      <li></li>
      <li></li>
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
  methods: {
    fn(e) {
      console.log(e)
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
}
</style>
