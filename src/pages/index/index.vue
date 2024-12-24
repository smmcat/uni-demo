<script setup lang="ts">
import { useUserInfoStore } from '@/stores';
const userInfoStore = useUserInfoStore()
const login = () => {
  userInfoStore.setUserInfo({ name: '屎猫猫' })
}
const clear = () => {
  userInfoStore.clearUserInfo()
}
</script>
<template>
  {{ userInfoStore.userInfo }}
  <button @tap="login">登录</button>
  <button @tap="clear">清除</button>
</template>

<style lang="scss"></style>
