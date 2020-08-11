<template>
  <div class="vee-progress">
      <div class="vee-progress-bar">
          <div class="outer" :style="{height: strokeWidth + 'px'}">
              <div class="inner" :style="barStyle"></div>
          </div>
          
      </div>
  </div>
</template>

<script>
export default {
    name: 'vee-progress',
    props: {
        strokeWidth: {
            type: Number,
            default: 6
        },
        percentage: {
            type: Number,
            default: 0,
            required: true
        },
        color: {
            type: String,
            default: 'blue'
        }
    },
    computed: {
        barStyle() {
            const styles = {};
            styles.width = this.percentage + '%';
            styles.background = this.color;
            return styles;
        }
    }
}
</script>

<style lang="scss">
.vee-progress {
    &-bar {
        .outer {
            border-radius: 100px;
            background: #eee;
            position: relative;
            vertical-align: middle;

            .inner {
                transition: width .6s ease;
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
            }
        };   
    }
}
</style>