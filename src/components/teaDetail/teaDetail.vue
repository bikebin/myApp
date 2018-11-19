<template>
    <div class="tea-detail">
      <div class="tea-header">
        <div v-if="true" class="tea-item1">
          <span class="tea-l"><</span>
          <span class="tea-r">○</span>
        </div>
        <div v-else class="tea-item2">
          <span class="tea-l"><</span>
          <p>
            <a @click="nowIndex = index" v-for="(item,index) in headerNavs" href="javascript:;">
              <span :class="{active:nowIndex === index}">{{item}}</span>
            </a>
          </p>
          <span class="tea-r">○</span>
        </div>
      </div>
      <div class="tea-swiper">
        <mt-swipe :auto="0">
          <mt-swipe-item><img src="//www.chawo.com/data/upload/shop/store/goods/2/2018/07/2_05861796928311315_360.jpg" alt=""></mt-swipe-item>
          <mt-swipe-item><img src="//www.chawo.com/data/upload/shop/store/goods/2/2018/07/2_05861800582640291_360.jpg" alt=""></mt-swipe-item>
          <mt-swipe-item><img src="//www.chawo.com/data/upload/shop/store/goods/2/2018/07/2_05861800614328452_360.jpg" alt=""></mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="tea-msg">
        <p class="tea-info">2017年大益 经典7542 1701批 生茶 150克/饼</p>
        <p class="tea-price">￥<span class="tea-num">42.00</span> <span class="tea-old-price">￥62.00</span><span class="tea-sale f-r">销量：1255饼 库存：93</span></p>
      </div>
      <div class="click-get-price">
        <span>点击询价</span>
      </div>
      <p class="tea-chose">已选 <span> 默认</span></p>
    </div>
</template>

<script>
    export default {
        name: "teaDetail",
      data() {
          return {
            headerNavs: ['商品','详情','评价'],
            nowIndex: 0
          }
      }
    }
</script>

<style scoped lang="less">
  .tea-detail {
    .tea-header {
      position: fixed;
      width: 3.75rem;
      height: 0.4rem;
      z-index: 100;
      .tea-item1 {
        position: relative;
        height: 0.4rem;
        /*background-color: yellow;*/
        .tea-l {
          position: absolute;
          font-size: 0.2rem;
          left: 0.1rem;
          top: 0.06rem;
        }
        .tea-r {
          position: absolute;
          font-size: 0.2rem;
          right: 0.1rem;
          top: 0.06rem;
        }
      }
      .tea-item2 {
        position: relative;
        height: 0.4rem;
        /*background-color: yellow;*/
        .tea-l {
          position: absolute;
          font-size: 0.2rem;
          left: 0.1rem;
          top: 0.06rem;
        }
        p {
          height: 0.4rem;
          line-height: 0.4rem;
          font-size: 0.16rem;
          text-align: center;
          a {
            padding: 0 0.1rem ;
            color: #000;
            span {
              display: inline-block;
              &.active {
                border-bottom: 0.02rem solid red;
                font-weight: bold;
                color: red;
              }
            }
          }

        }
        .tea-r {
          position: absolute;
          font-size: 0.2rem;
          right: 0.1rem;
          top: 0.06rem;
        }
      }
    }
    .tea-swiper {
      width: 3.75rem;
      height: 3.52rem;
      img {
        width: 3.52rem;
        height: 3.52rem;
        -webkit-background-size: cover;
        background-size: cover;
        margin-left: 0.108rem;
      }
    }
    .tea-msg {
      .tea-info {
        border-top: solid 0.02rem #EEE;
        font-size: 0.14rem;
        font-weight: 500;
        padding-left: 0.12rem;
        padding-top: 0.1rem;
        margin-bottom: 0.1rem;
      }
      .tea-price {
        padding: 0 0.12rem;
        font-size: 0.12rem;
        color: red;
        .tea-num {
          font-size: 0.18rem;
        }
        .tea-old-price {
          text-decoration:line-through;
          color: #ccc;
        }
        .tea-sale {
          color: black;
        }
      }
    }
    .click-get-price {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      width: 3.75rem;
      padding-left: 0.12rem;
      height: 0.4rem;
      margin-top: 0.02rem;
      border-bottom: 0.01rem solid #eee;
      span {
        display: inline-block;
        padding: 0.06rem 0.1rem;
        background: #ED5564;
        border-color: #9d3434;
        color: white;
        border-radius: 0.08rem;
      }
    }
    .tea-chose {
      padding-left: 0.12rem;
      height: 0.4rem;
      line-height: 0.4rem;
      span {
        border-radius: 0.04rem;
        padding: 0.02rem 0.03rem;
        border: 0.01rem solid #999;
      }
    }
  }
</style>
