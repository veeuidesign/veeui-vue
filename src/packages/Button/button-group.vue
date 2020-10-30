<template>
  <div class="vee-button-group">
      <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'vee-button-group',
  props: {
    
  },
  components: {
    
  }
});
</script>

<style lang="scss">
@import '@/styles/_var.scss';
.vee-button-group {
    display: inline-flex;
    vertical-align: middle;
    button {
        position: relative;
        border-radius: 0;
        &:not(:first-child) {
            margin-left: -1px;
        }
        &:first-child {
            border-radius: 4px 0 0 4px;
        }
        &:last-child {
            border-radius: 0 4px 4px 0;
        }
        &:hover {
            z-index: 1;
        }
        &:focus {
            z-index: 2;
        }
    }
}
</style>