<template>
    <div class="candidate wrap">
             <div class="candidate-header">
                 <div class="candidate-header_top">
                     <el-select class="m-2" placeholder="投递职位">
                         <el-option v-for="item in allPositions" :key="item.value" :label="item.label" :value="item.value" />
                     </el-select>
                     <el-select class="stage-input m-2" placeholder="应聘阶段">
                         <el-option v-for="item in applicationStage" :key="item.value" :label="item.label" :value="item.value" />
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

             <card.cardWrap class="mt-15" v-for="item in cardList" :key="item">
                 <template #header>
                     <card.cardHeader :time="item.modifyTime">
                         <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                             <el-checkbox :label="item.userId">投递职位 | {{item.positionName}}</el-checkbox>
                         </el-checkbox-group>
                     </card.cardHeader>
                 </template>
                 <template #main>
                     <card.cardItem :userinfo="{
                        sex:item.userSex,
                        name:item.userName,
                        education:`${item.userSchool}-${item.userProfessional}`}">
                        <template #btn>
                            <el-button>{{item.deliveryStatus}}</el-button>
                            <el-button type="primary">通过筛选</el-button>
                        </template>
                    </card.cardItem>
                 </template>
             </card.cardWrap>
             <div class="pagination">
                 <el-pagination  :page-size="pageSize"  v-model:current-page="currentPage" :pager-count="11" layout="prev, pager, next" :total="cardList.length" />
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

/**
 * 多选框功能
 */
const checkAll = ref(false);
const isIndeterminate = ref(false);
const checkedCities = ref([]); //选中的数组  里面有几个就选中几个
let cities = ref([]);
const handleCheckAllChange = (val: boolean) => {
    checkedCities.value = val ? cities.value : []
    isIndeterminate.value = false
}
const handleCheckedCitiesChange = (value: string[]) => {
    const checkedCount = value.length
    checkAll.value = checkedCount === cities.value.length
    isIndeterminate.value = checkedCount > 0 && checkedCount < cities.value.length;
}


/**
 * 获取应聘阶段下拉框
 */
let applicationStage:any = ref([]);
let getStage = async ()=>{
    let res = await enterprise.getStage({});
    applicationStage.value = res.data;
}
getStage();


/**
 * 获取投递职位下拉框
 */
let allPositions:any = ref([]);
let getPositionDrop =async ()=>{
    let res = await enterprise.getPositionDrop({userId:10000});
    allPositions.value = res.data;
}
getPositionDrop();



/**获取学历下拉框 */
let educationList:any = ref([]);
let getEducation = async () =>{
     let res = await enterprise.getEducation({});
     educationList.value = res.data;
}
getEducation();


/**
 * 获取个人信息名片列表
 */
let cardList:any = ref([]); 
let pageSize = ref(10);
let currentPage = ref(1);
let getResume =  async ()=>{
     let res = await enterprise.getResume({
        companyId:10000,
        userId:10000,
        pageIndex:currentPage.value,
        pageSize:pageSize.value
    });
    cardList.value = res.data.data;
    cities.value = cardList.value.map((item:any)=>{
         return item.userId;
    })
}
 getResume();
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