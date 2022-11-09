<template>
    <div class="payment">
        <div class="topbar">
            <div class="wrap container align-center">
                <p class="c-ffffff fs-12">你好，欢迎使用支付宝付款！</p>
                <span class="line">|</span>
                <a class="c-ffffff fs-12" target="blank"
                    href="https://cshall.alipay.com/lab/cateQuestion.htm?cateId=237707&pcateId=237328#A6">
                    常见问题
                </a>
            </div>
        </div>
        <header>
            <div class="container wrap align-center">
                <img class="logo" src="@/assets/images/anlipay_.png" alt="">
                <span class="logo-title">我的收银台</span>
            </div>
        </header>
        <main class="mt-15">
            <div class="container-order wrap ">
                <div class="order ">
                    <div class="order-extand-explain flex fs-12">
                        <p class="">正在使用即时到账交易</p>
                        <el-tooltip class="box-item" effect="light" content="<b>付款后资金直接进入对方账户</b></br>
                        若发生退款需联系收款方协商，如付款给陌生人，请谨慎操作。" placement="right-start" :raw-content="true">
                            <span class="question cursor-p ml-5"> [?]</span>
                        </el-tooltip>
                    </div>
                    <div class="commodity-message-row fs-14 fw-600">
                        <div :class="`container wrap ${isShow ? 'align-center' : ''}`">
                            <span class="long-content">
                                {{ vipName }} | {{ count }}个月
                            </span>
                            <div class=" ml-15 fs-12 fw-400">
                                <p class="short-content" v-show="isShow">
                                    <span>收款方</span>
                                    <span>：北京清实信息科技有限公司</span>
                                </p>
                            </div>
                            <div v-show="!isShow" class="fs-12 fw-400 order-detailt mt-15">
                                <p class="item just-between ">
                                    <span>收款方：</span>
                                    <span>北京清实信息科技有限公司</span>
                                </p>
                                <p class="item just-between ">
                                    <span>订单号：</span>
                                    <span></span>
                                </p>
                                <p class="item just-between ">
                                    <span>商品名称：</span>
                                    <span> {{ vipName }} | {{ count }}个月</span>
                                </p>
                                <p class="item just-between ">
                                    <span>交易金额：</span>
                                    <span>{{ price }}</span>
                                </p>
                            </div>
                            <p class="fs-12 fw-400 price"><span class="fs-22 c-ff4400 fw-700">{{ price }}</span>元</p>
                            <button class="detailt c-ffffff fs-12" href="" @click="isShow = !isShow">订单详情</button>
                        </div>
                    </div>

                </div>
            </div>
            <div class="container-main wrap flex">
                <!-- 扫码 -->
                <div class="container-main_wrap">
                    <div class="operation-area">
                        <div class="header">
                            <p class="fs-12">扫一扫付款（元）</p>
                            <p class="c-ff4400 fs-26 fw-700">{{ price }}</p>
                        </div>
                        <div class="qrcode-img-wrap">
                            <img class="company_fanjia" src="@/assets/images/company_fanjia_3.png" alt="">
                            <div class="flex-ja-center">
                                <img class="s-code" src="@/assets/images/s-code.png" alt="">
                                <div>
                                    <p class="fs-12 custom-i18n">打开手机支付宝</p>
                                    <p class="fs-12 custom-i18n">扫一扫继续付款</p>
                                </div>
                            </div>
                        </div>
                        <div class="qrcode-foot mt-10">
                            <span class="fs-12 c-bababa ">首次使用请下载手机支付宝</span>
                        </div>
                    </div>
                </div>

                <div class="qrguide-area">
                    <!-- 切换 -->
                    <div class="icon">
                        <img class="monitor" src="@/assets/images/monitor.png" alt="">
                        <img class="anlipay" src="@/assets/images/anlipay_.png" alt="">
                    </div>
                    <div>
                        <el-button class="btn" type="primary">{{ '<登录账户付款' }}</el-button>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from '@vue/runtime-core';
import { useRoute } from 'vue-router';

let route = useRoute();

// 订单信息
let vipName = route.query.vipName;
let order = route.query.orderPrice;
let count = route.query.vipCount;

let price = computed(() => {
    return (Number(order) * 100 / 100).toFixed(2);
})

//订单详情 
let isShow = ref(true);


</script>

<style lang="scss" scoped>
div,
p,
span,
a {
    font-family: tahoma, arial, 宋体 !important;
}

.wrap {
    width: 950px;
    margin: 0 auto;
}

.payment {
    background-color: #eff0f1;
}



.topbar {
    background-color: #81868b;

    .container {
        justify-content: right;
        padding: 4px 0;
        gap: 10px;

        .line {
            color: #606060;
        }
    }
}

header {
    background-color: #ffffff;
    border-bottom: 1px solid #d9d9d9;

    .container {
        padding: 8px 0;

        .logo {
            width: 136px;
            margin-top: 4px;
        }

        .logo-title {
            font-size: 16px;
            font-weight: normal;
            font-family: "Microsoft YaHei", 微软雅黑, "宋体";
            border-left: 1px solid #676d70;
            color: #676d70;
            height: 20px;
            margin-top: 6px;
            margin-left: 10px;
            padding-top: 10px;
            padding-left: 10px;
        }
    }
}

main {
    &>.container-order {
        padding: 16px 23px;
        box-sizing: border-box;
        border-bottom: 3px solid #b3b3b3;

        .order {
            position: relative;

            .question {
                color: #08c;
            }

            .commodity-message-row {
                padding-top: 15px;

                .container {


                    .order-detailt {
                        line-height: 22px;
                        width: 410px;

                        .item>span {
                            &:nth-child(2) {
                                display: inline-block;
                                width: 270px;
                            }
                        }
                    }
                }
            }

            .short-content {
                max-width: 165px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            .price {
                position: absolute;
                right: 0;
                bottom: 20px;
            }

            .detailt {
                background-color: #b3b3b3;
                position: absolute;
                bottom: -18px;
                right: 0;
                padding: 4px;
            }
        }
    }

    .container-main {

        border-bottom: 3px solid #b3b3b3;
        background-color: #ffffff;
        position: relative;

        .container-main_wrap {
            padding: 75px 0;

            .operation-area {
                width: 800px;

                &>.header {
                    width: 300px;
                    margin: 0 auto;
                    text-align: center;
                    box-sizing: border-box;
                    line-height: 30px;
                }

                &>.qrcode-img-wrap {
                    width: 168px;
                    padding: 6px;
                    margin: 0 auto;
                    border: 1px solid #d3d3d3;
                    -webkit-box-shadow: 1px 1px 1px #ccc;
                    box-shadow: 1px 1px 1px #ccc;

                    &>div {
                        gap: 10px;
                    }

                    .company_fanjia {
                        width: 168px;
                    }

                    .s-code {
                        width: 28px;
                        height: 28px;
                    }

                    .custom-i18n {
                        line-height: 18px;
                    }
                }

                .qrcode-foot {
                    text-align: center;

                    &>span {
                        text-decoration: underline;
                    }
                }
            }

        }

        .qrguide-area {
            width: 148px;
            border: 1px solid #d9d9d9;
            background-color: #e6e6e6;

            .icon {
                position: relative;
                top: 140px;
                .monitor {
                    width: 100px;
                    position: absolute;
                    left: 24px;
                }

                .anlipay {
                    width: 60px;
                    position: absolute;
                    left: 44px;
                    top: 31px;
                }
            }

            .btn {
                position: relative;
                top: 260px;
                left: 12px;
            }
        }

    }
}
</style>