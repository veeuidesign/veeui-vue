<template>
    <svg class="vee-icon" aria-hidden="true" @click="$emit('click', $event)">
        <use :xlink:href="`#icon${icon}`"></use>
    </svg>
</template>

<script>
import '@/styles/icon'
export default {
    name: 'vee-icon',
    props: {
        icon: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss">
.vee-icon {
    width: 25px;
    height: 25px;
    vertical-align: middle;
}
</style>