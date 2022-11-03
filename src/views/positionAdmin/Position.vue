<template>
  <div class="position-page">
    <div class="position-header flex-ja-center" ref="tab-box">
      <div
        class="head-nav flex-ja-center cur-po"
        :class="currentIndex== 0?'active':''"
        @click="tab(0)"
      >
        <div class="nav-title">
          <span>在招中</span>
          <span class="fs-12 num">{{recruitNum}}</span>
        </div>
        <div class="bottom-line"></div>
      </div>
      <div
        class="head-nav flex-ja-center cur-po"
        :class="currentIndex== 1?'active':''"
        @click="tab(1)"
      >
        <div class="nav-title">
          <span>已下线</span>
          <span class="fs-12 num">{{downNum}}</span>
        </div>
        <div class="bottom-line"></div>
      </div>
    </div>
    <div class="position-content">
      <div class="tab1" v-show="currentIndex== 0">
        <div class="job wrap">
          <div class="job-head just-between">
            <div>
              <div class="fs-14">
                职位刷新点数
                <span class="point-num">1</span>
              </div>
              <div class="fs-12 mt-10">若当日点数用尽，次日凌晨会自动补充新点数</div>
            </div>
            <div>
              <div class="release-btn align-center cur-po" @click="to('/positionInfo')">
                <span class="fs-30">+</span>
                <span>发布职位</span>
              </div>
            </div>
          </div>
          <div class="job-box mb-15" v-for="item in positionList" :key="item.userId">
            <div class="info-job just-between">
              <div class="job-title fs-18">
                <div class="mb-15">{{item.positionName}}&nbsp;</div>
                <div class="info-list align-center">
                  <div class="money-num mr-15">10-15k</div>
                  <div class="align-center fs-14">
                    <div>全职</div>
                    <div class="bor"></div>
                    <div>大专</div>
                    <div class="bor"></div>
                    <div>北京</div>
                    <div class="bor"></div>
                    <div>{{item.positionType}}</div>
                  </div>
                </div>
              </div>
              <div class="resume-info flex-ja-center">
                <div class="resume-box cur-po">
                  <div class="resume-num">0</div>
                  <div class="mt-15 fs-14">新简历</div>
                </div>
                <div class="resume-box cur-po">
                  <div class="resume-num">0</div>
                  <div class="mt-15 fs-14">新简历</div>
                </div>
              </div>
              <div class="refresh-info align-center">
                <div class="autorefresh-btn cur-po">
                  <span class="plr-5">自动刷新</span>
                </div>
                <div class="refresh-btn cur-po">
                  <span class="plr-5">刷新</span>
                </div>
              </div>
            </div>
            <div class="edit-job just-between fs-14">
              <div>
                创建时间 :
                <span>&nbsp; {{item.createTime}}</span>
              </div>
              <div class="align-center">
                <div class="cur-po">编辑</div>
                <div class="bor"></div>
                <div class="cur-po">停止招聘</div>
                <div class="bor"></div>
                <div class="cur-po" @click="deleteClick(item.positionId)">删除</div>
              </div>
            </div>
          </div>
          <div class="just-center mb-20" v-if="total>10">
            <el-pagination
              :background="true"
              v-model:currentPage="pageNum"
              v-model:page-size="pageSize"
              layout="prev, pager, next"
              :total="total"
              @next-click="next"
              @prev-click="prev"
              @current-change="handleCurrentChange"
            />
          </div>
        </div>
      </div>
      <div class="tab2" v-show="currentIndex==1">
        <div class="void-box flex-ja-center">
          <div>
            <img src="@/assets/images/img-no_position.png" alt />
            <div class="mt-15">暂无已下线职位</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterBar></FooterBar>
