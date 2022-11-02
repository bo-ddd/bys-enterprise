import { ref } from 'vue'
import { defineStore } from 'pinia'
import Api from "@/api/api.js";
export const usePersonStore = defineStore('person', () => {
  const count = ref(0)  
  function getEducation(){
    return Api.getEducationList();
  }
  return { count , getEducation}
})
