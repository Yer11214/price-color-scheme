<template>
  <div id="app">
      <priceColorScheme :value="100" ></priceColorScheme>
      <priceColorScheme :value="100" dot="+" ></priceColorScheme>
      <priceColorScheme :value="100" dot="-" color="#32cc"  :customStyle="{fontSize:'20px'}"></priceColorScheme>
      <priceColorScheme :value="100" dot="~"  color="green"> 啊 这么多钱 ？ </priceColorScheme>
  </div>
</template>

<script>

export default {
  name: 'App',
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
div{
  margin: 20px 0;
}
</style>
