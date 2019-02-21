<template>
    <div class="sort">
      <mt-header class="login-header clearfix" title="购物车">
        <router-link to='/nineToNie'  slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="sort-content">
        {{$t('user.collect')}}
        <div class="shopping-name">
          <input type="checkbox" :checked="checkedALL"  v-model="checkedALL">
          <span>茶窝网</span>
        </div>
        <div>
          <span>免运费</span>
          <span>满99免运费</span>
        </div>
        <Cart :cartlist="cartLists"></Cart>
      </div>
      <div class="foot-detail">
        <ul>
          <li>合计总金额：￥<span>{{this.checkedALL?`${total}`:'0.00'}}</span></li>
          <li >确认信息</li>
        </ul>
      </div>
    </div>
</template>

<script>
  import Cart from '../components/Cart/Cart'
  import { mapGetters } from 'vuex'
    export default {
        name: "collection",
      components: {
        Cart
      },
      data() {
          return {
            cartLists: [],
            checkedALL: true
        }
      },
      watch: {

      },
      created() {
        this.cartLists = this.$store.state.added
        console.log('购物内容',this.$store.state.added)
      },
      methods: {
        goBack() {
          this.$router.back(-1)
        }

      },
      computed: {
        ...mapGetters(['total'])
        // totalPrice() {
        //   return this.$store.getters.total
        // }
      }
    }
</script>

<style scoped lang="less">
  .sort {
    .mint-header {
      background: linear-gradient(to left,#FA4DBE 0,#FBAA58 100%) !important;
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
    }
    .sort-content {
      position: fixed;
      width: 3.75rem;
      top: 0.4rem;
      height: 5.8rem;
      overflow: auto;
    }
    .shopping-name {
      width: 3.75rem;
      height: 0.5rem;
      line-height: 0.5rem;
      border-bottom: 0.01rem solid #eee;
    }
    .foot-detail {
      width:3.75rem;
      height: 0.45rem;
      position: fixed;
      bottom: 0;
      z-index: 1004;
      background-color: #ffffff;
      ul {
        display: flex;
        flex-direction: row;
        border-top: 0.01rem solid #ccc;
        li {
          height: 0.45rem;
          padding-right: 0.08rem;
          line-height: 0.45rem;
          flex-grow: 1;
          color: #000000;
          text-align: right;
          span {
            font-size: 0.2rem;
            color: red;
            font-weight: 700;
          }
        }
        li:nth-of-type(2){
          flex-grow: 1;
          flex-basis: 0.08rem;
          font-size: 0.16rem;
          line-height: 0.45rem;
          color: white;
          background-color: red;
          font-weight: 700;
          text-align: center;
        }

      }
    }
  }
</style>
