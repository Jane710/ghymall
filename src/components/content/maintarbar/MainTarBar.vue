<template>
  <div>
 
    <tab>
      <tabitem path="/home">
        <img
          slot="item-coin"
          src="../../../assets/img/tabbar/home.svg"
          alt=""
        />
        <img
          slot="item-coin-active"
          src="../../../assets/img/tabbar/home_active.svg"
          alt=""
        />
        <div slot="item-text">首页</div>
      </tabitem>
      <tabitem path="/catg">
        <img
          slot="item-coin"
          src="../../../assets/img/tabbar/category.svg"
          alt=""
        />
        <img
          slot="item-coin-active"
          src="../../../assets/img/tabbar/category_active.svg"
          alt=""
        />
        <div slot="item-text">分类</div>
      </tabitem>
      <tabitem path="/cart">
        <img
          slot="item-coin"
          src="../../../assets/img/tabbar/shopcart.svg"
          alt=""
        />
        <img
          slot="item-coin-active"
          src="../../../assets/img/tabbar/shopcart_active.svg"
          alt=""
        />
        <div slot="item-text">购物车</div>
      </tabitem>
      <tabitem path="/profile">
        <img
          slot="item-coin"
          src="../../../assets/img/tabbar/profile.svg"
          alt=""
        />
        <img
          slot="item-coin-active"
          src="../../../assets/img/tabbar/profile_active.svg"
          alt=""
        />
        <div slot="item-text">我的</div>
      </tabitem>
    </tab>
   
  </div>
</template>

<script>
import tab from "../../common/tabbar/tab";
import tabitem from "../../common/tabbar/tabitem";
export default {
  name: "App",
  components: {
    tab,
    tabitem
  }
};
</script>

<style>
@import "../../../assets/css/base.css";
</style>
