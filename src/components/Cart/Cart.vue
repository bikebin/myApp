<template>
    <div class="cart">
      <div class="cart-item">
        <input class="cart-check f-l" type="checkbox">
        <div class="cart-pic f-l">
          <img src="//www.chawo.com/data/upload/shop/store/goods/2/2017/12/2_05671890230647455_240.jpg" alt="">
        </div>
        <div class="cart-buy-detail f-l">
          <p>2017年中茶7581单片装熟茶 250克/砖<span>垃圾桶</span></p>
          <div>
            <p class="cart-price">￥98</p>
            <div class="goods-num">
              <div class="f-r">
                <span>-</span>
                <input type="text" value="1">
                <span>+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Cart"
    }
</script>

<style scoped lang="less">
  .cart {
    .cart-item {
      width: 3.55rem;
      height: 1.03rem;
      padding: 0.1rem 0.1rem;
      .cart-pic {
        display: inline-block;
        width: 0.7rem;
        height: 0.7rem;
        img {
          width: 0.53rem;
          height: 0.53rem;
          -webkit-background-size: cover;
          background-size: cover;
        }
      }
      .cart-buy-detail {
        display: inline-block;
        width: 2.7rem;
        height: 1.03rem;
        .cart-price {
          display: inline-block;
        }
        .goods-num {
          height: 0.4rem;
          margin: 0 auto;
          padding: 0.12rem 0 0.06rem;
          p {
            display: inline-block;
            font-size: 0.14rem;
            line-height: 0.34rem;
          }
          div {
            width: 0.9rem;
            height: 0.3rem;
            display: inline-block;
            border: 1px solid #ccc;
            border-radius: 0.04rem;
            span {
              display: inline-block;
              width: 0.17rem;
              text-align: center;
              line-height: 0.3rem;
              height: 0.3rem;
              padding: 0 0.04rem;
              font-size: 0.18rem;
            }
            input {
              text-align: center;
              vertical-align: top;
              width: 0.3rem;
              height: 0.3rem;
              border-top: none;
              border-bottom: none;
              border-left: 1px solid #ccc;
              border-right: 1px solid #ccc;
            }
          }
        }
      }
    }

  }
</style>
