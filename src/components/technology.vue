<template>
  <div style="padding:26px">
    <tr v-show="this.dataList.processAndPerformance">
      <td style="width:140px;line-height:130px;text-align:left">成形工艺与性能 :</td>
      <td
        style="width:600px"
      >{{dataList.processAndPerformance}}</td>
    </tr>
    <tr v-show="this.dataList.weldingPerformance">
      <td style="width:140px;line-height:70px;text-align:left">焊接性能 :</td>
      <td style="width:600px">
        {{dataList.weldingPerformance}}
      </td>
    </tr>
    <tr v-show="this.dataList.heatTreatmentProcess">
      <td style="width:140px;line-height:130px;text-align:left">零件热处理工艺 :</td>
      <td
        style="width:600px"
      >{{dataList.heatTreatmentProcess}}</td>
    </tr>
    <tr v-show="this.dataList.cuttingAndGrinding">
      <td style="width:170px;line-height:130px;text-align:left">切削加工与磨削性能 :</td>
      <td
        style="width:600px"
      >{{dataList.cuttingAndGrinding}}</td>
    </tr>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      dataList:{},
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  components: {},
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {
    init(data) {
      this.dataList = data
    }

  },
  watch: {}
};
</script>
<style scoped lang="scss">
tr {
  td {
    img {
      width: 600px;
      height: 300px;
    }
  }
}
</style>
