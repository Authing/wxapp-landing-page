<template>
  <div class="box box2 pages firstPage" id="welcome">
    <div>
      <div class="h1 goLeft">「小登录」</div>
      <div class="h1">微信小程序</div>

      <div class="h3 margin-top">
        扫一扫，
        <mu-tooltip content="通过微信授权，跳过传统的手机号验证短信步骤。">
          <span class="tips">免短信验证码</span>
        </mu-tooltip>登录！
      </div>
      <div class="h3">快速建立标准化、企业级用户后台！</div>
      <div class="h3">告别支付庞大短信费用，简化开发步骤！</div>
      <div class="redButton">
        <mu-button large color="red" @click="readMore">了解更多</mu-button>
      </div>
    </div>

    <div id="qrcode-node" class="shakeBox">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </div>

    <mu-dialog title="登录成功，以下是您的个人信息" width="480" :open.sync="listShow">
      <mu-container>
        <mu-paper :z-depth="1">
          <mu-data-table
            :columns="columns"
            :data="listData"
            max-height="400"
          >
            <template slot-scope="scope">
              <td>{{scope.row.key}}</td>
              <td class="is-right">{{scope.row.value}}</td>
            </template>
          </mu-data-table>
        </mu-paper>
      </mu-container>
      <a target="_blank" href="https://docs.authing.cn/authing/scan-qrcode/wxapp-qrcode" slot="actions">
        <mu-button flat color="primary">查看接入文档</mu-button>
      </a>
      <mu-button slot="actions" flat color="primary" @click="showAlert()">关闭</mu-button>
    </mu-dialog>
  </div>
</template>

<script>
// 初始化 Authing SDK for Web
import { EventBus } from "./event-bus.js";
const auth = new Authing({
  clientId: "5d1eeec1ec626c2abb803a24", //5d11dcc331f4173231ed6a8d
  timestamp: Math.round(new Date() / 1000),
  nonce: Math.ceil(Math.random() * Math.pow(10, 6)),
  useSelfWxapp: true,
  noSecurityChecking: true,
});
localStorage.removeItem("qrcode");

export default {
  name: "welcome",
  components: {},

  data() {
    return {
      listShow: false,
      listData: [],
      columns: [
        { title: "key", width: 110, name: "key" },
        { title: "value", name: "value", width: 270 }
      ]
    };
  },
  methods: {
    readMore() {
      document.getElementById("product").scrollIntoView();
    },
    showAlert() {
      this.listShow = !this.listShow;
    }
  },

  mounted() {
    let that = this;
    //auth.then(function(authing) {
      // 调用小程序扫码登录的方法，此方法将生成一个用于扫码登录的图片和相关提示信息
      auth.startWXAppScaning({
        mount: "qrcode-node",
        tips: " ",
        // 不自动跳转
        redirect: false,

        // 扫码成功
        onSuccess(userInfo) {
          let data = userInfo.data;
          let arr = [];
          for (var key in data) {
            arr.push({
              key: key,
              value: data[key]
            });
          }
          that.listData = arr;
          console.log(arr);
          that.listShow = true;
          //alert(`扫码成功! \n 用户名：${userInfo.data.nickname} \n 登录IP：${userInfo.data.lastIP} \n `);
          console.log(userInfo);

          // 存储 token 到 localStorage 中
          localStorage.setItem("token", userInfo.token);
        },

        onQRCodeLoad(qrcode) {
          EventBus.$emit("getqrcode", {
            qrcode: qrcode.qrcode
          });
          localStorage.setItem("qrcode", qrcode.qrcode);
        }
      });
    //});
  }
};
</script>

<style lang="less">
.box2 {
  width: 100vw;
  min-height: 80vh;
  max-height: 90vh;
  background-color: #333333;
  background: url("https://img.linghegl.cn/bg.png");
}

.firstPage {
  padding-top: 15vh;
}

.goLeft {
    transform: translate(-25px, 0px);
}

@media screen and (max-width: 1024px) {
  .firstPage {
    box-sizing: border-box;
    padding-top: 20vh !important;
    max-height: unset !important;
    height: unset !important;
  }

  #qrcode-node {
    justify-self: center !important;
  }
}
.pages {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.margin-top {
  margin-top: 20px;
}

#qrcode-node {
  box-sizing: border-box;
  min-width: 300px;
  min-height: 300px;
  padding: 22px;
  background: #fff;
  border-radius: 8px;
  box-shadow: -4px 7px 46px 2px rgba(194, 194, 194, 0.1);
}

#authing__spinner {
  margin-left: -8px !important;
  box-sizing: unset !important;
  width: 30px !important;
  height: 30px !important;
  overflow: unset !important;
}

.shakeBox:hover {
  animation: shakeTopx 2s;
}

@keyframes shakeTopx {
  0%,
  100% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transform-origin: 50% 0;
    transform-origin: 50% 0;
  }
  5% {
    -webkit-transform: rotate(2deg);
    transform: rotate(2deg);
  }
  10%,
  20%,
  30% {
    -webkit-transform: rotate(-4deg);
    transform: rotate(-4deg);
  }
  15%,
  25%,
  35% {
    -webkit-transform: rotate(4deg);
    transform: rotate(4deg);
  }
  40% {
    -webkit-transform: rotate(-2deg);
    transform: rotate(-2deg);
  }
  45% {
    -webkit-transform: rotate(2deg);
    transform: rotate(2deg);
  }
  50% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}

.redButton {
  margin: 22px 0;
}
</style>
