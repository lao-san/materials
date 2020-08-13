<template>
  <div style="padding:26px">
    <tr v-show="dataList.meltingProcess">
      <td style="width:80px;line-height:70px;text-align:left">防腐蚀性 :</td>
      <td
        style="width:600px"
      >{{dataList.meltingProcess}}</td>
    </tr>
    <tr v-show="dataList.antioxidantPerformance">
      <td style="width:80px;line-height:70px;text-align:left">抗氧化性能 :</td>
      <td
        style="width:600px"
      > {{dataList.antioxidantPerformance}}</td>
    </tr>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      dataList :{}
    };
  },
  components: {},
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {
    init(data){
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
