<template>
    <div class="card-item">
        <div class="candidate-item_avatorBox">
            <img class="candidate-item_icon" src="@/assets/images/avator.png" alt="">
            <div class="fs-16">
                <span class="fs-18 ">{{ userinfo.name }}</span>
                <br><span class="c-5151">{{ userinfo.sex }}</span>
            </div>
        </div>
        <div class="fs-14 c-5151">
            <span>教育经历</span>
            <br><span>{{ userinfo.education }}</span>
        </div>
        <div></div>
        <div class="c-5151 fs-14">
            <span>未查看</span>
        </div>
        <div>
            <el-button type="danger" plain>不合适</el-button>
            <el-button type="primary">通过筛选</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from 'vue'
interface UserInfo {
    name: string,
    sex: string,
    education: string
}
let props = defineProps<{
    userinfo: UserInfo
}>()
let { userinfo } = toRefs(props);

</script>

<style lang="scss" scoped>
.c-5151 {
    color: #515a6e;
}

.card-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    .candidate-item_avatorBox {
        display: flex;
        align-items: center;
        gap: 0 15px;
        padding: 10px 0;
    }

    .candidate-item_icon {
        width: 85px;
        height: 76px;
        border-radius: 50%;
    }
}
</style>
