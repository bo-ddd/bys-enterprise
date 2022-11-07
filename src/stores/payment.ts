import { defineStore } from "pinia";
import Api from "@/api/api.js";

interface Payment {
    userId:number,
    companyId:number,
    month:number,
    vipId:number,
}

export const useUserStore = defineStore("payment", () => {
  function payment(payload: Payment) {
    return Api.login(payload);
  }

  return { payment };
});
