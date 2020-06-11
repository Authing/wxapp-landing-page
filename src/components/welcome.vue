<template>
  <div class="box box2 pages firstPage" id="welcome">
    <div>
      <div class="h1 margin-top">用户手机不插卡，也能认证他号码</div>

      <div class="h3 margin-top">依托于微信官方的实名用户信息，</div>
      <div class="h3">用户一键授权即可以真实号码完成注册/登录，</div>
      <div class="h3">为开发者建立以手机号码为基础的账号体系。</div>
      <div class="redButton">
        <mu-button large color="red" @click="handleConcat">联系销售</mu-button>
        <a
          target="_blank"
          href="https://cdn.authing.cn/solutions/Authing%20%E5%8F%B7%E7%A0%81%E8%AE%A4%E8%AF%81%E4%BA%91%20%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88%E7%99%BD%E7%9A%AE%E4%B9%A6%20Number%20Identification%20Whitepaper.pdf"
        >
          <mu-button large color="white" style="margin-left: 11px;color: #222;">下载白皮书</mu-button>
        </a>
      </div>
    </div>

    <div class="shakeBox">
      <div id="qrcode-node">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </div>
      <div v-if="qrcodeLoaded" class="scan-tips">用微信扫扫看</div>
    </div>

    <mu-dialog title="登录成功，以下是您的个人信息" width="480" :open.sync="listShow">
      <mu-container>
        <mu-paper :z-depth="1">
          <mu-data-table :columns="columns" :data="listData" max-height="400">
            <template slot-scope="scope">
              <td>{{scope.row.key}}</td>
              <td class="is-right">{{scope.row.value}}</td>
            </template>
          </mu-data-table>
        </mu-paper>
      </mu-container>
      <a
        target="_blank"
        href="https://docs.authing.cn/authing/scan-qrcode/wxapp-qrcode"
        slot="actions"
      >
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
  noSecurityChecking: true
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
      ],
      qrcodeLoaded: false
    };
  },
  methods: {
    readMore() {
      document.getElementById("product").scrollIntoView();
    },
    showAlert() {
      this.listShow = !this.listShow;
    },

    handleConcat() {
      EventBus.$emit("showconcat", {});
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

      onQRCodeLoad: qrcode => {
        this.qrcodeLoaded = true;
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

.shakeBox {
  /* qrcode-node */
  box-sizing: border-box;
  min-width: 300px;
  min-height: 300px;
  padding: 22px;
  background: #fff;
  border-radius: 8px;
  box-shadow: -4px 7px 46px 2px rgba(194, 194, 194, 0.1);
}

.shakeBox .scan-tips {
  width: 100%;
  margin-top: 8px;
  text-align: center;
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
  margin: 33px 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
</style>
