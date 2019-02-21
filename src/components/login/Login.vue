<template>
  <!--<transition enter-active-class="fadeIn" leave-active-class="fadeOut">-->
    <div class="animated login">
      <mt-header class="login-header" title="登录">
        <router-link to="/user" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="login-info">
        <div class="login-phone">
          <label for="phone">手机</label>
          <input
            @input="textPhone(phone)"
            name="phone"
            v-model="phone"
            type="text"
            id="phone"
            placeholder="手机号码">
          <span @click="clear" class="login-icon">⊕</span>
          <p v-show="flagPhone" :class="errorPhone === '输入正确'?'success':'error'">{{errorPhone}}</p>

        </div>
        <div class="login-password">
          <label for="password">密码</label>
          <input
            @input="textPassword(password)"
            name="password"
            v-model="password"
            :type="type===true?'password':'text'"
            id="password"
            placeholder="密码">
          <span @click="changPasswordType" class="login-icon">{{type===true?'○':'●'}}</span>
          <p v-show="flagPassword" :class="errorPassword === '输入正确'?'success':'error'">{{errorPassword}}</p>
        </div>
        <button @click="submit" :disabled="clickCan" :class="clickCan?'login-submit':'login-submit-success'">登录</button>
      </div>
      <P class="register">还没有账号?立即<span @click="register" class="to-register">注册</span></P>
      <div class="mask"></div>
    </div>
  <!--</transition>-->
</template>

<script>
  import { Toast } from 'mint-ui';
  import {login} from '../../api/axios'
  import {setToken} from "../../utils/cookies";

  export default {
        name: "login",
      data() {
          return {
            phone: '',
            errorPhone: '',
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
            if(newValue.successPhone&&newValue.successPassword) {
              this.clickCan = false
            }
          },
          deep: true
        }
      },
      methods: {
        textPhone(val) {
          let flagPhone =  false
            if(val === '') {
              flagPhone = true
              this.clickCan = true
              this.errorPhone = '输入不能为空~~'
              this.success.successPhone = false
            }else {
              flagPhone = false
              const phoneRegex = /^(13[0-9]|15[0-9]|18[0-9]|170|176|177)\d{8}$/
              if(phoneRegex.test(val)) {
                flagPhone = true
                this.errorPhone = '输入正确'
                setTimeout(() => {
                  this.errorPhone = ''
                  this.success.successPhone = true
                },500)
              }else {
                this.success.successPhone = false
                this.clickCan = true
                flagPhone = true
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
            const passwordRegex =  /^\w{6,16}$/
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
              this.errorPassword = '请输入6-16位的密码'
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
          login(
            `phone=${this.phone}&password=${this.password}`
          ).then((res) => {
            console.log('login',res)
            // Toast({
            //   message:`${res.data.datas.error}`,
            //   duration: 1000,
            //   // className: 'Toast'
            // });
            // if(res.data.status == 200) {
              console.log('登录',res.data)
              setToken('token',res.data.data.token)
              setToken('name',res.data.data.trace_id)
              setTimeout(() => {
                this.$router.push({name:'user'})
              },1000)
            // }
          }).error(e=> {
            console.log(e)
          })
        },
        register() {
          this.$router.push({name:'register'})
        }
      }
    }
</script>

<style scoped lang="less">
  .animated {
    animation-duration: 0.5s;
  }
  .login {
    .mint-header {
      background: linear-gradient(to left,#FA4DBE 0,#FBAA58 100%) !important;
    }
    .login-info {
      width: 3.75rem;
      height: 2rem;
      margin-top: 1rem;
      text-align: center;
      .login-phone {
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
        .login-icon {
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
      .login-password {
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
        .login-icon {
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
      .login-submit, .login-submit-success {
        width: 3.19rem;
        height: 0.36rem;
        border: 0;
        outline: none;
        margin: 0.2rem auto;
        border-radius: 4px;
      }
      .login-submit {
        background-color: #eee;
      }
      .login-submit-success {
        background: linear-gradient(to left, #FA4DBE 0, #FBAA58 100%) !important;
      }
    }
    .register {
      margin-top: 0.1rem;
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
