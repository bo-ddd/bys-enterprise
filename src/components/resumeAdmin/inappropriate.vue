<template>
    <div>
        <div class="inappropriate">
            <card.cardWrap v-for="item in resumeList" class="mt-15">
                <template #header>
                    <card.cardHeader :time="item.interviewTime || '2022-09-21 18:25:48' ">投递职位&nbsp;|&nbsp;{{ item.positionName }}</card.cardHeader>
                </template>
                <template #main>
                    <card.cardItem :userinfo="{
                        sex: item.userSex,
                        name: item.userName,
                        deliveryStatus: item.deliveryStatus,
                        education: `${item.userSchool}-${item.userProfessional}-${item.userEducation}`
                    }">
                        <template #btn>
                            <el-button type="primary">恢复位候选人</el-button>
                        </template>
                    </card.cardItem>
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
import { useEnterpriseStore } from "@/stores/enterprise"
let enterprise = useEnterpriseStore();
let resumeList = ref();
let getResume = async () => {
    let res = await enterprise.getResume({
        userId: 10000,
        companyId: 10000,
        deliveryStatus: 6,
    });
    if (res.code == 200) {
        resumeList.value = res.data.data;
    } else {
        console.log("error");
    }
}
getResume();
</script>

<style lang="scss" scoped>
.inappropriate {
    padding: 30px 150px;
    min-height: calc(100vh - 200px);
}
</style>