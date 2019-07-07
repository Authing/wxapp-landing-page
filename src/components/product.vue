<template>
  <div class="box productPage" id="product">
    <div class="titleBox">
      <span>产品演示</span>
      <div class="line"></div>
    </div>

    <div class="practice">
      <div class="phone wow fadeIn" data-wow-duration="0.8s">
        <video
          autoplay="autoplay"
          muted="muted"
          loop="loop"
          height="550"
          width="286"
          class="video"
          src="https://img.linghegl.cn/unname.mp4"
        ></video>
        <!--           height="550"
        width="286"-->
      </div>
      <div class="mini_video">
        <video
          autoplay="autoplay"
          muted="muted"
          loop="loop"
          height="250"
          width="130"
          class="video_mini"
          src="https://img.linghegl.cn/unname.mp4"
        ></video>
      </div>
      <div class="pc wow fadeIn" data-wow-duration="1.8s">
        <img src="https://img.linghegl.cn/juzi.gif" class="pc_img" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "product",
  components: {}
};
</script>

<style lang="less">
.productPage {
  background: #fff;
  width: 100vw;
  min-height: 400px;
  max-height: 120vh;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.phone {
  width: 300px;
  height: 600px;
  background: url("https://img.linghegl.cn/phone.gif");
  background-size: cover;
}

.video {
  transform: translate(7px, 30px);
  border-radius: 4px;
}

.practice {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.pc_img {
  width: 680px;
}

.pc {
  border-radius: 10px;
  border: 5px solid #ececec;
  margin-right: 4px;
  padding: 10px;
}

.mini_video {
  display: none;
}

@media screen and (max-width: 720px) {
  .pc {
    display: none !important;
  }

  .productPage {
    background: #fff;
    width: 100vw;
    min-height: 400px;
    max-height: 120vh;

    display: flex;
    flex-direction: row;
    justify-content: center !important;
    align-items: center;
    flex-wrap: wrap;
  }

  .practice {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center !important;
    align-items: center;
  }

  .phone {
    display: none !important;
  }

  .mini_video {
    display: block !important;
  }
}
</style>
