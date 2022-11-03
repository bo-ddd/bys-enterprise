import { ref } from 'vue'
import { defineStore } from 'pinia'
import Api from "@/api/api.js";
export const usePersonStore = defineStore('person', () => {
  const count = ref(0)  
  function getEducation(params:any){
    return Api.getEducationList(params);
  }
  function getMajorList(params:any){
    return Api.getMajorList(params);
  }
  function getSexList(params:any){
    return Api.getSexList(params);
  }
  function getPositionList(params:any){
    return Api.getPositionDrop(params);
  }
  function getWishMoney(params:any){
    return Api.getWishMoney(params);
  }
  function getTalentList(params:any){
    return Api.getTalentList(params);
  }
  return { count , getEducation, getMajorList,getSexList,getPositionList,getWishMoney,getTalentList}
})
