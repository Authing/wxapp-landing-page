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
      <img src="https://usercontents.authing.cn/qrcode_for_authing.jpg" class="bottomQRCode" />
    </div>

    <div class="copyrightBar">
      <a class="miniLink" href="https://authing.cn">Copyright © 2019 Authing, Inc.</a>
      <a class="miniLink" href="mailto: services@authing.cn">联系我们</a>
      <a class="miniLink" href="https://www.miibeian.gov.cn">ICP备案：京ICP备16006636号-2</a>
    </div>
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
      qrcode: ""
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
  }
};
</script>

<style lang="less">
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
}
</style>
