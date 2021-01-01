<template>
  <div id="app">
    hello skylark
  </div>
</template>

<script>
// import { getToken } from '@/utils/auth' // get token from cookie
export default {
  name: 'App',
  data() {
    return {
      userInfo: {
        userId: '',
        pwd: ''
      }
    }
  },
  created() {
  },
  methods: {
    // 初始化应用，判断是否已经登录，如未登录，获取token
    fetchData() {
      const self = this
      // const hasToken = getToken()
    }
  }
}
</script>
