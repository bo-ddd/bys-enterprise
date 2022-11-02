<template>
    <div class="enterprise-registra">
        <div class="wrap container">
            <div class="title-wrap">
                <h2>企业信息编辑</h2>
            </div>
            <div class="form">
                <h3>基本信息</h3>
                <el-form :model="form" label-width="120px">
                    <!-- 企业全称 -->
                    <el-form-item label="企业全称">
                        <el-input v-model="form.name" />
                    </el-form-item>

                    <!-- 品牌全称 -->
                    <el-form-item label="品牌全称">
                        <el-input v-model="form.name" />
                    </el-form-item>

                    <!-- 头像 -->
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

                    <!-- 级联 -->
                    <el-form-item label="企业注册地区">
                        <el-cascader :options="RegisteredArea" clearable />
                    </el-form-item>

                    <!-- 详细注册地址 -->
                    <el-form-item label="详细注册地址">
                        <el-input v-model="form.name" />
                    </el-form-item>

                    <!-- 禁用状态的选择器 -->
                    <el-form-item label="所属行业">
                        <el-select v-model="value" disabled placeholder="Select">
                            <el-option v-for="item in options2" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </el-form-item>

                    <!-- 正常状态的选择器 -->
                    <el-form-item label="企业性质">
                        <el-select v-model="value" class="m-2" placeholder="Select" size="large">
                            <el-option v-for="item in options1" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </el-form-item>

                    <el-form-item label="企业规模">
                        <el-select v-model="value" class="m-2" placeholder="Select" size="large">
                            <el-option v-for="item in options1" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </el-form-item>

                    <el-form-item label="企业标签">
                        <el-select v-model="value" class="m-2" placeholder="Select" size="large">
                            <el-option v-for="item in options1" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </el-form-item>


                </el-form>

            </div>

            <div>
                <el-form :model="form" label-width="120px">
                    <!-- 提交 -->
                    <el-dialog v-model="dialogVisible">
                        <img w-full :src="dialogImageUrl" alt="Preview Image" />
                    </el-dialog>

                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">提交</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
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
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
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
const value = ref('')
const options2 = [
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
const options1 = [
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
</script>

<style lang="scss" scoped>
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

        &>.form {
            background-color: #fff;
            box-sizing: border-box;
            padding: 32px;
            border-radius: 4px;
            margin-bottom: 16px;

            &>h3 {
                font-size: 18px;
                line-height: 1;
                margin-bottom: 32px;
                font-weight: 400;
                color: #17233d;
            }
        }
    }
}
</style>