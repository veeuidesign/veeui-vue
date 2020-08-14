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

<script>

const on = (element, event, handler) => {
    element.addEventListener(event, handler, false);
}

const off = (element, event, handler) => {
    element.removeEventListener(event, handler, false);
}

export default {
    name: 'vee-popover',
    props: {
        show: {
            type: Boolean,
            default: false
        },
        placement: {
            validator(type) {
                if(!['top', 'bottom', 'left', 'right'].includes(type)) {
                    console.error(`属性必须是${['top', 'bottom', 'left', 'right'].join('、')}中的一个`)
                }
                return true;
            }
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
    data() {
        return {
            visible: false,
            timer: null
        }
    },
    methods: {
        toggle() {
            this.visible = !this.visible;
        },
        handleDocumentClick(e) {
            if(this.$el.contains(e.target)) {
                return false;
            }
            this.visible = false;
        },
        handleMouseEnter() {
            clearTimeout(this.timer);
            this.visible = true;
        },
        handleMouseLeave() {
            this.timer = setTimeout(() => {
                this.visible = false;
            }, 500);
        }
    },
    mounted() {
        const reference = this.$slots.reference;
        if( reference ) {
            this.reference = reference[0].elm;
        } 
        if( this.trigger == 'hover' ) {
            on(this.$el, 'mouseenter', this.handleMouseEnter);
            on(this.$el, 'mouseleave', this.handleMouseLeave);
        } else if ( this.trigger == 'click' ) {
            on(this.reference, 'click', this.toggle);
            on(document, 'click', this.handleDocumentClick);
        }
    },
    beforeDestroy() {
        off(this.$el, 'mouseenter', this.handleMouseEnter);
        off(this.$el, 'mouseleave', this.handleMouseLeave);
        off(this.reference, 'click', this.toggle);
        off(document, 'click', this.handleDocumentClick);
    },
    watch: {
        visible(newValue) {
            if(newValue) {
                this.$nextTick(() => {
                   const content = this.$refs.content;
                   document.body.appendChild(content);
                   if(this.trigger == 'hover') {
                       on(content, 'mouseenter', this.handleMouseEnter);
                       on(content, 'mouseleave', this.handleMouseLeave);
                   }
                })
            }
        }
    }
}
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