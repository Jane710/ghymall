<template>

  <div class="tar-bar-item" @click="itemclick">
    <slot v-if="!isactive" name="item-coin"></slot>
    <slot v-else name="item-coin-active"></slot>
     <div :class="{active:isactive}"><slot name="item-text"></slot> </div>
   
</div>  
</template>

<script>
export default {
data(){
return {
   
  }
},
computed:{
isactive(){
     return this.$route.path.indexOf(this.path)!==-1
}
},
props:{
path:String
},
methods:{
   itemclick(){
   this.$router.push(this.path)
   }
}
}
</script>

<style>
.tar-bar-item {
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 14px;
}
.tar-bar-item img{
width: 24px;
height: 24px;
vertical-align: middle;
margin-bottom: 2px;
}
.active{
color: red;
}
</style>