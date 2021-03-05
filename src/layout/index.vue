<template>
  <div class="app-wrapper">
    <HeaderNav/>
    <div class="main-container">
      main contain
    </div>
  </div>
</template>

<script>
import HeaderNav from './components/HeaderNav'

export default {
  name: 'Layout',
  components: {
    HeaderNav,
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

<style>


</style>
