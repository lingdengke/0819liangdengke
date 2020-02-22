<template>
  <div id="homeList">
    <!-- 轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(Item, index) in indexCateModule"
          :key="index"
        >
          <img :src="Item.imgUrl" alt="" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
    </div>
    <!-- 推货无忧 -->
    <nav class="navBar">
      <div class="navBar-one">
        <i class="nav-ioc"></i>
        <span>网易自营品牌</span>
      </div>
      <div class="navBar-one">
        <i class="nav-ioc"></i>
        <span>30天无忧退货</span>
      </div>
      <div class="navBar-one">
        <i class="nav-ioc"></i>
        <span>48小时快速退款</span>
      </div>
    </nav>
    <!-- 商品墙 -->
    <div class="commodityWall">
      <ul>
        <li
          v-for="(item, index) in kingKongList"
          :key="index"
          class="comWall-chid"
        >
          <img :src="item.picUrl" alt="" />
          <span>{{ item.text }}</span>
        </li>
      </ul>
    </div>
    <!--立体墙 -->
    <div class="stereoscopic-wall">
      <div class="wall-header"></div>
      <div class="wall-up"></div>
      <div class="wall-centre">
        <div></div>
        <div></div>
      </div>
      <div class="wall-below">
        <div></div>
        <div></div>
      </div>
    </div>
    <!-- 新人专享 -->
    <div class="newPeople">
      <div class="newPeople-txt">
         <span>新人专享礼</span>
      </div>
      <div class="newPeople-img">
        <div class="img-left">
        <img src="" alt="">
        </div>
        <div>
        <img src="" alt="">
        <img src="" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import indexCateModule from '../../datas/indexCateModule.json'
import indexList from '../../datas/index.json'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
    data() {
        return {
         indexCateModule:{},
         kingKongList:[]
        }
    },
   mounted(){
       this.$nextTick(() => {
         new Swiper('.swiper-container', {
           pagination: {
             el: '.swiper-pagination',
           },
           loop: true,
           type : 'custom',
         })
       })
       this.indexCateModule=indexCateModule;
       this.kingKongList=indexList.kingKongModule.kingKongList
       console.log(this.kingKongList);
   }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
// @import '../../common/stylus/mixins.styl'
#homeList  //首页
  background #ededed
  padding-top 75px
  padding-bottom  75px
  box-sizing border-box
  // 轮播图
  .swiper-container
   .swiper-pagination-bullet
     width 20px
     height 2px
     border-radius 0px
     background #333
     &.swiper-pagination-bullet-active
      background #ffffff
  //推货无忧
  .navBar
   width 100%
   height 36px
   display flex
   justify-content space-between
   padding 0 15px
   box-sizing border-box
   .navBar-one
    span
     line-height 36px
     margin 0 0 0 4px
    .nav-ioc
     display inline-block
     line-height 50px
     vertical-align middle
     width 16px
     height 16px
    &:nth-child(1)
     .nav-ioc
      background  url('https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png') no-repeat 0 0
      background-size 16px 16px
    &:nth-child(2)
      .nav-ioc
        background  url('https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png') no-repeat 0 0
        background-size 16px 16px
    &:nth-child(3)
      .nav-ioc
        background  url('https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png') no-repeat 0 0
        background-size 16px 16px
  //商品墙
  .commodityWall
   width 100%
   height 175px
   padding-bottom 16px
   ul
    .comWall-chid
      float left
      display flex
      flex-direction column
      justify-content center
      width 55px
      height 75px
      margin 5px 10px 5px
      img
       width 55px
       height 55px
      span
       text-align center
       font-size 12px
       margin 5px 0
  //立体墙
  .stereoscopic-wall
   display flex
   flex-direction column
   width 100%
   height 414px
   background #1674e3
   .wall-header
    width 100%
    height 120px
    background url('https://yanxuan.nosdn.127.net/5db28c137605ea7576c986e9c285e1c6.png?quality=75&type=webp&imageView&thumbnail=750x0') no-repeat 0 0
   .wall-up
    width 355px
    height 80px
    background url('https://yanxuan.nosdn.127.net/a4187bffa2a0431ec5d6e2dd1070d6c5.gif?imageView&quality=75') no-repeat 0 0
    background-size 100% 100%
    margin 10px 10px 4px 10px
   .wall-centre
    width 355px
    height 94px
    display flex
    justify-content space-between
    margin 0 10px 4px 10px
    >div
      width 49.5%
      height 100%
      background pink
      border-radius 5px
      &:nth-child(1)
        background url('https://yanxuan.nosdn.127.net/28244c6ae7ef78424ea5317a0d72dd6a.png') no-repeat 0 0
        background-size 100% 100%
      &:nth-child(2)
        background url('https://yanxuan.nosdn.127.net/15b56691109bba3adf6156fd44f14073.png') no-repeat 0 0
        background-size 100% 100%
   .wall-below
    width 355px
    height 94px
    display flex
    justify-content space-between
    margin 0 10px 4px 10px
    >div
      width 49.5%
      height 100%
      background pink
      border-radius 5px
      &:nth-child(1)
        background url('https://yanxuan.nosdn.127.net/83b35324b02e31aa202a12971fa7f8c3.png') no-repeat 0 0
        background-size 100% 100%
      &:nth-child(2)
        background url('https://yanxuan.nosdn.127.net/2c98b2002572ec4cd0824bc810d7d31f.png') no-repeat 0 0
        background-size 100% 100%
  //新人专享
  .newPeople
   width 100%
   height 268px
   margin 10px 0
   padding  0 10px
   display flex
   flex-direction column
   background #fff
   box-sizing border-box
   .newPeople-txt
     text-align center
     width 100%
     height 45px
     span 
      position relative
      width  80px
      margin 0 10px
      line-height 45px 
      text-align center
      font-size 16px
      &:before
        content ''
        position absolute
        top 10px
        left -20px
        width 12px
        height 1.5px
        background: #333
      &:after
        content ''
        position absolute
        top 10px
        right  -20px
        width 12px
        height 1.5px
        background: #333
    .newPeople-img
     width 100%
     height 219px
     background red

</style>
