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
          <div class="priceType">基础版</div>
          <span>Authing 控制台</span>
          <span>多个用户池</span>
          <span>第三方登录</span>
          <span>短信验证码</span>
          <span>发送验证邮件</span>
          <span>获取用户资料</span>
          <span>获取用户手机号</span>
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
          <mu-icon size="64" value="shopping_basket" color="#ccab77"></mu-icon>
          <div class="priceFee">¥ 2388.00 / 年</div>
        </div>
        <div class="priceInfo">
          <div class="priceType">会员版</div>
          <span>Authing 控制台</span>
          <span>多个用户池</span>
          <span>第三方登录</span>
          <span>短信验证码</span>
          <span>发送验证邮件</span>
          <span>获取用户资料</span>
          <span>获取用户手机号</span>
          <span>享独立小程序端</span>
          <span>一站式服务部署</span>
          <div class="buttonBar">
            <a href="https://authing.cn/login">
              <mu-button color="success">免费体验</mu-button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "price",
  components: {}
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
  border-radius: 22px;
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
