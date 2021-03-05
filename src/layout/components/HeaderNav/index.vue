<template>
  <div class="navbar">
    <div class="navbar-logo">logo</div>

    <div class="right-menu">
      <el-menu mode="horizontal">
        <el-menu-item index="1">发现</el-menu-item>
        <el-menu-item index="2">消息</el-menu-item>
        <el-menu-item index="3">关注</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HeaderNav',
  components: {},
  computed: {},
  methods: {
    toggleSideBar() {
      // this.$store.dispatch('app/toggleSideBar')
    },
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .navbar-logo {
    width: 30%;
  }

  .right-menu {
    height: 100%;
    line-height: 80px;
  }
}

</style>
