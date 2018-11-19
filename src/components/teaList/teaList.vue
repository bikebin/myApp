<template>
    <div class="tea-list">
      <div class="tea-group" v-for="(item,index) in chalist" :key="index">
        <p class="tea-name">{{item.title}}</p>
        <ul class="tea-groups">
          <li @click="jumpDetail(item.goods_id)" v-for="(item,index) in item.item" :key="index">
            <img :src="item.goods_image" alt="">
            <p class="tea-info">{{item.goods_name}}</p>
            <p class="tea-price">￥<span>{{item.goods_promotion_price}}</span></p>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "teaList",
      props:['chalist'],
      created() {

      },
      methods: {
        jumpDetail(val) {
          this.$router.push({name:'teaDetail',params:{id:val}})
        }
      }
    }
</script>

<style scoped lang="less">
  .tea-list {

    .tea-group {
      height: 5.9rem;
      width: 3.75rem;
      background-color: #f0f0f0;
      overflow: auto;
      .tea-name {
        width: 3rem;
        margin-left: 0.12rem;
        border-left: 0.03rem solid red;
        padding-left: 0.06rem;
        font-size: 0.14rem;
        margin-bottom: 0.06rem;
      }
      .tea-groups {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        li {
          flex-basis: 1.7rem;
          height: 2.5rem;
          border-radius: 0.08rem;
          margin: 0 0 0.12rem 0.12rem;
          overflow: hidden;
          background-color: white;
          img {
            width: 1.76rem;
            height: 1.76rem;
            -webkit-background-size: cover;
            background-size: cover;
          }
          .tea-info {
            height: 0.36rem;
            font-size: 0.13rem;
            padding: 0 0.02rem;
            margin: 0.03rem 0 0.03rem;
            display: -webkit-box;
            -webkit-box-orient:vertical;
            text-overflow: ellipsis;
            overflow : hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .tea-price {
            font-size: 0.12rem;
            color: red;
            span {
              font-size: 0.16rem;
              color: red;
            }
          }
        }
      }
    }
  }
</style>
