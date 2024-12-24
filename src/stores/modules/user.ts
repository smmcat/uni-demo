import { defineStore } from "pinia";
import { ref } from "vue";

type UserInfo = {
    name: string
}

export const useUserInfoStore = defineStore('userInfo', () => {
    const userInfo = ref<UserInfo>()
    const setUserInfo = (val: UserInfo) => {
        userInfo.value = val
    }
    const clearUserInfo = () => {
        userInfo.value = undefined
    }
    return { userInfo, setUserInfo, clearUserInfo }
}, {
    // 持久化
    persist: {
        // 进行兼容策略配置
        storage: {
            getItem(key) {
                return uni.getStorageSync(key)
            },
            setItem(key, value) {
                uni.setStorageSync(key, value)
            },
        },
    }
})