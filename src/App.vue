<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
template,
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  overflow-y: scroll;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a[title="站长统计"] {
  display: none;
}
</style>
