<template>
  <div class="box pricePage" id="price">
    <div class="titleBox">
      <span>产品价格</span>
      <div class="line"></div>
    </div>

    <div class="priceBar">
      <div class="priceItem wow fadeIn" data-wow-duration="1.8s">
        <div class="priceHeader">
          <mu-icon size="64" value="opacity" color="#ccab77"></mu-icon>
          <div class="priceFee">¥ 0.00</div>
        </div>
        <div class="priceInfo">
          <div class="priceType">8000 次（免费）</div>
          <span>Authing 控制台</span>
          <span>多个用户池</span>
          <span>第三方登录</span>
          <span>短信验证码</span>
          <span>发送验证邮件</span>
          <span>获取用户资料</span>
          <span class="no_line">获取用户手机号</span>
          <span class="no_line">享独立小程序端</span>
          <span class="no_line">一站式服务部署</span>
          <div class="buttonBar">
            <a href="https://authing.cn/login">
              <mu-button color="success">免费体验</mu-button>
            </a>
          </div>
        </div>
      </div>

      <div class="priceItem wow fadeIn" data-wow-duration="1.8s">
        <div class="priceHeader">
          <mu-icon size="64" value="local_mall" color="#ccab77"></mu-icon>
          <div class="priceFee">¥ 130</div>
        </div>
        <div class="priceInfo">
          <div class="priceType">2 万次（0.0065 元/次）</div>
          <span>Authing 控制台</span>
          <span>多个用户池</span>
          <span>第三方登录</span>
          <span>短信验证码</span>
          <span>发送验证邮件</span>
          <span>获取用户资料</span>
          <span>获取用户手机号</span>
          <span class="no_line">享独立小程序端</span>
          <span class="no_line">一站式服务部署</span>
          <div class="buttonBar isPC">
            <mu-button color="primary" @click="showAlert">联系我们</mu-button>
          </div>

          <div class="buttonBar isPhone">
            <a href="tel: 18000179176">
              <mu-button color="primary">联系我们</mu-button>
            </a>
          </div>
        </div>
      </div>

      <div class="priceItem wow fadeIn" data-wow-duration="1.8s">
        <div class="priceHeader">
          <mu-icon size="64" value="dashboard" color="#ccab77"></mu-icon>
          <div class="priceFee">¥ 1200</div>
        </div>
        <div class="priceInfo">
          <div class="priceType">20 万次（0.0062 元/次）</div>
          <span>Authing 控制台</span>
          <span>多个用户池</span>
          <span>第三方登录</span>
          <span>短信验证码</span>
          <span>发送验证邮件</span>
          <span>获取用户资料</span>
          <span>获取用户手机号</span>
          <span>享独立小程序端</span>
          <span>支持私有&专有云部署</span>
          <div class="buttonBar isPC">
            <mu-button color="primary" @click="showAlert">联系我们</mu-button>
          </div>

          <div class="buttonBar isPhone">
            <a href="tel: 18000179176">
              <mu-button color="primary">联系我们</mu-button>
            </a>
          </div>
        </div>
      </div>

      <div class="priceItem wow fadeIn" data-wow-duration="1.8s">
        <div class="priceHeader">
          <mu-icon size="64" value="cloud" color="#ccab77"></mu-icon>
          <div class="priceFee">¥ 3000</div>
        </div>
        <div class="priceInfo">
          <div class="priceType">50 万次（0.006 元/次）</div>
          <span>Authing 控制台</span>
          <span>多个用户池</span>
          <span>第三方登录</span>
          <span>短信验证码</span>
          <span>发送验证邮件</span>
          <span>获取用户资料</span>
          <span>获取用户手机号</span>
          <span>享独立小程序端</span>
          <span>支持私有&专有云部署</span>
          <div class="buttonBar isPC">
            <mu-button color="primary" @click="showAlert">联系我们</mu-button>
          </div>

          <div class="buttonBar isPhone">
            <a href="tel: 18000179176">
              <mu-button color="primary">联系我们</mu-button>
            </a>
          </div>
        </div>
      </div>
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
export default {
  name: "price",
  components: {},
  data() {
    return {
      dialogShow: false
    };
  },
  methods: {
    showAlert() {
      this.dialogShow = !this.dialogShow;
    }
  }
};
</script>

<style lang="less">
.pricePage {
  background: #fff;
  width: 100vw;
  min-height: 400px;
  max-height: 120vh;
}

.priceBar {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.priceItem {
  width: calc(50% - 40px);
  height: 75vh;
  border-radius: 16px;
  margin: 10px;
  border: 6px solid #f3f3f3;
  // box-shadow: -4px 7px 46px 2px rgba(194, 194, 194, 0.1);
}

.priceHeader {
  width: 100%;
  height: 150px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  background: #fbfbfb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.no_line {
  text-decoration: line-through;
  color: #808080;
}

.priceFee {
  font-size: 24px;
  margin-top: 11px;
}

.priceInfo {
  width: 100%;
  height: calc(100% - 150px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  font-weight: 600;

  padding: 22px 22px;
  line-height: 2;
  font-size: 14px;
  color: #6a6a6a;
}

.buttonBar {
  margin-top: 11px;
}

.priceType {
  color: #ccab77;
  font-weight: 700;
  font-size: 16px;
}

span {
  overflow: hidden;
}

@media screen and (max-width: 1024px) {
  .pricePage {
    min-height: unset !important;
    max-height: unset !important;
  }

  .priceBar {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .priceItem {
    width: calc(100% - 20px);
    height: 500px;
    border-radius: 22px;
    border: 6px solid #f3f3f3;
    margin: 10px 0;
    // box-shadow: -4px 7px 46px 2px rgba(194, 194, 194, 0.1);
  }

  .priceInfo {
    padding: 22px;
    font-size: 13px;
    line-height: 1.8;
  }
}
</style>
