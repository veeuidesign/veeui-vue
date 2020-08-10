<template>
  <section class="vee-container" :class="{isVertical}">
      <slot></slot>
  </section>
</template>

<script>
export default {
    name: 'vee-container',
    data() {
        return {
            isVertical: true
        }
    },
    mounted() {
        this.isVertical = this.$children.some(child => ['vee-footer', 'vee-header'].includes(child.$options.name))
    }
}
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