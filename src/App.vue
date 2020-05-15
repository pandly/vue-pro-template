<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: #515a6e;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
}

#app {
  width: 100%;
  height: 100%;
}

.view {
  font-size: 120px;
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  width: 100%;
  text-align: center;
}
</style>
