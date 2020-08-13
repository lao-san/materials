<template>
  <el-container>
    <div class="wrap" style="margin-top:80px">
      <el-row :gutter="20">
      <!-- 左侧 -->
      <el-col :span="16" style="margin-bottom:100px">
        <div class="grid-content bg-purple">
          <div class="b_888 title">
            <div class="title_item">
              <h1>{{dataBase.code}}</h1>
              <p>发布人:{{dataBase.source}}</p>
              <p v-if="dataBase.createTime">发布日期:{{dataBase.createTime}}</p>
            </div>
            <div style="font-size:20px;line-height:60px;padding:0px 15px">
              <div style="float:right">
                  <i class="el-icon-star-off" v-if="isShow" @click="handEdition" ></i>
                  <i class="el-icon-star-off" v-else style="color:red" @click="clearEdition" ></i>
                  <span style="font-size:18px;margin-left:8px" v-if="isShow" >收 藏</span>
                  <span style="font-size:18px;margin-left:8px"  v-else>已 收 藏</span>
                <!-- <a href="javascript:" style="margin-right:10px">
                  <i class="el-icon-news"></i>
                  <span style="font-size:18px;margin-left:8px" slot="reference">分 享</span>
                </a>-->
              </div>
            </div>
          </div>
          <div class="b_888 content_item" style="margin-top:30px;">
            <el-tabs type="card" v-model="name" @tab-click="handTab">
              <el-tab-pane label="合金介绍" name="alloy">
                <div style="padding:26px">
                    <td style="width:80px;line-height:70px;text-align:left">关 键 词 :</td>
                    <td style="width:600px">
                      <el-tag effect="dark" style="margin-right:12px" size="small" v-for="(item,index) in dataBase.keyword" >{{item}}</el-tag>
                    </td>
                  </tr>
                  <tr v-show="dataBase.overview">
                    <td style="width:80px;line-height:70px;text-align:left">材料概述 :</td>
                    <td>{{dataBase.overview}}</td>
                  </tr>
                  <tr>
                    <td style="width:80px;line-height:70px;text-align:left">材料标准 :</td>
                    <td
                      style="width:600px"
                    >{{dataBase.standard}}</td>
                  </tr>
                  <tr v-show="dataBase.meltingProcess">
                    <td style="width:80px;line-height:70px;text-align:left">熔炼工艺 :</td>
                    <td style="width:600px">{{dataBase.meltingProcess}}</td>
                  </tr>
                  <tr v-show="dataBase.chemicalComposition">
                    <td style="width:80px;line-height:70px;text-align:left">化学成分 :</td>
                    <td style="width:600px">
                        {{dataBase.chemicalComposition}}
                    </td>
                  </tr>
                  <tr v-show="dataBase.heatTreatment">
                    <td style="width:100px;line-height:70px;text-align:left">热处理制度:</td>
                    <td
                      style="width:600px"
                    >{{dataBase.heatTreatment}}</td>
                  </tr>
                  <tr v-show="dataBase.mainSpecifications">
                    <td style="width:80px;line-height:70px;text-align:left">主要规格 :</td>
                    <td style="width:600px">{{dataBase.mainSpecifications}}</td>
                  </tr>
                  <tr v-show="dataBase.supplyStatus">
                    <td style="width:80px;line-height:70px;text-align:left">供应状态 :</td>
                    <td
                      style="width:600px"
                    >{{dataBase.supplyStatus}}</td>
                  </tr>
                </div>
              </el-tab-pane>
              <el-tab-pane label="物理性能" name="physics">
                <physics  ref="physical"></physics>
              </el-tab-pane>
              <el-tab-pane label="力学性能" name="dynamics">
                <dynamics ref="dataMechanics"></dynamics>
              </el-tab-pane>
              <el-tab-pane label="工艺性能要求" name="technology">
                <technology ref="dataCraft"></technology>
              </el-tab-pane>
              <el-tab-pane label="组织结构" name="organization">
                <organization   ref="organization"></organization>
              </el-tab-pane>
              <el-tab-pane label="防腐蚀" name="corrosion"  >
                <corrosion ref="corrosion"></corrosion>
              </el-tab-pane>
            </el-tabs>
          </div>
          <!-- <div
            class="b_888 footer_item text-center"
            style="margin-top:30px;padding:0px 30px 30px 30px"
          >
            <h2 style="margin:0 auto;line-height:60px">同类牌号</h2>
            <el-row :gutter="20">
              <el-col
                :span="8"
                v-for="(item,index) in PublicKindList"
                :key="index"
                v-if="index<3&&!more"
              >
                <a href="javascript:" class="box" @click="handClick(item.id)">
                  <div class="grid-content bg-purple">
                    <div style="width:100%;height:200px;overflow:hidden">
                      <img :src="baseUrl+item.image" alt />
                    </div>
                    <div
                      style="text-align:left;padding:0px 10px "
                    >牌号名称 : &nbsp;&nbsp;&nbsp;{{item.code}}</div>
                  </div>
                </a>
              </el-col>
              <el-col
                :span="8"
                v-for="(item,index) in PublicKindList"
                :key="index"
                v-if="index<6&&more"
              >
                <a href="javascript:" class="box" @click="handClick(item.id)">
                  <div class="grid-content bg-purple">
                    <div style="width:100%;height:200px;overflow:hidden">
                      <img :src="baseUrl+item.image" alt />
                    </div>
                    <div
                      style="text-align:left;padding:0px 10px "
                    >牌号名称 : &nbsp;&nbsp;&nbsp;{{item.code}}</div>
                  </div>
                </a>
              </el-col>
            </el-row>

            <div style="margin-top:30px" >
              <a href="javascript:" class="btn" v-if="!this.more" @click="more=!more">显示更多</a>
              <a href="javascript:" class="btn" v-else @click="more=!more">收起</a>
            </div>
          </div> -->
        </div>

      </el-col>
      <!-- 右侧 -->
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <div>
            <div class="b_888">
              <img src="../../assets/img/bg.jpg" style="width: 100%; height: 200px"  v-if="!dataBase.image" />
              <img :src="this.baseUrl+dataBase.image" style="width: 100%; height: 200px" v-else />
              <div>
                <p style="padding:20px 40px;font-size:20px">
                  <i class="el-icon-view"></i>
                  <span style="margin-left:30px">{{dataBase.clicks}}</span>
                  <br />
                  <br />
                  <i class="el-icon-star-off"></i>
                  <span style="margin-left:30px">{{dataBase.favorites}}</span>
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    </div>
  </el-container>
