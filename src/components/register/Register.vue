<template>
  <div class="register">
    <mt-header class="register-header" title="注册">
      <router-link to="/login" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="register-info">
      <div class="register-phone">
        <label for="phone">手机</label>
        <input
          @input="textPhone(phone)"
          name="phone"
          v-model="phone"
          type="text"
          id="phone"
          placeholder="手机号码">
        <span @click="clear" class=" register-icon">⊕</span>
        <p v-show="flagPhone" :class="errorPhone === '输入正确'?'success':'error'">{{errorPhone}}</p>

      </div>
      <div class="register-checked">
        <label for="checkInfo">验证码</label>
        <input
          id="checkInfo"
          placeholder="请输入验证码">
        <span  class="register-checked register-icon">获取验证码</span>
        <!--<p>aaa</p>-->
      </div>
      <div class="register-password">
        <label for="password">密码</label>
        <input
          @input="textPassword(password)"
          name="password"
          v-model="password"
          :type="type===true?'password':'text'"
          id="password"
          placeholder="密码">
        <span @click="changPasswordType" class="register-icon">{{type===true?'○':'●'}}</span>
        <p v-show="flagPassword" :class="errorPassword === '输入正确'?'success':'error'">{{errorPassword}}</p>
      </div>
      <button @click="submit" :disabled="clickCan" :class="clickCan?'register-submit':'register-submit-success'">注册</button>
    </div>
    <P class="register">点击"注册"表示您已同意<span @click="register" class="to-register"> <<趣淘网用户协议>> </span></P>
    <div class="mask"></div>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  import {register} from '../../api/axios'
  export default {
    name: "register",
    data() {
      return {
        phone: '',
        errorPhone: '',
        flagPhone: false,


        password: '',
        errorPassword: '',
        flagPassword: false,
        success: {
          successPhone: false,
          successPassword: false,
        },
        //type类型的切换
        type: true,
        clickCan: true
      }
    },
    watch: {
      success: {
        handler(newValue, ){
          console.log(newValue)
          if(newValue.successPhone&&newValue.successPassword) {
            this.clickCan = false
          }
        },
        deep: true
      }
    },
    created() {
      // console.log(this.$store.state.sig)
    },
    methods: {
      textPhone(val) {
        if(val === '') {
          this.flagPhone = true
          this.clickCan = true
          this.errorPhone = '输入不能为空~~'
          this.success.successPhone = false
        }else {
          this.flagPhone = false
          const phoneRegex = /^(13[0-9]|15[0-9]|18[0-9]|170|176|177)\d{8}$/
          if(phoneRegex.test(val)) {
            this.flagPhone = true
            this.errorPhone = '输入正确'
            setTimeout(() => {
              this.errorPhone = ''
              this.success.successPhone = true
            },500)
          }else {
            this.success.successPhone = false
            this.clickCan = true
            this.flagPhone = true
            this.errorPhone = '请输入正确11位手机号码~~'
          }
        }
      },
      textPassword(val) {
        if(val === '') {
          this.clickCan = true
          this.flagPassword = true
          this.errorPassword = '输入不能为空~~'
          this.success.successPassword = false
        }else {
          this.flagPassword = false
          const passwordRegex =  /^\w{8,16}$/
          if(passwordRegex.test(val)) {
            this.flagPassword = true
            this.errorPassword = '输入正确'
            setTimeout(() => {
              this.errorPassword = ''
              this.success.successPassword = true
            },500)
          }else {
            this.success.successPassword = false
            this.clickCan = true
            this.flagPassword = true
            this.errorPassword = '请输入8-16位的密码'
          }
        }
      },
      clear() {
        this.phone = ''
        this.errorPhone = ''
      },
      changPasswordType() {
        this.type = !this.type
      },
      submit() {
        let time = new Date()
        console.log(time.getTime())
        register(
          `csessionid=${this.$store.state.csessionid}&sig=${this.$store.state.sig}&token=${this.$store.state.token}${time.getTime()}:0.9225385479532732&scene=register&phone=${this.phone}`
        ).then((res) => {
          Toast(`${res.data.msg}`);
        })
      },
      register() {
        this.$router.push({name:'register'})
      }
    }
  }
