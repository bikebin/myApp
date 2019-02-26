<template>
    <div class="foot">
      <div class="foot-nav">
        <router-link  class="link" :to="{name:'home'}">
          <div class="foot-item">
            <img :class="{active:$route.name== 'home'}" src="https://img.alicdn.com/imgextra/i1/2053469401/TB2GCzpnVkoBKNjSZFkXXb4tFXa-2053469401.png" alt="">
            <img  src="https://img.alicdn.com/imgextra/i4/2053469401/TB24KbjnZj_B1NjSZFHXXaDWpXa-2053469401.png" alt="">
          </div>
          <span :class="{colorRed:$route.name== 'home'}">{{$t('home.home')}}</span>
        </router-link>
        <router-link  class="link" :to="{name:'nineToNie'}">
          <div class="foot-item">
           <img :class="{active:$route.name== 'nineToNie'}" src="https://img.alicdn.com/imgextra/i4/2053469401/TB23GLTn77mBKNjSZFyXXbydFXa-2053469401.png" alt="">
           <img  src="https://img.alicdn.com/imgextra/i4/2053469401/TB2kBbrn_qWBKNjSZFAXXanSpXa-2053469401.png" alt="">
          </div>
          <span :class="{colorRed:$route.name== 'nineToNie'}">{{$t('nine.nine')}}</span>
        </router-link>
        <router-link  class="link" :to="{name:'sort'}">
         <div class="foot-item">
           <img :class="{active:$route.name== 'sort'}"  src="https://img.alicdn.com/imgextra/i2/2053469401/TB2nLTXn7omBKNjSZFqXXXtqVXa-2053469401.png" alt="">
           <img src="https://img.alicdn.com/imgextra/i1/2053469401/TB2y4_qnVkoBKNjSZFkXXb4tFXa-2053469401.png" alt="">
         </div>
         <span :class="{colorRed:$route.name== 'sort'}">{{$t('sort.sort')}}</span>
        </router-link>
        <router-link  class="link" :to="{name:'collection'}">
          <div class="foot-item">
            <img :class="{active:$route.name== 'collection'}"  src="https://img.alicdn.com/imgextra/i1/2053469401/TB26bEfnQZmBKNjSZPiXXXFNVXa-2053469401.png" alt="">
            <img  src="https://img.alicdn.com/imgextra/i2/2053469401/TB2b3cKnL6TBKNjSZJiXXbKVFXa-2053469401.png" alt="">
          </div>
          <span :class="{colorRed:$route.name== 'collection'}">{{$t('cart.cart')}}</span>
        </router-link>
        <router-link  class="link" :to="{name:'user'}">
          <div class="foot-item">
            <img :class="{active:$route.name== 'user'}" src="https://img.alicdn.com/imgextra/i3/2053469401/TB2WXrhqFkoBKNjSZFkXXb4tFXa-2053469401.png" alt="">
            <img  src="https://img.alicdn.com/imgextra/i2/2053469401/TB21aHkqRsmBKNjSZFFXXcT9VXa-2053469401.png" alt="">
          </div>
          <span :class="{colorRed:$route.name== 'user'}">{{$t('user.mine')}}</span>
        </router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Foot",
      data(){
        return {
          nowIndex: 0
        }
      },
      watch: {
        '$route' () {
          console.log(this.$route.name)

        }
      },
      mounted() {
        let a = document.getElementsByClassName("link")
        let as = [...a]
        let _this = this
        for(let i=0;i<as.length;i++){
          as[i].onclick = function(){
            _this.nowIndex = i
            // console.log(_this.nowIndex)
          }
        }
      }
    }
</script>

<style scoped lang="less">
  .active  {
    display: none
  }
  .colorRed {
    color: red
  }
  // .router-link-active {
  //   color: red;
  // }
  .foot {
    border: 1px solid #ccc;
    z-index: 1000;
    position: fixed;
    bottom: 0;
    background-color: #ffffff;
    .foot-nav {
      width: 3.75rem;
      height: 0.4rem;
      display: flex;

      .link {
        flex-grow: 1;
        flex-basis: 25%;
        text-align: center;
        .foot-item {
          width:0.26rem;
          height: 0.26rem;
          overflow: hidden;
          margin: auto;
          img {
            width: 0.26rem;
            height: 0.26rem;
            -webkit-background-size: cover;
            background-size: cover;
          }
        }
      }
      img {
        width: 0.24rem;
        height: 0.24rem;
        -webkit-background-size: cover;
        background-size: cover;
      }
    }
  }
</style>
