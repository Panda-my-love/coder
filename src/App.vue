<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-link to="/hell">你好</router-link>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  
}
</script>

<style>

</style>
