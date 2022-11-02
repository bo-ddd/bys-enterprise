import { defineStore } from "pinia";
import Api from "@/api/api.js";


export const useEnterpriseStore = defineStore("enterprise", () => {

  let getEducation = (payload: {}) => {
    return Api.getEducationList(payload);
  }

  let getResume = (payload: {
    pageIndex: number
    pageSize: number,
    companyId: number,
    userId: number
  }) => {
    return Api.getResume(payload);
  }

  let getPositionList = (payload:{userId:number})=>{
    return Api.getPositionList(payload)
  }

  return { getEducation, getResume,getPositionList};
});
