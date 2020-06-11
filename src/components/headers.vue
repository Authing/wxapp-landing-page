<template>
  <div>
    <div class="headerPage box wow fadeIn" data-wow-duration="1s" data-wow-offset="1">
      <div class="logo">
        <img
          src="https://cdn.authing.cn/%E7%99%BD%E8%89%B2.png"
          style="height: 44px;"
          draggable="false"
        />
        <div class="title">号码认证云</div>
      </div>

      <div class="linkBar">
        <!-- <a class="h3" href="#">主页</a> -->
        <a class="h3" href="#product">产品演示</a>
        <a class="h3" href="#compare">合作案例</a>
        <a class="h3" href="#price">产品价格</a>
        <a
          class="h3"
          target="_blank"
          href="https://docs.authing.cn/authing/scan-qrcode/wxapp-qrcode"
        >开发文档</a>
      </div>
    </div>

    <div class="headerPage-mini box wow fadeIn" data-wow-duration="1s" data-wow-offset="1">
      <img
        src="https://cdn.authing.cn/%E7%99%BD%E8%89%B2.png"
        style="height: 44px;"
        draggable="false"
      />

      <mu-menu cover popover-class="menu-style" :open.sync="menuOpened">
        <mu-button icon large>
          <mu-icon value="menu" color="#fff"></mu-icon>
        </mu-button>
        <mu-list slot="content">
          <mu-list-item button @click="goToIndex('product')">
            <mu-list-item-title>产品演示</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button @click="goToIndex('compare')">
            <mu-list-item-title>合作案例</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button @click="goToIndex('price')">
            <mu-list-item-title>产品价格</mu-list-item-title>
          </mu-list-item>
          <a target="_blank" href="https://docs.authing.cn/authing/scan-qrcode/wxapp-qrcode">
            <mu-list-item button>
              <mu-list-item-title>开发文档</mu-list-item-title>
            </mu-list-item>
          </a>
        </mu-list>
      </mu-menu>
    </div>
  </div>
</template>
<script>
export default {
  name: "headers",
  data() {
    return {
      menuOpened: false
    };
  },

  methods: {
    goToIndex(someid) {
      document.getElementById(someid).scrollIntoView();
      this.menuOpened = false;
    }
  }
};
</script>
<style>
.headerPage,
.headerPage-mini {
  overflow: hidden;
}

.headerPage {
  width: 100vw;
  height: 60px;
  background: rgba(51, 51, 51, 0.6);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
}

.headerPage-mini {
  width: 100vw;
  height: 44px;
  background: rgba(51, 51, 51, 0.6);

  display: none;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
}

.menu-style {
  min-width: 100px;
}

@media screen and (max-width: 1024px) {
  .headerPage {
    display: none !important;
  }

  .headerPage-mini {
    display: flex !important;
  }
}

.linkBar a {
  margin-left: 30px;
  font-size: 18px;
  font-weight: 500 !important;
}

a.h3:hover {
  color: rgb(255, 239, 185) !important;
}

.logo {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  user-select: none;
}

.logo .title {
  font-size: 22px;
  color: #fff;
  font-weight: 500;
  margin-left: 16px;
}
</style>
