<template>
  <div>
    <headerPage />
    <welcomePage />
    <productPage />
    <comparePage />
    <pricePage />
    <bottomPage />
  </div>

</template>
<script>
import headerPage from "./headers";
import welcomePage from "./welcome";
import comparePage from "./compare";
import productPage from "./product";
import pricePage from "./price";
import bottomPage from "./bottom";
import { EventBus } from "./event-bus.js";
import "./meiqia";

export default {
  name: "index",
  components: {
    headerPage,
    welcomePage,
    comparePage,
    productPage,
    pricePage,
    bottomPage
  },

};
</script>

<style lang="less">

</style>
