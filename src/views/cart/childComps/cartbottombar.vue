<template>
  <div class="bottom-menu">
  <CheckButton class="select-all" :ischecked="isselectall" 
  @click.native="checkclick" />
  />
  <span>全选</span>
  <span class="total-price">合计: ￥{{totalPrice}}</span>
  <span class="buy-product" @click="calclick">去计算: {{checkedlength}}</span>
  </div>
</template>

<script>
import CheckButton from "../../../components/content/checkbutton/CheckButton"
import { mapGetters} from "vuex"
export default {
name:"cartbottombar",
components: {
CheckButton
  },
computed: {
...mapGetters(['cartlist']),
// totalPrice(){
// return '￥'+this.$store.state.cartlist.filter(item => {
// return item.checked}).reduce((total,item) =>{
// return total+item.price*item.count
// },0).toFixed(2)
//    },

totalPrice(){
var sum=0;
    for(let item of this.$store.state.cartlist){
    if(item.checked){
    sum+=item.price*item.count;
       }
    }
return sum.toFixed(2)

},


checkedlength(){
// return this.$store.state.cartlist.filter(item =>item.checked).length
return this.cartlist.filter(item =>item.checked).length
    },
isselectall(){
// if(this.$store.state.cartlist.length===0) return false;
// return !this.$store.state.cartlist.find(item =>!item.checked)
//     }
if(this.cartlist.length===0) return false;
return !this.cartlist.find(item =>!item.checked)
    }

  },
methods: {
checkclick(){
console.log("选择");
 if(this.isselectall){
 this.$store.state.cartlist.forEach(item =>item.checked=false)
     } else{
     this.$store.state.cartlist.forEach(item =>item.checked=true)
     }
   },
  calclick(){
  if(!this.isselectall){
  this.$toast.show('请选择商品',2000)
  }
  
  }
 }
  
}
</script>


<style scoped>
  .bottom-menu {
    width: 100%;
    height: 44px;
    background-color: #eee;
    position: fixed;
    bottom: 50px;
    left: 0;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    font-size: 14px;
    color: #888;
    line-height: 44px;
    padding-left: 35px;
    box-sizing: border-box;
  }
  .bottom-menu .select-all {
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 13px;
  }
  .bottom-menu .total-price {
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  }
  .bottom-menu .buy-product {
    background-color: orangered;
    color: #fff;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: right;
    margin-right: 40px;
  }
</style>