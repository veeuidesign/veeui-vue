<template>
    <svg class="vee-icon" aria-hidden="true" @click="$emit('click', $event)">
        <use :xlink:href="`#icon${icon}`"></use>
    </svg>
</template>

<script lang="ts">
import '@/styles/icon';
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'vee-icon',
  props: {
    icon: {
        type: String,
        required: true
    }
  },
  components: {
    
  },
});
</script>

<style lang="scss">
.vee-icon {
    width: 25px;
    height: 25px;
    vertical-align: middle;
}
</style>