<template>
    <main class="vee-main">
        <slot></slot>
    </main>
</template>

<script>
export default {
    name: 'vee-main'
}
</script>

<style lang="scss">
.vee-main {
    flex: 1;
    padding: 20px;
}
</style>