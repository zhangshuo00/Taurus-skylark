<template>
  <el-row :gutter="0">
    <el-col :xs="0" :sm="6" :md="6" :lg="4" :xl="2"><div class="grid-content bg-purple-dark"></div></el-col>
    <el-col :xs="8" :sm="8" :md="8" :lg="6" :xl="6"><div class="grid-content bg-purple"></div></el-col>
    <el-col :xs="16" :sm="10" :md="10" :lg="14" :xl="16">
      <v-md-editor v-model="text" height="100rem"></v-md-editor>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Editor',
  data() {
    return {
      text: '',
    };
  },
};
</script>

<style lang="scss" scoped>
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 100rem;
}
</style>
