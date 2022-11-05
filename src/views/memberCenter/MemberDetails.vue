<template>
    <div>
        <div class="wrap">
            <header class="mt-35 flex-ja-center">
                <img class="icon" src="@/assets/images/icon_silver.png" alt="">
                <p class="fs-24 fw-600">银卡会员</p>
            </header>
            <main class="mt-10 flex">
                <VipVue @click="handlactive(1)" :active="active" :list="data" :count="1"></VipVue>
                <VipVue @click="handlactive(3)" :active="active" :list="data" :count="3"></VipVue>
                <VipVue @click="handlactive(9)" :active="active" :list="data" :count="9"></VipVue>
                <VipVue @click="handlactive(12)" :active="active" :list="data"  :count="12"></VipVue>
            </main>
        </div>
    </div>
</template>

<script setup lang="ts" >
import VipVue from '@/components/VipVue.vue';
import { useRoute } from 'vue-router'

let route = useRoute();
console.log(route.query);
let data = route.query;
let active = 1;
let handlactive = (count:number):void=>{
    active = count
    console.log(active)
}
</script>

<style lang="scss" scoped>
header {
    border: 1px solid #eef0f2;
    padding: 10px 0;
    gap: 10px;

    .icon {
        width: 50px;
    }
}

main {
    .vip-wrap {
        width: 301px;
        position: relative;
        border: 1px solid #f4f2f1 !important;
        border-left: none;
        cursor: pointer;
        padding-left: 15px;
        box-sizing: border-box;

        h5 {
            border-bottom: 1px solid #f4f2f1;
            line-height: 56px;
        }

        ul {

            li {
                $height: 48px;
                height: $height;
                line-height: $height;


                .yuan {
                    content: "";
                    display: inline-block;
                    width: 4px;
                    height: 4px;
                    border-radius: 50%;
                    border: 1px solid #c5c8ce;
                    margin-right: 8px;
                    background-color: transparent;
                }

            }
        }
        .buy{
            margin: 16px 0 32px 16px;
        }
    }
}
</style>