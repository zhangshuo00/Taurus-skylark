<template>
  <div class="home-card">
    <div class="home-card-img">
      <img src="http://qinius.acrosstheuniverse.top/images/maoye.jpg" style="width:350px;height:200px;border-radius:15px">
    </div>
    <div class="home-card-right">
      <div class="home-card-title" ><span class="noselect">标题</span></div>
      <!-- <h3 style="margin-left:20px">{{title}}</h3> -->
      <div class="home-card-summary">
        摘要
      </div>
      <div style="margin-right:20px">日期</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  data(){
    return{
    }
  },
  methods:{
  }
}
</script>

<style lang="scss" scoped>
.home-card {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  width: 70%;
  height: 200px;
  margin-left: 8%;
  margin-top: 30px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
  0 4px 6px -2px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: row;

  .home-card-right{
    display: flex;
    flex-direction: column;

    .home-card-title{
      font-size: 18px;
      margin-left: 20px;
      color: #303133;
      font-weight: 600;
      margin-top: 20px;
    }
    .home-card-title:hover{
      color: #F56C6C;
      cursor: pointer;
    }

    .home-car-tag{
      display: flex;
      margin-left: 20px;
      align-items: center;
    }
  }
}

a {
  color: #606266;
  text-decoration: none;
}
</style>
