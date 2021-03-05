<template>
  <div class="login-container">
    {{ username }}
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: 'zhangsan'
    }
  },
}
</script>

<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 50%;
}
</style>
