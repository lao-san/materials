<template>
  <el-container>
    <el-header>
      <div class="wrap">
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <a href="javascript:">
                <img src="../../assets/img/logo.png" alt class="logo" />
              </a>
            </div>
          </el-col>
          <el-col :span="6" :offset="10">
            <div class="grid-content bg-purple">
              <!-- <el-link
                style="float:right;margin-right:80px;color:#fff"
                :underline="false"
                type="primary"
              >登录</el-link>-->
              <el-link
                style="float:right;margin-right:80px;color:#fff"
                :underline="false"
                type="primary"
                @click="handPersonal"
              >个人中心</el-link>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-header>
    <el-main>
      <div class="search">
        <div class="wrap text-center">
          <div>
            <el-input
              placeholder="请输入内容"
              class="input-with-select"
              style="width:700px;margin-top:100px"
            >
              <el-select v-model="select" slot="prepend" placeholder="请选择">
                <el-option label="全 部" value="1"></el-option>
                <el-option label="牌 号" value="2"></el-option>
                <el-option label="材料名称" value="3"></el-option>
              </el-select>
              <el-button slot="append" style="background-color:#2088E0;color:#fff">搜索</el-button>
            </el-input>
          </div>
          <div>
            <el-tag effect="dark" v-for="item in selectArr" @click="handClick(item)">
              <a href="javascript:">{{item}}</a>
            </el-tag>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="wrap">
          <el-row :gutter="20">
            <el-col :span="7" style="margin-right:24px">
              <div class="grid-content bg-purple border_ccc">
                <div style="margin-top:10px">
                  <div class="title">
                    <a href="javascript:">化学</a>
                  </div>
                  <div style="margin-top:10px;padding-left:10px">
                    <a href="javascript:">有机</a>/
                    <a href="javascript:">化学</a>/
                    <a href="javascript:">物理</a>
                  </div>
                </div>
                <div style="margin-top:10px">
                  <div class="title">
                    <a href="javascript:">化学</a>
                  </div>
                  <div style="margin-top:10px;padding-left:10px">
                    <a href="javascript:">有机</a>/
                    <a href="javascript:">化学</a>/
                    <a href="javascript:">物理</a>
                  </div>
                </div>
                <div style="margin-top:10px">
                  <div class="title">
                    <a href="javascript:">化学</a>
                  </div>
                  <div style="margin-top:10px;padding-left:10px">
                    <a href="javascript:">有机</a>/
                    <a href="javascript:">化学</a>/
                    <a href="javascript:">物理</a>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="14">
              <div class="grid-content bg-purple">
                <div class="search_title">
                  <div class="screen_top" style="background-color:#F7F8FA">
                    已选条件 :
                    <el-tag closable>化学材料</el-tag>
                    <div style="float:right">
                      <a href="javascript:" class="btn">
                        清除全部
                        <i class="el-icon-delete" style="margin-left:4px"></i>
                      </a>
                      <a href="javascript:" class="btn" @click="flag=false" v-if="flag">
                        展开筛选
                        <i class="el-icon-arrow-down" style="margin-left:4px"></i>
                      </a>
                      <a href="javascript:" class="btn" v-else @click="flag= true">
                        收起筛选
                        <i class="el-icon-arrow-up" style="margin-left:4px"></i>
                      </a>
                    </div>
                  </div>
                  <div v-show="!flag">
                    <div class="screen_top">
                      资源类型 :
                      <el-tag effect="dark" style="margin-right:10px" size="small">
                        <a href="javascript:">所有资料</a>
                      </el-tag>
                      <el-tag effect="dark" style="margin-right:10px" size="small">
                        <a href="javascript:">普通资料</a>
                      </el-tag>
                      <el-tag effect="dark" style="margin-right:10px" size="small">
                        <a href="javascript:">会员资料</a>
                      </el-tag>
                    </div>
                    <div class="screen_top">
                      材料类型 :
                      <el-tag effect="dark" style="margin-right:10px" size="small">
                        <a href="javascript:">防腐蚀</a>
                      </el-tag>
                      <el-tag effect="dark" style="margin-right:10px" size="small">
                        <a href="javascript:">合金</a>
                      </el-tag>
                      <el-tag effect="dark" style="margin-right:10px" size="small">
                        <a href="javascript:">xxx</a>
                      </el-tag>
                    </div>
                  </div>
                </div>
                <div class="search_content">
                  <el-row :gutter="20" class="search_content_t">
                    <el-col :span="8">
                      <div class="grid-content bg-purple">
                        找到
                        <span>1162</span> 个结果 ，共
                        <span>117</span> 页
                      </div>
                    </el-col>
                    <el-col :span="13" :offset="3">
                      <div class="grid-content bg-purple" style="float:right">
                        排序方式:
                        <a href="javascript:" style="margin-left:10px">
                          <el-tag>名称</el-tag>
                        </a>
                        <a href="javascript:" style="margin-left:10px">
                          <el-tag>点击量</el-tag>
                        </a>
                        <a href="javascript:" style="margin-left:10px">
                          <el-tag>更新时间</el-tag>
                        </a>
                      </div>
                    </el-col>
                  </el-row>
                  <div class="search_content_c">
                    <a class="search_content_item" @click="handPopup">
                      <h3 style="margin-bottom:20px">0f3d4</h3>
                      <el-row :gutter="20">
                        <el-col :span="7">
                          <div class="grid-content bg-purple">
                            <!-- <el-image
                              style="width: 200px; height: 120px"
                              src=""
                              fit="cover"
                            ></el-image>-->
                            <img
                              src="../../assets/img/bg.jpg"
                              style="width: 200px; height: 120px"
                              alt
                            />
                          </div>
                        </el-col>
                        <el-col :span="17">
                          <div class="grid-content bg-purple">
                            <div style="margin-bottom:10px">
                              <el-tag>123</el-tag>
                              <el-tag>123</el-tag>
                              <el-tag>123</el-tag>
                            </div>
                            <div
                              class="col_8 text_hidden"
                            >同原生 object-fit。可通过fit确定图片如何适应到容器框，可通过fit确定图片如何适应到容器框，通过fit确定图片如何适应到容器框通过fit确定图片如何适应到容器框可通过fit确定图片如何适应到容器框，可通过fit确定图片如何适应到容器框同原生 object-fit。可通过fit确定图片如何适应到容器框，同原生 object-fit。</div>
                            <div style="float:right;" class="col_8">2020-10-1</div>
                          </div>
                        </el-col>
                      </el-row>
                    </a>
                    <a class="search_content_item">
                      <h3 style="margin-bottom:20px">0f3d4</h3>
                      <el-row :gutter="20">
                        <el-col :span="7">
                          <div class="grid-content bg-purple">
                            <el-image
                              style="width: 200px; height: 120px"
                              src="../../assets/img/logo.png"
                              fit="cover"
                            ></el-image>
                          </div>
                        </el-col>
                        <el-col :span="17">
                          <div class="grid-content bg-purple">
                            <div style="margin-bottom:10px">
                              <el-tag>123</el-tag>
                              <el-tag>123</el-tag>
                              <el-tag>123</el-tag>
                            </div>
                            <div
                              class="col_8 text_hidden"
                            >同原生 object-fit。可通过fit确定图片如何适应到容器框，可通过fit确定图片如何适应到容器框，通过fit确定图片如何适应到容器框通过fit确定图片如何适应到容器框可通过fit确定图片如何适应到容器框，可通过fit确定图片如何适应到容器框同原生 object-fit。可通过fit确定图片如何适应到容器框，同原生 object-fit。</div>
                            <div style="float:right;" class="col_8">2020-10-1</div>
                          </div>
                        </el-col>
                      </el-row>
                    </a>
                  </div>
                </div>
                <div class="text-center" style="margin-top:30px">
                  <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </el-main>
    <el-footer>
      <div
        class="wrap text-center"
      >版权所有：中国科学院计算机网络信息中心·大数据部 Copyright© 1995-2020 备案序号：京ICP备09112257号-34</div>
    </el-footer>
    <details-popup v-if="dialogVisible" ref="popup"></details-popup>
    <personal v-if="logVisible" ref="personal"></personal>
  </el-container>
