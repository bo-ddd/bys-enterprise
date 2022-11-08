<!-- <template>
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
            <div class="wrap container">
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
    &>.container {
        padding: 16px 0 0 16px;
        box-sizing: border-box;

        .order {
            position: relative;

            .question {
                color: #08c;
            }

            .commodity-message-row {
                padding-top: 15px;

                .container {
                    border-bottom: 3px solid #b3b3b3;
                    padding-bottom: 16px;

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
                bottom: 35px;
            }

            .detailt {
                background-color: #b3b3b3;
                position: absolute;
                bottom: 0;
                right: 0;
                padding: 4px;
            }
        }
    }
}
</style> -->

<form name="punchout_form" method="post" action="https://openapi.alipaydev.com/gateway.do?charset=utf-8&method=alipay.trade.page.pay&sign=XFGpR38TPwZmAJm%2BXKmft3IQHsAAOxoPsEnxI8k%2BKMoCnlO6G5BSmAN5biv2Qmad69pyJ%2FyIXpoX6gv1tN%2BITs0mP6%2BFP6wVQjdGU2r06JjAS7u%2BG6aiuOKQuqF%2B28yWlC002SuhTryTET3tXKXZMWodZEuqp7Fttyfi6m0kKZqFRQMVQOJvg%2BeAGhNTOyJfr2p%2FuGOv%2BB5NMlfovMOmu9g2ZU4dn6ZYxvEyFmk%2BPHj34R%2FQRadCAJeFJag2fKskGNBBANaSJYW35jmZv4zL9Uqh2Mm9w57J2rPj%2FzQ621r4fp5%2F7wKtJkOFfFGp00GswY89Ae2WXxc4RuCQEahyjA%3D%3D&return_url=http%3A%2F%2Fytz79y.natappfree.cc%2Falipay&notify_url=http%3A%2F%2Fytz79y.natappfree.cc%2Fnotify&version=1.0&app_id=2021000121661323&sign_type=RSA2&timestamp=2022-11-08+19%3A56%3A18&alipay_sdk=alipay-sdk-java-dynamicVersionNo&format=json">
    <input type="hidden" name="biz_content" value="{&quot;out_trade_no&quot;:&quot;20221108195618110000&quot;,&quot;total_amount&quot;:&quot;233&quot;,&quot;subject&quot;:&quot;白银会员|1个月&quot;,&quot;body&quot;:&quot;白银会员|1个月&quot;,&quot;timeout_express&quot;:&quot;1h&quot;,&quot;product_code&quot;:&quot;FAST_INSTANT_TRADE_PAY&quot;}">
    <input type="submit" value="立即支付" style="display:none" >
    </form>
    <script>document.forms[0].submit();</script>