<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="scss">
  @import './assets/css/vulture.scss';
  @import url('https://fonts.googleapis.com/css?family=Saira+Semi+Condensed:300');
  body {
    font-family: 'Saira Semi Condensed', sans-serif;
  }

</style>
