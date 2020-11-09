<template>
    <main class="vee-main">
        <slot></slot>
    </main>
</template>

<script lang="ts">
import '@/styles/icon';
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'vee-main',
  props: {
    
  },
  components: {
    
  },
});
</script>

<style lang="scss">
.vee-main {
    flex: 1;
    padding: 20px;
}
</style>