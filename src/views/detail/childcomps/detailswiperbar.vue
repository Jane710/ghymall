<template>
  <Swiper class="detailswiper">
    <SwiperItem v-for="item in topimage" :key="item">
      <img :src="item" alt="" />
    </SwiperItem>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from "../../../components/common/swiper";
export default {
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    topimage: {
      type: Array,
      default() {
        [];
      }
    }
  }
};
</script>

<style scoped>
.detailswiper{
height: 300px;
overflow: hidden;
}
</style>
