<template>
  <el-dialog :visible.sync="dialogTableVisible" width="1300px">
    <el-row :gutter="20">
      <!-- 左侧 -->
      <el-col :span="16" style="margin-bottom:100px">
        <div class="grid-content bg-purple">
          <div class="b_888 title">
            <div class="title_item">
              <h1>30f44</h1>
              <p>发布人:张甜甜</p>
              <p>发布日期:2020/1/20</p>
            </div>
            <div style="font-size:20px;line-height:60px;padding:0px 15px">
              <div style="float:right">
                <a href="javascript:" style="margin-right:20px">
                  <i class="el-icon-star-off"></i>
                  <span style="font-size:18px;margin-left:8px">收 藏</span>
                </a>
                <a href="javascript:" style="margin-right:10px">
                  <i class="el-icon-news"></i>
                  <span style="font-size:18px;margin-left:8px">分 享</span>
                </a>
              </div>
            </div>
          </div>
          <div class="b_888 content_item" style="margin-top:30px;">
            <el-tabs type="card" v-model="name">
              <el-tab-pane label="合金介绍" name="alloy">
                <div style="padding:26px">
                  <tr>
                    <td style="width:80px;line-height:70px;text-align:left">材料分类 :</td>
                    <td
                      style="width:600px"
                    >Lorem ipsue euismod bibendum laoreet. Proin gravida dolor sit amet lacus a dolor sit amet lacusLorem ipsue euismod bibendum laoreet. Proin gravida dolor sit amet lacus a dolor sit amet lacusLorem ipsue euismod bibendum laoreet. Proin gravida dolor sit amet lacus a dolor sit amet lacus</td>
                  </tr>
                  <tr>
                    <td style="width:80px;line-height:70px;text-align:left">关 键 词 :</td>
                    <td style="width:600px">
                      <el-tag effect="dark" style="margin-right:12px" size="small">材料</el-tag>
                      <el-tag effect="dark" style="margin-right:12px" size="small">物理性能</el-tag>
                      <el-tag effect="dark" style="margin-right:12px" size="small">123</el-tag>
                    </td>
                  </tr>
                  <tr>
                    <td style="width:80px;line-height:70px;text-align:left">材料概述 :</td>
                    <td>Lorem ipsue euismod bibendum laoreet. Proin gravida dolor sit amet lacus a dolor sit amet lacus</td>
                  </tr>
                  <tr>
                    <td style="width:80px;line-height:70px;text-align:left">材料标准 :</td>
                    <td
                      style="width:600px"
                    >Lorem ipsue euismod bibendum laoreet. Proin gravida dolor sit amet lacus a dolor sit amet lacus</td>
                  </tr>
                  <tr>
                    <td style="width:80px;line-height:70px;text-align:left">熔炼工艺 :</td>
                    <td
                      style="width:600px"
                    >Lorem ipsue euismod bibendum laoreet. Proin gravida dolor sit amet lacus a dolor sit amet lacus</td>
                  </tr>
                  <tr>
                    <td style="width:80px;line-height:70px;text-align:left">化学成分 :</td>
                    <td style="width:600px">
                      <el-table :data="tableData" style="width: 100%" fit label-width="center">
                        <el-table-column
                          prop="date"
                          label="日期"
                          width="100"
                          header-align="center"
                          align="center"
                        ></el-table-column>
                        <el-table-column
                          prop="name"
                          label="姓名"
                          width="100"
                          header-align="center"
                          align="center"
                        ></el-table-column>
                        <el-table-column
                          prop="address"
                          label="地址"
                          header-align="center"
                          align="center"
                        ></el-table-column>
                      </el-table>
                    </td>
                  </tr>
                  <tr>
                    <td style="width:80px;line-height:70px;text-align:left">热处理制度 :</td>
                    <td
                      style="width:600px"
                    >Lorem ipsue euismod bibendum laoreet. Proin gravida dolor sit amet lacus a dolor sit amet lacus</td>
                  </tr>
                  <tr>
                    <td style="width:80px;line-height:70px;text-align:left">主要规格 :</td>
                    <td
                      style="width:600px"
                    >Lorem ipsue euismod bibendum laoreet. Proin gravida dolor sit amet lacus a dolor sit amet lacus</td>
                  </tr>
                  <tr>
                    <td style="width:80px;line-height:70px;text-align:left">供应状态 :</td>
                    <td
                      style="width:600px"
                    >Lorem ipsue euismod bibendum laoreet. Proin gravida dolor sit amet lacus a dolor sit amet lacus</td>
                  </tr>
                </div>
              </el-tab-pane>
              <el-tab-pane label="物理性能" name="physics">
                <physics></physics>
              </el-tab-pane>
              <el-tab-pane label="力学性能" name="dynamics">
                <dynamics></dynamics>
              </el-tab-pane>
              <el-tab-pane label="工艺性能要求" name="technology">
                <technology></technology>
              </el-tab-pane>
              <el-tab-pane label="组织结构" name="organization">
                <organization></organization>
              </el-tab-pane>
              <el-tab-pane label="防腐蚀" name="corrosion">
                <corrosion></corrosion>
              </el-tab-pane>
              <el-tab-pane label="参考文献" name="reference">
                <reference></reference>
              </el-tab-pane>
            </el-tabs>
          </div>
          <div
            class="b_888 footer_item text-center"
            style="margin-top:30px;padding:0px 30px 30px 30px"
          >
            <h2 style="margin:0 auto;line-height:60px">相似牌号</h2>
            <el-row :gutter="20">
              <el-col :span="8">
                <a href="javascript:" class="box">
                  <div class="grid-content bg-purple">
                    <div style="width:100%;height:200px;overflow:hidden">
                      <img src="../../assets/img/bg.jpg" alt />
                    </div>
                    <div style="text-align:left;padding:0px 10px ">牌号名称 : &nbsp;&nbsp;&nbsp;03344</div>
                  </div>
                </a>
              </el-col>
              <el-col :span="8">
                <a href="javascript:" class="box">
                  <div class="grid-content bg-purple">
                    <div style="width:100%;height:200px;overflow:hidden">
                      <img src="../../assets/img/bg.jpg" alt />
                    </div>
                    <div style="text-align:left;padding:0px 10px ">牌号名称 : &nbsp;&nbsp;&nbsp;03344</div>
                  </div>
                </a>
              </el-col>
              <el-col :span="8">
                <a href="javascript:" class="box">
                  <div class="grid-content bg-purple">
                    <div style="width:100%;height:200px;overflow:hidden">
                      <img src="../../assets/img/bg.jpg" alt />
                    </div>
                    <div style="text-align:left;padding:0px 10px ">牌号名称 : &nbsp;&nbsp;&nbsp;03344</div>
                  </div>
                </a>
              </el-col>
            </el-row>

            <el-row :gutter="20" v-show="more">
              <el-col :span="8">
                <a href="javascript:" class="box">
                  <div class="grid-content bg-purple">
                    <div style="width:100%;height:200px;overflow:hidden">
                      <img src="../../assets/img/bg.jpg" alt />
                    </div>
                    <div style="text-align:left;padding:0px 10px ">牌号名称 : &nbsp;&nbsp;&nbsp;03344</div>
                  </div>
                </a>
              </el-col>
              <el-col :span="8">
                <a href="javascript:" class="box">
                  <div class="grid-content bg-purple">
                    <div style="width:100%;height:200px;overflow:hidden">
                      <img src="../../assets/img/bg.jpg" alt />
                    </div>
                    <div style="text-align:left;padding:0px 10px ">牌号名称 : &nbsp;&nbsp;&nbsp;03344</div>
                  </div>
                </a>
              </el-col>
              <el-col :span="8">
                <a href="javascript:" class="box">
                  <div class="grid-content bg-purple">
                    <div style="width:100%;height:200px;overflow:hidden">
                      <img src="../../assets/img/bg.jpg" alt />
                    </div>
                    <div style="text-align:left;padding:0px 10px ">牌号名称 : &nbsp;&nbsp;&nbsp;03344</div>
                  </div>
                </a>
              </el-col>
            </el-row>
            <div style="margin-top:30px">
              <a href="javascript:" class="btn" v-if="!this.more" @click="more=!more">显示更多</a>
              <a href="javascript:" class="btn" v-else @click="more=!more">收起</a>
            </div>
          </div>
        </div>
      </el-col>
      <!-- 右侧 -->
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <div>
            <div class="b_888">
              <img src="../../assets/img/bg.jpg" style="width: 100%; height: 200px" />
              <div>
                <p style="padding:20px 40px;font-size:20px">
                  <i class="el-icon-view"></i>
                  <span style="margin-left:30px">10</span>
                  <br />
                  <br />

                  <i class="el-icon-star-off"></i>
                  <span style="margin-left:30px">10</span>
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </el-dialog>
</template>
<script>
import Physics from "../../components/physics";
import Dynamics from "../../components/dynamics";
import Technology from "../../components/technology";
import Organization from "../../components/organization";
import Corrosion from "../../components/corrosion";
import Reference from "../../components/reference";