</script>

<style scoped lang="less">
  .register {
    .mint-header {
      background: linear-gradient(to left,#FA4DBE 0,#FBAA58 100%) !important;
    }
    .register-info {
      width: 3.75rem;
      height: 2.8rem;
      margin-top: 1rem;
      text-align: center;
      .register-phone {
        position: relative;
        width: 3.4rem;
        height: 0.38rem;
        line-height: 0.34rem;
        margin: 0.2rem auto 0.3rem;
        border-bottom: 0.01rem solid #eee;
        span {
          font-size: 0.14rem;
          margin-right: 0.06rem;
        }
        .register-icon {
          font-size: 0.2rem;
        }
        input {
          padding-left: 0.04rem;
          outline: none;
          border: 0;
          width: 2.62rem;
          height: 0.25rem;
          font-size: 0.14rem;
        }
        .error {
          position: absolute;
          top: 0.3rem;
          left: 0.4rem;
          color: red;
        }
        .success {
          position: absolute;
          top: 0.3rem;
          left: 0.4rem;
          color: green;
        }
      }
      .register-checked {
        position: relative;
        width: 3.4rem;
        height: 0.38rem;
        line-height: 0.34rem;
        margin: 0.2rem auto 0.3rem;
        border-bottom: 0.01rem solid #eee;
        span {
          font-size: 0.14rem;
          margin-right: 0.06rem;
        }
        .register-icon {
          font-size: 0.2rem;
        }
        .register-checked {
          border-radius: 10px;
          padding: 0.03rem 0.06rem;
          font-size: 0.12rem;
          border: 0.01rem solid #ccc;
        }
        input {
          padding-left: 0.04rem;
          outline: none;
          border: 0;
          width: 2.2rem;
          height: 0.25rem;
          font-size: 0.14rem;
        }
        .error {
          position: absolute;
          top: 0.3rem;
          left: 0.4rem;
          color: red;
        }
        .success {
          position: absolute;
          top: 0.3rem;
          left: 0.4rem;
          color: green;
        }
      }
      .register-password {
        position: relative;
        width: 3.4rem;
        height: 0.38rem;
        margin: 0.2rem auto 0.3rem;
        line-height: 0.34rem;
        border-bottom: 0.01rem solid #eee;
        span {
          font-size: 0.14rem;
          margin-right: 0.06rem;
        }
        .register-icon {
          font-size: 0.34rem;
        }
        input {
          padding-left: 0.04rem;
          outline: none;
          border: 0;
          width: 2.62rem;
          height: 0.25rem;
          font-size: 0.14rem;
        }
        .error {
          position: absolute;
          top: 0.3rem;
          left: 0.4rem;
          color: red;
        }
        .success {
          position: absolute;
          top: 0.3rem;
          left: 0.4rem;
          color: green;
        }
      }
      .register-submit, .register-submit-success {
        width: 3.19rem;
        height: 0.36rem;
        border: 0;
        outline: none;
        margin: 0.2rem auto;
        border-radius: 4px;
      }
      .register-submit {
        background-color: #eee;
      }
      .register-submit-success {
        background: linear-gradient(to left, #FA4DBE 0, #FBAA58 100%) !important;
      }
    }
    .register {
      width: 3.47rem;
      height: 0.2rem;
      margin-top:0.1rem;
      padding-left: 0.28rem;
      .to-register {
        color: skyblue;
      }
    }
    .mask {
      width: 3.75rem;
      height: 0.5rem;
      background-color: #ffffff;
      position: fixed;
      bottom: 0;
      z-index: 10010;
    }
  }
</style>
