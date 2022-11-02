import { defineStore } from "pinia";
import Api from "@/api/api.js";


export const useEnterpriseStore = defineStore("enterprise", () => {

  let  getEducation = (payload:{})=> {
    return Api.getEducationList(payload);
  }
  

  let getResume = (payload:{
    pageIndex:number
    pageSize:number,
    companyId:number,
  })=>{
        return Api.getResume(payload);
  }

  return { getEducation,getResume };
});
