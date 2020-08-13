<template>
  <el-card v-if="flag===1">
    <div class="title text-center">登 录</div>
    <div class="content">
      <el-form :model="dataForm" label-position="right" label-width="70px" ref="ruleForm1">
        <el-form-item label="用户名:" class="color_withe">
          <el-input placeholder="请输入手机号" v-model="dataForm.mobile"></el-input>
        </el-form-item>
        <el-form-item label="密 码:" class="color_withe">
          <el-input placeholder="请输入密码" v-model="dataForm.password" show-password></el-input>
        </el-form-item>
        <el-form-item style="text-align:right">
          <el-button style="width:100%" type="primary" @click="getUser">登 录</el-button>
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
      <el-form
        :model="dataForm"
        :rules="rules"
        ref="ruleForm2"
        label-position="right"
        label-width="100px"
      >
        <el-form-item label="姓 名:" class="color_withe" prop="username">
          <el-input placeholder="姓名" v-model="dataForm.username"></el-input>
        </el-form-item>
        <el-form-item label="用户名:" class="color_withe" prop="mobile">
          <el-input placeholder="请输入手机号" v-model="dataForm.mobile"></el-input>
        </el-form-item>
        <el-form-item label="密 码:" class="color_withe" prop="password">
          <el-input placeholder="请输入密码" v-model="dataForm.password" show-password></el-input>
        </el-form-item>
        <el-form-item label="确定密码:" class="color_withe" prop="okpsw">
          <el-input placeholder="请输入密码" v-model="dataForm.okpsw" show-password></el-input>
        </el-form-item>
        <el-form-item label="验证码:" class="color_withe" prop="code">
          <el-input placeholder="请输入验证码" v-model="dataForm.code" style="width:65%"></el-input>
          <el-button
            style="float:right;width:30%"
            v-show="show"
            @click="getCode"
            type="primary"
          >获取验证码</el-button>
          <el-button style="float:right;width:30%" v-show="!show" disabled>{{count}}s</el-button>
        </el-form-item>
        <el-form-item style="text-align:right">
          <el-button style="width:100%" type="primary" @click="handRegister">注 册</el-button>
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
      <el-form :model="dataForm" label-position="right" label-width="80px" ref="ruleForm3">
        <el-form-item label="用户名:" class="color_withe" prop="mobile">
          <el-input placeholder="请输入手机号" v-model="dataForm.mobile"></el-input>
        </el-form-item>
        <el-form-item label="新 密 码:" class="color_withe" prop="password">
          <el-input placeholder="请输入密码" v-model="dataForm.password" show-password></el-input>
        </el-form-item>
        <el-form-item label="确定密码:" class="color_withe" prop="okpsw">
          <el-input placeholder="请输入密码" v-model="dataForm.okpsw" show-password></el-input>
        </el-form-item>
        <el-form-item label="验证码:" class="color_withe" prop="code">
          <el-input placeholder="请输入验证码" v-model="dataForm.code" style="width:65%"></el-input>
          <el-button
            style="float:right;width:30%"
            v-show="show"
            @click="getCode"
            type="primary"
          >获取验证码</el-button>
          <el-button style="float:right;width:30%" v-show="!show" disabled>{{count}}s</el-button>
        </el-form-item>
        <el-form-item style="text-align:right">
          <el-button style="width:100%" type="primary" @click="resetUser">提 交</el-button>
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
import { uuid } from "../../utils/share";

export default {
  name: "login",
  data() {
    return {
      dataForm: {
        username: "",
        mobile: "",
        password: "",
        okpsw: "",
        code: "",
      },
      flag: 1,
      show: true,
      count: "",
      timer: null,
      uuid: "",
      rules: {
        username: [
          { required: true, message: "姓名不能为空", trigger: "blur" },
        ],
        mobile: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
        ],
        okpsw: [{ required: true, message: "密码不能为空", trigger: "blur" }],
        code: [{ required: true, message: "验证码不能为空", trigger: "blur" }],
      },
    };
  },
  components: {},
  computed: {},
  beforeMount() {},
  mounted() {
    this.uuid = uuid();
  },
  methods: {
    handFlag(flag) {
      this.dataForm.username = "";
      this.dataForm.psw = "";
      this.dataForm.okpsw = "";
      this.dataForm.code = "";
      this.flag = flag;
    },
    // 注册验证码
    getCode() {
      const TIME_COUNT = 60;
      let url = this.flag === 2 ? "/app/phonecode" : "/app/mobilecode";
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.show = false;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
      this.$http.post(
        url,
        {
          mobile: this.dataForm.mobile,
          uuid: this.uuid,
        },
        (data) => {
          if (data && data.code === 0) {
            return;
          }
        }
      );
    },
    // 注册验证码
    // 登录
    getUser() {
      this.$http.post("/app/login", this.dataForm, (data) => {
        if (data && data.code === 0) {
          window.sessionStorage.setItem("token", data.token);
          this.$router.push({ path: "/" });
        }
      });
    },
    // 注册
    handRegister() {
      this.dataForm.uuid = this.uuid;

      this.$http.post("/app/register", this.dataForm, (data) => {
        if (data && data.code === 0) {
          this.$message({
            message: "注册成功",
            type: "success",
          });
          this.flag = 1;
        }
      });
    },
    // 重置
    resetUser() {
      this.dataForm.uuid = this.uuid;
      this.$http.post("/app/repassword", this.dataForm, (data) => {
        if (data && data.code === 0) {
          this.$message({
            message: "重置成功",
            type: "success",
          });
          this.flag = 1;
        }
      });
    },
  },
  watch: {
    flag: function (val, old) {
      switch (val) {
        case 1:
          this.dataForm = {};
          break;
        case 2:
          this.dataForm = {};
          break;
        case 3:
          this.dataForm = {};
      }
    },
  },
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
