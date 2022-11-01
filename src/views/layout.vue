<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { TabsPaneContext } from 'element-plus'
const activeName = ref('1');
let list = reactive([
  {
    id: 1,
    title: '首页',
    url: '',
  },
  {
    id: 2,
    title: '职位管理',
    url: '',
  },
  {
    id: 3,
    title: '简历管理',
    url: '',
  },
  {
    id: 4,
    title: '寻找人才',
    url: '',
  },
  {
    id: 5,
    title: '会员中心',
    url: '',
  },
])

const activeIndex = ref('1');

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

</script>

<template>
  <header class="header c-ffffff ">
    <div class="wrap just-between">
      <div class="just-between titlt-menu">
        <div class="title">
          <p class="fs-14">毕业申</p>
          <span class="fs-12 c-dadada">校园招聘平台</span>
        </div>
        <!-- 菜单 -->
        <el-menu :ellipsis="false" :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
          @select="handleSelect">
          <el-menu-item v-for="item in list" :key="item.id" :index="item.id">{{ item.title }}</el-menu-item>
        </el-menu>
      </div>
      <div class="user align-center">
        <p class="fs-14">Hi,中谷百科</p>
        <el-dropdown>
          <span class="el-dropdown-link">
            <img class="avator" src="@/assets/images/avator.png" alt="">
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item>联系客服</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>

  </header>
  <RouterView />
</template>

<style lang="scss" scoped>
// main
.c-dadada {
  color: #dadada;
}

// element
// :deep(.el-dropdown-link) {
//   background-color: #2a2d34;
// }
:deep(.el-menu) {
  background-color: #2a2d34;
}
:deep(.el-menu-item) {
  // background-color: #2a2d34;
  width: 120px;
  box-sizing: border-box;
}

:deep(.el-menu--horizontal) {
  border: 0;
}

:deep(.el-menu--horizontal>.el-menu-item.is-active) {
  border-bottom: 2px solid #2a2d34;
  background: #21242c !important;
  color: #ffffff !important;
}

:deep(.el-menu--horizontal .el-menu-item:not(.is-disabled)):hover {
  background-color: #21242c !important;
  color: #ffffff !important;
}

:deep(.el-menu-item) {
  color: #d4d4d4 !important;
}


.header {
  background-color: #2a2d34;

  .titlt-menu {
    gap: 30px;
  }

  .user {
    gap: 16px;

    .avator {
      $size: 34px;
      width: $size;
      height: $size;
      border-radius: $size;
    }
  }
}
</style>
