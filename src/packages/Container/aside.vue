<template>
    <aside class="vee-aside" :style="{width}">
        <slot></slot>
    </aside>
</template>

<script lang="ts">
import '@/styles/icon';
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'vee-aside',
  props: {
    width: {
        type: String,
        default: '300px'
    }
  },
  components: {
    
  },
});
</script>

<style lang="scss">
</style>