</template>
<script>
import Physics from "../../components/physics";
import Dynamics from "../../components/dynamics";
import Technology from "../../components/technology";
import Organization from "../../components/organization";
import Corrosion from "../../components/corrosion";
import Reference from "../../components/reference";

export default {
  name: "box",
  data() {
    return {
      dialogTableVisible: false,
      more: false,
      name: "alloy",
      isShow: true,
      dataList: {},
      dataBase:{},
      dataPhysical:{},
      dataMechanics:{},
      technology:{},
      organization:{},
      corrosion:{},
      PublicKindList:[]
    };
  },
  components: {
    Physics,
    Dynamics,
    Technology,
    Organization,
    Corrosion,
    Reference,
  },
  computed: {},
  beforeMount() {},
  created(){
  },
  mounted() {
    this.init(this.$route.params.id)
  },
  methods: {
    init(id) {
      this.dialogTableVisible = true;
      this.$http.get(`/app/data/info/${id}`, {}, (data) => {
        if (data && data.code === 0) {
          // console.log(data)
          this.dataList = data.data;
          this.dataBase = data.data.dataBase;
          this.dataPhysical = data.data.dataPhysical;
          this.dataMechanics = data.data.dataMechanics;
          this.technology = data.data.dataCraft;
          this.organization = data.data.dataStructure
          this.corrosion = data.data.dataCorrosion
          this.dataBase.keyword =  this.dataBase.keyword.split(",")
          this.bolEdition(this.dataBase.categoryId)
          this.getPublicKind(this.dataBase.categoryId)
        }
      });
    },
  
    handClick(id) {
      this.$router.push({name:"box",params:{id:id} });
    },
    // 收藏
    handEdition() {
      this.$http.post(
        "/app/user/savefavoriteinfo",
        {
          id: this.dataBase.categoryId,
          code: this.dataBase.code,
          image: this.dataBase.image,
          keyword: this.dataBase.keyword.join(),
          summary: this.dataBase.overview,
          create_time: this.dataBase.create_time,
        },
        (data) => {
            this.isShow = false;
        }
      );
    },
    // 取消收藏
    clearEdition(){
      this.$http.post(`/app/user/cancelfavorite/${this.fid}`,{},(data)=>{
          this.isShow = true
       
      })
    },
    // 是否收藏
    bolEdition(id){
      this.$http.post(`/app/user/isfavorite/${id}`,{},(data)=>{
        if(data&&data.code===0) {
          this.fid = data.fid
          this.isShow = false
        }
      })
    },
    handTab(){
      this.$refs.physical.init(this.dataPhysical)
      this.$refs.dataMechanics.init(this.dataMechanics)
      this.$refs.dataCraft.init(this.technology)
      this.$refs.organization.init(this.organization)
      this.$refs.corrosion.init(this.corrosion)
    },
    // 最近访问
   
    // 获取同类牌号
    getPublicKind(id){
      console.log(id)
      this.$http.get(`/app/data/similarity/${id}`,{},(data)=>{
        if(data&&data.code===0){
          this.PublicKindList = data.list
          console.log(data)
        }
      })
    }
  },
  watch: {},
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
  // background-color: #1c2a5d;
  box-sizing: border-box;
  // color: #fff;
  h1 {
    font-size: 28px;
  }
  p {
    // color: #8d99b7;
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
    border: 1px solid #ccc;
  }
  h2::after {
    content: "";
    width: 50px;
    position: absolute;
    left: 270px;
    bottom: 50%;
    border: 1px solid #ccc;
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
    color: #FF9900;
  }
  .btn {
    padding: 10px 25px;
    border: 1px solid #888;
    transition: 0.8s all;
  }
  .btn:hover {
    background-color: #FF9900;
    border: 1px solid #FF9900;
    color: #fff;
  }
}

.b_888 {
  border: 1px solid #eee;
}
</style>
