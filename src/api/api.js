import axios from 'axios';

import { postConfig } from './config'


axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么,一般配置一些请求头的公共信息；
    config.headers.token = sessionStorage.getItem('token');
    return config;
})

// 添加响应拦截器  概念：每次调用接口之后都会走到此方法中，服务端返回数据后优先走到此方法，之后才会走到 // // // //axiox.get()/axios.post() 的then方法中；
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么，一般可以把登录失效后的逻辑添加到此处，所有需要登录接口的判断都可以写到此处，这样就不用每个接口都判断用户是否登录，如果没有登录就跳转到登录页面去的逻辑；抽离业务逻辑的好地方；
    if (response.data.status == 401) {
        // window.location.href = '/login'
    }
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    console.log('get error:', error)
    return {
        code: -1,
        msg: '网络异常'
    }
});

//接口定义的方式；  //这个项目中，在这个地方声明接口；
export default {
    //登录
    login: (params) => {
        return axios.post('/company/login', params, postConfig)
    },


    getEducation:(params)=>{
        return axios.post('/drop/getEducation',params,postConfig)
    },

    /**
     * 获取学历下拉框
     */
    getEducationList:(params)=>{
        return axios.post('/drop/getEducation',params,postConfig);
    },

    /**
     * 获取专业下拉框
     */
    getMajorList:(params)=>{
        return axios.post('/drop/getProfessional',params,postConfig);
    },

    /**
     * 获取期望薪资
     */
    getWishMoney:(params)=>{
        return axios.post('/drop/getWishMoney',params,postConfig);
    },

    /** 
     * 获取性别列表
     * */ 
    getSexList:(params={})=>{
        return axios.post('/drop/getSex',params,postConfig);
    },

    /**
     * 获取企业职位列表
     */
    getPositionList:(params)=>{
        return axios.post('/drop/getPositionDrop',params,postConfig);
    },

    /**
     * 获取人才列表
     */
    getTalentList:(params)=>{
        return axios.post('/company/getTalent',params,postConfig);
    },
    getResume:(params)=>{
        return axios.post('/company/getResume',params,postConfig);
    },

    /**
     * 获取实习月数和天数下拉框
     */
    getMonthDay:(params)=>{
        return axios.post('/drop/drop/getMonthDay',params,postConfig);
    },

    /**
     * 获取职位类别下拉框
     */
    getCompanyIndustry:(params)=>{
        return axios.post('/drop/getCompanyIndustry',params,postConfig);
    },
        
    /**
     * 获取企业职位列表
     */
     getPositionData:(params)=>{
        return axios.post('/company/getPosition',params,postConfig);
    },
}