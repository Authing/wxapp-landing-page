<template>
  <div class="box bottomPage">
    <div v-if="isWX" class="titleBox2">
      <span>扫码体验</span>
      <div class="line"></div>
    </div>

    <!-- <div v-if="!isWX" class="titleBox2">
      <span>联系销售</span>
      <div class="line"></div>
    </div>

    <div v-if="isWX" class="qrcodeBox">
      <img v-if="qrcode" :src="qrcode" class="bottomQRCode" />
    </div>

    <div v-if="!isWX" class="qrcodeBox">
      <img src="https://usercontents.authing.cn//20200417223041.png" class="bottomQRCode" />
    </div>-->

    <div class="copyrightBar">
      <a class="miniLink" href="https://authing.cn">Copyright © 北京蒸汽记忆科技有限公司</a>
      <a class="miniLink isPC" @click="showAlert()">联系我们</a>
      <a class="miniLink isPhone" href="tel: 17602502507">联系我们</a>

      <a class="miniLink" href="https://www.miibeian.gov.cn">ICP备案：京ICP备16006636号-2</a>
    </div>
    <mu-dialog title="联系我们" width="360" :open.sync="dialogShow">
      <div class="concat-bar">
        <img src="https://usercontents.authing.cn//20200417223041.png" />

        <div class="info">
          <div>
            电话：
            <a href="tel: 17602502507" style="color: #4ca8eb;">17602502507</a>
          </div>
          <div>邮件：xuziqiang@authing.cn</div>
          <div>或使用微信扫一扫左侧二维码</div>
        </div>
      </div>

      <mu-button slot="actions" flat color="primary" @click="showAlert()">关闭</mu-button>
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
  created() {},
  mounted() {
    EventBus.$on("getqrcode", ({ qrcode }) => {
      this.qrcode = qrcode;
    });

    EventBus.$on("showconcat", () => {
      this.dialogShow = true;
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
  // height: 400px;
  padding-bottom: 0 !important;
  padding-top: 0 !important;
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
  // margin-top: 40px;

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

.concat-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.concat-bar > img {
  width: 90px;
  height: 90px;
}

.concat-bar > .info {
  flex-shrink: 0;
  line-height: 1.5;
  margin-left: 11px;
}
</style>
