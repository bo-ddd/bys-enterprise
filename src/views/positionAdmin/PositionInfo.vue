<template>
  <div class="position-info wrap">
    <div class="title mb-50">职业信息</div>
    <div class="mb-40 align-center">
      <!-- class="m-2 ml-10 mr-28 w-414-input no-arrow" -->
      <span class="flex-noshrink">职业名称</span>
      <el-input class="ml-10 mr-28 w-414 h-38" v-model="input" placeholder="Please input" />
      <span class="flex-noshrink">职业类别</span>
      <el-select v-model="value" class="m-2 ml-10 mr-28 w-414" placeholder="请选择职业类别" size="large">
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
      <div @click="select(0)" class="select-btn ml-10" :class="{'active':activeNum==0||activeNum==-1}">全职</div>
      <div @click="select(1)" class="select-btn ml-10" :class="{'active':activeNum==1}">实习</div>
      <div class="align-center ml-20" :class="{'hidden':activeNum==0,'show':activeNum==1,'none-show':activeNum==-1}">
        <span>转正机会</span>
        <div @click="select2(0)" class="select-btn ml-10" :class="{'active':activeNum2==0}">可提供转正</div>
        <div @click="select2(1)" class="select-btn ml-10" :class="{'active':activeNum2==1}">不提供转正</div>
      </div>
    </div>
    <div class="mb-40" :class="{'hidden':activeNum==0,'show':activeNum==1,'none-show':activeNum==-1}">
      <span>实习月数</span>
      <el-select v-model="value" class="m-2 w-200-input ml-10" placeholder="最低薪资" size="large">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <span class="ml-20">每周天数</span>
      <el-select v-model="value" class="m-2 w-200-input ml-10" placeholder="最高薪资" size="large">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
    <div class="mb-40">
      <span>月薪范围</span>
      <el-select v-model="value" class="m-2 w-200-input ml-10" placeholder="最低薪资" size="large">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>&nbsp;—&nbsp;
      <el-select v-model="value" class="m-2 w-200-input" placeholder="最高薪资" size="large">
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
      <el-select v-model="value" class="m-2 w-200-input ml-10" placeholder="请选择学历" size="large">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <span class="ml-28 mr-15">招聘人数</span>
      <el-input class="w-355-input" v-model="input" placeholder="Please input" />
    </div>
    <div class="mb-40">
      <span>意向专业</span>
      <el-select v-model="value" class="m-2 w-705-input ml-10" placeholder="请选择学历" size="large">
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
        class="m-2 ml-10 w-388 flex-noshrink"
        placeholder="请选择学历"
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
      <el-input class="ml-10 h-38" v-model="input" placeholder="Please input" />
    </div>
    <div class="title mb-50">职位描述</div>
    <div class="mb-75">
      <el-input v-model="input" type="textarea" class="text-area h-260" />
    </div>
    <div class="submit-btn">发布</div>
  </div>
</template>
<script lang="ts" setup>
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
.position-info {
  padding: 75px 40px;
  color: #515a6e;
  .title {
    font-size: 20px;
    font-weight: bold;
    color: black;
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
  .active {
    border: 2px solid #79aae4 !important;
    color: #79aae4 !important;
    background-color: #ffffff !important;
  }
  .select-btn {
    width: 140px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    box-sizing: border-box;
    border: 2px solid #ffffff;
    background-color: #f6f7f9;
    z-index: 1;
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
  .none-show{
    display: none;
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
.w-388 {
  width: 388px;
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
:deep(.el-textarea__inner) {
  height: 260px;
}
</style>