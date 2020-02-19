<template>
  <div id="footerContainer">
    <div :class="{active:$route.path==='/home'}" @click="goPath('/home')" class="guideItem">
      <i class="iconfont icon-shouye2"></i>
      <span>首页</span>
    </div>
    <div :class="{active:$route.path==='/classify'}" @click="goPath('/classify')" class="guideItem">
      <i class="iconfont icon-shouye2"></i>
      <span>分类</span>
    </div>
    <div :class="{active:$route.path==='/buying'}" @click="goPath('/buying')" class="guideItem">
      <i class="iconfont icon-shouye2"></i>
      <span>值得买</span>
    </div>
    <div :class="{active:$route.path==='/shopping'}" @click="goPath('/shopping')" class="guideItem">
      <i class="iconfont icon-shouye2"></i>
      <span>购物车</span>
    </div>
    <div
      :class="{active:$route.path==='/personage'}"
      @click="goPath('/personage')"
      class="guideItem"
    >
      <i class="iconfont icon-shouye2"></i>
      <span>个人</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  methods: {
    goPath(path) {
      path !==this.$route.path&&this.$router.push(path);
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
#footerContainer
  top-border-1px(#eee)
  display flex
  position fixed
  left 0
  bottom 0
  height 50px
  width 100%
  box-sizing border-box
  background #fff
  .guideItem
    width 25%
    height 100%
    text-align center
    display flex
    flex-direction column
    span 
      font-size 12px
    &.active
      color #DD1A21
    .iconfont
      font-size 20px
      line-height 30px
</style>
