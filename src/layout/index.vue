<template>
  <div class="app-wrapper">
    <HeaderNav/>
    <div class="main-container">
<!--      <div class="contain">-->
        <MainContain/>
<!--      </div>-->
      <div class="main-side">
        <SideList/>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNav from './components/HeaderNav'
import MainContain from './components/MainContain'
import SideList from './components/SideList'

export default {
  name: 'Layout',
  components: {
    HeaderNav,
    MainContain,
    SideList
  },
  data() {
    return {
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss" scoped>
.app-wrapper {
  width: 100%;
  height: 100%;

  .main-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;

    .main-side {
      width: 30%;
    }
  }
}

</style>
