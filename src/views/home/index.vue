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
              <router-link
                to="/login"
                style="float:right;margin-right:80px;color:#fff"
                v-show="!user"
              >登录</router-link>
              <el-link
                v-show="!!user"
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
              v-model="search"
            >
              <el-select v-model="select" slot="prepend">
                <el-option label="牌 号" value="1"></el-option>
              </el-select>
              <el-button
                slot="append"
                style="background-color:#FF9900;color:#fff"
                @click="this.init"
              >搜索</el-button>
            </el-input>
          </div>
          <div style="width:726px;text-align:left;margin: 0 auto">
            <el-tag effect="dark" v-for="item in hotList" @click="setSearch(item)" >
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
                <div style="margin-top:10px" v-for="(item,index) in typeList" :key="index">
                  <div class="title">
                    <a
                      href="javascript:"
                      style="border-left: 4px solid #ff9900;padding-left:10px"
                      @click.self="setTypeSearch(item.name,item.id)"
                    >{{item.name}}</a>
                    <div style="margin-top:10px;padding-left:15px;">
                      <a
                        style="color:#888;font-size:16px; "
                        href="javascript:"
                        v-for="(item,index) in item.list"
                        @click.self="setTypeSearch(item.name,item.id)"
                      >
                        {{item.name}}
                        <div>
                          <span
                            style="font-size:14px;margin-left:20px"
                            v-for="(item,index) in item.list"
                            @click.self="setTypeSearch(item.name,item.id)"
                          >{{item.name}} /</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="14">
              <div class="grid-content bg-purple">
                <div class="search_title">
                  <div class="screen_top" style="background-color:#F7F8FA">
                    已选条件 :
                    <el-tag
                      closable
                      v-if="search"
                      @close="search=''"
                      style="margin-right:10px"
                    >{{search}}</el-tag>
                    <el-tag closable v-if="typeSearch" @close="typeSearch=''">{{typeSearch}}</el-tag>

                    <div style="float:right">
                      <a href="javascript:" class="btn" @click="clearData">
                        清除全部
                        <i class="el-icon-delete" style="margin-left:4px"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="search_content">
                  <el-row :gutter="20" class="search_content_t">
                    <el-col :span="8">
                      <div class="grid-content bg-purple">
                        找到
                        <span>{{totalCount}}</span> 条结果
                      </div>
                    </el-col>
                    <el-col :span="13" :offset="3">
                      <div class="grid-content bg-purple" style="float:right">
                        排序方式:
                        <a href="javascript:" style="margin-left:10px">
                          <el-tag @click="getRank('code',0)">名称</el-tag>
                        </a>
                        <a href="javascript:" style="margin-left:10px">
                          <el-tag @click="getRank('clicks',1)">点击量</el-tag>
                        </a>
                        <a href="javascript:" style="margin-left:10px">
                          <el-tag @click="getRank('create_time',1)">更新时间</el-tag>
                        </a>
                      </div>
                    </el-col>
                  </el-row>
                  <div class="search_content_c">
                    <a
                      class="search_content_item"
                      @click="handPopup(item.id)"
                      v-for="(item,index) in dataList"
                      :key="item.id"
                    >
                      <h3 style="margin-bottom:20px">{{item.code}}</h3>
                      <el-row :gutter="20">
                        <el-col :span="7">
                          <div class="grid-content bg-purple">
                              <img v-if="item.image"
                              :src="item.image"
                              style="width: 200px; height: 120px"
                              alt
                            />
                            <img v-else
                              src="../../assets/img/bg.jpg"
                              style="width: 200px; height: 120px"
                              alt
                            />
                           
                          </div>
                        </el-col>
                        <el-col :span="17">
                          <div class="grid-content bg-purple">
                            <div style="margin-bottom:10px">
                              <el-tag
                                v-for="(item,index) in item.keyword"
                                :key="index"
                                v-show="item"
                              >{{item}}</el-tag>
                            </div>
                            <div class="col_8 text_hidden" style="height:60px">{{item.overview}}</div>
                            <div style="float:right;" class="col_8">{{item.createTime}}</div>
                          </div>
                        </el-col>
                      </el-row>
                    </a>
                  </div>
                </div>
                <div class="text-center" style="margin-top:30px">
                  <el-pagination
                    background
                    layout="total, prev, pager, next"
                    :total="totalCount"
                    :current-page="pageIndex"
                    :page-size="pageSize"
                    @size-change="sizeChangeHandle"
                    @current-change="currentChangeHandle"
                  ></el-pagination>
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
      categoryId: 0,
      pageIndex: 1,
      pageSize: 6,
      totalPage: 0,
      totalCount: 0,
      key: "",
      orderBy: "",
      orderType: "",
      user: "",
      flag: false,
      select: "",
      selectArr: [
        "GH3625",
        "GH3888",
        "GH3488",
        "GH2488",
        "GH1488",
        "GH1498",
        "GH1498",
      ],
      dialogVisible: false,
      logVisible: false,
      search: "",
      code: "",
      type: 0,
      typeSearch: "",
      dataList: [],
      typeList: [],
      hotList: [],
    };
  },
  components: {
    DetailsPopup,
    Personal,
  },
  computed: {},
  beforeMount() {},
  mounted() {
    this.user = window.sessionStorage.getItem("token");
    this.init();
    this.hot();
    this.initList();
  },
  methods: {
    init() {
      this.$http.get(
        "/app/data/list",
        {
          page: this.pageIndex,
          limit: this.pageSize,
          categoryId: this.categoryId,
          key: this.search,
          orderBy: this.code,
          orderType: this.type,
        },
        (data) => {
          if (data && data.code === 0) {
            this.totalPage = data.page.totalPage;
            this.totalCount = data.page.totalCount;
            let list = data.page.list;
            list.forEach((element) => {
              if (element.keyword.indexOf(",")) {
                element.keyword = element.keyword.split(",");
              }
              if (element.createTime) {
                element.createTime = element.createTime.split(" ")[0];
              }
            });
            this.dataList = list;
          }
        }
      );
    },
    // 获取侧边栏
    initList() {
      this.$http.get("/app/category/treelist", {}, (data) => {
        if (data && data.code === 0) {
          this.typeList = data.list;
        }
      });
    },
    // 热词
    hot() {
      this.$http.get("/app/data/hotword", {}, (data) => {
        if (data && data.code === 0) {
          this.hotList = data.hotword;
          this.hotList.length = 6
        }
      });
    },
    // 每页数
    sizeChangeHandle(val) {
      this.pageSize = val;
      this.pageIndex = 1;
      this.init();
    },
    // 当前页
    currentChangeHandle(val) {
      this.pageIndex = val;

      this.init();
    },

    setSearch(data) {
      this.search = data;
    },
    //获取表单详情
    handPopup(id) {
      this.dialogVisible = true;
      this.$nextTick(() => {
        this.$refs.popup.init(id);
      });
    },
    //个人中心
    handPersonal() {
      this.logVisible = true;
      this.$nextTick(() => {
        this.$refs.personal.init();
      });
    },
    getRank(str, type) {
      this.code = str;
      this.type = type;
      this.init();
      // console.log(str);
    },
    clearData() {
      this.search = "";
      this.typeSearch = "";
    },
    setTypeSearch(str, id) {
      this.typeSearch = str;
      this.categoryId = id;
    },
  },
  watch: {},
};
</script>
<style scoped lang="scss">
.wrap {
  width: 1300px;
  margin: 0 auto;
}
.el-header {
  line-height: 60px;
  background-color: #000;
  .logo {
    width: 60px;
    height: 60px;
  }
}
.el-main {
  padding: 0px;
  // height: 2000px;
  .search {
    width: 100%;
    height: 400px;
    // border: 1px solid red;
    // background-color: #1a346f;
    background: url("../../assets/img/banner01.jpg") center center no-repeat;
    background-size: cover;

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
            background-color: #ff9900;
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
  border: 1px solid #ff9900;
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
