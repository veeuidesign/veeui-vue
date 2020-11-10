<template>
    <div class="vee-popover">
      <div class="vee-popover-content" :class="`vee-popover-content-${placement}`" v-if="visible" @click.stop ref="content">
          <h3 v-if="title">{{title}}</h3>
          <slot>{{content}}</slot>
          <div class="arrow"></div>
      </div>
      <slot name="reference"></slot>
    </div>
</template>

<script lang="ts">
import '@/styles/icon';
import { computed, defineComponent, onMounted, watch } from 'vue';

const on = (element: { addEventListener: (arg0: any,arg1: any,arg2: boolean) => void; }, event: any, handler: any) => {
    element.addEventListener(event, handler, false);
}
const off = (element: { removeEventListener: (arg0: any,arg1: any,arg2: boolean) => void; }, event: any, handler: any) => {
    element.removeEventListener(event, handler, false);
}

export default defineComponent({
  name: 'vee-popover',
  props: {
    show: {
        type: Boolean,
        default: false
    },
    placement: {
        type: String
    },
    width: {
        type: String
    },
    title: {
        type: String
    },
    content: {
        type: String
    },
    trigger: {
        type: String
    }
  },
  components: {
    
  },
  setup(props) {
      let visible = false,
          timer: number|null|undefined = null;

      const toggle = () => visible = !visible;

      const handleDocumentClick = (e: any) => {
        console.log(e)
        // if(this.$el.contains(e.target)) {
        //     return false;
        // }
        visible = false;
      };

      const handleMouseEnter = () => {
        //clearTimeout(timer);
        visible = true;
      };

      const handleMouseLeave = () => {
        timer = setTimeout(() => {
            visible = false;
        }, 500);
      };

      onMounted(()=>{

      });

      return {
        visible,
        timer,
        toggle,
        handleDocumentClick,
        handleMouseEnter,
        handleMouseLeave
      }
  }
});
</script>

<style lang="scss">
@import '@/styles/_var.scss';
.vee-popover {
    display: inline-block;
    position: relative;
    &-content {
        position: absolute;
        padding: 10px;
        border-radius: $border-radius;
        left: 50%;
        top: 50%;
        z-index: 10;
        box-shadow: -1px -1px 3px $color-light, 1px 1px 3px $color-light;
        background-color: #fff;
        &-top {
            .arrow {
                left: 50%;
                margin-left: -6px;
                bottom: 0;
                &::after,
                &::before {
                    transform: rotate(180deg);
                }
            }
        }
        &-bottom {
            .arrow {
                left: 50%;
                margin-left: -6px;
                top: -12px;
            }
        }
        &-left {
            .arrow {
                top: 50%;
                margin-top: -6px;
                right: 0;
                &::after,
                &::before {
                    transform: rotate(90deg);
                }
            }
            
        }
        &-right {
            .arrow {
                top: 50%;
                margin-top: -6px;
                left: -12px;
            
                &::after,
                &::before {
                    transform: rotate(-90deg);
                }
            }
        }
        
    }    
}
.arrow {
        position: absolute;
    }
.arrow::before,
.arrow::after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-bottom-color: $color-light;
    position: absolute;
}
.arrow::after {
    border-bottom-color: #fff;
    transform: translateY(1px);
    filter: drop-shadow(0 -2px 1px $color-light)
}
</style>