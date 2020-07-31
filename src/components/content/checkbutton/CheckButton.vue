<template>
  <div class="check-button" :class="{checked:ischecked}">
  <img src="../../../assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
props: {
ischecked:{
type:Boolean,
default:false
   }
 }
}
</script>

<style scoped>
.check-button{
/* background-color: red; */
border-radius: 50%;
border: 2px solid #aaa;
}
.checked{
  background-color: #ff8198;
    border-color: #ff8198;
}
</style>