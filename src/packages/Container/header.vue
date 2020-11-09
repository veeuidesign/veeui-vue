<template>
    <header class="vee-header">
        <slot></slot>
    </header>
</template>

<script lang="ts">
import '@/styles/icon';
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'vee-header',
  props: {
    
  },
  components: {
    
  },
});
</script>

<style lang="scss">
.vee-header {
    height: 60px;
}
</style>