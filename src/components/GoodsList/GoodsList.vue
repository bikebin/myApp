<template>
    <div class="goods-list">
      <div class="goods" v-for="(item,index) in list" :key="index">
        <img v-lazy="item.pic" alt="">
        <div class="goods-list-info">
          <p class="goods-detail">{{item.d_title}}</p>
          <p class="goods-price"><span class="f-l">天猫价￥{{item.yuanjia}}</span><span class="f-r">已售{{item.xiaoliang | toFixTwo}}万件</span></p>
          <p class="goods-ticket"><span class="f-l pirce-col">券后价￥<span class="price-num">{{item.jiage}}</span></span><i class="f-r ticket">{{item.quan_jine}}元券</i></p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsList",
      props: {
        list: [Array]
      },
      data() {
          return {

          }
      },
      filters: {
          toFixTwo(val) {
            let getVal = val/10000
            return getVal.toFixed(2)
          }
      },
      created() {

      }
    }
</script>

<style scoped lang="less">
  .goods-list {
    width: 3.55rem;
    height: 1.45rem;
    padding: 0 0.1rem;
    /*background-color: orange;*/
   .goods {
     height: 100%;
     img {
       float: left;
       width: 1.26rem;
       height: 1.26rem;
       margin-top: 0.08rem;
       -webkit-background-size: cover;
       background-size: cover;
     }
     img[lazy=loading] {
       width: 1.26rem;
       height: 1.26rem;
       margin: auto;
       background-color: #eee;
       /*background: url("../../assets/images/pic-person/loading (1).gif");*/
       -webkit-background-size: cover;
       background-size: cover;
     }
     .goods-list-info {
       width: 2.2rem;
       display: inline-block;
       float: left;
       margin-left: 0.08rem;
       margin-top: 0.12rem;
       color: #333;
       .goods-detail {
         width: 100%;
         font-size: 0.14rem;
         padding-left: 0.04rem;
         text-overflow: ellipsis;
         display: -webkit-box;
         -webkit-line-clamp: 2;
         -webkit-box-orient: vertical;
       }
       .goods-price {
         padding-left: 0.04rem;
         font-size: 0.12rem;
         color: #aaa;
         margin-top: 0.32rem;
         height: 0.2rem;
       }
       .goods-ticket {
         padding-left: 0.04rem;
         font-size: 0.12rem;
         margin-top: 0.1rem;
         height: 0.2rem;
         .price-num {
           font-size: 0.16rem;
           color: red;
         }
         .pirce-col {
           color: red;
         }
         .ticket {
           position: relative;
           display: inline-block;
           width: 0.6rem;
           height: 0.22rem;
           background: linear-gradient(to left,#FF5E5E 0,#FF927C 100%);
           border-radius: 0.04rem;
           text-align: center;
           font-style: normal;
           line-height: 0.22rem;
           color: white;
           font-size: 0.1rem;
           &:before {
             content: '';
             position: absolute;
             top: 50%;
             left: -0.05rem;
             margin-top: -0.05rem;
             width: 0.1rem;
             height: 0.1rem;
             border-radius: 50%;
             background-color: #ffffff;
           }
           &:after {
             content: '';
             position: absolute;
             top: 50%;
             left: 0.55rem;
             margin-top: -0.05rem;
             width: 0.1rem;
             height: 0.1rem;
             border-radius: 50%;
             background-color: #ffffff;
           }
         }

       }
     }
   }
  }
</style>
