<template>
  <section class="vee-container" :class="{isVertical}">
    <slot></slot>
  </section>
</template>

<script lang="ts">
import '@/styles/icon';
import { computed, defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'vee-container',
  props: {
    
  },
  components: {
    
  },
  setup() {
      let isVertical = true;

      onMounted(() => {
          // 处理children的name问题
      })

      return {
          isVertical
      }
  }
});
</script>

<style lang="scss">
.vee-container {
    display: flex;
    flex: 1;
    flex-direction: row;
}
.vee-container.isVertical {
    flex-direction: column;
}
</style>