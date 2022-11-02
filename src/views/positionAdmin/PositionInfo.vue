<template>
  <div class="position-info position-wrap">
    <div class="title mb-40 mt-65">职位信息</div>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
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
            v-model="ruleForm.positionName"
            placeholder="请填写职位名称"
          />
        </el-form-item>
        <span class="flex-noshrink mr-10">职业类别</span>
        <el-form-item prop="positionType" class="w-360">
          <el-cascader
            class="w-360"
            v-model="ruleForm.positionType"
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

          <el-form-item prop="ifJust" class="void-input">
            <input type="text" v-model="ruleForm.ifJust" />
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

        <!-- <el-form-item prop="name"> -->
        <el-select v-model="value" class="m-2 w-200-input" placeholder="实习月数" size="large">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <!-- </el-form-item> -->

        <span class="ml-20 mr-10">每周天数</span>
        <!-- <el-form-item prop="name"> -->
        <el-select v-model="value" class="m-2 w-200-inputs" placeholder="每周天数" size="large">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <!-- </el-form-item> -->
      </div>
      <div class="mb-40 align-center">
        <span class="mr-10">月薪范围</span>

        <el-form-item prop="salaryStart">
          <el-select
            v-model="ruleForm.salaryStart"
            class="m-2 w-176"
            placeholder="最低薪资"
            size="large"
          >
            <el-option
              v-for="item in MoneyLeftArr"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <div class="bor"></div>
        <el-form-item prop="salaryEnd">
          <el-select v-model="ruleForm.salaryEnd" class="m-2 w-176" placeholder="最高薪资" size="large">
            <el-option
              v-for="item in MoneyRightArr"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
      </div>
      <div class="mb-40 align-center">
        <span class="mr-10">学历要求</span>
        <el-form-item prop="education">
          <el-select
            v-model="ruleForm.education"
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

        <el-form-item prop="recruitersNum">
          <el-input
            class="w-350 unit-input"
            v-model="ruleForm.recruitersNum"
            placeholder="请如实填写,本数据会用于高校的就业报告编撰"
          >
            <template #append>人</template>
          </el-input>
        </el-form-item>
      </div>
      <div class="mb-40 align-center">
        <span class="mr-10">意向专业</span>
        <el-select
          v-model="ruleForm.Professional"
          class="m-2 w-615"
          placeholder="请输入, 最多可选10个专业, 非必填"
          size="large"
          multiple
        >
          <el-option
            v-for="item in ProfessionalArr"
            :key="item.sortId"
            :label="item.professionalName"
            :value="item.sortId"
          />
        </el-select>
      </div>
      <div class="mb-75 align-center">
        <span class="flex-noshrink mr-10">工作地点</span>
        <el-form-item prop="workPlace">
          <el-select
            v-model="ruleForm.workPlace"
            class="m-2 w-340 flex-noshrink"
            placeholder="请选择工作地点"
            size="large"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <span class="ml-28 flex-noshrink mr-10">详细地址</span>
        <el-form-item prop="detailedLoc" class="w-100">
          <el-input class="h-38" v-model="ruleForm.detailedLoc" placeholder="请填写详细地址" />
        </el-form-item>
      </div>
      <div class="title mb-50">职位描述</div>
      <div class>
        <el-form-item prop="positionDes" class>
          <el-input
            v-model="ruleForm.positionDes"
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
import FooterBar from "@/components/footer/footerBar.vue";
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { usePositionStore } from "@/stores/position.js";
let use = usePositionStore();
interface Res {
  code: number;
}
const props = {
  expandTrigger: "hover",
};
const handleChange = function (value:any) {
  console.log(value);
};

const formSize = ref("default");
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  positionName: "",
  ifJust:'',
  salaryStart:'',
  salaryEnd:'',
  positionType: [],
  education: "",
  workPlace:'',
  detailedLoc:'',
  positionDes:'',
  recruitersNum:''
});
const educationArr = ref([]);
const industryArr = ref([]);
const ProfessionalArr = ref([]);
const MoneyLeftArr = ref([]);
const MoneyRightArr = ref([]);
const getEducation = async function () {
  const res = await use.getEducation();
  const res2 = await use.getCompanyIndustry();
  const res3 = await use.getProfessional();
  const res4 = await use.getWishMoney();
  console.log(res);
  if (res.code == 200) {
    educationArr.value = res.data;
  }
  if (res2.code == 200) {
    let a = res2.data.map((item:any) => {
      return {
        value: item.sortId,
        label: item.industryTypeName,
        children: item.industyDownList.map((i:any) => {
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
    ProfessionalArr.value = res3.data;
  }
  if (res4.code == 200) {
    MoneyLeftArr.value = res4.data.wishMoenyLeftList;
    MoneyRightArr.value = res4.data.wishMoenyRightList;
  }
};
getEducation();
const rules = reactive<FormRules>({
  positionName: [
    { required: true, message: "请填写职位名称", trigger: "blur" },
  ],
  positionType: [
    {
      required: true,
      message: "请选择职位类别",
      trigger: "change",
    },
  ],
  ifJust: [
    {
      required: true,
      message: "请选择转正机会",
      trigger: "change",
    },
  ],
  salaryStart: [
    {
      required: true,
      message: "请选择",
      trigger: "change",
    },
  ],
  salaryEnd: [
    {
      required: true,
      message: "请选择",
      trigger: "change",
    },
  ],
  education: [
    {
      required: true,
      message: "请选择学历",
      trigger: "change",
    },
  ],
  recruitersNum: [
    {
      required: true,
      message: "请填写招聘人数",
      trigger: "blur",
    },
  ],
  workPlace: [
    {
      required: true,
      message: "请选择工作地点",
      trigger: "change",
    },
  ],
  detailedLoc: [
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

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
    }
  });
};

const value = ref("");
const activeNum = ref(-1);
const activeNum2 = ref(-1);
const select = function (index: number) {
  activeNum.value = index;
};
const select2 = function (index: number) {
  if (index == activeNum2.value) {
    activeNum2.value = -1;
  } else {
    activeNum2.value = index;
  }
};
const options = [
  {
    value: "Option1",
    label: "Option1",
  },
];

const input = ref("");
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
    // border: 2px solid #79aae4 !important;
    // color: #79aae4 !important;
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
    :deep(.el-input__wrapper) {
      box-shadow: 0 1px 0 0 #dcdfe6 inset, 0 -1px 0 0 #dcdfe6 inset,
        -4px 0 0 0 white inset, 0 0 0 1px #dcdfe6 inset;
    }
    :deep(.el-input-group__append, .el-input-group__prepend) {
      padding: 0 10px;
      background-color: white;
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