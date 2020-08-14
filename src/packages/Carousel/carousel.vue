<template>
  <div class="vee-carousel">
      <div class="viewport">
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
    name: 'vee-carousel',
    props: {
        height: {
            type: String,
            default: '200px'
        },
        autoplay: {
            type: Boolean,
            default: true
        },
        delay: {
            type: Number,
            default: 3000
        },
        initialIndex: {
            type: Number,
            default: 0
        },
        loop: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style lang="scss">
.vee-carousel {

}
</style>