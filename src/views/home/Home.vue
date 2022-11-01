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
                            <div class="icon mr-11">
                                <img class="icon" src="@/assets/images/icon-edit.png" alt="">
                            </div>
                            <div class="test">编辑企业信息</div>
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

            <!-- <div class="intention mt-16">
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
                <div class="mt-25">
                    阿斯科利积分兑换i去胡覅缺阿斯科利积分兑换i去胡覅缺阿阿斯科利积分兑换i去胡覅缺阿斯科利积分兑换i去胡覅缺阿斯科利积分兑换i去胡覅缺阿斯科利积分兑换i去胡覅缺阿斯科利积分兑换i去胡覅缺阿斯科利积分兑换i去胡覅缺阿斯科利积分兑换i去胡覅缺阿斯科利积分兑换i去胡覅缺
                </div>
            </div>

            <div class="banner mt-16">
                <h3>企业VIP会员</h3>
                <div class="banner-img">
                    <img src="@/assets/images/banner-TH.png" alt="">
                </div>
            </div> -->
        </div>

        <footer-bar></footer-bar>
    </div>
</template>

<script setup lang="ts">
import footerBar from '@/components/footer/footerBar.vue'
</script>

<style lang="scss" scoped>
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

                &>.icon {
                    width: 14px;
                    height: 14px;

                    &>img {
                        max-width: 14px;
                        max-height: 14px;
                        vertical-align: middle;
                    }
                }

                &>.test {
                    display: inline-block;
                    font-size: 14px;
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

/* .intention {
    width: 100%;
    background-color: #fff;
    box-sizing: border-box;
    padding: 24px 32px 24px 30px;
}

.intention .top h3 {
    font-size: 16px;
}

.intention .top h3 span {
    color: #356ffa !important;
}

.intention .just-between .top span {
    display: inline-block;
    color: #808695;
}

.intention .top img {
    max-width: 12px;
}

.banner {
    padding: 24px 32px;
    box-sizing: border-box;
    background-color: #fff;
}

.banner h3 {
    font-size: 16px;
    color: #17233d;
    margin-bottom: 17px;
}

.banner .banner-img img {
    max-width: 1136px;
} */
</style>