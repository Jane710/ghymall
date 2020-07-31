<template>
  <div id="cart">
    <NarBar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </NarBar>
    <cartlist/>
    <cartbottombar/>

  </div>
</template>
<script>
import NarBar from "../../components/common/navbar/NarBar"
import cartlist from "./childComps/cartlist"
import cartbottombar from "./childComps/cartbottombar"

import {mapGetters} from "vuex"
export default {
  components: {
    NarBar,
    cartlist,
    cartbottombar,
   
  },
  computed: {
  //  ...mapGetters(['cartlength'])
  ...mapGetters({
  length:'cartlength'
  })
      
  }
};
</script>

<style scoped>
 #cart {
    /*position: relative;*/
    height: 100vh;
  }
  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }

</style>
