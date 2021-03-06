<template>
  <div class="navbar">
    <div class="navbar-logo">logo</div>

    <div class="right-menu">
      <el-menu mode="horizontal">
        <el-menu-item index="1">
          <i class="el-icon-location"></i>
          <span>发现</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-location"></i>
          <span>关注</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-location"></i>
          <span>消息</span>
        </el-menu-item>
      </el-menu>
    </div>

    <div class="search-menu">
      <el-input
          placeholder="请输入内容"
          v-model="inputSearch">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>

    <div class="avatar-menu">
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
    </div>

    <el-button type="primary">写文章</el-button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HeaderNav',
  components: {},
  data() {
    return {
      inputSearch: ''
    }
  },
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

  .search-menu {
    width: 200px;
  }
}

</style>
