<template>
  <div class="vee-row" :style="rowStyle">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'vee-row',
    props: {
        gutter: {
            type: Number,
            default: 0
        },
        justify: {
            type: String,
            validator(type) {
                if(type && !['start', 'end', 'space-around', 'space-between'].includes(type)) {
                    console.error(`类型必须是${['start', 'end', 'space-around', 'space-between'].join('、')}其中的一种`)
                }
                return true;
            }
        }
    },
    computed: {
        rowStyle() {
            let styles = {};
            if(this.gutter) {
                styles = {
                    ...styles,
                    marginLeft: - this.gutter / 2 + 'px',
                    marginRight: - this.gutter /2 + 'px'
                }
            }
            if(this.justify) {
                let key = ['start', 'end'].includes(this.justify) ? `flex-${this.justify}` : this.justify;
                styles = {
                    ...styles,
                    justifyContent: key
                }
            }
            return styles; // 通过外层的margin负值扩大了row的宽度，当外宽100%时候会出现溢出
        }
    },
    mounted() {
        this.$children.forEach(child => {
            child.gutter = this.gutter;
        });
    }
}
</script>

<style lang="scss">
.vee-row {
    display: flex;
    overflow: hidden;
    flex-wrap: wrap;
}
</style>