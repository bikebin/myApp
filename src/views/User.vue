<template>
  <!--<transition enter-active-class="fadeIn" leave-active-class="fadeOut">-->
    <div class="animated user">
      <div class="user-header">
        <span @click="gotoSetting" class="setting">设置</span>
        <img class="user-pic" src="http://cmsstatic.dataoke.com//wap_new/user/images/user_info_tx.png?v=201811131628" alt="">
        <div v-if="userName"  class="user-success-login">
          <p>{{userName | hideNumber}}</p>
          <p>欢迎━(*｀∀´*)ノ亻!</p>
        </div>
        <p v-else v-cloak  class="user-login"><a @click="goLogin" href="javascript:;">{{loginAndRegister}}</a></p>
      </div>
      <div class="user-content">
        <div class="user-type">
          <img src="http://cmsstatic.dataoke.com//wap_new/user/images/icon/wode_icon_like.svg" alt="">
          <p><span @click="gofile">{{$t('user.collect')}}</span><span class="user-san f-r">></span></p>
        </div>
        <div class="user-type">
          <img src="http://cmsstatic.dataoke.com//wap_new/user/images/icon/wode_icon_history.svg" alt="">
          <p><span @click="goHistory">{{$t('user.history')}}</span><span class="user-san f-r">></span></p>
        </div>
        <div class="line"></div>
        <div class="user-type">
          <img src="http://cmsstatic.dataoke.com//wap_new/user/images/icon/wode_icon_feedback.svg" alt="">
          <p><span>{{$t('user.Feedback')}}</span><span class="user-san f-r">></span></p>
        </div>
        <div class="user-type">
          <img src="http://cmsstatic.dataoke.com//wap_new/user/images/icon/wode_icon_servicer.svg" alt="">
          <p><span>{{$t('user.CustomerService')}}</span><span class="user-san f-r">></span></p>
        </div>
        <div class="user-type">
          <img src="http://cmsstatic.dataoke.com//wap_new/user/images/icon/wode_icon_help.svg" alt="">
          <p><span>{{$t('user.CollarHelp')}}</span><span class="user-san f-r">></span></p>
        </div>
         <div class="user-type">
          <select @change="changeLang(lang)" name="" id="" v-model="lang">
            <option value="ien">Englisth</option>
            <option value="izh">中文</option>
          </select>
        </div>
      </div>
      <History ref="history" ></History>
      <userSetting ref="userSetting" @remove="remove"></userSetting>
    </div>
  <!--</transition>-->
</template>

<script>
  import {loginInfo} from '../api/axios'
  import {getToken} from "../utils/cookies";
  import iView from 'iview'
  import History from  './user/history'
  import userSetting from  './user/userSetting'

  export default {
        name: "User",
        components: {
          History,
          userSetting
        },
      data() {
          return {
            showHistory: false,
            lang: '',
            userName: '',
            userPrice: '',
            flagSetting: false,
            loginAndRegister: '',
            
          }
      },
      beforeRouteEnter (to, from, next) {
       //this//获取不到当前组件
        next(function(vm){
          //该回调函数会在组件解析完成后回调6
       });
      },
      beforeRouteLeave(to,from,next){//离开组件的时候触发
        //什么都不写的时候，不会离开(走下一步)
        next()
      },
      watch: {
        '$route'() {

        },
        lang(v) {

        }
      },
      created() {
        // debu
        this.userName = getToken('name')
        let assi = Object.assign({},this.ass,this.ass1)
        console.log('assi',assi)
        if(this.$i18n.locale == 'izh') {
          this.lang = 'izh'
        }else {
          this.lang = 'ien'
        }
        this.userInfo()
      },
      mounted() {

      },
      methods:{
        remove(v) {
          this.userName = v
        },
        changeLang(v) {
            const locale = this.$i18n.locale = v
            iView.locale = locale
        },
        goLogin() {
          this.$router.push({name:'login'})
        },
        goHistory() {
          this.$refs.history.show() 
        },
        userInfo() {
          loginInfo(`key=${getToken('token')}`).then((res) => {
            console.log(res)
            this.loginAndRegister = '登录/注册'
            this.userPrice = res.data.datas.member_info.level_name
            this.userName = res.data.datas.member_info.user_name ||''
          })
        },
        gotoSetting() {
           this.$refs.userSetting.show() 
        },
        gofile() {
          this.$router.push({name: "file"})
        }
      }
    }
</script>

<style scoped lang="less">
  [v-cloak] {
    display: none;
  }
  .animated {
    animation-duration: 0.5s;
  }
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
