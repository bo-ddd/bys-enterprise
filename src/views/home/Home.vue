<template>
    <div class="bgdf6f7f9">
        <div class="home wrap">
            <div class="brief-introduction ">
                <div class="top border-btm flex">
                    <div class="left major just-between-2">
                        <div class="flex">
                            <div class="img mr-16">
                                <img class="icon-head-portrait" src="@/assets/images/icon-head_portrait.png" alt="">
                            </div>
                            <div class="test">
                                <h1>中科百谷</h1>
                                <p>北京中科百谷科技有限公司</p>
                                <p>互联网/IT - 计算机软件</p>
                            </div>
                        </div>
                        <div class="major-right just-center">
                            <div class="hover" @click="nav('edit')">
                                <div class="icon mr-11">
                                    <i class="iconfont icon-bianji"></i>
                                </div>
                                <div class="test">编辑企业信息</div>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="right-title align-center">
                            <div class="spot"></div>
                            <div class="title ml-8">审核通过</div>
                        </div>
                        <div class="describe ml-16">您现在可以发布职位信息、报名招聘会</div>
                    </div>
                </div>
                <div class="btm justify-content">
                    <div class="btm-item">
                        <div class="just-between">
                            <div class="left">
                                <h3>2</h3>
                                <div class="test">在招职位</div>
                            </div>
                            <div class="right mr-14">
                                <img class="icon-home_right_arrow" src="@/assets/images/icon-home_right_arrow.png"
                                    alt="">
                            </div>
                        </div>
                        <div class="just-between">
                            <div class="bottom">
                                <h3>1</h3>
                                <div class="test">七日内刷新过职位</div>
                            </div>
                            <div class="icon-img">
                                <img class="icon-img" src="@/assets/images/icon-home_banner1.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="btm-item">
                        <div class="just-between">
                            <div class="left">
                                <h3>0</h3>
                                <div class="test">新简历</div>
                            </div>
                            <div class="right mr-14">
                                <img class="icon-home_right_arrow" src="@/assets/images/icon-home_right_arrow.png"
                                    alt="">
                            </div>
                        </div>
                        <div class="just-between">
                            <div class="bottom">
                                <h3>18</h3>
                                <div class="test">未查看简历</div>
                            </div>
                            <div class="icon-img">
                                <img class="icon-img" src="@/assets/images/icon-home_banner2.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="btm-item">
                        <div class="just-between">
                            <div class="left">
                                <h3>147</h3>
                                <div class="test">在职招聘会</div>
                            </div>
                            <div class="right mr-14">
                                <img class="icon-home_right_arrow" src="@/assets/images/icon-home_right_arrow.png"
                                    alt="">
                            </div>
                        </div>
                        <div class="just-between">
                            <div class="bottom">
                                <h3>0</h3>
                                <div class="test">我报名的</div>
                            </div>
                            <div class="icon-img">
                                <img class="icon-img" src="@/assets/images/icon-home_banner3.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="intention mt-16">
                <div class="just-between">
                    <div class="top">
                        <h3>意向学校 <span>16</span>/50</h3>
                        <div class="test">
                            <span class="mr-14 mt-17">请尽量选择更多的意向学校</span>
                            <span><img src="@/assets/images/icon-right.png" alt=""></span>
                        </div>
                    </div>
                    <div class="top-el-button">
                        <el-button type="primary">选择意向学校</el-button>
                    </div>
                </div>
                <div class="mt-25 text">
                    阿斯科利积分兑换i去胡覅缺阿斯科利积分兑换i去胡覅缺阿阿斯科利积分兑换i去胡覅缺阿斯科利积分兑换i去胡覅缺阿斯科利积分兑换i去胡覅缺阿斯科利积分兑换i去胡覅缺阿斯科利积分兑换i去胡覅缺阿斯科利积分兑换i去胡覅缺阿斯科利积分兑换i去胡覅缺阿斯科利积分兑换i去胡覅缺
                </div>
            </div>

            <div class="vip mt-16">
                <h3>企业VIP会员</h3>
                <div class="notvip-wrap">
                    <div class="left">
                        <h4>企业版VIP会员</h4>
                        <ul>
                            <li>
                                <img src="@/assets/images/icon-home_vipbanner1.png" alt="">
                                <span>在招职位数量解锁</span>
                            </li>
                            <li>
                                <img src="@/assets/images/icon-home_vipbanner2.png" alt="">
                                <span>更多职位刷新点数</span>
                            </li>
                            <li>
                                <img src="@/assets/images/icon-home_vipbanner3.png" alt="">
                                <span>更多邀请投递点数</span>
                            </li>
                        </ul>
                        <div class="btn-wrap flex">
                            <div class="position-card">
                                <div class="content">
                                    <h5>职位自动刷新卡</h5>
                                    <img class="bg-v" src="@/assets/images/home-vip_V.png" alt="">
                                </div>
                            </div>
                            <div class="position-card">
                                <div class="content">
                                    <h5>招聘会抵用券<span>(优先入会权益)</span></h5>
                                    <img class="bg-v" src="@/assets/images/home-vip_V.png" alt="">
                                </div>
                                <img class="tip" src="@/assets/images/limited-time-gift.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="more-btn">查看更多</div>
                    </div>
                    <img src="@/assets/images/home-banner_ads.png" alt="">
                </div>
            </div>
        </div>

        <footer-bar></footer-bar>
    </div>
