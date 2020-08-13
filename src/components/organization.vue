<template>
  <div style="padding:26px">
    <tr v-show="dataList.typicalOrganization">
      <td style="width:80px;line-height:70px;text-align:left">典型组织 :</td>
      <td
        style="width:600px"
        v-html="dataList.typicalOrganization"
      ></td>
    </tr>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      dataList:{}

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
