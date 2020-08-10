<template>
    <aside class="vee-aside" :style="{width}">
        <slot></slot>
    </aside>
</template>

<script>
export default {
    name: 'vee-aside',
    props: {
        width: {
            type: String,
            default: '300px'
        }
    }
}
</script>

<style lang="scss">

</style>