<template>
  <div class="goods">
    <gooditem  v-for="item in goodslist" :gooditem="item" :key="item.id"/>
  </div>
</template>

<script>
import gooditem from "./gooditem"
export default {
components: {
gooditem

 },
  props: {
    goodslist: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.goods{
display: flex;
flex-wrap: wrap;
justify-content: space-around;
padding: 2px;
}

</style>
