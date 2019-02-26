<template>
  <transition name="slide">
    <div class="animated user-setting" v-if="showFlag">
      <mt-header class="login-header" title="登录">
        <router-link to="/user" slot="left">
          <mt-button @click="back" icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="user-content">
        <div class="user-type">
          <img src="http://cmsstatic.dataoke.com//wap_new/user/images/icon/wode_setting_change.svg" alt="">
          <p><span>修改密码</span><span class="user-san f-r">></span></p>
        </div>
        <div class="user-type">
          <img src="http://cmsstatic.dataoke.com//wap_new/user/images/icon/wode_icon_help.svg" alt="">
          <p><span @click="goOutLogin">退出登录</span><span class="user-san f-r">></span></p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import { MessageBox,Toast } from 'mint-ui';
  import {loginOut} from '../../api/axios'
  import {getToken} from "../../utils/cookies";

  export default {
        name: "userSetting",
      data() {
          return {
            userName: '',
            showFlag: false
          }
      },
      methods: {
        show() {
          this.showFlag = true
        },
        back() {
          this.showFlag = false
        },
        goOutLogin() {
          MessageBox.confirm('确定执行此操作?').then(() => {
            let token = getToken().token
            loginOut(`${token}`).then((res) => {
              if(res.data.status === 1) {
              console.log(res)
                this.$router.push({name:'user'})
              }
            }).catch((error) => {
                console.log(error)
            })
          }).catch(() => {

          })
        }
      }
    }
</script>

<style scoped lang="less">
  .slide-enter-active, .slide-leave-active {
    transition: all 0.3s
  }
  .slide-enter, .slide-leave-to {
    transform: translate3d(100%,0,0)
  }
  /*.toast {*/
    /*z-index: 20000 !important;*/
  /*}*/
  .user-setting {
    position: fixed;
    left: 0;
    top: 0;
    width: 3.75rem;
    height: 6.67rem;
    background-color: #fff;
    z-index: 1099;
    .mint-header {
      background: linear-gradient(to left,#FA4DBE 0,#FBAA58 100%) !important;
    }
    .user-content {
      .user-type {
        width: 3.75rem;
        height: 0.24rem;
        padding: 0.14rem 0;
        border-bottom: 0.01rem solid #eee;
        img {
          margin: 0 0.06rem;
        }
        p {
          width: 3.2rem;
          display: inline-block;
          vertical-align: top;
          font-size: 0.14rem;
          margin-top: 0.02rem;
          span {
            color: #666;
          }
          .user-san {
            font-size: 0.18rem;
            margin-top: -0.05rem;
            color: #666;
          }
        }
      }
    }
  }
</style>
