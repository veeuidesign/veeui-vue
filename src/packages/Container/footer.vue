<template>
    <footer class="vee-footer">
        <slot></slot>
    </footer>
</template>

<script lang="ts">
import '@/styles/icon';
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'vee-footer',
  props: {
    
  },
  components: {
    
  },
});
</script>

<style lang="scss">
.vee-footer {
    height: 60px;
}
</style>