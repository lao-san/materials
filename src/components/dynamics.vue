<template>
  <div style="padding:26px">
    <tr>
      <td style="width:140px;line-height:70px;text-align:left">技术标准规范的性能 :</td>
      <td style="width:600px">
        <el-table :data="tableData" style="width: 100%" fit label-width="center">
          <el-table-column prop="date" label="日期" width="100" header-align="center" align="center"></el-table-column>
          <el-table-column prop="name" label="姓名" width="100" header-align="center" align="center"></el-table-column>
          <el-table-column prop="address" label="地址" header-align="center" align="center"></el-table-column>
        </el-table>
      </td>
    </tr>
    <tr>
      <td style="width:140px;line-height:70px;text-align:left">生产检验数据 :</td>
      <td style="width:600px">
        <el-table :data="tableData" style="width: 100%" fit label-width="center">
          <el-table-column prop="date" label="日期" width="100" header-align="center" align="center"></el-table-column>
          <el-table-column prop="name" label="姓名" width="100" header-align="center" align="center"></el-table-column>
          <el-table-column prop="address" label="地址" header-align="center" align="center"></el-table-column>
        </el-table>
      </td>
    </tr>
    <tr>
      <td style="width:140px;line-height:70px;text-align:left">硬 度 :</td>
      <td style="width:600px">
        <el-table :data="tableData" style="width: 100%" fit label-width="center">
          <el-table-column prop="date" label="日期" width="100" header-align="center" align="center"></el-table-column>
          <el-table-column prop="name" label="姓名" width="100" header-align="center" align="center"></el-table-column>
          <el-table-column prop="address" label="地址" header-align="center" align="center"></el-table-column>
        </el-table>
      </td>
    </tr>
    <tr>
      <td style="width:140px;line-height:70px;text-align:left">冲击性能 :</td>
      <td style="width:600px">
        <el-table :data="tableData" style="width: 100%" fit label-width="center">
          <el-table-column prop="date" label="日期" width="100" header-align="center" align="center"></el-table-column>
          <el-table-column prop="name" label="姓名" width="100" header-align="center" align="center"></el-table-column>
          <el-table-column prop="address" label="地址" header-align="center" align="center"></el-table-column>
        </el-table>
      </td>
    </tr>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
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
  methods: {},
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
