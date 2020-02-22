<template>
  <div id="personageContainer">
    <nav class="navHeader">
      <i class="iconfont iconhome icon-left" @click="goPath('/home')"></i>
      <div class="wangyilog">
        <img
          src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp"
          alt=""
        />
      </div>
      <div class="nav-ioc">
        <i class="iconfont iconsearch"></i>
        <i class="iconfont iconcart-Empty"></i>
      </div>
    </nav>
    <div class="personageConten-top">
       <PhoneLogin v-show="isPhoneLogin"/>
       <EmailLongin v-show="isEmailLogin"/>
      <div class="imgLogin">
        <img
          src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png"
          alt=""
        />
      </div>
      <div class="login">
        <div class="phoneLogin"  @click="isPhoneLogin=true">
          <i class="iconfont iconmobile-phone"></i>
          <span>手机号快捷登录</span>
        </div>
        <div class="emailLongin" @click="isEmailLogin=true">
          <i class="iconfont iconemail"></i>
          <span>邮箱帐号登录</span>
        </div>
      </div>
    </div>
    <div class="personageConten-bottom">
      <ul>
        <li>
          <i class="iconfont iconweixin"></i>
          <span>微信</span>
        </li>
        <li>
          <i class="iconfont iconqq"></i>
          <span>QQ</span>
        </li>
        <li>
          <i class="iconfont iconweibo"></i>
          <span>微博</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import PhoneLogin from "../../components/PhoneLogin/PhoneLogin"
import EmailLongin from '../../components/EmailLogin/EmailLogin'
export default {
 components:{PhoneLogin,EmailLongin},
 data() {
   return {
     isPhoneLogin:false,
     isEmailLogin:false
   }
 },
 methods: {
   goPath(path){
       this.$router.push(path)
   }
 },

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#personageContainer
  // 头部导航
  .navHeader
   background-color #fafafa
   padding 0 8px 0 12px
   box-sizing border-box
   justify-content space-between
   width 100%
   height 44px
   display flex
   .iconfont
    font-size 30px
    line-height 44px
   .wangyilog
    height 100%
    width 86px
    position absolute
    left 0
    top 0
    bottom 0
    right 0
    margin auto
    img
     margin 11px 0
     width 85px
     height 27px
   .nav-ioc
    display flex
    justify-content space-between
    width 73px
    height 32px
  //登录区域
  //上部
  .personageConten-top
     width 100%
     height 350px
     .imgLogin
       width 100%
       height 240px
       padding 80px 0 116px
       box-sizing border-box
       text-align center
       img
        width 133px
        height 45px
     .login
       box-sizing border-box
       width 100%
       height 110px
       margin 0 0 102px
       padding 0 20px
       div
        width 335px
        height 47px
        text-align center
        font-size 13px
        color #fff
        margin 0 0 16px
        border-radius 5px
        .iconfont
          font-size 24px
          margin-right 8px
          vertical-align sub
       .phoneLogin
          background #DD1A21
          line-height 45px
       .emailLongin
          color #DD1A21
          border 1px solid #DD1A21
          line-height 45px
     //底部
  .personageConten-bottom
    position absolute
    bottom 56px
    left 0
    width 100%
    height 20px
    text-align center
    ul
     display inline-block
     height 20px
     li
      float left
      width 91px
      height 20px
      &:nth-child(2)
        border-left 1px solid #979797
        border-right 1px solid #979797
      span
       font-size 14px
       margin-left 5px
       color #979797
      .iconfont
       font-size 16px
       color #979797
</style>
