<template>
    <div class="enterprise-registra">
        <div class="wrap container">
            <div class="title-wrap">
                <h2>企业信息编辑</h2>
            </div>
            <el-form :model="form" label-width="120px">
                <div class="form">
                    <h3>基本信息</h3>
                    <!-- 企业全称 -->
                    <el-form-item label="企业全称">
                        <el-input class="el-input_560-40" v-model="form.companyFullName" />
                    </el-form-item>

                    <!-- 品牌全称 -->
                    <el-form-item label="品牌全称">
                        <el-input class="brand-name" v-model="form.brandFullName" />
                    </el-form-item>

                    <!-- 企业logo -->
                    <el-form-item label="企业logo">
                        <el-upload action="#" list-type="picture-card" :auto-upload="false">
                            <el-icon>
                                <Plus />
                            </el-icon>

                            <template #file="{ file }">
                                <div>
                                    <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
                                    <span class="el-upload-list__item-actions">
                                        <span class="el-upload-list__item-preview"
                                            @click="handlePictureCardPreview(file)">
                                            <el-icon>
                                                <zoom-in />
                                            </el-icon>
                                        </span>
                                        <span v-if="!disabled" class="el-upload-list__item-delete"
                                            @click="handleDownload(file)">
                                            <el-icon>
                                                <Download />
                                            </el-icon>
                                        </span>
                                        <span v-if="!disabled" class="el-upload-list__item-delete"
                                            @click="handleRemove(file)">
                                            <el-icon>
                                                <Delete />
                                            </el-icon>
                                        </span>
                                    </span>
                                </div>
                            </template>
                        </el-upload>
                    </el-form-item>

                    <!-- 企业注册地区 -->
                    <el-form-item label="企业注册地区">
                        <el-cascader :options="RegisteredArea" clearable />
                    </el-form-item>

                    <!-- 详细注册地址 -->
                    <el-form-item label="详细注册地址">
                        <el-input class="el-input_560-40" v-model="form.companyAddr" />
                    </el-form-item>

                    <!-- 禁用状态的选择器 -->
                    <el-form-item label="所属行业">
                        <el-select class="el" v-model="forbidden" disabled placeholder="Select">
                            <el-option v-for="item in BelongingToIndustry" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </el-form-item>

                    <!-- 正常状态的选择器 -->
                    <el-form-item label="企业性质">
                        <el-select v-model="enterpriseNatureVal" class="m-2" placeholder="Select" size="large">
                            <el-option v-for="item in enterpriseNature" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </el-form-item>

                    <el-form-item label="企业规模">
                        <el-select v-model="enterpriseScaleVal" class="m-2" placeholder="Select" size="large">
                            <el-option v-for="item in enterpriseScale" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </el-form-item>

                    <el-form-item label="企业标签">
                        <el-select v-model="enterpriseLabelVal" class="m-2" placeholder="Select" size="large">
                            <el-option v-for="item in enterpriseLabel" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </el-form-item>
                </div>

                <div class="form">
                    <h3>认证信息</h3>
                    <!-- 社会信用代码 -->
                    <el-form-item label="社会信用代码">
                        <el-input class="input_280-40" v-model="form.companySocialCreditCode" />
                    </el-form-item>

                    <!-- 营业执照 -->
                    <div class="align-center">
                        <el-form-item label="营业执照"></el-form-item>
                        <div>
                            <el-upload action="#" list-type="picture-card" :auto-upload="false">
                                <el-icon>
                                    <Plus />
                                </el-icon>
                                <template #file="{ file }">
                                    <div>
                                        <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
                                        <span class="el-upload-list__item-actions">
                                            <span class="el-upload-list__item-preview"
                                                @click="handlePictureCardPreview(file)">
                                                <el-icon>
                                                    <zoom-in />
                                                </el-icon>
                                            </span>
                                            <span v-if="!disabled" class="el-upload-list__item-delete"
                                                @click="handleDownload(file)">
                                                <el-icon>
                                                    <Download />
                                                </el-icon>
                                            </span>
                                            <span v-if="!disabled" class="el-upload-list__item-delete"
                                                @click="handleRemove(file)">
                                                <el-icon>
                                                    <Delete />
                                                </el-icon>
                                            </span>
                                        </span>
                                    </div>
                                </template>
                            </el-upload>
                            <div>
                                <p>
                                    请上传清晰的营业执照, 执照中的<span>社会信用代码、企业名称</span>需与上方填写的一致。
                                </p>
                                <p>图片大小不可超过<span>2M</span>, 格式为jpg,jpeg或png</p>
                            </div>
                        </div>
                    </div>

                    <div class="horizontal-line"></div>

                    <div>
                        <h3>联系信息</h3>
                        <!-- 联系人 -->
                        <el-form-item label="联系人">
                            <el-input class="input_280-40" v-model="form.companyContactName" />
                        </el-form-item>

                        <!-- 联系方式 -->
                        <el-form-item label="联系方式">
                            <el-input class="input_280-40" v-model="form.companyContactPhone" />
                        </el-form-item>

                        <!-- 接受简历邮箱 -->
                        <el-form-item label="接受简历邮箱">
                            <el-input class="input_280-40" v-model="form.companyContactEmail" />
                        </el-form-item>
                    </div>
                </div>

                <div class="form footer">
                    <h3>企业简介</h3>

                    <!-- 企业简介 -->
                    <div class="align-center mb-24">
                        <el-form-item label="企业简介"></el-form-item>
                        <el-input class="textarea_560-184" v-model="form.companyIntroducation" type="textarea" />
                    </div>

                    <!-- 企业官网 -->
                    <el-form-item label="企业官网">
                        <el-input class="input_280-40" v-model="form.companyWebUrl" />
                    </el-form-item>

                    <div class="horizontal-line"></div>

                    <div class="school-of-intention">
                        <div class="flex">
                            <h3>意向学校</h3>
                            <p class="ml-16 intention-description">企业的招聘信息在所选学校会优先展示</p>
                        </div>

                        <div class="align-center">
                            <span>学校</span>
                            <el-select v-model="value1" multiple placeholder="Select">
                                <el-option v-for="item in schoolList" :key="item.value" :label="item.label"
                                    :value="item.value" />
                            </el-select>
                        </div>
                        <div></div>
                    </div>
                </div>

                <div>
                    <!-- 提交 -->
                    <el-dialog v-model="dialogVisible">
                        <img w-full :src="dialogImageUrl" alt="Preview Image" />
                    </el-dialog>

                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">提交</el-button>
                    </el-form-item>
                </div>
            </el-form>
        </div>
        <footer-bar></footer-bar>
    </div>
