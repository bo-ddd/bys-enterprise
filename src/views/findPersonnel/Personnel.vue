<script lang="ts" setup>
import { ref, reactive , type Ref } from "vue";
interface Check {
    id: number,
    label: string | number,
    value: string | number,
}
let checkSex: Ref<null | number | undefined> = ref();//性别
let checkEducation: Ref<null | number | undefined> = ref();//学历
let checkMajor: Ref<null | number | undefined> = ref();//专业
let checkPosition: Ref<null | number | undefined> = ref();//职位
let checkCity: Ref<null | number | undefined> = ref();//城市
let lowestSalary: Ref<null | number | undefined> = ref();//最低薪资
let highestSalary: Ref<null | number | undefined> = ref();//最高薪资
let circleUrl = ref('https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png');       
let checkItem = ref(0);//默认展示哪个页面
let handleItemChange = (index: number) => {
    checkItem.value = index;
}
//性别
let sexArr = reactive<Check[]>([
    {
        id: 1,
        label: '女',
        value: 0,
    },
    {
        id: 2,
        label: '男',
        value: 1,
    }
]);
//学历
let educationArr = reactive<Check[]>([
    {
        id: 1,
        label: '博士',
        value: 0,
    },
    {
        id: 2,
        label: '硕士',
        value: 1,
    },
    {
        id: 3,
        label: '本科',
        value: 2,
    },
    {
        id: 4,
        label: '大专',
        value: 3,
    },
    {
        id: 5,
        label: '高中',
        value: 4,
    },
    {
        id: 6,
        label: '中专/技校',
        value: 5,
    },
    {
        id: 7,
        label: '初中及以下',
        value: 6,
    },
    {
        id: 8,
        label: '不限',
        value: 7,
    },
]);
//专业
let majorArr = reactive<Check[]>([]);
</script>
<template>
    <div class="personnel">
        <div class="operation-wrap box-shadow">
            <div class="wrap operation-container fs-18">
                <div class="operation-item" @click="handleItemChange(0)">
                    <p :class="[checkItem == 0 ? 'span-check' : '']">人才库</p>
                    <div :class="[checkItem == 0 ? 'btm-check' : '']"></div>
                </div>
                <div class="operation-item" @click="handleItemChange(1)">
                    <p :class="[checkItem == 1 ? 'span-check' : '']">我邀请的</p>
                    <div :class="[checkItem == 1 ? 'btm-check' : '']"></div>
                </div>
            </div>
        </div>
        <div class="talent-pool-wrap" v-show="checkItem==0">

            <!-- 模糊查询的列表 -->
            <div class="wrap filter-wrap">
                <div class="filter-wrap-top">
                    <el-select v-model="checkSex" class="m-2 check-sex mr-30" placeholder="性别选择" size="large">
                        <el-option v-for="item in sexArr" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                    <el-select v-model="checkEducation" class="m-2 check-education mr-30" placeholder="最高学历选择" size="large">
                        <el-option v-for="item in educationArr" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                    <el-select v-model="checkMajor" class="m-2 check-education mr-30" placeholder="专业选择" size="large">
                        <el-option v-for="item in educationArr" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                    <el-select v-model="checkPosition" class="m-2 check-education mr-30" placeholder="意向职位选择" size="large">
                        <el-option v-for="item in educationArr" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                </div>
                <div class="filter-wrap-btm">
                    <div class="check">
                        <el-select v-model="checkCity" class="m-2 check-education mr-30" placeholder="意向城市选择" size="large">
                            <el-option v-for="item in educationArr" :key="item.value" :label="item.label" :value="item.value" />
                        </el-select>
                        <el-select v-model="lowestSalary" class="m-2 check-salary mr-15" placeholder="期望薪资选择" size="large">
                            <el-option v-for="item in educationArr" :key="item.value" :label="item.label" :value="item.value" />
                        </el-select>
                        <span class="fs-14">至</span>
                        <el-select v-model="highestSalary" class="m-2 check-salary ml-15" placeholder="期望薪资选择" size="large">
                            <el-option v-for="item in educationArr" :key="item.value" :label="item.label" :value="item.value" />
                        </el-select>
                    </div>
                    <div class="operation">
                        <el-button type="primary" plain>确定</el-button>
                        <el-button type="info" plain>清空</el-button>
                    </div>
                </div>
            </div>

            <!-- 查询数据内容 -->
            <div class="wrap data-wrap">
                <div class="search-tip-wrap">
                    <span class="fs-14">邀请点数</span>
                    <span class="fs-16 ml-5 cl-blue">5</span>
                    <span class="fs-12 ml-15 cl-ccc">若当日点数用尽，次日凌晨会自动补充新点数</span>
                </div>

                <!-- 每一项数据 -->
                <div class="data-item">

                    <!--头像-->
                    <div class="cbleft1">
                        <el-avatar :size="72" :src="circleUrl" />
                    </div>

                    <!-- 人名与最高学历 -->
                    <div class="cbleft2 ml-16">
                        <p class="name fs-18">费小姐</p>
                        <div class="description mt-16 cl-ccc">
                            <p class="fs-12">24岁</p>
                            <div class="line"></div>
                            <p class="fs-12">硕士</p>
                        </div>
                    </div>

                    <!-- 教育经历 -->
                    <div class="cbleft3 ml-48 cl-ccc">
                        <p class="titlest fs-12 ml-16">教育经历</p>
                        <div class="school-name">
                            <div class="coursor"></div>
                            <p class="fs-14 ml-12">大连理工大学</p>
                        </div>
                        <div class="school-description fs-12 ml-16">
                            <p>材料科学与工程</p>
                            <div class="line"></div>
                            <p>硕士</p>
                        </div>
                    </div>

                    <!-- 求职意向 -->
                    <div class="cbleft4 cl-ccc ml-40">
                        <p class="titlest fs-12 ml-28">求职意向</p>
                        <div class="occupation-item mt-16">
                            <img src="@/assets/images/icon-dingwei.png" class="icon">
                            <p class="description fs-14 ml-12">辽宁省-大连市、辽宁省-沈阳市、吉林省-长春市</p>
                        </div>
                        <div class="occupation-item mt-12">
                            <img src="@/assets/images/icon-bangong.png" class="icon">
                            <p class="description fs-14 ml-12">审计专员/助理、物流专员/经理、人事专员/助理、市场营销、行政专员/助理</p>
                        </div>
                        <div class="occupation-item mt-16">
                            <img src="@/assets/images/icon-qianbi.png" class="icon">
                            <p class="description fs-14 ml-12">3-50k</p>
                        </div>
                    </div>
                    
                    <!-- 活跃时间 -->
                    <div class="cbleft5">
                        <p class="titlest fs-12">2022-10-17活跃</p>
                        <div class="delivery-btn c-ffffff fs-12 mt-30">邀请投递</div>
                    </div>
                </div>
            </div>

            <!-- 分页 -->
            <div class="page-wrap wrap mt-48">
                <div class="page-content">
                    <el-pagination :background="true" pager-count="4" layout="prev, pager, next" :total="1000" />
                </div>
            </div>
        </div>

        <!-- 我邀请的页面 -->
        <div class="invitation-library-wrap" v-show="checkItem==1">
        </div>

        <!-- 底部 -->
        <div class="foot-bar-wrap">
            <div class="foot-bar-container wrap">
                <div class="left">
                    <div class="top">
                        <div class="item">
                            <p class="fs-18 fw-700">1000+</p>
                            <p class="fs-14 mt-17">合作高校</p>
                        </div>
                        <div class="item">
                            <p class="fs-18 fw-700">100万+</p>
                            <p class="fs-14 mt-17">覆盖学生</p>
                        </div>
                        <div class="item">
                            <p class="fs-18 fw-700">2万+</p>
                            <p class="fs-14 mt-17">网络招聘会</p>
                        </div>
                        <div class="item">
                            <p class="fs-18 fw-700">100+</p>
                            <p class="fs-14 mt-17">线下招聘会</p>
                        </div>
                    </div>
                    <div class="btm fs-12">©毕业申 备案号：沪ICP备17007916号-3</div>
                </div>
                <div class="right">
                    <div class="contact">
                        <div class="item mb-15">
                            <img src="@/assets/images/icon-wechat.png">
                            <div class="item-text fs-14 ml-12">18018637339</div>
                        </div>
                        <div class="item mb-15">
                            <img src="@/assets/images/icon-xin.png">
                            <div class="item-text fs-14 ml-12">info@applyoffer.com</div>
                        </div>
                        <div class="item">
                            <img src="@/assets/images/icon-telephone.png">
                            <div class="item-text fs-14 ml-12">021-66696957 (9:00-18:00)</div>
                        </div>
                    </div>
                    <div class="wechat">
                        <img src="@/assets/images/gongzhonghao.png" class="icon">
                        <p class="fs-12">公众号</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.personnel {
    &>.operation-wrap {
        background: #fff;
        &>.operation-container {
            display: flex;
            justify-content: center;
            &>.operation-item {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                &>p {
                    width: 220px;
                    text-align: center;
                    padding: 8px 16px;
                }
                &>.span-check {
                    font-weight: 800;
                }
                &>.btm-check {
                    display: inline-block;
                    border-radius: 2px;
                    width: 51px;
                    height: 3px;
                    background: #356ffa;
                }
            }
        }
    }
    &>.talent-pool-wrap {
        &>.filter-wrap {
            padding: 32px 0;
            border-bottom: 1px solid #eef0f2;
            ::v-deep .check-sex {
                width: 110px;
            }
            ::v-deep .check-salary {
                width: 150px;
            }
            &>.filter-wrap-btm {
                margin-top: 20px;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
        }
        &>.data-wrap{
            padding: 24px 0;
            &>.data-item{
                padding: 32px 0 32px;
                display: flex;
                border-bottom: 1px solid #eef0f2;
                &>.cbleft2{
                    width: 124px;
                    &>.description{
                        display: flex;
                        align-items: center;
                    }
                }
                &>.cbleft3{
                    width: 280px;
                    &>.school-name{
                        display: flex;
                        align-items: center;
                        &>.coursor{
                            width: 4px;
                            height: 4px;
                            border-radius: 2px;
                            background: #c5c8ce;
                        }
                        &>p{
                            padding: 12px 0;
                        }
                    }
                    &>.school-description{
                        display: flex;
                        align-items: center;
                    }
                }
                &>.cbleft4{
                    width: 420px;
                    &>.occupation-item{
                        display: flex;
                    }
                }
                &>.cbleft5{
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    &>.delivery-btn{
                        display: inline-block;
                        background: #356ffa;
                        padding: 8px 16px;
                        border-radius: 5px;
                    }
                }
            }
        }
        &>.page-wrap{
            &>.page-content{
                display: flex;
                justify-content: center;
                padding-bottom: 64px;
                ::v-deep .number {
                    background: #fff;
                    border: 1px solid #ccc;
                    color: #515a6e;
                }
                ::v-deep .btn-quicknext{
                    background: #fff;
                    color: #515a6e;
                }
            }
        }
    }
    &>.foot-bar-wrap{
        background: #fafafa;
        &>.foot-bar-container{
            display: flex;
            justify-content: space-between;
            &>.left{
                &>.top{
                    display: flex;
                    padding: 40px 0 25px 0;
                    border-bottom: 1px solid #f3f3f3;
                    &>.item{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        margin-right: 120px;
                    }
                }
                &>.btm{
                    padding: 26px 0;
                }
            }
            &>.right{
                padding: 35px 0;
                display: flex;
                &>.contact{
                    &>.item{
                        display: flex;
                        align-items: center;
                        &>img{
                            width: 24px;
                        }
                    }
                }
                &>.wechat{
                    margin-left: 26px;
                    &>.icon{
                        width: 88px;
                        height: 88px;
                    }
                    &>p{
                        color: #808695;
                        text-align: center;
                    }
                }
            }
        }
    }
    .box-shadow {
        box-shadow: 0 2px 6px 0 #edeff3;
    }
    .ml-30{
        margin-left: 30px;
    }

    .cl-blue{
        color: #356ffa;
    }
    .cl-ccc{
        color: #808695;
    }
    .ml-16{
        margin-left: 16px;
    }
    .mt-16{
        margin-top: 16px;
    }
    .mt-17{
        margin-top: 17px;
    }
    .ml-48{
        margin-left: 48px;
    }
    .ml-12{
        margin-left: 12px;
    }
    .line{
        display: inline-block;
        height: 10px;
        width: 1px;
        margin: 0 8px;
        background: #000;
    }
    .ml-40{
        margin-left: 40px;
    }
    .icon{
        width:18px;
        height:18px;
    }
    .ml-28{
        margin-left: 28px;
    }
    .mt-12{
        margin-top: 12px;
    }
    .mt-48{
        margin-top: 48px;
    }
    .fw-700{
        font-weight: 700;
    }
}
</style>