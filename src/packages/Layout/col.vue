<template>
  <div class="vee-col" :class="colClass" :style="colStyle">
      <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'vee-col',
  props: {
    span: {
        type: Number,
        default: 24
    },
    offset: {
        type: Number,
        default: null
    },
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object],
  },
  setup(props) {
      let gutter = 0;
      const colClass = computed(()=> {
          let classes = [];
            classes.push(`vee-col-${props.span}`);
            if(props.offset) {
                classes.push(`vee-col-offset-${props.offset}`)
            }
            ['xs', 'sm', 'md', 'lg', 'xl'].forEach(type => {
                // @ts-ignore
                if(props[type] == 'object') {
                    // @ts-ignore
                    let { span, offset } = this[type];
                    span && classes.push(`vee-col-${type}-${span}`);
                    offset && classes.push(`vee-col-${type}-offset-${offset}`);
                } else {
                    // @ts-ignore
                    props[type] && classes.push(`vee-col-${type}-${props[type]}`);
                }
            })
            return classes;
      });

      const colStyle = computed(() => {
          let styles = {};
            if(gutter) {
                styles = {
                    ...styles,
                    paddingLeft: gutter / 2 + 'px',
                    paddingRight: gutter /2 + 'px'
                }
            }
            return styles;
      })

      return {
          colClass,
          colStyle,
          gutter
      }
  }
});
</script>

<style lang="scss">
@import '@/styles/_var.scss';
@for $i from 1 through 24 {
    .vee-col-#{$i} {
        width: $i / 24 * 100%;
    }
    .vee-col-offset-#{$i} {
        margin-left: $i / 24 * 100%;
    }
}
@include res(xs) {
    @for $i from 1 through 24 {
        .vee-col-xs-#{$i} {
            width: $i / 24 * 100%;
        }
        .vee-col-offset-#{$i} {
           margin-left: $i / 24 * 100%;
        }
    }
}
@include res(sm) {
    @for $i from 1 through 24 {
        .vee-col-xs-#{$i} {
            width: $i / 24 * 100%;
        }
        .vee-col-offset-#{$i} {
           margin-left: $i / 24 * 100%;
        }
    }
}
@include res(md) {
    @for $i from 1 through 24 {
        .vee-col-xs-#{$i} {
            width: $i / 24 * 100%;
        }
        .vee-col-offset-#{$i} {
           margin-left: $i / 24 * 100%;
        }
    }
}
@include res(lg) {
    @for $i from 1 through 24 {
        .vee-col-xs-#{$i} {
            width: $i / 24 * 100%;
        }
        .vee-col-offset-#{$i} {
           margin-left: $i / 24 * 100%;
        }
    }
}
@include res(xl) {
    @for $i from 1 through 24 {
        .vee-col-xs-#{$i} {
            width: $i / 24 * 100%;
        }
        .vee-col-offset-#{$i} {
           margin-left: $i / 24 * 100%;
        }
    }
}
</style>