<template>
  <div id="homeContainer">
    <div class="headers">
      <div class="home-heade">
        <h1 class="home-log"></h1>
        <div class="home-input">
          <i class="ioc"></i>
          <span> 搜索更多商品 </span>
        </div>
        <button class="btn">登录</button>
      </div>
      <!-- 导航 -->
      <div class="home-nav">
        <div v-show="isShow" class="home-list">
          <ul class="list">
            <li>
              推荐
            </li>
            <li v-for="(CateModuleItem, index) in indexCateModule" :key="index">
              {{ CateModuleItem.name }}
            </li>
          </ul>
        </div>
        <!-- 遮罩层 -->
        <div v-show="!isShow" class="home-all">
          <div class="shopAll">频道全部</div>
          <ul class="shop-list">
            <li>
              推荐
            </li>
            <li v-for="(CateModuleItem, index) in indexCateModule" :key="index">
              {{ CateModuleItem.name }}
            </li>
          </ul>
          <div class="acivt" @click="isShow=true">

          </div>
        </div>
        <!--箭头 -->
        <span
          class="home-jiantou"
          :class="isShow ? 'nizhuan' : 'zhuan'"
          @click="getShow"
        >
        </span>
      </div>
    </div>
    <!-- 商品列表 -->
    <Homeliat/>
  </div>
</template>
<script type="text/ecmascript-6">
import SCroll from 'better-scroll'
import indexCateModule from '../../datas/indexCateModule.json'
import Homeliat from  '../../components/Homelist/Homelist'
export default {
  components:{
    Homeliat,
  },
   data() {
    return {
      isShow:true,
      indexCateModule:{},
      }
    },
   mounted() {
     new SCroll('.home-list',{
       scrollX:true,
       click:true
     })
     this.indexCateModule=indexCateModule
     // eslint-disable-next-line no-console
     console.log(indexCateModule);
   },
   methods: {
    getShow(){
     this.isShow=!this.isShow
    }
 },
 }
</script>
<style lang="stylus" rel="stylesheet/stylus">
#homeContainer
 width 100%
 height 100%
 .headers
  position fixed
  z-index 99
  width 100%
  height 74px
  background #fff
  .home-heade
    box-sizing border-box
    display flex
    width 100%
    height 44px
    padding 8px 15px
    .home-log
     width 69px
     height 20px
     background url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp') no-repeat 0 3px
    .home-input
     width 221px
     height 28px
     background #ededed
     border-radius 2.5px
     text-align center
     line-height 28px
     font-size 12px
     margin 0 8px 0 10px
     .ioc
      margin-right 5px
      vertical-align middle
      display inline-block
      width 15px
      height 15px
      background url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png?imageViewtype=webp') no-repeat 0 0
    .btn
     white-space nowrap
     width 40px
     height 20px
     font-size 12px
     border-radius 5px
     color #DD1A21
     background #fff
     margin 5px 0 0 0
     border 1px solid #DD1A21
  .home-nav
   display flex
   justify-content space-between
   width 100%
   height 30px
   padding-left 15px
   box-sizing border-box
   .home-list
    width  77%
    margin-left 8px
    overflow hidden
    position relative
    .list
     position absolute
     display flex
     flex-wrap nowrap
     z-index -3
     li
      white-space nowrap
      color #333
      font-size 15px
      padding 0 9px
      height 30px
      line-height 30px
      text-align center
      font-weight 400
   .home-all
    width 100%
    height 100%
    z-index 99
    .shopAll
     line-height 30px
     width 100%
     height 30px
     font-size 14px
    .shop-list
      padding 12px 0 0
      width 100%
      position absolute
      left 0
      top 74px
      background #fff
      li
       text-align center
       line-height 28px
       float left
       width 75px
       height 28px
       margin 0 0 20px 14px
       background #fafafa
       color  #333
       border  1px solid #CCC
       border-radius .05333rem
    .acivt
      position absolute
      left 0
      top 225px 
      right 0
      bottom 0
      width 100%
      height 667px
      background rgba(0,0,0,0.5)
      z-index -10
   .home-jiantou
    transition all 0.5s
    display inline-block
    float right
    width 50px
    height 30px
    margin 0 0 0 10px
    background url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-9b31adfa37.png?imageView&type=webp') no-repeat 50% 50%
    &.zhuan
      transform rotate(180deg)
    &.nizhuan
      transform rotate(0deg)    
</style>