</template>
<script lang="ts" setup>
import { ElMessage, ElMessageBox } from "element-plus";
import { usePositionStore } from "@/stores/position";
import FooterBar from "@/components/footer/footerBar.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
let use = usePositionStore();
const downNum = ref(0);
const total = ref(0);
const pageNum = ref(1);
const pageSize = ref(10);
const positionList = ref([]);
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`);
};
const handleCurrentChange = async (val: number) => {
  console.log(`current page: ${val}`);
  let res = await getPositionList({
    pageIndex: val,
    userId: 10000,
    pageSize: 10,
    positionStatus: 1,
  });
  console.log(res);
  positionList.value = res.data.data;
};
let getPositionList = function (params: any) {
  return use.getPosition(params);
};
let deletePosition = function (params: any) {
  return use.deletePosition(params);
};
const deleteClick = function (userId: any) {
  ElMessageBox.confirm("是否确认删除该职位?", "Warning", {
    confirmButtonText: "确认删除",
    cancelButtonText: "取消",
    type: "warning",
  }).then(async () => {
    console.log(1);

    let res1 = await deletePosition({ userId });
    console.log(3);

    console.log(res1);

    if (res1.code == 200) {
      ElMessage({
        type: "success",
        message: "删除成功",
      });
    } else {
      ElMessage({
        type: "success",
        message: "取消删除",
      });
    }
  });
};
let getList = async function () {
  let res1 = await getPositionList({
    pageIndex: 1,
    userId: 10000,
    pageSize: 10,
    positionStatus: 1,
  });
  if (res1.code == 200) {
    console.log(res1);
    total.value = res1.data.maxCount;
    positionList.value = res1.data.data;
  }
  let res2 = await getPositionList({
    pageIndex: 1,
    userId: 10000,
    pageSize: 10,
    positionStatus: 2,
  });
  if (res2.code == 200 && res2.data) {
    downNum.value = res2.data.data.length;
  }
};
getList();
const router = useRouter();
const currentIndex = ref(0);
const tab = function (num: number) {
  currentIndex.value = num;
};
const to = function (path: string) {
  router.push(path);
};
</script>
<style lang="scss" scoped>
.position-page {
  min-width: 1200px;
}
.position-header {
  height: 55px;
  position: relative;

  box-shadow: 0px 3px 5px #e9e9e9;
  .head-nav {
    width: 290px;
    height: 100%;
    box-sizing: border-box;
    position: relative;
    .nav-title {
      position: relative;
      .num {
        position: absolute;
        left: 58px;
      }
    }
  }
  .active {
    font-weight: 700;
  }
  .active .bottom-line {
    position: absolute;
    width: 55px;
    height: 3px;
    background-color: #356ffa;
    bottom: 0;
    left: 42%;
    border-radius: 10px;
  }
}
.position-content {
  overflow: hidden;
  width: 100%;
  background-color: #f6f7f9;
  .tab2 {
    background-color: white;
    .void-box {
      height: calc(100vh - 55px);
      text-align: center;
      color: #515a6e;
      img {
        width: 240px;
        height: 210px;
      }
    }
  }
  .job {
    overflow: hidden;
    min-height: calc(100vh - 55px);
  }
  .job-head {
    .point-num {
      color: #356ffa;
    }
    .release-btn {
      gap: 10px;
      font-size: 16px;
      padding: 4px 20px;
      background-color: #356ffa;
      color: white;
      border-radius: 2px;
    }
    color: #515a6e;
    margin: 35px 0;
  }
  .job-box {
    background-color: #fff;
    .info-job {
      padding: 30px 25px;
      border-bottom: 2px solid #f6f7f9;
      .job-title {
        width: 400px;
      }
      .info-list {
        color: rgb(81, 90, 110);

        .bor {
          height: 9px;
          border-left: 2px solid rgb(197, 200, 206);
          margin: 0 10px;
        }
      }
      .resume-info {
        color: #515a6e;
        .resume-box {
          padding: 0 35px;
        }
        .resume-box:hover {
          .resume-num {
            color: #356ffa;
          }
        }
        .resume-num {
          text-align: center;
        }
      }
      .money-num {
        color: #f75736;
      }

      .refresh-info {
        gap: 0 12px;
        .autorefresh-btn {
          padding: 7px 15px;
          border: 1px solid #356ffa;
          color: #356ffa;
          border-radius: 4px;
        }
        .refresh-btn {
          padding: 7px 15px;
          color: white;
          border: 1px solid #356ffa;
          border-radius: 4px;
          background-color: #356ffa;
        }
      }
    }
    .edit-job {
      color: #515a6e;
      padding: 18px 25px;

      .bor {
        height: 10px;
        border-left: 2px solid rgb(197, 200, 206);
        margin: 0 16px;
      }
    }
  }
}

.pl-10 {
  padding-left: 10px;
}
.plr-5 {
  padding: 0 5px;
}
.flex-al {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.cur-po {
  cursor: pointer;
}
.fs-30 {
  font-size: 28px;
}
</style>