export default {
  name: "Popup",
  data() {
    return {
      dialogTableVisible: false,
      more: false,
      name: "alloy",
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
  components: {
    Physics,
    Dynamics,
    Technology,
    Organization,
    Corrosion,
    Reference
  },
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {
    init() {
      this.dialogTableVisible = true;
    }
  },
  watch: {}
};
</script>
<style scoped lang="scss">
.title {
  width: 100%;
  height: 260px;
}
.title_item {
  height: 200px;
  padding: 30px;
  background-color: #1c2a5d;
  box-sizing: border-box;
  color: #fff;
  h1 {
    font-size: 28px;
  }
  p {
    color: #8d99b7;
    margin-top: 30px;
    font-size: 18px;
  }
}
.content_item {
  .el-tabs__header .el-tabs__nav {
    border: none;
  }
}
.footer_item {
  h2 {
    position: relative;
    margin-bottom: 50px;
    // color: #eee;
  }
  h2::before {
    content: "";
    width: 50px;
    position: absolute;
    right: 270px;
    bottom: 50%;
    border: 1px solid #409eff;
  }
  h2::after {
    content: "";
    width: 50px;
    position: absolute;
    left: 270px;
    bottom: 50%;
    border: 1px solid #409eff;
  }

  .box {
    display: inline-block;
    img {
      width: 100%;
      height: 200px;
      transition: 0.4s all;
    }
    div {
      transition: 0.2s all;
      font-size: 18px;
      line-height: 40px;
    }
  }
  .box:hover.box img {
    transform: scale(1.1);
  }
  .box:hover.box > div {
    color: #409eff;
  }
  .btn {
    padding: 10px 25px;
    border: 1px solid #888;
    transition: 0.8s all;
  }
  .btn:hover {
    background-color: #2088e0;
    border: 1px solid #2088e0;
    color: #fff;
  }
}

.b_888 {
  border: 1px solid #eee;
}
</style>
