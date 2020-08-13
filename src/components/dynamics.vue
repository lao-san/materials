<template>
  <div style="padding:26px">
    <tr v-show="this.dataList.technicalStandardSpecifications">
      <td style="width:180px;line-height:70px;text-align:left">技术标准规范的性能 :</td>
      <td style="width:600px">{{this.dataList.technicalStandardSpecifications}}</td>
    </tr>
    <tr v-show="this.dataList.productionInspection">
      <td style="width:140px;line-height:70px;text-align:left">生产检验数据 :</td>
      <td style="width:600px">{{this.dataList.productionInspection}}</td>
    </tr>
    <tr v-show="this.dataList.hardness">
      <td style="width:140px;line-height:70px;text-align:left">硬 度 :</td>
      <td style="width:600px">{{this.dataList.hardness}}</td>
    </tr>
    <tr v-show="this.dataList.impactPerformance">
      <td style="width:140px;line-height:70px;text-align:left">冲击性能 :</td>
      <td style="width:600px">{{this.dataList.impactPerformance}}</td>
    </tr>
  </div>
</template>
<script>
export default {
  name: "",
  props: {
    dynamics: Object,
  },
  data() {
    return {
      dataList: {},
    };
  },
  components: {},
  computed: {},
  beforeMount() {},
  created() {},
  methods: {
    init(data) {
      this.dataList = data;
    },
  },
  watch: {},
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
