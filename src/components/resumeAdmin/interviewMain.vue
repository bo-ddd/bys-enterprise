<template>
    <div class="interview wrap">
        <div class="interview-header">
            面试职位
            <el-select class="m-2" v-model="positionDropValue" placeholder="投递职位">
                <el-option v-for="item in allPositionDrop" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>

            候选人
            <el-input v-model="userName" class="name-input" placeholder="请输入姓名" />
            <el-button type="primary" @click="fuzzyQuery()" plain>确定</el-button>
        </div>

        <div class="main">
            <el-table :header-cell-style="{ background: '#fff' }" :data="tableData" style="width: 100%">
                <el-table-column prop="date" label="Date" width="180" />
                <el-table-column prop="name" label="Name" width="180" />
                <el-table-column prop="post" label="面试职位" width="180" />
                <el-table-column prop="time" label="面试时间" width="180" />
                <el-table-column prop="address" label="Address" />
                <el-table-column label="操作" width="190">
                    <template #default="scope">
                        <el-popover placement="left-end" :width="340" trigger="hover">
                            <template #reference>
                                <el-link type="primary">面试信息</el-link>
                            </template>
                            <template #default>
                                <div class="popover">
                                    <h2 class="c-black">面试信息</h2>
                                    <div>面试职位&nbsp;{{ scope.row.name }}</div>
                                    <div>面试时间&nbsp;</div>
                                    <div>面试地点&nbsp;</div>
                                    <div>联系人&nbsp;</div>
                                </div>
                            </template>
                        </el-popover>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <footerBar></footerBar>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import footerBar from "@/components/footer/footerBar.vue";
import { useEnterpriseStore } from "@/stores/enterprise"
let enterprise = useEnterpriseStore();
let userName = ref("")

const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        post: "面试职位",
        time: "2022-10-11 21:07:01"
    },
    {
        date: '2016-05-03',
        name: '魏浩爽',
        address: 'No. 189, Grove St, Los Angeles',
        post: "面试职位",
        time: "2022-10-11 21:07:01"
    }, {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        post: "面试职位",
        time: "2022-10-11 21:07:01"
    }, {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        post: "面试职位",
        time: "2022-10-11 21:07:01"
    }, {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        post: "面试职位",
        time: "2022-10-11 21:07:01"
    }, {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        post: "面试职位",
        time: "2022-10-11 21:07:01"
    }, {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        post: "面试职位",
        time: "2022-10-11 21:07:01"
    }, {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        post: "面试职位",
        time: "2022-10-11 21:07:01"
    }, {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        post: "面试职位",
        time: "2022-10-11 21:07:01"
    }, {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        post: "面试职位",
        time: "2022-10-11 21:07:01"
    }, {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        post: "面试职位",
        time: "2022-10-11 21:07:01"
    }, {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        post: "面试职位",
        time: "2022-10-11 21:07:01"
    },
]
// let getRow = (row: any) => {
//     console.log(row);
// }

let allPositionDrop: any = ref([]);
let positionDropValue = ref();
let getPositionDrop = async () => {
    let res = await enterprise.getPositionDrop({ userId: 10000 });
    allPositionDrop.value = res.data;
}
getPositionDrop();

let getResume = async () => {
    let res = await enterprise.getResume({
        userId: 10000,
        companyId: 10000,
        deliveryStatus: 4,
    });
    console.log(res);
}
getResume();

let fuzzyQuery = async () => {
    let res = await enterprise.getResume({
        userId: 10000,
        companyId: 10000,
        deliveryStatus: 4,
        positionId: positionDropValue.value,
        userName: userName.value,
    });
    console.log(res);
}
</script>

<style lang="scss" scoped>
.interview {
    .interview-header {
        padding: 40px 0;
        display: flex;
        align-items: center;
        gap: 0 20px;

        .name-input {
            width: 200px;
        }
    }
}

.popover {
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    .c-black {
        color: black;
    }
}

:deep(.el-table thead) {
    height: 60px;
}
</style>