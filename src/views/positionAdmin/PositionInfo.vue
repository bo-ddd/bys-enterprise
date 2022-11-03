<template>
  <div class="position-info position-wrap">
    <div class="title mb-40 mt-65">职位信息</div>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm.data"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
      :size="formSize"
    >
      <div class="mb-40 align-center">
        <span class="flex-noshrink mr-10">职业名称</span>
        <el-form-item prop="positionName">
          <el-input
            class="w-360 mr-28 place-fs-14"
            v-model="ruleForm.data.positionName"
            placeholder="请填写职位名称"
          />
        </el-form-item>
        <span class="flex-noshrink mr-10">职业类别</span>
        <el-form-item prop="positionTypeArr" class="w-360">
          <el-cascader
            class="w-360"
            v-model="ruleForm.data.positionTypeArr"
            :props="props"
            :options="industryArr"
            @change="handleChange"
            placeholder="请选择职业类别"
          />
        </el-form-item>
      </div>
      <div class="mb-40 align-center">
        <span>工作性质</span>
        <div
          @click="select(0)"
          class="select-btn ml-10"
          :class="{'active':activeNum==0||activeNum==-1}"
        >全职</div>
        <div @click="select(1)" class="select-btn ml-10" :class="{'active':activeNum==1}">实习</div>
        <div
          class="align-center ml-20"
          :class="{'hidden':activeNum==0,'show':activeNum==1,'none-show':activeNum==-1}"
        >
          <span class="mr-10">转正机会</span>

          <el-form-item prop="positionPositive" class="void-input">
            <input type="text" v-model="ruleForm.data.positionPositive" />
            88
          </el-form-item>
          <div @click="select2(0)" class="select-btn" :class="{'active':activeNum2==0}">可提供转正</div>
          <div @click="select2(1)" class="select-btn ml-10" :class="{'active':activeNum2==1}">不提供转正</div>
        </div>
      </div>
      <div
        class="mb-40 align-center"
        :class="{'hidden':activeNum==0,'show':activeNum==1,'none-show':activeNum==-1}"
      >
        <span class="mr-10">实习月数</span>

        <el-select
          v-model="ruleForm.data.internshipMonth"
          class="m-2 w-200-input"
          placeholder="实习月数"
          size="large"
        >
          <el-option
            v-for="item in monthArr"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>

        <span class="ml-20 mr-10">每周天数</span>
        <el-select
          v-model="ruleForm.data.internshipDay"
          class="m-2 w-200-inputs"
          placeholder="每周天数"
          size="large"
        >
          <el-option
            v-for="item in dayArr"
            :key="item.label"
            :label="item.label"
            :value="item.label"
          />
        </el-select>
      </div>
      <div class="mb-40 align-center">
        <span class="mr-10">{{activeNum==1?'日':'月'}}薪范围</span>
        <el-form-item v-show="activeNum!=1" prop="salaryStart1">
          <el-select
            v-model="ruleForm.data.salaryStart1"
            class="m-2 w-176"
            placeholder="最低薪资"
            size="large"
          >
            <el-option
              v-for="item in moneyLeftArr1"
              :key="item.label"
              :label="item.label"
              :value="item.label"
            />
          </el-select>
        </el-form-item>
        <el-form-item v-show="activeNum==1" prop="salaryStart2">
          <el-select
            v-show="activeNum==1"
            v-model="ruleForm.data.salaryStart2"
            class="m-2 w-176"
            placeholder="最低薪资"
            size="large"
          >
            <el-option
              v-for="item in moneyLeftArr2"
              :key="item.label"
              :label="item.label"
              :value="item.label"
            />
          </el-select>
        </el-form-item>
        <div class="bor"></div>
        <el-form-item v-if="activeNum!=1" prop="salaryEnd1">
          <el-select
            v-model="ruleForm.data.salaryEnd1"
            class="m-2 w-176"
            placeholder="最高薪资"
            size="large"
          >
            <el-option
              v-for="item in moneyRightArr1"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item v-if="activeNum==1" prop="salaryEnd2">
          <el-select
            v-show="activeNum==1"
            v-model="ruleForm.data.salaryEnd2"
            class="m-2 w-176"
            placeholder="最高薪资"
            size="large"
          >
            <el-option
              v-for="item in moneyRightArr2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
      </div>
      <div class="mb-40 align-center">
        <span class="mr-10">学历要求</span>
        <el-form-item prop="positionEducation">
          <el-select
            v-model="ruleForm.data.positionEducation"
            class="m-2 w-176"
            placeholder="请选择学历"
            size="large"
          >
            <el-option
              v-for="item in educationArr"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <span class="ml-28 mr-15">招聘人数</span>

        <el-form-item class prop="positionSize">
          <el-input
            oninput="value=value.replace(/[^\d]/g,'')"
            class="w-350 unit-input"
            v-model="ruleForm.data.positionSize"
            placeholder="请如实填写,本数据会用于高校的就业报告编撰"
          >
            <template #append>人</template>
          </el-input>
        </el-form-item>
      </div>
      <div class="mb-40 align-center">
        <span class="mr-10">意向专业</span>
        <el-select
          :multiple-limit="10"
          v-model="ruleForm.data.positionProfessional"
          class="m-2 w-615"
          placeholder="请输入, 最多可选10个专业, 非必填"
          size="large"
          multiple
        >
          <el-option
            v-for="item in professionalArr"
            :key="item.professionalId"
            :label="item.professionalName"
            :value="item.professionalId"
          />
        </el-select>
      </div>
      <div class="mb-75 align-center">
        <span class="flex-noshrink mr-10">工作地点</span>
        <el-form-item prop="positionAddr" class="w-360">
          <el-cascader
            v-model="ruleForm.data.positionAddr"
            :options="cityData"
            @change="handleChange"
            class="w-340"
            placeholder="请选择工作地点"
          >
            <template #default="{ node,data }">
              <span>{{ data.label }}</span>
              <span v-if="!node.isLeaf">({{ data.children.length }})</span>
            </template>
          </el-cascader>
        </el-form-item>
        <span class="ml-28 flex-noshrink mr-10">详细地址</span>
        <el-form-item prop="positionDetailedAddr" class="w-100">
          <el-input
            class="h-38"
            v-model="ruleForm.data.positionDetailedAddr"
            placeholder="请填写详细地址"
          />
        </el-form-item>
      </div>
      <div class="title mb-50">职位描述</div>
      <div class>
        <el-form-item prop="positionDes" class>
          <el-input
            v-model="ruleForm.data.positionDes"
            type="textarea"
            class="text-area h-260"
            placeholder="请填写岗位要求和工作要求"
          />
        </el-form-item>
      </div>
      <div class="submit-btn mtb-65" @click="submitForm(ruleFormRef)">发布</div>
    </el-form>
  </div>
  <FooterBar></FooterBar>
