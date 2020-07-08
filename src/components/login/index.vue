<template>
  <el-card v-if="flag===1">
    <div class="title text-center">登 录</div>
    <div class="content">
      <el-form :model="dataForm" label-position="right" label-width="70px">
        <el-form-item label="用户名:" class="color_withe">
          <el-input placeholder="请输入手机号" v-model="dataForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密 码:" class="color_withe">
          <el-input placeholder="请输入密码" v-model="dataForm.psw"></el-input>
        </el-form-item>
        <el-form-item style="text-align:right">
          <el-button style="width:100%" type="primary">登 录</el-button>
        </el-form-item>
      </el-form>
      <div>
        <el-link type="primary" style="float:left" :underline="false" @click="handFlag(2)">点击注册</el-link>
        <el-link type="primary" style="float:right" :underline="false" @click="handFlag(3)">忘记密码?</el-link>
      </div>
    </div>
  </el-card>
  <el-card v-else-if="flag==2">
    <div class="title text-center">注 册</div>
    <div class="content">
      <el-form :model="dataForm" label-position="right" label-width="80px">
        <el-form-item label="用户名:" class="color_withe">
          <el-input placeholder="请输入手机号" v-model="dataForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密 码:" class="color_withe">
          <el-input placeholder="请输入密码" v-model="dataForm.psw"></el-input>
        </el-form-item>
        <el-form-item label="确定密码:" class="color_withe">
          <el-input placeholder="请输入密码" v-model="dataForm.okpsw"></el-input>
        </el-form-item>
        <el-form-item label="验证码:" class="color_withe">
          <el-input placeholder="请输入验证码" v-model="dataForm.code" style="width:65%"></el-input>
          <el-button style="float:right">获取验证码</el-button>
        </el-form-item>
        <el-form-item style="text-align:right">
          <el-button style="width:100%" type="primary">注 册</el-button>
        </el-form-item>
      </el-form>
      <div>
        <el-link type="primary" style="float:left" :underline="false" @click="handFlag(1)">返回登录</el-link>
        <el-link type="primary" style="float:right" :underline="false" @click="handFlag(3)">忘记密码?</el-link>
      </div>
    </div>
  </el-card>
  <el-card v-else-if="flag==3">
    <div class="title text-center">找回密码</div>
    <div class="content">
      <el-form :model="dataForm" label-position="right" label-width="80px">
        <el-form-item label="用户名:" class="color_withe">
          <el-input placeholder="请输入手机号" v-model="dataForm.username"></el-input>
        </el-form-item>
        <el-form-item label="新 密 码:" class="color_withe">
          <el-input placeholder="请输入密码" v-model="dataForm.psw"></el-input>
        </el-form-item>
        <el-form-item label="确定密码:" class="color_withe">
          <el-input placeholder="请输入密码" v-model="dataForm.okpsw"></el-input>
        </el-form-item>
        <el-form-item label="验证码:" class="color_withe">
          <el-input placeholder="请输入验证码" v-model="dataForm.code" style="width:65%"></el-input>
          <el-button style="float:right">获取验证码</el-button>
        </el-form-item>
        <el-form-item style="text-align:right">
          <el-button style="width:100%" type="primary">注 册</el-button>
        </el-form-item>
      </el-form>
      <div>
        <el-link type="primary" style="float:left" :underline="false" @click="handFlag(1)">返回登录</el-link>
        <!-- <el-link type="primary" style="float:right" :underline="false" @click="handFlag(3)">忘记密码?</el-link> -->
      </div>
    </div>
  </el-card>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      dataForm: {
        username: "",
        psw: "",
        okpsw: "",
        code: ""
      },
      flag: 2
    };
  },
  components: {},
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {
    handFlag(flag) {
      this.dataForm.username = "";
      this.dataForm.psw = "";
      this.dataForm.okpsw = "";
      this.dataForm.code = "";
      this.flag = flag;
    }
  },
  watch: {}
};
</script>
<style  lang="scss">
.el-card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.5);
  .title {
    color: #fff;
    line-height: 60px;
    font-size: 20px;
  }
}
.color_withe > .el-form-item__label {
  color: #fff;
}
</style>
