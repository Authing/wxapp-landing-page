<template>
  <div class="box bottomPage">
    <div v-if="isWX" class="titleBox2">
      <span>扫码体验</span>
      <div class="line"></div>
    </div>

    <div v-if="!isWX" class="titleBox2">
      <span>关注我们</span>
      <div class="line"></div>
    </div>

    <div v-if="isWX" class="qrcodeBox">
      <img v-if="qrcode" :src="qrcode" class="bottomQRCode" />
    </div>

    <div v-if="!isWX" class="qrcodeBox">
      <img src="https://usercontents.authing.cn/qrcode_for_steamory.jgp" class="bottomQRCode" />
    </div>

    <div class="copyrightBar">
      <a class="miniLink" href="https://authing.cn">Copyright © 2019 Authing, Inc.</a>
      <a class="miniLink isPC" @click="showAlert()">联系我们</a>
      <a class="miniLink isPhone" href="tel: 18000179176">联系我们</a>

      <a class="miniLink" href="https://www.miibeian.gov.cn">ICP备案：京ICP备16006636号-2</a>
    </div>
    <mu-dialog title="联系我们" width="360" :open.sync="dialogShow">
      <div>联系电话：18000179176</div>
      <div>邮件请投：services@authing.cn</div>
      <div>服务时间：周一至周日 9:00 - 21:00</div>
      <mu-button slot="actions" flat color="primary" @click="showAlert()">好的</mu-button>
    </mu-dialog>
  </div>
</template>
<script>
import { EventBus } from "./event-bus.js";

export default {
  name: "bottom",
  components: {},
  data() {
    return {
      isWX: navigator.userAgent.toLowerCase().indexOf("micromessenger") !== -1,
      qrcode: "",
      dialogShow: false
    };
  },
  created() {
    //console.log(this.isWX)
    // let that = this;
    // let qrcode;
    // let time = setTimeout(() => {
    //   qrcode = localStorage.getItem("qrcode");
    //   if (qrcode) {
    //     that.qrcode = qrcode;
    //     //alert(that.qrcode)
    //     console.log(that.qrcode);
    //   }
    //   //clearTimeout(time);
    // }, 100);
  },
  mounted() {
    EventBus.$on("getqrcode", ({ qrcode }) => {
      this.qrcode = qrcode;
    });
  },
  methods: {
    showAlert() {
      this.dialogShow = !this.dialogShow;
    }
  }
};
</script>

<style lang="less">
.isPC {
  display: inherit;
}

.isPhone {
  display: none;
}

.bottomPage {
  width: 100vw;
  height: 400px;
  padding-bottom: 0 !important;
  background: #333333;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}

.qrcodeBox {
  padding: 11px;
  border-radius: 10px;
  background: #fff;
  width: 140px;
  height: 140px;
}

.bottomQRCode {
  width: 120px;
  height: 120px;
}

.copyrightBar {
  width: 100vw;
  height: 80px;
  background: #272727;
  justify-self: flex-end;
  margin-top: 40px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.miniLink {
  color: #fff;
  font-size: 11px;
  margin: 0 11px;
  cursor: pointer;
}

@media screen and (max-width: 1024px) {
  .miniLink {
    font-size: 9px !important;
  }

  .isPC {
    display: none !important;
  }

  .isPhone {
    display: inherit !important;
  }
}
</style>