</template>
<script lang="ts" setup>
import { ElMessage } from "element-plus";
import FooterBar from "@/components/footer/footerBar.vue";
import { computed, reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { usePositionStore } from "@/stores/position.js";
import cityData from "@/assets/json/citydata.json";
let use = usePositionStore();
interface Res {
  code: number;
}
const props = {
  expandTrigger: "hover",
};
const value = ref("");
const activeNum = ref(-1);
const activeNum2 = ref(-1);

const handleChange = function (value: any) {
  console.log(value);
};
const formSize = ref("default");
const ruleFormRef = ref<FormInstance>();

const educationArr = ref([]);
const industryArr = ref([]);
const professionalArr = ref([]);
const moneyLeftArr1 = ref([]);
const moneyRightArr1 = ref([]);
const moneyLeftArr2 = ref([]);
const moneyRightArr2 = ref([]);
const dayArr = ref([]);
const monthArr = ref([]);
const ruleForm = reactive({
  data: {
    positionNature: 0, //工作性质
    positionName: "", //职位名称
    positionPositive: true, //是否转正
    salaryStart: "", //薪资始
    salaryStart1: "", //薪资始
    salaryStart2: "", //薪资始
    salaryEnd: "", //薪资末
    salaryEnd1: "", //薪资末
    salaryEnd2: "", //薪资末
    // positionMoney: "",//职位薪资范围id ,
    positionTypeArr: [],
    // positionTypeLeft: roleForm.data.positionTypeArr[0],//职位类别
    // positionTypeRight: positionTypeArr.value[1],//职位类别
    positionEducation: "", //学历
    positionProfessional: [], //专业
    positionDetailedAddr: "", //详细地址
    positionDes: "dfssdfdsfdsfsfsfsdfsfsfsdfdsf", //职位描述
    positionSize: "", //招聘人数
    internshipDay: 4, //每周天数
    internshipMonth: 3, //实习月数
    positionAddr: "", //工作地点
    // internshipMoney: [salaryStart.value,salaryEnd.value],//实习薪资
  },
});
const getData = async function () {
  const res = await use.getEducation(); //学历
  const res2 = await use.getCompanyIndustry(); //行业
  const res3 = await use.getProfessional(); //专业
  const res4 = await use.getWishMoney(); //薪资
  const res5 = await use.getMonthDay(); //月和天
  const res6 = await use.getInternshipMoney(); //实习薪资
  console.log(res);
  if (res.code == 200) {
    educationArr.value = res.data;
  }
  if (res2.code == 200) {
    let a = res2.data.map((item: any) => {
      return {
        value: item.sortId,
        label: item.industryTypeName,
        children: item.industyDownList.map((i: any) => {
          return {
            value: i.sortId,
            label: i.industryName,
            children: i.industyDownList,
          };
        }),
      };
    });
    console.log(a);
    industryArr.value = a;
  }
  if (res3.code == 200) {
    professionalArr.value = res3.data;
  }
  if (res4.code == 200) {
    moneyLeftArr1.value = res4.data.wishMoenyLeftList;
    moneyRightArr1.value = res4.data.wishMoenyRightList;
  }
  if (res5.code == 200) {
    dayArr.value = res5.data.dayList;
    monthArr.value = res5.data.monthList;
  }
  if (res6.code == 200) {
    moneyLeftArr2.value = res6.data.wishMoenyLeftList;
    moneyRightArr2.value = res6.data.wishMoenyRightList;
  }
};
getData();
const rules = reactive<FormRules>({
  positionName: [
    { required: true, message: "请填写职位名称", trigger: "blur" },
  ],
  positionTypeArr: [
    {
      required: true,
      message: "请选择职位类别",
      trigger: "change",
    },
  ],
  positionPositive: [
    {
      required: true,
      message: "请选择转正机会",
      trigger: "blur",
    },
  ],
  salaryStart1: [
    {
      required: true,
      message: "请选择最低薪资",
      trigger: "change",
    },
  ],
  salaryStart2: [
    {
      required: true,
      message: "请选择最低薪资",
      trigger: "change",
    },
  ],
  salaryEnd1: [
    {
      required: true,
      message: "请选择最高薪资",
      trigger: "change",
    },
  ],
  salaryEnd2: [
    {
      required: true,
      message: "请选择最高薪资",
      trigger: "change",
    },
  ],
  positionEducation: [
    {
      required: true,
      message: "请选择学历",
      trigger: "change",
    },
  ],
  positionSize: [
    {
      required: true,
      message: "请填写招聘人数",
      trigger: "blur",
    },
  ],
  positionAddr: [
    {
      required: true,
      message: "请选择工作地点",
      trigger: "change",
    },
  ],
  positionDetailedAddr: [
    {
      required: true,
      message: "请填写正确的详细地址",
      trigger: "blur",
    },
  ],
  positionDes: [
    {
      required: true,
      message: "请输入20-10000个字符的内容",
      trigger: "blur",
    },
    {
      min: 20,
      max: 10000,
      message: "请输入20-10000个字符的内容",
      trigger: "blur",
    },
  ],
});
const select = function (index: number) {
  if (activeNum.value == -1) {
    (ruleForm.data.positionPositive as any) = "";
  }
  if (activeNum.value == -1 && index == 0) {
    return;
  }
  activeNum.value = index;
  ruleForm.data.positionNature = index;
};
const select2 = function (index: number) {
  activeNum2.value = index;
  ruleForm.data.positionPositive = (activeNum.value == 1 &&
    activeNum2.value == 0) as any;
  console.log(ruleForm.data.positionPositive);
};

const submitForm = async (formEl: FormInstance | undefined) => {
  console.log(ruleForm.data);
  if (!formEl) return;
  await formEl.validate((valid, fields: any) => {
    if (valid) {
      console.log("submit!");
      console.log(ruleForm.data);
      addPosition(ruleForm.data)
    } else {
      console.log("error submit!", fields);
      ElMessage.error((<any>Object).values(fields)[0][0].message);
    }
  });
};
const addPosition = async function (params: any) {
  const {
    positionEducation,
    positionNature,
    positionName,
    positionPositive,
    positionDetailedAddr,
    positionDes,
    positionSize,
    internshipDay,
    internshipMonth,
    positionTypeArr,
    positionAddr,
    positionProfessional,
    salaryStart2,
    salaryEnd2,
    salaryStart1,
    salaryEnd1,
  } = params;
  let internshipMoney = [salaryStart2, salaryEnd2];
  let positionMoney = [salaryStart1, salaryEnd1];
  let form = {
    positionEducation, //学历id
    positionNature, //工作性质
    positionName, //职位名称
    positionPositive, //是否转正
    positionDetailedAddr:'w', //详细地址
    positionDes, //职位描述
    positionSize, //招聘人数
    internshipDay, //每周天数
    internshipMonth, //实习月数
    positionProfessional:'sss', //专业
    internshipMoney:'1000', //实习日薪范围id
    positionMoney:'5000', //职业薪资范围id
    positionAddr:'af', //工作地点
    positionTypeLeft: positionTypeArr[0],
    positionTypeRight: positionTypeArr[1], //职位类别
    positionStatus:1,
    userId: "10000",
    positionId:'',//职位id
  };
  let res = await use.addPosition(form);
  console.log(res);
};
</script>

<style lang="scss" scoped>
.position-wrap {
  width: 1128px;
  margin: 0 auto;
}
.void-input {
  :deep(.el-form-item__content) {
    position: absolute;
    top: 0;
  }
}
:deep(.el-input__inner) {
  font-size: 14px;
  color: #515a6e;
}
:deep(.el-form-item__content) {
  margin-left: 0 !important;
}
:deep(.el-form-item--default) {
  margin-bottom: 0 !important;
}
.position-info {
  font-size: 14px;
  box-sizing: border-box;
  color: #515a6e;
  :deep(input) {
    height: 38px;
    box-sizing: border-box;
  }
  .title {
    font-size: 18px;
    font-weight: bold;
    color: black;
  }
  .text-area {
    :deep(.el-textarea__inner) {
      padding: 25px 22px;
    }
  }
  .bor {
    border-top: 1px solid #515a6ea8;
    width: 10px;
    margin: 0 10px;
  }
  .submit-btn {
    display: inline-block;
    padding: 12px 90px;
    color: white;
    font-size: 20px;
    font-weight: bold;
    background-color: #356ffa;
    border-radius: 4px;
  }
  .select-btn {
    width: 124px;
    height: 40px;
    padding: 0 15px;
    line-height: 40px;
    text-align: center;
    box-sizing: border-box;
    z-index: 1;
    background-color: #f6f7f9;
  }
  .active {
    color: #2d8cf0;
    border: 1px solid #2d8cf0;
    background-color: white;
  }
  .show {
    transform: translateX(50px);
    animation: fadenum2 1s;
    animation-fill-mode: forwards;
  }
  .hidden {
    animation: fadenum 1s;
    animation-fill-mode: forwards;
  }
  .none-show {
    display: none;
  }
  .unit-input {
    // :deep(.el-input__wrapper) {
    //   box-shadow:none;
    // }
    // :deep(.is-error .el-input__wrapper) {
    //   box-shadow: 0 0 0 1px red inset;
    // }
    :deep(.el-input-group__append, .el-input-group__prepend) {
      box-shadow: none;
      padding: 0 10px;
      background-color: white;
      border: 1px solid #dcdfe6;
      border-left: none;
    }
  }
}
@keyframes fadenum2 {
  0% {
    opacity: 0;
    // position: absolute;
  }
  100% {
    opacity: 1;
    transform: translateX(0);
    // position: none;
  }
}
@keyframes fadenum {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
    position: absolute;
    transform: translateX(100px);
    z-index: -1;
  }
}
.mb-50 {
  margin-bottom: 50px;
}
.mr-28 {
  margin-right: 28px;
}
.ml-10 {
  margin-left: 10px;
}
.w-414 {
  width: 414px;
}
.w-200-input {
  width: 200px;
}
.no-arrow {
  :deep(.el-input__suffix) {
    display: none;
  }
}

.ml-28 {
  margin-left: 28px;
}
.w-355-input {
  width: 355px;
  height: 38px;
}
.w-705-input {
  width: 705px;
}
.flex-noshrink {
  flex-shrink: 0;
}
.h-38 {
  height: 38px;
}
.w-360 {
  width: 360px;
  :deep(.el-input) {
    width: 360px;
  }
}
.mb-75 {
  margin-bottom: 75px;
}
.mb-50 {
  margin-bottom: 50px;
}
.h-260 {
  height: 260px;
}
.w-176 {
  width: 176px;
}
.w-310 {
  width: 310px;
}
.w-320 {
  width: 320px;
}
.w-350 {
  width: 350px;
}
.w-340 {
  width: 340px;
}
.w-615 {
  width: 615px;
}
:deep(.el-textarea__inner) {
  height: 260px;
}
.mtb-65 {
  margin: 65px 0;
}
.mt-65 {
  margin-top: 65px;
}
.mb-40 {
  margin-bottom: 40px;
}
.w-100 {
  width: 100%;
}
</style>