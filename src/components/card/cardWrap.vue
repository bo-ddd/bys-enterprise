<script setup lang="ts">

</script>

<template>
    <div class="crad-wrap">
        <slot name="header"></slot>
        <slot name="main"></slot>
    </div>

</template>

<style lang="scss" scoped>
.crad-wrap {
    background: white;
    padding: 12px;
    border-radius: 5px;
}
</style>
