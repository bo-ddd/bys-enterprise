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
.crad-wrap:hover{
    box-shadow:4px 4px 4px 6px rgb(228, 228, 228);
    color: rgb(85, 85, 245);
}
</style>
