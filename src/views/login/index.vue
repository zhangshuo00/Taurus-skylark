<template>
  <Layout>
    {{ username }}
  </Layout>
</template>

<script>
import Layout from '@/layout'
export default {
  name: 'Login',
  components: {
    Layout
  },
  data() {
    return {
      username: 'zhangsan'
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
