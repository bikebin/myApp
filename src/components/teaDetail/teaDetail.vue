<template>
    <div class="tea-detail">
      <div class="tea-header">
        <div v-if="flag" class="tea-item1">
          <span @click="goBack" class="tea-l"><</span>
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
      <div ref="scroll" class="tea-content">
        <div class="tea-swiper">
          <mt-swipe :auto="0">
            <mt-swipe-item v-for="(item,index) in imgList" :key="index"><img :src="item" alt=""></mt-swipe-item>
          </mt-swipe>
        </div>
        <div class="tea-msg">
          <p class="tea-info">{{goodsAllDetail.goods_name}}</p>
          <p class="tea-price">￥<span class="tea-num">{{goodsAllDetail.goods_price}}</span> <span class="tea-old-price">￥{{goodsAllDetail.goods_marketprice}}</span><span class="tea-sale f-r">销量：{{goodsAllDetail.sale_count}}饼 库存：{{goodsAllDetail.goods_storage}}</span></p>
        </div>
        <div class="click-get-price">
          <span>点击询价</span>
        </div>
        <p class="tea-chose">已选 <span class="tea-default "> 默认</span><strong class="line-san f-r">></strong></p>
        <div class="line"></div>
        <div class="tea-rate">
          <p class="rate-header">
            <span>商品评价</span>
            <span>好评率100%</span>
            <span class="f-r">({{goodsRating.length}}人评价) <span class=""> > </span></span>
          </p>
          <div v-for="(item,index) in goodsRating" :key="index" class="hot-rate">
            <span>★★★★</span>
            <p>{{item.geval_content}}</p>
          </div>
        </div>
      </div>
      <div class="foot-detail">
        <ul>
          <li>首页</li>
          <li>收藏</li>
          <li>客服</li>
          <li @click="goCart">购物车</li>
          <li @click="popbuy">立即购买</li>
          <li @click="popbuy">加入购物车</li>
        </ul>
      </div>
      <!--弹框-->
      <mt-popup v-model="popupVisible" position="bottom">
        <div class="pop-buyInfo">
          <div class="goods-info">
            <img src="//www.chawo.com/data/upload/shop/store/goods/2/2018/07/2_05861796928311315_360.jpg" alt="">
            <div class="goods-detail">
              <p>2017年大益经典发放批生茶150克/饼</p>
              <p><span class="goods-price">￥42.00</span><span class="f-r">库存：27</span></p>
            </div>
          </div>
          <div class="pop-buy-count">
            <p>购买数量</p>
            <div class="goods-num f-r">
              <div class="f-r">
                <span @click="reduce">-</span>
                <input type="text" value="" v-model="val">
                <span @click="add">+</span>
              </div>
            </div>
          </div>
          <div class="pop-foot">
            <span @click="joinCart">立即购买</span>
            <span @click="joinCart">加入购物车</span>
          </div>
        </div>
      </mt-popup>
    </div>
</template>

<script>
  import {goodsDetail} from '../../api/axios'
  import {getToken} from "../../utils/cookies";
  import { Indicator } from 'mint-ui';
    export default {
        name: "teaDetail",
      data() {
          return {
            headerNavs: ['商品','详情','评价'],
            nowIndex: 0,
            imgList: [],
            goodsAllDetail: [],
            goodsRating: [],
            flag: true,
            popupVisible: false,
            val: 1,
            // goodsList:[]
          }
      },
      created() {
        Indicator.open({
          text: '加载中...',
          spinnerType: 'fading-circle'
        });
        this.getGoodsDetail()
      },
      mounted() {
        console.log('滚动高度',this.$refs.scroll.scrollTop)
        this.$refs.scroll.onscroll = () => {
          if(this.$refs.scroll.scrollTop > 50) {
            this.flag = false
          }else {
            this.flag = true
          }
        }
      },
      methods: {
        goBack() {
          this.$router.back(-1)
        },
        getGoodsDetail() {
          goodsDetail(this.$route.params.id).then((res) => {
            Indicator.close();
            // console.log('商品详细信息',res.data.datas)
            this.goodsAllDetail = res.data.datas.goods_info
            this.goodsRating = res.data.datas.goods_eval_list
            this.imgList = res.data.datas.goods_image.split(',')
          }).catch((err) => {
            console.log(err)
          })
        },
        popbuy() {
          this.popupVisible = true
        },
        goCart() {
          this.$router.push({name:'collection',params:{id:1}})
        },
        add() {
          this.val++
        },
        reduce() {
          if(this.val < 2) {
            this.val = 1
          }else {
            this.val--
          }
        },
        joinCart() {
          let token = getToken('token')
          this.popupVisible = false
          let val = {
            id:this.$route.params.id,
            num:this.val,
            price:this.goodsAllDetail.goods_price,
            name:this.goodsAllDetail.goods_name,
            pic:this.imgList[0],
            checked:true
          }
          if(token) {
            this.$set(val,'type',0)
            this.$store.commit('GOODS_ADD',val)
          }else {
            this.$router.push({name: 'login'})
          }
          
          // console.log('购物内容',this.$store.state.added)
        }
      },
      computed: {
        // goods() {
        //   return this.$store.state.added
        //
        // }
      }
    }
