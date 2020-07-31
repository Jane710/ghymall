<template>
  <Swiper>
      <swiper-item v-for="item in banners.list" :key="item.banners">
        <a :href="item.link">
          <img :src="item.image" alt="" @load= "imageload" />
        </a>
      </swiper-item>
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
      banners: {
       
        default() {
          return []
        }
      }
    },
    data(){
    return { 
    isload:false
     }
    },
    methods: {
    imageload(){
    if(!this.isload){
    this.$emit('swiperload')
    this.isload=true
        }
      }
    }
}
</script>

<style>

</style>