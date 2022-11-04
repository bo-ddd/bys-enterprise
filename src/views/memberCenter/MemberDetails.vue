<template>
    <div >
        <header class="wrap">
            <img class="icon" src="@/assets/images/title_silver.png" alt="">
            <p class="">银卡会员</p>
        </header>
    </div>
</template>

<script setup lang="ts" >
import { inject, onMounted } from 'vue';
let data = inject('data');
console.log(data);
onMounted(()=>{
    data
})
</script>

<style lang="scss" scoped>

</style>