<template>
  <div class="vee-col" :class="colClass" :style="colStyle">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'vee-col',
    data() {
        return {
            gutter: 0
        }
    },
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
    computed: {
        colClass() {
            let classes = [];
            classes.push(`vee-col-${this.span}`);
            if(this.offset) {
                classes.push(`vee-col-offset-${this.offset}`)
            }
            ['xs', 'sm', 'md', 'lg', 'xl'].forEach(type => {
                if(this[type] == 'object') {
                    let { span, offset } = this[type];
                    span && classes.push(`vee-col-${type}-${span}`);
                    offset && classes.push(`vee-col-${type}-offset-${offset}`);
                } else {
                    this[type] && classes.push(`vee-col-${type}-${this[type]}`);
                }
            })
            return classes;
        },
        colStyle() {
            let styles = {};
            if(this.gutter) {
                styles = {
                    ...styles,
                    paddingLeft: this.gutter / 2 + 'px',
                    paddingRight: this.gutter /2 + 'px'
                }
            }

            return styles;
        }
    }
}
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