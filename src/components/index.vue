<template>
  <div>
    <headerPage />
    <welcomePage />
    <productPage />
    <comparePage />
    <pricePage />
  </div>
</template>
<script>
import headerPage from "./header";
import welcomePage from "./welcome";
import comparePage from "./compare";
import productPage from "./product";
import pricePage from "./price";

export default {
  name: "index",
  components: {
    headerPage,
    welcomePage,
    comparePage,
    productPage,
    pricePage
  }
};
</script>

<style lang="less">

</style>
