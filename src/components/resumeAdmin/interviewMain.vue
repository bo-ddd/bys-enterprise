<template>
    <div class="interview wrap">
        <div class="interview-header">
            面试职位
            <el-select class="m-2" placeholder="投递职位">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>

            候选人
            <el-input class="name-input" placeholder="请输入姓名" />
            <el-button type="primary" plain>确定</el-button>
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
const options = [
    {
        value: '',
        label: '全部职位',
    },
    {
        value: 'guide',
        label: 'java',
    },
]
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
let getRow = (row: any) => {
    console.log(row);
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
    .c-black{
        color: black;
    }
}

:deep(.el-table thead) {
    height: 60px;
}
</style>