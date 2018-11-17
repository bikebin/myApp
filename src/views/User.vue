<template>
    <div class="user">
      <div class="user-header">
        <span class="setting">设置</span>
        <img class="user-pic" src="http://cmsstatic.dataoke.com//wap_new/user/images/user_info_tx.png?v=201811131628" alt="">
        <p v-if="!userName" class="user-login"><a @click="goLogin" href="javascript:;">登录/注册</a></p>
        <div v-else class="user-success-login">
          <p>{{userName | hideNumber}}</p>
          <p>已为你节省{{userPrice}}元</p>
        </div>
      </div>
      <div class="user-content">
        <div class="user-type">
          <img src="http://cmsstatic.dataoke.com//wap_new/user/images/icon/wode_icon_like.svg" alt="">
          <p><span>我的收藏</span><span class="user-san f-r">></span></p>
        </div>
        <div class="user-type">
          <img src="http://cmsstatic.dataoke.com//wap_new/user/images/icon/wode_icon_history.svg" alt="">
          <p><span>浏览记录</span><span class="user-san f-r">></span></p>
        </div>
        <div class="line"></div>
        <div class="user-type">
          <img src="http://cmsstatic.dataoke.com//wap_new/user/images/icon/wode_icon_feedback.svg" alt="">
          <p><span>意见反馈</span><span class="user-san f-r">></span></p>
        </div>
        <div class="user-type">
          <img src="http://cmsstatic.dataoke.com//wap_new/user/images/icon/wode_icon_servicer.svg" alt="">
          <p><span>联系客服</span><span class="user-san f-r">></span></p>
        </div>
        <div class="user-type">
          <img src="http://cmsstatic.dataoke.com//wap_new/user/images/icon/wode_icon_help.svg" alt="">
          <p><span>领券帮助</span><span class="user-san f-r">></span></p>
        </div>
      </div>

    </div>
</template>

<script>
  import {loginInfo} from '../api/axios'
  import {getToken} from "../utils/cookies";

  export default {
        name: "User",
      data() {
          return {
            userName: '',
            userPrice: '',
          }
      },
      created() {
        this.userInfo()
        console.log('user下的token',getToken('token'))
      },
      mounted() {

      },
      methods:{
        goLogin() {
          this.$router.push({name:'login'})
        },
        userInfo() {
          loginInfo(`token=${getToken('token')}&time=${new Date().getTime()}`).then((res) => {
            console.log(res)
            this.userPrice = res.data.data.money
            this.userName = res.data.data.phone
          })
        }
      }
    }
</script>

<style scoped lang="less">
  .line {
    width: 3.75rem;
    height: 0.06rem;
    background-color: #eee;
  }
  .user {
    .user-header {
      width: 3.75rem;
      height: 1.80rem;
      background: linear-gradient(-90deg,#fa4dbe,#fbaa58);
      .setting {
        display: inline-block;
        margin: 0.1rem;
        position: absolute;
        right: 0.1rem;
      }
      .user-pic {
        width: 0.83rem;
        height: 0.83rem;
        -webkit-background-size: cover;
        background-size: cover;
        box-shadow: 0 0 0 4px rgba(255,255,255,.3);
        border-radius: 50%;
        margin: 0.3rem 0 0 0.2rem;
        float: left;
      }
      .user-login {
        display: inline-block;
        float: left;
        width: 2rem;
        font-size: 0.16rem;
        margin-left: 0.2rem;
        margin-top: 0.6rem;
        a {
          color: white;
        }
      }
      .user-success-login {
        margin-top: 0.4rem;
        display: inline-block;
        padding-left: 0.18rem;
        color: white;
        font-size: 0.16rem;
        p:nth-of-type(2) {
          margin-top: 0.08rem;
          border-radius: 0.1rem;
          background-color: black;
          padding: 0.02rem 0.2rem;
          font-size: 0.14rem;
          color: #FCD5AE;
        }
      }
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