</script>

<style scoped lang="less">
  .line {
    width: 3.75rem;
    height: 0.12rem;
    background-color: #f5f5f5;
  }
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
        z-index: 2000;
        background-color: white;
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
            padding: 0 0.1rem;
            color: #ccc;
          }
          span {
              display: inline-block;
              &.active {
                border-bottom: 0.02rem solid red;
                font-weight: bold;
                color: red;
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
    .tea-content {
      position: fixed;
      top: 0;
      left: 0;
      width: 3.75rem;
      height: 6.25rem;
      bottom: 0.4rem;
      overflow: auto;
      overflow-x: hidden;
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
        margin-left: 0.12rem;
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
        width: 3.75rem;
        margin: 0 0.12rem;
        height: 0.4rem;
        line-height: 0.4rem;
        span {
          border-radius: 0.04rem;
          padding: 0.02rem 0.03rem;
          border: 0.01rem solid #999;
        }
        .line-san {
          font-size: 0.16rem;
          color: #ccc;
        }
      }
      .tea-rate {
        width: 3.51rem;
        height: 2.18rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        margin: 0 0.12rem;
        .rate-header {
          padding: 0.12rem 0;
          font-size: 0.14rem;
          border-bottom: 0.01rem solid #eee;
          span:nth-of-type(2) {
            color: red;
            font-size: 0.12rem;
          }
          span:nth-of-type(3) {
            font-size: 0.13rem;
            color: #ccc;
            span {
              font-size: 0.16rem;
              color: #ccc;
            }
          }
        }
        .hot-rate {
          padding-top: 0.04rem;
          width: 3.51rem;
          height: 0.5rem;
          border-bottom: 0.01rem solid #eee;
          span {
            font-size: 0.16rem;
            color: red;
          }
          p {
            height: 0.3rem;
            line-height: 0.25rem;
          }
        }
      }
    }
    .foot-detail {
      width:3.75rem;
      height: 0.45rem;
      position: fixed;
      bottom: 0;
      z-index: 1001;
      background-color: #ffffff;
      ul {
        display: flex;
        flex-direction: row;
        border-top: 0.01rem solid #ccc;
        li {
          height: 0.45rem;
          text-align: center;
          line-height: 0.55rem;
          flex-grow: 1;
        }
        li:nth-of-type(5), li:nth-of-type(6){
          flex-grow: 2;
          font-size: 0.16rem;
          line-height: 0.45rem;
          color: white;
          background-color: red;
          font-weight: 700;
        }
        li:nth-of-type(6) {
          background-color: orange;
        }
      }
    }
    .pop-buyInfo {
      width: 3.75rem;
      height: 3rem;
      .goods-info {
        width: 3.75rem;
        height: 0.8rem;
        border-bottom: 0.1rem solid #eee;
        img {
          width: 0.66rem;
          height: 0.66rem;
          -webkit-background-size: cover;
          background-size: cover;
        }
        .goods-detail {
          display: inline-block;
          width: 3rem;
          vertical-align: top;
          padding-top: 0.1rem;
          p:nth-of-type(1) {
            font-size: 0.13rem;
            margin-bottom: 0.1rem;
          }
          p:nth-of-type(2) {
            padding-right: 0.06rem;
          }
          .goods-price {
            color: red;
            font-size: 0.16rem;
          }
        }

      }
      .pop-buy-count {
        width: 3.55rem;
        height: 0.4rem;
        padding: 0 0.1rem;
        line-height: 0.4rem;
        font-size: 0.14rem;
        p {
          display: inline-block;
        }
        .goods-num {
          width: 2rem;
          display: inline-block;
          height: 0.4rem;
          margin: 0 auto;
          padding: 0.12rem 0 0.06rem;
          vertical-align: top;
          p {
            display: inline-block;
            font-size: 0.14rem;
            line-height: 0.34rem;
          }
          div {
            width: 0.91rem;
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
              vertical-align: top;
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
      .pop-foot {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 2rem;
        height: 0.44rem;
        span {
          display: inline-block;
          width: 1rem;
          height: 0.44rem;
          background-color: red;
          float: left;
          text-align: center;
          line-height: 0.44rem;
          font-size: 0.16rem;
          font-weight: bold;
          color: white;
        }
        span:nth-of-type(2) {
          background-color: orange;
        }
      }
    }
  }

</style>
