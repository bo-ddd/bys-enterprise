<template>
    <div class="member ">
        <header class="wrap flex-ja-center">
            <img class="icon" src="@/assets/images/left.png" alt="">
            <h3 class="fs-24 c-ebab85">升级成为毕业申会员</h3>
            <img class="icon" src="@/assets/images/right.png" alt="">
        </header>
        <main class="container wrap">
            <div class="flex-ja-center banner">
                <img src="@/assets/images/banner1.png" alt="">
                <img src="@/assets/images/banner2.png" alt="">
                <img src="@/assets/images/banner3.png" alt="">
            </div>
            <div class="card">
                <div class="card-desc flex-ja-center">
                    <div class="position-card">
                        <div class="content">
                            <h5 class="fs-20 c-573617 fw-400">职位自动刷新卡 </h5>
                            <p class="c-79593a fs-16 mt-10">使用后5天内，所选职位每天9点、14点、18点自动刷新</p>
                        </div>
                        <img class="bg-v" src="@/assets/images/default_v.png" alt="">
                    </div>
                </div>
                <div class="desc flex-ja-center">
                    <div class="content c-ffffff">
                        <span class="fs-16">曝光率提升 200%</span>
                        <img class="icon-rise" src="@/assets/images/icon-rise.png" alt="">
                    </div>
                </div>
            </div>
            <div class="vip-type">
                <div class="vip-wrap">
                    
                </div>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
  import { useVipStore } from "@/stores/vip";
  let useVip = useVipStore();
  let getVip = async ()=>{
      let res = await useVip.getVip({});
      console.log(res);
  }
  getVip();
</script>

<style lang="scss" scoped>
.member {
    height: 100vh;
    background-color: #0e2664;

    header {
        gap: 18px;
        padding: 30px 0;

        .icon {
            width: 50px;
        }
    }

    .container {
        border: 3px solid #1c3b8d;
        background-color: #112f7d;

        .banner {
            gap: 230px;
            padding: 30px 0;

            img {
                width: 170px;
            }
        }

        .card {
            .card-desc {
                .position-card {
                    height: 116px;
                    width: 520px;
                    padding: 10px;
                    box-sizing: border-box;
                    border-radius: 2px;
                    position: relative;
                    background: linear-gradient(146deg, #ffe7cc, #e2ad7d);

                    .content {
                        border: 1px solid #f8ce9f;
                        box-sizing: border-box;
                        padding: 20px;

                    }

                    .bg-v {
                        position: absolute;
                        height: 116px;
                        top: 0;
                        right: 0;
                    }
                }
            }
            .desc{
                padding: 26px 0;
                .content{
                    padding: 5px 10px;
                    border: 1px solid #ffffff;
                    .icon-rise {
                            width: 15px;
                        }
                }
            }
        }
    }
}

.c-ebab85 {
    color: #ebab85;
}

.c-79593a {
    color: #79593a;
}

.c-573617 {
    color: #573617;
}

.fw-400 {
    font-weight: 400;
}
</style>