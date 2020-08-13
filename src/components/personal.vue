<template>
  <el-dialog :visible.sync="dialogVisible" width="70%">
    <el-row :gutter="20" style="padding:0px 20px">
      <!-- 左侧 -->
      <el-col :span="7" class="person_left">
        <div class="grid-content bg-purple" style="border-right:1px soild #eee">
          <el-avatar :size="200">{{userData.username |newUser}}</el-avatar>
          <div>{{userData.mobile}}</div>
          <div>
            登录IP地址 :
            <br />
            {{userData.loginIp}}
          </div>
          <div>
            最近登录时间:
            <br />
            {{userData.loginTime}}
          </div>
        </div>
      </el-col>
      <!-- 右侧 -->
      <el-col :span="17" class="person_right">
        <div class="grid-content bg-purple">
          <div class="title">
            <el-row :gutter="20">
              <el-col :span="8">
                <div class="grid-content bg-purple nav" style="line-height:80px;">
                  <i class="el-icon-refresh" style="margin-left:40px"></i>
                  <div>
                    <p>{{recentlist.length}}</p>
                    <p>最近访问</p>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple nav" style="line-height:80px;border:none">
                  <i class="el-icon-star-on" style="margin-left:40px"></i>
                  <div>
                    <p>{{totalCount}}</p>
                    <p>我的收藏</p>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="content">
            <div>
              <div>
                <span class="flg">最近访问</span>
                <hr />
              </div>
              <div class="content_item">
                <a v-for="item in recentlist" :key="item.id" @click.stop="handDetails(item.did)">
                  <h3 style="margin-bottom:20px">{{item.content.code}}</h3>
                  <el-row :gutter="20">
                    <el-col :span="6">
                      <div class="grid-content bg-purple">
                        <div style=" height: 120px;overflow:hidden">
                          <img src="../assets/img/bg.jpg" alt style="width: 100%; height: 100%" />
                        </div>
                      </div>
                    </el-col>
                    <el-col :span="18">
                      <div class="grid-content bg-purple">
                        <div style="margin-bottom:10px">
                          <el-tag v-for="(item,index) in item.content.keyword" :key="index">{{item}}</el-tag>
                        </div>
                        <div class="text_hidden" style="height:95px">{{item.content.summary}}</div>
                        <div style="float:right;" class>{{item.content.createTime}}</div>
                      </div>
                    </el-col>
                  </el-row>
                </a>
              </div>
            </div>
            <!-- 我的收藏 -->
            <div style="margin-top:30px">
              <div>
                <span class="flg">我的收藏</span>
                <hr />
              </div>
              <div class="content_item">
                <a v-for="item in favoritelist" :key="item.id" @click.stop="handDetails(item.did)">
                  <h3 style="margin-bottom:20px">{{item.content.code}}</h3>
                  <el-row :gutter="20">
                    <el-col :span="6">
                      <div class="grid-content bg-purple">
                        <div style=" height: 120px;overflow:hidden">
                          <img src="../assets/img/bg.jpg" alt style="width: 100%; height: 100%" />
                        </div>
                      </div>
                    </el-col>
                    <el-col :span="18">
                      <div class="grid-content bg-purple">
                        <div style="margin-bottom:10px">
                          <el-tag v-for="(item,index) in item.content.keyword" :key="index">{{item}}</el-tag>
                        </div>
                        <div class="text_hidden" style="height:95px;position: relative;">
                          {{item.content.summary}}
                          <a
                            href="javascript:"
                            class="clear"
                            @click.stop.self="clear(item.id)"
                          >取消收藏</a>
                        </div>
                        <div style="float:right;" class>{{item.content.createTime}}</div>
                      </div>
                    </el-col>
                  </el-row>
                </a>
              </div>
              <div class="text-center" style="margin-top:20px">
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
          </div>
        </div>
      </el-col>
    </el-row>
  </el-dialog>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      dialogVisible: false,
      recentlist: [],
      favoritelist: [],
      userData: {},
      pageIndex: 1,
      pageSize: 6,
      totalPage: 0,
      totalCount: 0,
    };
  },
  components: {},
  computed: {},
  beforeMount() {},
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.dialogVisible = true;
      let token = window.sessionStorage.getItem("token");
      // 获取用户信息
      this.getUserData();
      //获取最近访问
      this.getUserRecentlist(token);
      this.getUserFavoritelist(token);
    },
    // userData
    getUserData() {
      this.$http.get("/app/user/info", {}, (data) => {
        if (data && data.code === 0) {
          this.userData = data.user;
        }
      });
    },
    getUserRecentlist() {
      this.$http.get(
        "/app/user/recentlist",
        {
          page: this.page,
          limit: this.limit,
        },
        (data) => {
          if (data && data.code === 0) {
            let list = data.list;
            list.forEach((item) => {
              let element = JSON.parse(item.content);
              item.content = element;
              if (item.content.keyword) {
                item.content.keyword = item.content.keyword.split(",");
              }
            });
            this.recentlist = list;
          }
        }
      );
    },
    // 收藏
    getUserFavoritelist() {
      this.$http.get(
        "/app/user/favoritelist",
        {
          page: this.pageIndex,
          limit: this.pageSize,
        },
        (data) => {
          if (data && data.code === 0) {
            let list = data.page.list;

            this.totalPage = data.page.totalPage;
            this.totalCount = data.page.totalCount;
            list.forEach((item) => {
              let element = JSON.parse(item.content);
              item.content = element;
              item.content.keyword = item.content.keyword.split(",");
            });
            this.favoritelist = list;
          }
        }
      );
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
    // 跳转
    handDetails(id) {
      // this.$router.push({ path: `/details/${id}` });
      this.$router.push({ name: "box", params: { id: id } });
    },
    // 取消收藏
    clear(id) {
      this.$http.post("/app/user/cancelfavorite/" + id, {}, (data) => {
        if (data && data.code === 0) {
          this.favoritelist.forEach((item, index) => {
            if (id === item.id) {
              this.favoritelist.splice(index, 1);
            }
          });
        }
      });
    },
  },
  filters: {
    newUser: function (val) {
      return val.split("")[0];
    },
  },
  watch: {},
};
</script>
<style scoped lang="scss">
.person_left {
  // border-right: 1px solid #ccc;
  text-align: center;
  .el-avatar {
    background-color: #ff9900;
    font-size: 80px;
  }
  div {
    font-size: 20px;
    line-height: 40px;
  }
}
.person_right {
  border-left: 1px solid #ccc;
  .nav {
    position: relative;
    height: 80px;
    border-right: 1px solid #ccc;
    div {
      position: absolute;
      top: 0;
      left: 50%;
      width: 80px;
      text-align: center;
      p {
        font-size: 18px;
        line-height: 40px;
      }
    }
  }
  .title {
    font-size: 40px;
    border-bottom: 1px solid #ccc;
    span {
      line-height: 20px;
    }
  }
  .content {
    padding: 80px 0px;
    .flg {
      padding: 10px 20px;
      font-weight: bold;
      background-color: #ff9900;
      color: #fff;
    }
    hr {
      margin-top: 6px;
      border: 1px solid #ccc;
    }
    .content_item {
      margin-top: 50px;
      a {
        display: block;
        padding: 10px;
        border: 1px solid #f7f8fa;
        background-color: #fdfdfe;
        transition: 0.5s all;
        h3 {
          font-size: 36px;
        }
        .el-tag {
          margin-right: 10px;
        }
        img {
          transition: 1s all;
        }
      }
      a:hover {
        color: #fff !important;
        background-color: #ff9900;
      }
      a:hover img {
        transform: scale(1.2);
      }
    }
    .clear {
      position: absolute;
      top: 50%;
      right: 0%;
      display: inline-block;
      width: 100px;
      height: 40px;
      background-color: #ff9900;
      color: #ff9900;
      text-align: center;
      transform: translate(-30%, -120%);
    }
  }
}
.fz_18 {
  font-size: 18px;
}
.el-col-8 {
  height: 100px;
}
</style>
