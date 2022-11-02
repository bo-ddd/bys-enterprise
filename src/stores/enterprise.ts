import { defineStore } from "pinia";
import Api from "@/api/api.js";


export const useEnterpriseStore = defineStore("enterprise", () => {

  function getEducation(payload:{}) {
    return Api.getEducationList(payload);
  }

  return { getEducation };
});
