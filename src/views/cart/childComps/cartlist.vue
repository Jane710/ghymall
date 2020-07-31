<template>
  <div class="cart-list">
    <bscroll class="content"  ref="scroll">
      <cartlistitem v-for="(item,index) in cartlist" :key="index"
      :itemInfo="item" />
    </bscroll>
  </div>
</template>

<script>
import bscroll from "../../../components/common/scroll/bscroll";
import cartlistitem from "./cartlistitem";
import { mapGetters } from "vuex";
export default {
  components: {
    bscroll,
    cartlistitem
  },
  computed: {
    ...mapGetters(["cartlist"])
  },
  activated(){
  this.$refs.scroll.scroll.refresh()
  }
};
</script>

<style scoped>
.cart-list {
  height: calc(100%-93px);
}
.content {
  height: 100%;
  overflow: hidden;
}
</style>