</template>

<script setup lang="ts">
// 底部
import footerBar from '@/components/footer/footerBar.vue';
// 这个是企业注册地区的数据
import RegisteredArea from './registeredArea';

// 这个是form表单要用的
import { reactive } from 'vue';

// 这个是企业LOGO上传头像需要用到的
import { ref } from 'vue';
import { Delete, Download, Plus, ZoomIn } from '@element-plus/icons-vue';
import type { UploadFile } from 'element-plus';

// form的逻辑
const form = reactive({
    companyFullName: '',// 企业全称
    brandFullName: '',//品牌全称
    companyName: '',// 企业简称
    companyStatus: '',// 企业状态 integer 整数类型
    companyLogo: '',// 企业Logo
    companyRegisterAddr: '',// 企业地址
    companyAddr: '',// 企业详细地址
    companyIndustryLeft: '',// 企业所属行业
    companyIndustryRight: '',// 企业所属行业
    companyNature: '',// 企业性质 integer
    companySize: '',// 企业规模 integer
    companyTag: '',// 企业标签 integer
    companySocialCreditCode: '',//企业社会信用代码
    companyLicense: '',// 企业营业执照 file
    companyLicenseUrl: '',// 企业营业执照Url 不填
    companyContactName: '',// 企业联系人
    companyContactPhone: '',// 企业联系电话
    companyContactEmail: '',// 企业接收简历邮箱
    companyIntroducation: '',// 企业简介
    companyWebUrl: '',// 企业官网
    companyWishSchool: '',// 企业意向学校
});
const onSubmit = () => {
    console.log(form)
};

// 上传企业LOGO的逻辑
const dialogImageUrl = ref('');
const dialogVisible = ref(false);
const disabled = ref(false);
const handleRemove = (file: UploadFile) => {
    console.log(file)
};
const handlePictureCardPreview = (file: UploadFile) => {
    dialogImageUrl.value = file.url!
    dialogVisible.value = true
};
const handleDownload = (file: UploadFile) => {
    console.log(file)
};

