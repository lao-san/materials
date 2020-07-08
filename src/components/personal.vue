<template>
  <el-dialog :visible.sync="dialogVisible" width="70%">
    <el-row :gutter="20" style="padding:0px 20px">
      <!-- 左侧 -->
      <el-col :span="7" class="person_left">
        <div class="grid-content bg-purple" style="border-right:1px soild #eee">
          <el-avatar :size="200">张</el-avatar>
          <div>388899@163.net</div>
          <div>登录地址 : xxxxxxx</div>
          <div>
            最近登录时间:
            xxxx:xx:xx:x
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
                    <p>10</p>
                    <p>最近访问</p>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple nav" style="line-height:80px;border:none">
                  <i class="el-icon-star-on" style="margin-left:40px"></i>
                  <div>
                    <p>10</p>
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
                <a>
                  <h3 style="margin-bottom:20px">0f3d4</h3>
                  <el-row :gutter="20">
                    <el-col :span="6">
                      <div class="grid-content bg-purple">
                        <div style="width: 200px; height: 120px;overflow:hidden">
                          <img src="../assets/img/bg.jpg" alt style="width: 100%; height: 100%" />
                        </div>
                      </div>
                    </el-col>
                    <el-col :span="18">
                      <div class="grid-content bg-purple">
                        <div style="margin-bottom:10px">
                          <el-tag>123</el-tag>
                          <el-tag>123</el-tag>
                          <el-tag>123</el-tag>
                        </div>
                        <div
                          class="text_hidden"
                        >同原生 object-fit。可通过fit确定图片如何适应到容器框，可通过fit确定图片如何适应到容器框，通过fit确定图片如何适应到容器框通过fit确定图片如何适应到容器框可通过fit确定图片如何适应到容器框，可通过fit确定图片如何适应到容器框同原生 object-fit。可通过fit确定图片如何适应到容器框，同原生 object-fit。</div>
                        <div style="float:right;" class>2020-10-1</div>
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
                <a>
                  <h3 style="margin-bottom:20px">0f3d4</h3>
                  <el-row :gutter="20">
                    <el-col :span="6">
                      <div class="grid-content bg-purple">
                        <el-image
                          style="width: 200px; height: 120px"
                          src="../../assets/img/logo.png"
                          fit="cover"
                        ></el-image>
                      </div>
                    </el-col>
                    <el-col :span="18">
                      <div class="grid-content bg-purple">
                        <div style="margin-bottom:10px">
                          <el-tag>123</el-tag>
                          <el-tag>123</el-tag>
                          <el-tag>123</el-tag>
                        </div>
                        <div
                          class="text_hidden"
                        >同原生 object-fit。可通过fit确定图片如何适应到容器框，可通过fit确定图片如何适应到容器框，通过fit确定图片如何适应到容器框通过fit确定图片如何适应到容器框可通过fit确定图片如何适应到容器框，可通过fit确定图片如何适应到容器框同原生 object-fit。可通过fit确定图片如何适应到容器框，同原生 object-fit。</div>
                        <div style="float:right;" class>2020-10-1</div>
                      </div>
                    </el-col>
                  </el-row>
                </a>
              </div>
              <div class="text-center" style="margin-top:20px">
                <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
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
      dialogVisible: false
    };
  },
  components: {},
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {
    init() {
      this.dialogVisible = true;
    }
  },
  watch: {}
};
</script>
<style scoped lang="scss">
.person_left {
  // border-right: 1px solid #ccc;
  text-align: center;
  .el-avatar {
    background-color: #199ed8;
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
      background-color: #2088e0;
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
        background-color: #2088e0;
      }
      a:hover img {
        transform: scale(1.2);
      }
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
