<template>
  <div class="home-container">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      title: '标题'
    }
  },
}
</script>

<style lang="scss" scoped>
.home-container {
  width: 100%;
  height: 50%;
}
</style>
