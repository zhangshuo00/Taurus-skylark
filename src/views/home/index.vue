<template>
  <div class="home-container">
    <div class="home-text">
      平台数据统计展示: {{ name }}
    </div>
    <LineChart />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LineChart from '../../components/Home/LineChart'

export default {
  name: 'Home',
  components: {
    LineChart
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.home {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
