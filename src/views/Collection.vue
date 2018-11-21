<template>
    <div class="sort">
      <mt-header class="login-header clearfix" title="购物车">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="sort-content">
        <div class="shopping-name">
          <input type="checkbox">
          <span>茶窝网</span>
        </div>
        <div>
          <span>免运费</span>
          <span>满99免运费</span>
        </div>
        <Cart></Cart>
        <Cart></Cart>
      </div>
    </div>
</template>

<script>
  import Cart from '../components/Cart/Cart'
    export default {
        name: "collection",
      components: {
        Cart
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
      height: 5rem;
      overflow: auto;
    }
    .shopping-name {
      width: 3.75rem;
      height: 0.5rem;
      line-height: 0.5rem;
      border-bottom: 0.01rem solid #eee;
    }
  }
</style>
