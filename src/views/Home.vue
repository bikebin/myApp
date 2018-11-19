<template>
  <!--<transition enter-active-class="fadeIn" leave-active-class="fadeOut">-->
    <div class="animated home">
      <div class="home-header">
        <input class="home-search" type="text">
        <span class="search-icon">搜索</span>
      </div>
      <div class="home-nav clearfix">
        <ul>
          <li class="nav-style" v-for="(item,index) in goodNavs" :key="index"><a @click="clickIndex=index" :class="{'home-navActive':index === clickIndex}" href="javascript:;">{{item.name}}</a></li>
        </ul>
        <a @click="changeType" class="san" href="javascript:;">∨</a>
      </div>
      <div  :class="popupVisible?'home-navs-list':'home-navs-list1'">
        <ul v-show="popupVisible">
          <li class="nav-style" v-for="(item,index) in goodNavs" :key="index"><a @click="clickIndex=index" :class="{'home-navActive':index === clickIndex}" href="javascript:;">{{item.name}}</a></li>
        </ul>
      </div>
      <div class="home-content">
        <div class="home-swiper">
          <mt-swipe :auto="4000">
            <mt-swipe-item><img src="https://img.alicdn.com/imgextra/i1/2053469401/O1CN01Bu3M3N2JJht8MKq9z-2053469401.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="https://img.alicdn.com/imgextra/i4/2053469401/O1CN01L4bP1w2JJht3FyQ0R-2053469401.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN01QxZmlz2JJht33PLCV-2053469401.gif" alt=""></mt-swipe-item>
          </mt-swipe>
        </div>
        <div class="home-pic-move">
          <img src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN01NCIUCV2JJhszBpV2g-2053469401.gif" alt="">
        </div>
        <div class="home-chose">
          <ul>
            <li><img src="https://img.alicdn.com/imgextra/i1/2053469401/O1CN012JJhszFEuW0xYCr-2053469401.png" alt=""><a href="javascript:;">9.9包邮</a></li>
            <li><img src="https://img.alicdn.com/imgextra/i2/2053469401/O1CN012JJht06byZWWUR2-2053469401.png" alt=""><a href="javascript:;">疯抢排行</a></li>
            <li><img src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN012JJht0fSFa60HYQ-2053469401.png" alt=""><a href="javascript:;">预售精选</a></li>
            <li><img src="https://img.alicdn.com/imgextra/i1/2053469401/O1CN012JJht0xeMyJmngA-2053469401.png" alt=""><a href="javascript:;">咚咚锵</a></li>
            <li><img src="https://img.alicdn.com/imgextra/i2/2053469401/O1CN01418XHd2JJht06aq13-2053469401.png" alt=""><a href="javascript:;">聚拼团</a></li>
          </ul>
        </div>
        <div class="home-title">
          <p>
            <span class="f-l home-left-title"><span></span> 大家都在领</span>
            <span class="f-r"><span class="home-right-number">324242</span>次实时领券</span>
          </p>
        </div>
        <div class="home-swiper1">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div>
                  <img src="https://img.alicdn.com/imgextra/i4/358430221/O1CN011DVFzrMSBduGrDo_!!358430221.jpg_310x310.jpg" alt="">
                  <p class="goods-sale clearfix">5.4万人已领 &nbsp; | &nbsp;20元券</p>
                  <p class="goods-tip">微润旗舰店法式哈哈哈哈哈哈</p>
                  <p class="price"><span class="jiao">￥</span><span class="now-price">49.9</span> <span class="old-price">￥69.9</span></p>
                  <div class="goods-line">
                    <div class="goods-liveLine"></div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div>
                  <img src="https://img.alicdn.com/imgextra/i4/358430221/O1CN011DVFzrMSBduGrDo_!!358430221.jpg_310x310.jpg" alt="">
                  <p class="goods-sale clearfix">5.4万人已领 &nbsp; | &nbsp;20元券</p>
                  <p class="goods-tip">微润旗舰店法式哈哈哈哈哈哈</p>
                  <p class="price"><span class="jiao">￥</span><span class="now-price">49.9</span> <span class="old-price">￥69.9</span></p>
                  <div class="goods-line">
                    <div class="goods-liveLine"></div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div>
                  <img src="https://img.alicdn.com/imgextra/i4/358430221/O1CN011DVFzrMSBduGrDo_!!358430221.jpg_310x310.jpg" alt="">
                  <p class="goods-sale clearfix">5.4万人已领 &nbsp; | &nbsp;20元券</p>
                  <p class="goods-tip">微润旗舰店法式哈哈哈哈哈哈</p>
                  <p class="price"><span class="jiao">￥</span><span class="now-price">49.9</span> <span class="old-price">￥69.9</span></p>
                  <div class="goods-line">
                    <div class="goods-liveLine"></div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div>
                  <img src="https://img.alicdn.com/imgextra/i4/358430221/O1CN011DVFzrMSBduGrDo_!!358430221.jpg_310x310.jpg" alt="">
                  <p class="goods-sale clearfix">5.4万人已领 &nbsp; | &nbsp;20元券</p>
                  <p class="goods-tip">微润旗舰店法式哈哈哈哈哈哈</p>
                  <p class="price"><span class="jiao">￥</span><span class="now-price">49.9</span> <span class="old-price">￥69.9</span></p>
                  <div class="goods-line">
                    <div class="goods-liveLine"></div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div>
                  <img src="https://img.alicdn.com/imgextra/i4/358430221/O1CN011DVFzrMSBduGrDo_!!358430221.jpg_310x310.jpg" alt="">
                  <p class="goods-sale clearfix">5.4万人已领 &nbsp; | &nbsp;20元券</p>
                  <p class="goods-tip">微润旗舰店法式哈哈哈哈哈哈</p>
                  <p class="price"><span class="jiao">￥</span><span class="now-price">49.9</span> <span class="old-price">￥69.9</span></p>
                  <div class="goods-line">
                    <div class="goods-liveLine"></div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div>
                  <img src="https://img.alicdn.com/imgextra/i4/358430221/O1CN011DVFzrMSBduGrDo_!!358430221.jpg_310x310.jpg" alt="">
                  <p class="goods-sale clearfix">5.4万人已领 &nbsp; | &nbsp;20元券</p>
                  <p class="goods-tip">微润旗舰店法式哈哈哈哈哈哈</p>
                  <p class="price"><span class="jiao">￥</span><span class="now-price">49.9</span> <span class="old-price">￥69.9</span></p>
                  <div class="goods-line">
                    <div class="goods-liveLine"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="home-hotSale">
          <img class="hotSalePic" src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN012JJhryP9QaIOXEn-2053469401.jpg" alt="">
          <p class="hotSale-title">经典国货-百雀羚</p>
          <p class="hotSale-info">传承岁月里的东方之美</p>
          <div class="hotSale-goods">
            <div>
              <img class="hotSale-pic" src="https://img.alicdn.com/imgextra/i4/3050350871/O1CN01rjZ90x1IIxRsRvnNK_!!3050350871.jpg_310x310.jpg" alt="">
              <p class="hotSale-ticket">新券！百雀羚</p>
              <p class="price"><span class="jiao">￥</span><span class="now-price">49.9</span> <span class="old-price">￥69.9</span></p>
            </div>
            <div>
              <img class="hotSale-pic" src="https://img.alicdn.com/imgextra/i4/3050350871/O1CN01rjZ90x1IIxRsRvnNK_!!3050350871.jpg_310x310.jpg" alt="">
              <p class="hotSale-ticket">新券！百雀羚</p>
              <p class="price"><span class="jiao">￥</span><span class="now-price">49.9</span> <span class="old-price">￥69.9</span></p>
            </div>
            <div>
              <img class="hotSale-pic" src="https://img.alicdn.com/imgextra/i4/3050350871/O1CN01rjZ90x1IIxRsRvnNK_!!3050350871.jpg_310x310.jpg" alt="">
              <p class="hotSale-ticket">新券！百雀羚</p>
              <p class="price"><span class="jiao">￥</span><span class="now-price">49.9</span> <span class="old-price">￥69.9</span></p>
            </div>
          </div>
        </div>
        <div class="home-title">
          <p>
            <span class="f-l home-left-title"><span></span> 领券直播</span>
            <span class="f-r">今日以为用户省钱<span class="home-right-number">3213131</span></span>
          </p>
        </div>
        <goodsList :list="goodsList" ></goodsList>
      </div>
    </div>
  <!--</transition>-->
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
  import goodsList from '../components/GoodsList/GoodsList'
  import {getNacList,getGoodsList} from '../api/axios'
     export default {
        name: "Home",
       data() {
          return {
            popupVisible: false,
            clickIndex: 0,
            goodNavs: [],
            goodsList: []
          }
       },
       components: {
         goodsList
        },
       created() {
          this.getNavs()
          this.getGoods()
         setTimeout(() => {
           this.popupVisible = false
         },100)
       },
       mounted() {
         var swiper = new Swiper('.swiper-container', {
           slidesPerView: 3,
           spaceBetween: 68
         });
       },
       methods: {
          getNavs() {
            getNacList('r=class/type').then((res) => {
              this.goodNavs = res.data.data
              console.log('商品导航菜单',res.data)
            })
          },
         getGoods() {
           getGoodsList(`r=index/ajaxnew&page=1`).then((res) => {
             this.goodsList = res.data.data.data
             // console.log('商品列表详情',this.goodsList)
           })
         },
         changeType() {
            this.popupVisible = !this.popupVisible
         }
       }
     }

