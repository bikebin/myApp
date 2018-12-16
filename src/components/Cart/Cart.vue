<template>
    <div class="cart">
      <div class="cart-item" v-for="(item,index) in cartlist" :key="index">
        <input class="cart-check f-l" type="checkbox" @click="change(index)" :checked="item.checked">
        <div class="cart-pic f-l">
          <img :src="item.pic" alt="">
        </div>
        <div class="cart-buy-detail f-l">
          <p>{{item.name}}<span @click="remove(index)">垃圾桶</span></p>
          <div>
            <p class="cart-price">￥{{item.price}}</p>
            <div class="goods-num">
              <div class="f-r">
                <span @click="reduce(item)">-</span>
                <input type="text" value="1" v-model="item.num">
                <span @click="add(item)">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

    export default {
        name: "Cart",
      props:['cartlist'],
      data() {
          return {

          }
      },
      methods: {
        add(val) {
          this.$set(val,'type',1)
          this.$store.commit('GOODS_ADD',val)
          console.log('购物内容',this.$store.state.added)
        },
        reduce(val) {
          this.$store.commit('GOODS_REDUCE',val)
          console.log('购物内容',this.$store.state.added)
        },
        change(n) {
          console.log(n)
          this.$store.commit('GOODS_CHOSE',n)
        },
        remove(n) {
          this.$store.commit('GOODS_REMOVE',n)
        }
      },
      computed:{
        // ...Vuex.mapState(['count','price']),
        // ...mapGetters(['total'])
        //添加当前组件自身的计算属性
        //....
      }
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
