<template>
    <div>
        <div class="inappropriate">
                <card.cardWrap class="mt-15">
                    <template #header>
                        <card.cardHeader :time="'2022-10-15 12:23:46'">投递职位&nbsp;|&nbsp;Java开发工程师</card.cardHeader>
                    </template>
                    <template #main>
                        <card.cardItem :userinfo="userInfo"></card.cardItem>
                    </template>
                </card.cardWrap>
                
            </div>
            <footerBar></footerBar>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import card from "@/components/card/index";
import footerBar from "@/components/footer/footerBar.vue";
let userInfo = {
    name: "金艺林",
    sex: "女",
    education: "江苏大学京江学院-软件工程-本科"
}
</script>

<style lang="scss" scoped>
  .inappropriate {
            padding: 30px 150px;
            min-height: calc(100vh - 200px);
        }
</style>