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
          <div class="priceFee">号码认证次数 3000 次套餐包</div>
        </div>
        <div class="priceInfo">
          <div class="priceType">0.05 元/次，总价 150 元</div>
          <div class="buttonBar">
            <a href="https://authing.cn/login">
              <mu-button color="success">限时免费</mu-button>
            </a>
          </div>
        </div>
      </div>

      <div class="priceItem wow fadeIn" data-wow-duration="1.8s">
        <div class="priceHeader">
          <mu-icon size="64" value="build" color="#ccab77"></mu-icon>
          <div class="priceFee">号码认证 72000 次套餐包</div>
        </div>
        <div class="priceInfo">
          <div class="priceType">0.035 元/次，总价 2520 元</div>
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
          <mu-icon size="64" value="local_mall" color="#ccab77"></mu-icon>
          <div class="priceFee">号码认证 450000 次套餐包</div>
        </div>
        <div class="priceInfo">
          <div class="priceType">0.03 元/次，总价 13500 元</div>
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
    <!-- 
    <mu-dialog title="联系我们" width="360" :open.sync="dialogShow">
      <div>联系电话：18000179176</div>
      <div>邮件请投：services@authing.cn</div>
      <div>服务时间：周一至周日 9:00 - 21:00</div>
      <mu-button slot="actions" flat color="primary" @click="showAlert()">好的</mu-button>
    </mu-dialog>-->
  </div>
</template>
<script>
import { EventBus } from "./event-bus.js";

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
      EventBus.$emit("showconcat", {});
    }
  }
};
</script>

<style lang="less">
.pricePage {
  background: #fff;
  width: 100vw;
  min-height: 400px;
}

.priceBar {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.priceItem {
  width: calc(100% / 3 - 20px);
  // height: 75vh;
  border-radius: 16px;
  margin: 10px;
  border: 6px solid #f3f3f3;
  padding-bottom: 11px;
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
  font-size: 16px;
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
  margin-top: 18px;
}

.priceType {
  color: #ccab77;
  font-weight: 600;
  font-size: 14px;
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
    flex-wrap: wrap;
  }

  .priceItem {
    width: calc(100% - 20px);
    // height: 500px;
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
