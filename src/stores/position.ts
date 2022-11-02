import { defineStore } from "pinia";
import Api from "@/api/api.js";

export interface PositionParam {
    pageIndex: number,	//当前页
    userId: number, //用户id
    pageSize: number,//每页数量
    positionStatus: number	//职位状态 1审核 2在招 3已下线 4未通过
};
interface Res{
    code:number,
    data:any
}
export const usePositionStore = defineStore("position", () => {

    function getPosition(params:PositionParam) {
        return Api.getPositionList(params) as Res;
    }
    function getProfessional() {
        return Api.getMajorList() as Res;
    }
    function getMonthDay() {
        return Api.getMonthDay() as Res;
    }
    function getEducation() {
        return Api.getEducationList() as Res;
    }
    function getCompanyIndustry() {
        return Api.getCompanyIndustry() as Res;
    }
    function getWishMoney() {
        return Api.getWishMoney() as Res;
    }
    return { getPosition, getProfessional, getMonthDay, getEducation, getCompanyIndustry, getWishMoney };
});