</template>
<script>
import DetailsPopup from "../../components/popup";
import Personal from "../../components/personal";
export default {
  name: "",
  data() {
    return {
      flag: false,
      select: "",
      selectArr: [
        "GH3625",
        "GH3888",
        "GH3488",
        "GH2488",
        "GH1488",
        "GH1498",
        "GH1498"
      ],
      dialogVisible: false,
      logVisible: false
    };
  },
  components: {
    DetailsPopup,
    Personal
  },
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {
    handClick(data) {
      console.log(data);
    },
    //获取表单详情
    handPopup() {
      this.dialogVisible = true;
      this.$nextTick(() => {
        this.$refs.popup.init();
      });
    },
    //个人中心
    handPersonal() {
      this.logVisible = true;
      this.$nextTick(() => {
        this.$refs.personal.init();
      });
    }
  },
  watch: {}
};
</script>
<style scoped lang="scss">
.wrap {
  width: 1300px;
  margin: 0 auto;
}
.el-header {
  line-height: 60px;
  background-color: #1d285e;
  .logo {
    width: 60px;
    height: 60px;
  }
}
.el-main {
  padding: 0px;
  // height: 2000px;
  .search {
    height: 300px;
    // border: 1px solid red;
    background-color: #1a346f;

    .el-select {
      width: 110px;
    }
    .el-tag {
      margin: 30px 15px;
    }
  }
  .content {
    margin-top: 30px;
    .grid-content {
      // border: 1px solid red;
      .search_title {
        border: 1px solid #ccc;
        border-bottom: 0px solid #ccc;

        .screen_top {
          // border: 1px solid #ccc;
          border-bottom: 1px solid #ccc;
          border-left: 0px;
          line-height: 60px;
          padding: 0px 30px;
          box-sizing: border-box;
        }
      }
      .search_content {
        margin-top: 20px;
        border: 1px solid #ccc;

        .search_content_t {
          padding: 0px 30px;
          line-height: 60px;
          color: #9696b8;
        }
        .search_content_c {
          .search_content_item {
            display: block;
            padding: 16px 30px;
            border: 1px solid #ccc;
            border-bottom: 1px;
            border-left: 1px;
            border-right: 1px;
            .el-tag {
              margin-right: 10px;
            }
          }
          .search_content_item:hover {
            background-color: #2088e0;
          }
          .search_content_item:hover.search_content_item h3 {
            color: #fff;
          }
          .search_content_item:hover.search_content_item div {
            color: #fff;
          }
        }
      }
    }
    .title {
      font-size: 22px;
      line-height: 30px;
      border-left: 4px solid steelblue;
      font-weight: bold;
      padding-left: 8px;
      box-sizing: border-box;
    }
  }
}
.btn {
  padding: 6px;
  font-size: 14px;
  border: 1px solid #ccc;
  margin-left: 20px;
  transition: 0.3s all;
}
.btn:hover {
  border: 1px solid #2088e0;
}
.border_ccc {
  padding: 20px;
  border: 1px solid #ccc;
}
.el-footer {
  color: #fff;
  line-height: 60px;
  margin-top: 60px;
  background-color: #393b3f;
}
</style>
