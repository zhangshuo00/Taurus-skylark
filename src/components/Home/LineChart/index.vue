<template>
  <div ref="lineChart" style="width: 600px;height:400px;" />
</template>

<script>
/**
 * @desc: 柱状图
 * @date: 2020-04-25
 * @author: zhangshuo
 */

export default {
  name: 'LineChart',
  data() {
    return {
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      const self = this
      const myChart = self.$echarts.init(this.$refs.lineChart)
      const option = {
        title: {
          text: '平台用户总量',
          textStyle: {
            fontSize: 16,
            fontWeight: 700
          },
          left: 'left'
        },
        legend: {
          icon: 'circle',
          top: '5%',
          right: '5%',
          itemWidth: 6,
          itemGap: 20,
          textStyle: {
            color: '#556677'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            label: {
              show: true,
              backgroundColor: '#fff',
              color: '#556677',
              borderColor: 'rgba(0,0,0,0)',
              shadowColor: 'rgba(0,0,0,0)',
              shadowOffsetY: 0
            },
            lineStyle: {
              width: 0
            }
          },
          backgroundColor: '#fff',
          textStyle: {
            color: '#5c6c7c'
          },
          padding: [10, 10],
          extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)'
        },
        xAxis: {
          data: ['04/20', '04/21', '04/22', '04/23', '04/24', '04/25']
        },
        yAxis: {},
        series: [{
          name: '人数',
          type: 'line',
          data: [200, 480, 536, 610, 610, 680]
        }]
      }
      myChart.setOption(option)
    }
  }
}
</script>

<style scoped>
.line-chart {
  width: 400px;
  height: 300px;
}
</style>
