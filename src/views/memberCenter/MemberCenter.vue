<template>
  <div class="member-page">
    <div class="wrap member-title flex-ja-center">
      <img class="reversal" src="@/assets/images/icon-left_star.png" alt />
      <h3 class="fs-24 plr-15">升级成为毕业申会员</h3>
      <img src="@/assets/images/icon-left_star.png" alt />
    </div>
    <div class="wrap member-banner">
      <div class="banner-imgs flex fs-20">
        <div class="banner-item align-center">
          <img src="@/assets/images/img-banner1.png" alt />
          <span>更多职位同时在线</span>
        </div>
        <div class="banner-item align-center">
          <img src="@/assets/images/img-banner2.png" alt />
          <span>更多职位刷新点数</span>
        </div>
        <div class="banner-item align-center">
          <img src="@/assets/images/img-banner3.png" alt />
          <span>更多邀请投递点数</span>
        </div>
      </div>
      <div class="banner-cards mt-50 just-between">
        <div class="card-item just-center">
          <div class="card">
            <div class="card-border pa-20">
              <h5 class="fs-20">职位自动刷新卡</h5>
              <p class="mt-15">使用后5天内,所选职位每天9点、14点、18点自动刷新</p>
            </div>
          </div>
          <div class="card-btn">曝光率提升200%</div>
        </div>
        <div class="card-item just-center">
          <div class="card">
            <div class="card-border pa-20">
              <h5 class="fs-20">招聘会抵用券</h5>
              <p class="mt-15">使用后可以直接入会</p>
            </div>
          </div>
          <div class="card-btn">轻松入选招聘会</div>
        </div>
      </div>
    </div>
    <div class="wrap member-equity flex">
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.member-page {
  background-color: #0e2664;
  .member-title {
    padding: 35px 0;
    color: #e2ad7d;
    // display: ;
    img {
      width: 50px;
      height: 16px;
    }
    .reversal {
      transform: rotate(180deg);
    }
  }
  .member-banner {
    border: 3px solid #1a398b;
    padding: 30px 0;
    background-color: #112f7c;
    .banner-item {
      width: 400px;
      color: white;
      flex-direction: column;
      img {
        width: 170px;
        height: 170px;
      }
    }
    .banner-cards {
      padding: 0 60px;
      .card-item {
        flex-direction: column;

        width: 520px;
        .card-btn{
            display: inline-block;
            color: white;
            border: 1px solid white;
            padding: 5px 0;
            width: 158px;
            text-align: center;
            margin: 0 auto;
            margin-top: 25px;
        }
        .card {
          box-sizing: border-box;
          width: 520px;
          padding: 8px;
          background: linear-gradient(146deg, #ffe7cc, #e2ad7d);
          .card-border {
            border: 1px solid #f8ce9f;
            border-image: -webkit-gradient(
                linear,
                left top,
                right top,
                from(#f8ce9f),
                to(#d98e4b)
              )
              30 30;
            border-image: linear-gradient(90deg, #f8ce9f, #d98e4b) 30 30;
            h5 {
              color: #573617;
              font-weight: 400;
            }
            p {
              color: #79593a;
            }
          }
        }
      }
    }
  }
}
.plr-15 {
  padding: 0 15px;
}
.pa-20{
    padding: 20px;
}
.mt-50{
    margin-top: 50px;
}
</style>