</script>

<style scoped lang="less">
  .animated {
    animation-duration: 0.5s;
  }
  .price {
    margin-top: 0.02rem;
    font-size: 0.12rem;
    text-align: left;
    padding: 0 0.08rem;
    .jiao {
      font-size: 0.1rem;
      color: red;
    }
    .now-price {
      font-size: 0.14rem;
      color: red;
    }
    .old-price {
      color: #999;
      text-decoration:line-through
    }
  }
  .home {
   margin-bottom: 0.4rem;
    .home-header {
      height: 0.45rem;
      background: linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);
      .home-search {
        display: inline-block;
        width: 3.12rem;
        height: 0.3rem;
        margin: 0.08rem 0.05rem 0 0.1rem;
        border-radius: 0.2rem;
        border: 0;
        outline: none;
        padding-left: 0.08rem;
      }
      .search-icon {
        font-size: 0.14rem;
        color: white;
      }
    }
    .home-nav {
      width: 3.75rem;
      height: 0.4rem;
      overflow: hidden;
      background-color: #fff;
      position: sticky;
      top: 0;
      z-index: 100;
      clear: both;
      ul {
        .nav-style {
          display: inline-block;
          float: left;
          width: 0.65rem;
          text-align: center;
          height: 0.4rem;
          line-height: 0.4rem;
          font-size: 0.14rem;
          a {
            display: inline-block;
            height: 0.39rem;
            line-height: 0.4rem;
            color: #999;
            &.home-navActive {
              color: #FC3F78;
              border-bottom: 1px solid #FC3F78;
            }
          }
        }
      }
      .san {
        display: inline-block;
        margin: 0.06rem 0 0 0.2rem;
        font-size: 0.2rem;
        color: #ccc;
      }
    }
    .home-content {
      width: 3.75rem;
      height: 5.4rem;
      position: fixed;
      overflow: auto;

      .home-swiper {
        width: 3.75rem;
        height: 1.2rem;
        img {
          width: 3.75rem;
          height: 1.2rem;
          -webkit-background-size: cover;
          background-size: cover;
        }
      }
      .home-pic-move {
        width: 3.75rem;
        height: 0.93rem;
        img {
          width: 3.75rem;
          height: 0.93rem;
          -webkit-background-size: cover;
          background-size: cover;
        }
      }
      .home-chose {
        width: 3.75rem;
        height: 1.16rem;
        background: url('https://img.alicdn.com/imgextra/i4/2053469401/O1CN01OrIXNh2JJhszlR9Gz-2053469401.gif');
        background-size: cover;
        ul {
          display: flex;
          flex-direction: row;
          li {
            flex-grow: 1;
            padding-top: 0.06rem;
            text-align: center;
            height: 1.10rem;
            img {
              width: 0.6rem;
              height: 0.6rem;
              padding: 0 0.04rem;
              -webkit-background-size: cover;
              background-size: cover;
            }
          }
        }
      }
      .home-title {
        width: 3.75rem;
        height: 0.24rem;
        padding-top: 0.14rem;
        p {
          padding: 0 0.12rem;
          .home-left-title {
            font-size: 0.14rem;
            span {
              display: inline-block;
              width: 0.02rem;
              height: 0.12rem;
              background-color: #FC4D52;
              vertical-align: top;
              margin-top: 0.04rem;
              margin-right: 0.02rem;
            }
          }
          .home-right-number {
            color: #FC4D52;
            font-size: 0.14rem;
          }
        }
      }
      .home-swiper1 {
        height: 1.86rem;
        margin-bottom: 0.04rem;
        border-bottom: 0.1rem solid #F5F5F5;
        .swiper-container {
          width: 100%;
          height: 100%;
        }
        .swiper-slide:nth-of-type(1) {
          margin-left:0.12rem;
        }
        .swiper-slide {
          width: 1.4rem !important;
          margin-right: 0.1rem !important;
          height: 1.86rem;
          /*background-color: pink;*/
          text-align: center;
          font-size: 18px;
          box-shadow: 0 2px 10px 0 rgba(0,0,0,.1);
          border-radius: 4px;

          /* Center slide text vertically */
          display: -webkit-box;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          -webkit-justify-content: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          /*-webkit-align-items: center;*/
          /*align-items: center;*/
          div {
            width: 100%;
            position: relative;
            margin: 0 auto;
            text-align: center;
            img {
              width: 1.2rem;
              height: 1.2rem;
              margin-left: 0.09rem;
              -webkit-background-size: cover;
              background-size: cover;
              margin-top: 0.1rem;
              display: block;
            }
            .goods-sale {
              width: 90%;
              height: 0.21rem;
              line-height: 0.21rem;
              display: inline-block;
              color: white;
              border-radius: 6px;
              text-align: center;
              font-size: 0.1rem;
              position: absolute;
              top: 1.2rem;
              left: 0.06rem;
              background: linear-gradient(to left,rgba(255,113,233,.91) 0,rgba(254,92,158,.91) 100%);
            }
            .goods-tip {
              overflow: hidden;
              text-overflow:ellipsis;
              white-space: nowrap;
              font-size: 0.14rem;
              margin-top: 0.14rem;
              padding: 0 0.08rem;
              color: #999;
            }
            .goods-line {
              width: 100%;
              height: 0.016rem;
              background-color: pink;
              .goods-liveLine {
                background-color: deeppink;
                width: 60%;
                margin-left: 0;
                height: 0.016rem;
              }
            }
          }

        }
      }
      .home-hotSale {
        width: 3.75rem;
        height: 2.6rem;
        background: url("https://img.alicdn.com/imgextra/i3/2053469401/O1CN012JJhsPXlQ4eNpxB-2053469401.jpg");
        -webkit-background-size: 100% ;
        background-size: 100% ;
        .hotSalePic {
          display: inline-block;
          float: left;
          width: 0.69rem;
          height: 0.69rem;
          -webkit-background-size: cover;
          background-size: cover;
          margin: 0.13rem;
        }
        .hotSale-title {
          display: inline-block;
          width: 1.8rem;
          font-size: 0.16rem;
          font-weight: bold;
          margin-top: 0.12rem;
          color: rgb(51,51,51);
        }
        .hotSale-info {
          display: inline-block;
          font-size: 0.14rem;
          margin-top: 0.16rem;
        }
        .hotSale-goods {
          background-color: white;
          width: 3.75rem;
          display: flex;
          height: 1.70rem;
          padding-top: 0.1rem;
          border-radius: 12px;
          div {
            flex-grow: 1;
            height: 1.5rem;
            border-left: 0.01rem solid #f5f5f5;
            border-bottom: 0.1rem solid #f5f5f5;
            .hotSale-pic {
              display: inline-block;
              width: 1.07rem;
              height: 1.07rem;
              -webkit-background-size: cover;
              background-size: cover;
              margin: 0 auto;
            }
            .hotSale-ticket {
              height: 0.2rem;
              font-size: 0.14rem;
              color: #999;
              padding-left: 0.12rem;
              /*margin-top: 0.14rem;*/
            }
          }
        }
      }
      .home-goodsList {
        width: 3.75rem;
        height: 4rem;
        background-color: skyblue;
      }
    }
 }
  .home-navs-list {
    position: absolute;
    top: 0.8rem;
    left: 0;
    width: 3.75rem;
    height: 2rem;
    background-color: #fff;
    -webkit-animation: fadeInDown 0.3s alternate;
    -o-animation: fadeInDown 0.3s alternate;
    animation: fadeInDown 0.3s alternate;
    z-index: 2;
  }
  @keyframes fadeInDown {
    0% {
      height: 0;
      transform: translate3d(0,0,0);
    }
    100% {
      height: 2rem;
      transform: translate3d(0,0,0);
    }
  }
  .home-navs-list1 {
    position: absolute;
    top: 0.8rem;
    left: 0;
    width: 3.75rem;
    height: 0;
    background-color: #fff;
    -webkit-animation: fadeInUp 0.3s alternate;
    -o-animation: fadeInUp 0.3s alternate;
    animation: fadeInUp 0.3s alternate;
    z-index: 2;
  }
  @keyframes fadeInUp {
    0% {
      height: 2rem;
      transform: translate3d(0,0,0);
    }
    100% {
      height: 0;
      transform: translate3d(0,0,0);
    }
  }
  .nav-style {
    display: inline-block;
    float: left;
    width: 0.65rem;
    text-align: center;
    height: 0.4rem;
    line-height: 0.4rem;
    font-size: 0.14rem;
    a {
      display: inline-block;
      height: 0.39rem;
      line-height: 0.4rem;
      color: #999;
      &.home-navActive {
        color: #FC3F78;
        border-bottom: 1px solid #FC3F78;
      }
    }
  }
</style>
