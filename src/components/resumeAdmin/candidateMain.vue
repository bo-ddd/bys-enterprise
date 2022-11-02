<template>
    <div class="candidate wrap">
             <div class="candidate-header">
                 <div class="candidate-header_top">
                     <el-select class="m-2" placeholder="投递职位">
                         <el-option v-for="item in allPositions" :key="item.value" :label="item.label" :value="item.value" />
                     </el-select>
                     <el-select class="stage-input m-2" placeholder="应聘阶段">
                         <el-option v-for="item in applicationStage.list" :key="item.value" :label="item.label" :value="item.value" />
                     </el-select>
                     <el-select  placeholder="学历">
                         <el-option v-for="item in educationList" :key="item.value" :label="item.label" :value="item.value" />
                     </el-select>
                     <el-input class="name-input" placeholder="姓名" />
                     <el-checkbox label="只看邀约投递的简历" size="small" />
                     <el-checkbox label="只看视频招聘会的简历" size="small" />
                     <el-button type="primary">确定</el-button>
                 </div>
                 <div class="candidate-header_bottom">
                     <el-checkbox :indeterminate="isIndeterminate" @change="handleCheckAllChange">全选</el-checkbox>
                     <el-button class="screen-btn" type="info" plain>批量通过筛选</el-button>
                     <el-button class="screen-btn" type="info" plain>批量不合适</el-button>
                 </div>
             </div>
             <card.cardWrap class="mt-15" v-for="item in cities" :key="item">
                 <template #header>
                     <card.cardHeader :time="'2022-10-15 12:23:46'">
                         <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                             <el-checkbox :label="item">投递职位 | Java开发工程师</el-checkbox>
                         </el-checkbox-group>
                     </card.cardHeader>
                 </template>
                 <template #main>
                     <card.cardItem :userinfo="userInfo">
                        <template #btn>
                            <el-button>不合适</el-button>
                            <el-button type="primary">通过筛选</el-button>
                        </template>
                    </card.cardItem>
                 </template>
             </card.cardWrap>
             <div class="pagination">
                 <el-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000" />
             </div>
             <footerBar></footerBar>
         </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import card from "@/components/card/index";
import footerBar from "@/components/footer/footerBar.vue"
import { useEnterpriseStore } from "@/stores/enterprise"
let enterprise = useEnterpriseStore();
let getEducation = async ()=>{
     let res = await enterprise.getEducation({});
     educationList = res.data;
 }
 
 let getResume =  async ()=>{
     let res = await enterprise.getResume({
        companyId:1000,
        pageIndex:1,
        pageSize:10
    });
     console.log(res);
 }
 getEducation();
 getResume();
let userInfo = {
    name: "金艺林",
    sex: "女",
    education: "江苏大学京江学院-软件工程-本科"
}
const allPositions = [
    {
        value: '',
        label: '全部职位',
    },{
        value: '',
        label: 'java',
    },{
        value: '',
        label: '软件测试工程师',
    },
]

let applicationStage = {
    status:1,
    message:"success",
    list:[
         {
            label:"全部",
            value:""
         },
         {
            label:"未查看",
            value:""
         },
         {
            label:"已查看",
            value:""
         },
         {
            label:"通过筛选",
            value:""
         },
         {
            label:"面试",
            value:""
         },
         {
            label:"拟录用",
            value:""
         }
    ]
}

let educationList = [
         {
            label:"博士",
            value:""
         },
         {
            label:"硕士",
            value:""
         },
         {
            label:"本科",
            value:""
         },
         {
            label:"大专",
            value:""
         },
         {
            label:"高中",
            value:""
         },
         {
            label:"中专/技校",
            value:""
         },
         {
            label:"初中及以下",
            value:""
         }
    ]

const checkAll = ref(false)
const isIndeterminate = ref(false)
const checkedCities = ref(['',]) //选中的数组  里面有几个就选中几个
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
    .candidate {
        .pagination {
            display: flex;
            width: 100%;
            justify-content: center;
            margin-top: 25px;
        }
        .candidate-header {
            border-radius: 6px;
            .candidate-header_bottom {
                display: flex;
                align-items: center;
                gap: 0 10px;

                .screen-btn {
                    margin-left: 10px;
                    width: 100px;
                }
            }
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

:deep(.el-select-dropdown__item){
       font-size: 12px !important;
}

:deep(.candidate-header_bottom > .el-button) {
    border: none;
    color: #808695;
    background: white;
}

:deep(.el-checkbox) {
    margin-right: 0px;
}

:deep(.el-checkbox.el-checkbox--small) {
    height: 33px;
}
</style>