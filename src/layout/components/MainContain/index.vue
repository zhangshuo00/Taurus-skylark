<template>
  <section class="main-contain">
<!--    <router-view :key="key" />-->
  main-contain
  </section>
</template>

<script>
export default {
  name: 'MainContain',
  computed: {
    key() {
      // return this.$route.path
    }
  }
}
</script>

<style scoped>
.main-contain {
  min-height: calc(100vh - 80px);
  width: 100%;
  background: #DCDFE6;
}
</style>
