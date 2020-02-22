<template>
  <div>
    <van-form validate-first @submit="onSubmit" @failed="onFailed">
      <van-field
        v-model="phone"
        name="phone"
        label="手机号"
        :rules="phoneRules"
      />
      <van-field v-model="code" name="code" label="验证码" :rules="codeRules" />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script type="text/ecmascript-6">

export default {
}
</script>

<style lang="stylus" rel="stylesheet/stylus"></style>
