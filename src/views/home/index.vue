<template>
  <Layout>
    {{ title }}
  </Layout>
</template>

<script>
import Layout from '@/layout'
export default {
  name: 'Home',
  components: {
    Layout
  },
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
