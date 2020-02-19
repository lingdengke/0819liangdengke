<template>
  <div class="app">
    <Footer />
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import Footer from "./components/Footer/Footer";
export default {
components: { Footer }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.app
  width 100%
  height 100%
</style>
