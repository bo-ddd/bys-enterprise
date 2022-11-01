<template>
  <div class="position-info position-wrap">
    <div class="title mb-40 mt-65">职位信息</div>
    <div class="mb-40 align-center">
      <span class="flex-noshrink">职业名称</span>
      <el-input class="ml-10 mr-28 w-360 place-fs-14" v-model="input" placeholder="请填写职位名称" />
      <span class="flex-noshrink">职业类别</span>
      <el-select v-model="value" class="m-2 ml-10 mr-28 w-360" placeholder="请选择职业类别" size="large">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
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
        <span>转正机会</span>
        <div @click="select2(0)" class="select-btn ml-10" :class="{'active':activeNum2==0}">可提供转正</div>
        <div @click="select2(1)" class="select-btn ml-10" :class="{'active':activeNum2==1}">不提供转正</div>
      </div>
    </div>
    <div
      class="mb-40"
      :class="{'hidden':activeNum==0,'show':activeNum==1,'none-show':activeNum==-1}"
    >
      <span>实习月数</span>
      <el-select v-model="value" class="m-2 w-200-input ml-10" placeholder="实习月数" size="large">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <span class="ml-20">每周天数</span>
      <el-select v-model="value" class="m-2 w-200-input ml-10" placeholder="每周天数" size="large">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
    <div class="mb-40 align-center">
      <span>月薪范围</span>
      <el-select v-model="value" class="m-2 w-176 ml-10" placeholder="最低薪资" size="large">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <div class="bor"></div>
      <el-select v-model="value" class="m-2 w-176" placeholder="最高薪资" size="large">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
    <div class="mb-40 align-center">
      <span>学历要求</span>
      <el-select v-model="value" class="m-2 w-176 ml-10" placeholder="请选择学历" size="large">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <span class="ml-28 mr-15">招聘人数</span>
      <el-input class="w-340 unit-input" v-model="input" placeholder="请如实填写,本数据会用于高校的就业报告编撰">
        <template #append>人</template>
      </el-input>
    </div>
    <div class="mb-40">
      <span>意向专业</span>
      <el-select
        v-model="value"
        class="m-2 w-615 ml-10"
        placeholder="请输入, 最多可选10个专业, 非必填"
        size="large"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
    <div class="mb-75 align-center">
      <span class="flex-noshrink">工作地点</span>
      <el-select
        v-model="value"
        class="m-2 ml-10 w-340 flex-noshrink"
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
      <span class="ml-28 flex-noshrink">详细地址</span>
      <el-input class="ml-10 h-38" v-model="input" placeholder="请填写详细地址" />
    </div>
    <div class="title mb-50">职位描述</div>
    <div class="">
      <el-input v-model="input" type="textarea" class="text-area h-260" placeholder="请填写岗位要求和工作要求" />
    </div>
    <div class="submit-btn mtb-65">发布</div>
  </div>
  <FooterBar></FooterBar>
</template>
<script lang="ts" setup>
import FooterBar from "@/components/footer/footerBar.vue";
import { ref } from "vue";

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
:deep(.el-input__inner) {
  font-size: 14px;
  color: #515a6e;
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
      // box-shadow: 0 1px 0 0 red inset,0 -1px 0 0 red inset,-1px 0 0 0 red inset,0 0 0 -1px blue inset;dcdfe6
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
.w-340 {
  width: 340px;
}
.w-615{
    width: 615px;
}
:deep(.el-textarea__inner) {
  height: 260px;
}
.mtb-65{
    margin: 65px 0;
}
.mt-65{
    margin-top: 65px;
}
.mb-40{
    margin-bottom: 40px;
}
</style>