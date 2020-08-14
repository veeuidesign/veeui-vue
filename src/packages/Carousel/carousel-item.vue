<template>
  <transition>
      <div class="vee-carousel-item">
          <slot></slot>
      </div>
  </transition>
</template>

<script>
export default {
    name: 'vee-carousel-item'
}
</script>

<style lang="scss">
.vee-carousel-item {
    width: 100%;
    height:100%;
}
</style>