// 禁用状态选择器的逻辑
const forbidden = ref('Option1');
const enterpriseNatureVal = ref('')
const enterpriseScaleVal = ref('')
const enterpriseLabelVal = ref('')

// 企业性质
const enterpriseNature = [
    {
        value: 'Option1',
        label: 'Option1',
    },
    {
        value: 'Option2',
        label: 'Option2',
    },
    {
        value: 'Option3',
        label: 'Option3',
    },
    {
        value: 'Option4',
        label: 'Option4',
    },
    {
        value: 'Option5',
        label: 'Option5',
    },
]
// 企业规模
const enterpriseScale = [
    {
        value: 'Option1',
        label: 'Option1',
    },
    {
        value: 'Option2',
        label: 'Option2',
    },
    {
        value: 'Option3',
        label: 'Option3',
    },
    {
        value: 'Option4',
        label: 'Option4',
    },
    {
        value: 'Option5',
        label: 'Option5',
    },
]
// 企业标签
const enterpriseLabel = [
    {
        value: 'Option1',
        label: 'Option1',
    },
    {
        value: 'Option2',
        label: 'Option2',
    },
    {
        value: 'Option3',
        label: 'Option3',
    },
    {
        value: 'Option4',
        label: 'Option4',
    },
    {
        value: 'Option5',
        label: 'Option5',
    },
]
// 所属行业
const BelongingToIndustry = [
    {
        value: 'Option1',
        label: 'Option1',
    },
    {
        value: 'Option2',
        label: 'Option2',
    },
    {
        value: 'Option3',
        label: 'Option3',
    },
    {
        value: 'Option4',
        label: 'Option4',
    },
    {
        value: 'Option5',
        label: 'Option5',
    },
]

const value1 = ref([]);
// 学校列表
const schoolList = [
    {
        value: 'Option1',
        label: 'Option1',
    },
    {
        value: 'Option2',
        label: 'Option2',
    },
    {
        value: 'Option3',
        label: 'Option3',
    },
    {
        value: 'Option4',
        label: 'Option4',
    },
    {
        value: 'Option5',
        label: 'Option5',
    },
    {
        value: '6',
        label: '6',
    },
    {
        value: '7',
        label: '7',
    },
    {
        value: '8',
        label: '8',
    },
]
</script>

<style lang="scss" scoped>
.ml-16 {
    margin-left: 16px;
}

::v-deep.el-select {
    width: 240px;
    height: 40px;
}

::v-deep .el-button {
    width: 268px;
    height: 40px;
    margin: 32px 0 64px 156px;
}

::v-deep textarea {
    width: 560px !important;
    height: 184px;
}

::v-deep el-select {
    max-width: 560px;
    height: 192px;
}

::v-deep.input_280-40 {
    width: 280px;
    height: 40px;
}


.enterprise-registra {
    background-color: #f6f7f9;
    font-family: MicrosoftYaHei;
    overflow: hidden;

    &>.container {
        &>.title-wrap {
            display: flex;
            -webkit-box-pack: justify;
            justify-content: space-between;
            -webkit-box-align: center;
            align-items: center;

            &>h2 {
                font-size: 28px;
                font-weight: 400;
                color: #17233d;
                line-height: 1;
                margin: 32px 0;
            }
        }

        .form {
            background-color: #fff;
            box-sizing: border-box;
            padding: 32px;
            border-radius: 4px;
            margin-bottom: 16px;

            .school_test {
                margin-left: 24px;

                b {
                    color: #356ffa;
                    font-size: 19px;
                    font-weight: 700;
                    font-style: normal;
                }

                span {
                    font-size: 14px;
                }
            }

            h3 {
                font-size: 18px;
                line-height: 1;
                margin-bottom: 32px;
                font-weight: 400;
                color: #17233d;
            }

            .horizontal-line {
                height: 1px;
                border-top: 1px solid #eef0f2;
                margin-bottom: 32px;
                margin-top: 8px;
            }

            .el-input_560-40 {
                width: 560px;
                height: 40px;
            }

            .brand-name {
                width: 280px;
                height: 40px;
            }

            .el-upload--picture-card {
                width: 104px;
                height: 104px;
            }

            .intention-description {
                font-size: 14px;
                color: #808695;
            }
        }
    }
}

.mb-24 {
    margin-bottom: 24px;
}
</style>