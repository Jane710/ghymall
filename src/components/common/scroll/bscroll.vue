<template>
  <div class="wrapper" ref="wrapper">
  <div class="content">
  <slot></slot>
  </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
name:"bscroll",
props: {
    probeType:{
    type: Number,
    default:0
    },
    pullUpLoad:{
    type:Boolean,
    default:false
    }
},
data(){
   return{
    scroll
     }
  },
mounted() {
    this.scroll=new BScroll(this.$refs.wrapper,{
    click:true,
    probeType:this.probeType,
    pullUpLoad:this.pullUpLoad
    });
    this.scroll.on('scroll',position =>
    this.$emit('roll',position)
    );
    this.scroll.on("pullingUp",() =>{
    this.$emit('pullupload')
    })
    // this.scroll.scrollTo(0,0,1000)
  }
}
</script>

<style scoped>

</style>