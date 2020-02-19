<template>
  <div id="homeContainer">
    <div class="headers">
      <div class="home-heade">
        <h1 class="home-log"></h1>
        < div class = "home-input" > < i class = "ioc" > < /i> < span >
        搜索更多商品 < /span> < /div> < button class = "btn" > 登录 < /button> <
        /div> < div class = "home-nav" > < span class = "home-jiantou": class =
        "isShow ? 'nizhuan' : 'zhuan'" @click = "getShow" > < /span> < /div> <
        /div> < /div> < /template> < script type = "text/ecmascript-6" > export
        default { data() { return { isShow: true, } }, methods: { }, } <
        /script>

        <style lang="stylus" rel="stylesheet/stylus">
             #homeContainer
               width 100 %
               height 100 %
               .headers
                width 100 %
                height 74 px
              .home - heade
          box - sizing border - box
          display flex
          width 100 %
            height 44 px
          padding 8 px 15 px
            .home - log
          width 69 px
          height 20 px
          background url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp') no - repeat 0 3 px
            .home - input
          width 221 px
          height 28 px
          background# ededed
          border - radius 2.5 px
          text - align center
          line - height 28 px
          font - size 12 px
          margin 0 8 px 0 10 px
            .ioc
          margin - right 5 px
          vertical - align middle
          display inline - block
          width 15 px
          height 15 px
          background url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png?imageView&type=webp') no - repeat 0 0
            .btn
          white - space nowrap
          width 40 px
          height 20 px
          font - size 12 px
          border - radius 5 px
          color# DD1A21
          background# fff
          margin 5 px 0 0 0
          border 1 px solid# DD1A21
            .home - nav
          width 100 %
            height 30 px
            .home - jiantou
          display inline - block
          float right
          width 50 px
          height 30 px
          margin 0 0 0 15 px
          background url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-9b31adfa37.png?imageView&type=webp') no - repeat 50 % 50 %
            &
            .zhuan
          transform rotate(180 deg) &
            .nizhuan
          transform rotate(0 deg)
        </style>
      </div>
    </div>
  </div></template
>
