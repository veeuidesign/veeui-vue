<template>
  <div class="vee-row" :style="rowStyle">
      <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'vee-row',
  props: {
    gutter: {
        type: Number,
        default: 0
    },
    justify: {
        type: String
    }
  },
  setup(props, {slots}) {
      const a = ref(props.gutter);
      const rowStyle = computed(() => {
          let styles = {};
            if(props.gutter) {
                styles = {
                    ...styles,
                    marginLeft: - props.gutter / 2 + 'px',
                    marginRight: - props.gutter /2 + 'px'
                }
            }
            if(props.justify) {
                let key = ['start', 'end'].includes(props.justify) ? `flex-${props.justify}` : props.justify;
                styles = {
                    ...styles,
                    justifyContent: key
                }
            }
            return styles;
      })
      onMounted(() => {
          console.log('slots', slots)
      });

      return {
          rowStyle,
          a
      }
  }
});
</script>

<style lang="scss">
.vee-row {
    display: flex;
    overflow: hidden;
    flex-wrap: wrap;
}
</style>