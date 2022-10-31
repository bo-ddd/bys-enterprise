<template>
    <div class="resume">
        <div class="header">
            <el-tabs class="demo-tabs" v-model="activeName" stretch="true">
                <el-tab-pane label="候选人" name="first"></el-tab-pane>
                <el-tab-pane label="面试管理" name="second"></el-tab-pane>
                <el-tab-pane label="不合适" name="third"></el-tab-pane>
            </el-tabs>
        </div>

        <div class="inappropriate" v-show="activeName == 'third'">
            <div class="candidate-item">
                <div class="candidate-item_top fs-14 c-909090">
                    <div>
                      <span>投递职位 | Java开发工程师</span>
                    </div>
                    <div>应聘时间2022-10-15 12:23:46</div>
                </div>
                <div class="candidate-item_main fs-14 c-909090">
                    <div class="candidate-item_avatorBox">
                        <img class="candidate-item_icon" src="@/assets/images/avator.png" alt="">
                        <div class="fs-16">
                            <span>金艺林</span>
                            <br><span>女</span>
                        </div>
                    </div>
                    <div>
                        <span>教育经历</span>
                        <br><span>大连理工大学-电子信息-硕士</span>
                        <br><span>中国医科大学-生物医学工程-硕士</span>
                    </div>
                    <div>
                        <span>未查看</span>
                    </div>
                    <div>
                        <el-button type="danger" plain>不合适</el-button>
                        <el-button type="primary">通过筛选</el-button>
                    </div>
                </div>
            </div>
        </div>

        <div class="interview wrap" v-show="activeName == 'second'">
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
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column prop="date" label="Date" width="180" />
                    <el-table-column prop="name" label="Name" width="180" />
                    <el-table-column prop="post" label="面试职位" width="180" />
                    <el-table-column prop="time" label="面试时间" width="180" />
                    <el-table-column prop="address" label="Address" />
                    <el-table-column label="操作" width="190">
                        <template #default="scope">
                            <div style="display:flex;align-items: center">
                                <el-link type="primary">面试信息</el-link>
                                {{scope}}
                                <!-- <span style="margin-left: 10px">{{ scope.row.date }}</span> -->
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>

        <div class="candidate wrap" v-show="activeName == 'first'">
            <div class="candidate-header">
                <div class="candidate-header_top">
                    <el-select class="m-2" placeholder="投递职位">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                    <el-select class="stage-input m-2" placeholder="阶段">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                    <el-cascader placeholder="学历" :options="options" />
                    <el-input class="name-input" placeholder="姓名" />
                    <el-checkbox label="只看邀约投递的简历" size="small" />
                    <el-checkbox label="只看视频招聘会的简历" size="small" />
                    <el-button type="primary">确定</el-button>
                </div>
                <div class="candidate-header_bottom">
                    <el-checkbox :indeterminate="isIndeterminate" @change="handleCheckAllChange">全选</el-checkbox>
                    <!-- <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                        <el-checkbox v-for="city in cities" :key="city" :label="city">{{
                                city
                        }}</el-checkbox>
                    </el-checkbox-group> -->
                </div>
            </div>
            <div class="candidate-item" v-for="item in cities" :key="item">
                <div class="candidate-item_top fs-14 c-909090">
                    <div>
                        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                            <el-checkbox :label="item"></el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <div>应聘时间2022-10-15 12:23:46</div>
                </div>
                <div class="candidate-item_main fs-14 c-909090">
                    <div class="candidate-item_avatorBox">
                        <img class="candidate-item_icon" src="@/assets/images/avator.png" alt="">
                        <div class="fs-16">
                            <span>金艺林</span>
                            <br><span>女</span>
                        </div>
                    </div>
                    <div>
                        <span>教育经历</span>
                        <br><span>大连理工大学-电子信息-硕士</span>
                        <br><span>中国医科大学-生物医学工程-硕士</span>
                    </div>
                    <div>
                        <span>未查看</span>
                    </div>
                    <div>
                        <el-button type="danger" plain>不合适</el-button>
                        <el-button type="primary">通过筛选</el-button>
                    </div>
                </div>
            </div>
            <div class="pagination">
                <el-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000" />
            </div>
        </div>


    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let activeName = ref("first");
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
    }, {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        post: "面试职位",
        time: "2022-10-11 21:07:01"
    },
]
const checkAll = ref(false)
const isIndeterminate = ref(true)
const checkedCities = ref(['Shanghai', ''])

const cities = ref(['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']);

const handleCheckAllChange = (val: boolean) => {
    checkedCities.value = val ? cities.value : []
    isIndeterminate.value = false
}
const handleCheckedCitiesChange = (value: string[]) => {
    const checkedCount = value.length
    checkAll.value = checkedCount === cities.value.length
    isIndeterminate.value = checkedCount > 0 && checkedCount < cities.value.length;
}
</script>

<style lang="scss" scoped>
.resume {
    width: 100%;
    background: #f6f7f9;

    .inappropriate{
        padding: 20px;
        .candidate-item {
            background: white;
            padding: 15px;
            border-radius: 5px;
            margin-top: 15px;

            .candidate-item_top {
                border-bottom: 1px solid rgb(244, 244, 244);
                padding-bottom: 10px;
                display: flex;
                justify-content: space-between;
            }

            .candidate-item_main {
                display: flex;
                justify-content: space-around;
                align-items: center;

                .candidate-item_avatorBox {
                    display: flex;
                    align-items: center;
                    gap: 0 10px;
                    padding: 5px 0;
                }

                .candidate-item_icon {
                    width: 85px;
                    height: 90px;
                    border-radius: 40%;
                }
            }
        }
    }

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

    .candidate {
        .pagination {
            display: flex;
            width: 100%;
            justify-content: center;
            margin-top: 25px;
        }

        .candidate-item {
            background: white;
            padding: 15px;
            border-radius: 5px;
            margin-top: 15px;

            .candidate-item_top {
                border-bottom: 1px solid rgb(244, 244, 244);
                padding-bottom: 10px;
                display: flex;
                justify-content: space-between;
            }

            .candidate-item_main {
                display: flex;
                justify-content: space-around;
                align-items: center;

                .candidate-item_avatorBox {
                    display: flex;
                    align-items: center;
                    gap: 0 10px;
                    padding: 5px 0;
                }

                .candidate-item_icon {
                    width: 85px;
                    height: 90px;
                    border-radius: 40%;
                }
            }
        }

        .candidate-header {
            margin-top: 10px;
            background: white;
            padding: 15px;
            border-radius: 5px;

            .candidate-header_top {
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 80px;
            }

            .stage-input {
                width: 140px;
            }

            .name-input {
                width: 120px;
            }
        }
    }

    .header {
        border-bottom: 1px solid rgb(238, 238, 238);
        height: 60px;
        box-shadow: 0px 0px 8px rgb(221, 221, 221);
        background: white;

        .demo-tabs {
            margin-left: 50%;
            transform: translate(-50%, 0);
            width: 500px;

            .wrap {
                background: red;
            }
        }
    }
}

:deep(.el-checkbox){
    margin-right: 0px;
}


:deep(.el-checkbox.el-checkbox--small){
    height: 33px;
}

:deep(.el-tabs__active-bar){
    width: 60px !important;
    left: 40px !important;
}

:deep(.el-tabs__active-bar){
    width: 60px !important;
    left: 40px !important;
}

:deep(.el-tabs__item){
    font-size: 17px;
    font-weight: 600;
}

:deep(.el-tabs__nav){
    height: 62px;
    align-items: center;
    width: 50px;
}
</style>
