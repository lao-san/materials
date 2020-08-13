<template>
  <div style="padding:26px">
    <tr v-show="dataList.meltingTemperature">
      <td style="width:120px;line-height:70px;text-align:left">熔化温度范围:</td>
    </tr>
    <tr>
      <td style="width:120px;line-height:70px;text-align:left"></td>
      <td style="width:600px">
        <img :src="this.baseUrl+dataList.meltingTemperature" alt />
      </td>
    </tr>
    <tr v-show="dataList.phaseTransition">
      <td style="width:120px;line-height:70px;text-align:left">相 变 点:</td>
    </tr>
    <tr>
      <td style="width:120px;line-height:70px;text-align:left"></td>
      <td style="width:600px">
        <img :src="this.baseUrl+dataList.phaseTransition" alt />
      </td>
    </tr>
    <tr v-show="dataList.density">
      <td style="width:80px;line-height:70px;text-align:left">密 度 :</td>
      <td style="width:600px">{{this.dataList.density}}</td>
    </tr>
  </div>
</template>
<script>
export default {
  name: "",
  props: {
    physical: Object,
  },
  data() {
    return {
      dataList: {},
    };
  },
  components: {},
  computed: {},
  beforeMount() {},
  created() {
  },
  mounted() {
  },
  methods: {
    init(data){
      // console.log(1)
       this.dataList = data
    }
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
