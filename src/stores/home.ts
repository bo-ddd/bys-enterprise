import { defineStore } from "pinia";
import Api from "@/api/api.js";


export const useHomeStore = defineStore("home", () => {

    function getEducation(payload: {}) {
        return Api.getEducationList(payload);
    }

    return { getEducation };
});
