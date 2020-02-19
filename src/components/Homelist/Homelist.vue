<template>
  <div id="homeList">
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper" >
          <div class="swiper-slide"  v-for="(Item,index) in indexCateModule" :key="index">
              <img :src="Item.imgUrl" alt="">
          </div>
        </div>
        <div class="swiper-pagination"></div><!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
      </div>
    </nav>
  </div>
</template>

<script type="text/ecmascript-6">
import indexCateModule from '../../datas/indexCateModule.json'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
    data() {
        return {
         indexCateModule:{}
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
       this.indexCateModule=indexCateModule
   }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
// @import '../../common/stylus/mixins.styl'
#homeList  //首页
 
  .swiper-pagination-bullet
   width 20px
   height 2px
   border-radius 0px
   background #333
   &.swiper-pagination-bullet-active
     background #ffffff
//    background 
//     width 100%
//     .msite_nav
//       bottom-border-1px(#e4e4e4)
//       margin-top 45px
//       height 200px
//       background #fff
//       .swiper-container
//         width 100%
//         height 100%
//         .swiper-wrapper
//           width 100%
//           height 100%
//           .swiper-slide
//             display flex
//             justify-content center
//             align-items flex-start
//             flex-wrap wrap
//             height 100%
//             .link_to_food
//               width 25%
//               .food_container
//                 display block
//                 width 100%
//                 text-align center
//                 padding-bottom 10px
//                 font-size 0
//                 img
//                   display inline-block
//                   width 50px
//                   height 50px
//               span
//                 display block
//                 width 100%
//                 text-align center
//                 font-size 13px
//                 color #666
//         /*深度选择器*/
//         /deep/.swiper-pagination
//           >span.swiper-pagination-bullet-active
//             background #02a774
</style>