</template>

<script setup lang="ts">
import footerBar from '@/components/footer/footerBar.vue';
import { useRouter } from 'vue-router';
let router = useRouter();
let nav = (name: string) => {
    router.push(name);
}
</script>

<style lang="scss" scoped>
img {
    border-style: none;
}

.icon-head-portrait {
    max-height: 86px;
    max-width: 86px;
}

.mt-16 {
    margin-top: 16px;
}

.mt-15 {
    margin-top: 15px;
}

.mr-10 {
    margin-right: 10px;
}

.bgdf6f7f9 {
    background-color: #f6f7f9;
}

.ml-8 {
    margin-left: 8px;
}

.ml-16 {
    margin-left: 16px;
}

.mr-14 {
    margin-right: 14px;
}

.border-btm {
    border-bottom: 1px solid #eef0f2;
}

.just-between-2 {
    display: flex;
    justify-content: space-between;
}

.justify-content {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

.mt-17 {
    margin-top: 17px;
}

.mt-25 {
    margin-top: 25px;
}

.mr-16 {
    margin-right: 16px;
}

.mr-11 {
    margin-right: 11px;
}

.home {
    padding-top: 16px;
    height: 100%;
}

.brief-introduction {
    background-color: #ffffff;
    padding-left: 32px;

    &>.top {
        padding: 24px 0;

        &>.major {
            width: 807px;

            &>.major-right {
                display: flex;
                align-content: flex-start;
                padding-right: 32px;

                &>.hover {
                    height: 15px;
                    cursor: pointer;
                }

                .icon {
                    font-size: 14px;
                    display: inline-block;
                }

                .test {
                    display: inline-block;
                    font-size: 14px;
                }

                &>.hover:hover {
                    color: #356ffb;
                }

            }
        }

        &>.left {
            border-right: 1px solid #eef0f2;

            &>.img {
                height: 86px;
                width: 86px;
                border: 1px solid #eef0f2;
                border-radius: 5px;
            }

            .test {
                h1 {
                    font-size: 19px;
                    margin: 6px 0;
                }

                p {
                    font-size: 15px;
                    color: #515a6e;
                    margin-top: 6px;
                }
            }
        }

        &>.right {
            font-size: 13px;
            margin-left: 38px;

            &>.describe {
                margin-top: 20px;
            }

            &>.right-title .spot {
                width: 8px;
                height: 8px;
                border-radius: 4px;
                background-color: #19be6b;
            }
        }
    }

    &>.btm {
        padding: 18px 0;

        &>.btm-item {
            width: 245px;
            height: 145px;

            .left h3 {
                margin: 8px 0;

                &>.test {
                    margin: 3px 0;
                }
            }

            .right {
                width: 10px;
                height: 18px;

                &>.icon-home_right_arrow {
                    max-width: 10px;
                    max-height: 18px;
                }
            }

            .icon-img {
                max-width: 80px;
                max-height: 60px;
            }

            .bottom h3 {
                margin-top: 21px;
            }

            .bottom .test {
                margin-top: 11px;
            }
        }

    }
}

.intention {
    width: 100%;
    background-color: #fff;
    box-sizing: border-box;
    padding: 24px 32px 24px 30px;

    &>.text {
        color: #515a6e;
    }

    .top h3 {
        font-size: 16px;

        span {
            color: #356ffa !important;
        }
    }

    .just-between .top span {
        display: inline-block;
        color: #808695;
    }

    .top img {
        max-width: 12px;
    }
}


.vip {
    padding: 24px 32px 32px 32px;
    box-sizing: border-box;
    background-color: #fff;

    &>h3 {
        font-size: 16px;
        font-weight: 700;
        color: #17233d;
        line-height: 1;
        margin-bottom: 16px;
    }

    &>.notvip-wrap {
        position: relative;
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        align-items: center;
        padding: 48px 64px 48px 48px;
        border-radius: 4px;
        background-color: #1f2020;

        &>.left {
            box-sizing: border-box;

            &>h4 {
                font-size: 32px;
                font-weight: 700;
                color: #eecca7;
            }

            &>ul {
                list-style: none;
                display: flex;
                margin: 32px 0 60px 0;

                &>li {
                    display: flex;
                    -webkit-box-orient: vertical;
                    -webkit-box-direction: normal;
                    flex-direction: column;
                    -webkit-box-align: center;
                    align-items: center;
                    margin-right: 48px;

                    &>img {
                        width: 64px;
                        height: 64px;
                        margin-bottom: 24px;
                    }

                    &>span {
                        font-size: 16px;
                        color: #ffe7cc;
                    }
                }
            }

            &>.btn-wrap {
                &>.position-card {
                    position: relative;
                    background: linear-gradient(146deg, #ffe7cc, #e2ad7d);
                    border-radius: 2px;
                    padding: 4px;
                    margin-right: 28px;

                    &>.content {
                        box-sizing: border-box;
                        position: relative;
                        z-index: 3;
                        width: 300px;
                        height: 56px;
                        padding: 20px;
                        border: 1px solid #f8ce9f;
                        border-image: linear-gradient(90deg, #f8ce9f, #d98e4b) 10 10;
                        line-height: 1;

                        &>h5 {
                            font-size: 18px;
                            color: #573617;
                            font-weight: 400;
                        }

                        &>img {
                            position: absolute;
                            width: 58px;
                            height: 64px;
                            top: 0;
                            right: 0;
                        }
                    }

                    &>.tip {
                        position: absolute;
                        z-index: 9;
                        width: 68px;
                        height: 25px;
                        top: -24px;
                        right: 0;
                    }
                }
            }
        }

        &>.right {
            display: flex;
            z-index: 6;

            &>.more-btn {
                display: flex;
                -webkit-box-pack: center;
                justify-content: center;
                -webkit-box-align: center;
                align-items: center;
                cursor: pointer;
                width: 160px;
                height: 56px;
                background: linear-gradient(128deg, #fee8cd, #e2ae7e);
                border-radius: 28px;
                font-size: 22px;
                color: #4c2c0e;
            }
        }

        &>img {
            position: absolute;
            top: 0;
            right: 0;
            width: 166px;
            height: 214px;
        }
    }
}
</style>