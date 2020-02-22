<template>
  <div id="personageConten">
    <div class="login_content">
      <div class="phone">
        <div class="phoneImg">
          <img
            src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png"
            alt=""
          />
        </div>
        <div class="phoneLog">
          <van-form validate-first @submit="onSubmit" @failed="onFailed">
            <van-field
              v-model="phone"
              name="phone"
              :rules="phoneRules"
              size="large"
              placeholder="请输入手机号"
            />
            <van-field
              v-model="sms"
              center
              clearable
              placeholder="请输入短信验证码"
            >
              <van-button slot="button" size="small" type="primary"
                >发送验证码</van-button
              >
            </van-field>
            <div class="phoneTxt">
              <span>遇到问题</span>
              <span>使用密码登陆</span>
            </div>
            <div style="margin: 16px;">
              <van-button block type="danger" native-type="submit">
                提交
              </van-button>
            </div>
          </van-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { Toast } from 'vant';
export default {
    data() {
           this.phoneRules = [
            { validator: this.phoneValidator,
              message: '手机号格式错误'
             },
                  ];
           this.codeRules = [
               { validator: this.codeValidator,
                  message: '验证码错误'
                  },
    ];
        return {
          isUserNameLogin: false, // 用户选择登陆默认为false
          sms: '',
          phone: '',
        }
    },
     methods: {
    // 校验函数返回 true 表示校验通过，false 表示不通过
    phoneValidator(val) {
      return /1\d{10}/.test(val);
    },
    // 校验函数返回 Promise 来实现异步校验
    codeValidator(val) {
      return new Promise(resolve => {
        Toast.loading('验证中...');

        setTimeout(() => {
          Toast.clear();
          resolve(/\d{6}/.test(val));
        }, 1000);
      });
    },
    onSubmit(values) {
      console.log('submit', values);
    },
    onFailed(errorInfo) {
      console.log('failed', errorInfo);
    },
  },
}
/*
import { Toast } from 'vant';

export default {
  data() {
    this.phoneRules = [
      { required: true, message: '请输入手机号' },
      { validator: this.phoneValidator, message: '手机号格式错误' },
    ];
    this.codeRules = [
      { required: true, message: '请输入验证码' },
      { validator: this.codeValidator, message: '验证码错误' },
    ];
    return {
      code: '',
      phone: '',
    };
  },

};
*/
</script>

<style lang="stylus" rel="stylesheet/stylus">
#personageConten
   background #F2F5F4
   width 100%
   height 623px
  .login_content
    width 100%
    height 100%
    background #fff
    .phone
     width 100%
     height 393px
     .phoneImg
       width 100%
       height 45px
       text-align center
       margin-top 28px
      img
      width 133px
      height 45px
     .phoneLog
       width 100%
       height 258px
       padding 0 15px
       margin-top 20px
       box-sizing border-box
       .phoneTxt
        width 100%
        height 40px
        line-height 40px
        display flex
        justify-content space-between

//    background #fff
//    width 100%
//    height 623px
//    >form
//     >div
//       display none
//       &.on
//         display block
//       input
//        width 100%
//        height 100%
//        padding-left 10px
//        box-sizing border-box
//        border-bottom  1px solid #ddd
//        outline 0
//        font 400 14px Arial
//       .login_message
//         position relative
//         margin-top 16px
//         height 48px
//         font-size 14px
//         background #fff
//    .login_verification
//       position relative
//       margin-top 16px
//       height 48px
//       font-size 14px
//       background #fff
//       .get_verification
//           position absolute
//           top 50%
//           right 10px
//           transform translateY(-50%)
//           border 0
//           color #ccc
//           font-size 14px
//           background transparent
//           &.rightPhone
//             color #333
//       .switch_button
//          font-size 12px
//          border 1px solid #ddd
//          border-radius 8px
//          transition background-color .3s,border-color .3s
//          padding 0 6px
//          width 30px
//          height 16px
//          line-height 16px
//          color #fff
//          position absolute
//          top 50%
//          right 10px
//          transform translateY(-50%)
//          &.off
//            background #fff
//          .switch_text
//             float right
//             color #ddd
//          &.on
//          background #02a774
//          >.switch_circle
//          // transform translateX(27px)
//            position absolute
//            top -1px
//            left -1px
//            width 16px
//            height 16px
//            border 1px solid #ddd
//            border-radius 50%
//            background #fff
//            box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
//            transition transform .3s
//            &.right
//             transform translateX(27px)
//    .login_hint
//       margin-top 12px
//       color #999
//       font-size 14px
//       line-height 20px
//       >a
//          color #02a774
//    .login_submit
//      display block
//      width 100%
//      height 42px
//      margin-top 30px
//      border-radius 3px
//      background #DD1A21
//      color #fff
//      text-align center
//      font-size 16px
//      line-height 42px
//      border 0
</style>
