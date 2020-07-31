<template>
  <div id="detail">
  
    <detailnavbar class="detailnav" @titleclick="titleclick" ref="nav" />

    <bscroll class="content" ref="scroll" :probeType="3" @roll="controll">
     
      <detailswiperbar :topimage="topimage" />
      <detailbaseinfo :goods="goods" />
      <detailshopinfo :shopinfo="shopinfo" />
      <detailgoodsinfo :detailInfo="detailInfo" @imageLoad="imageLoad" />
      <detailparaminfo :paraminfo="paraminfo" ref="params" />
      <detailcommentinfo :commentinfo="commentinfo" ref="comment" />
      <!-- <detailrecommendinfo :recommend="recommend"/> -->
      <goodslist :goodslist="goodslist" ref="recommend" />
      
    </bscroll>
   
    <detailbottombar @addToCart="addToCart" />
    <backtop @click.native="backclick" v-show="isShowbacktop"/>
        <!-- <Toast :message="message" :show="show"/> -->
  </div>
</template>

<script>
import detailnavbar from "./childcomps/detailnavbar";
import detailswiperbar from "./childcomps/detailswiperbar";
// import Toast from "../../components/common/toast/Toast"
import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend
} from "../../network/detail";
import detailbaseinfo from "./childcomps/detailbaseinfo";
import detailshopinfo from "./childcomps/detailshopinfo";
import bscroll from "../../components/common/scroll/bscroll";
import detailgoodsinfo from "./childcomps/detailgoodsinfo";
import detailparaminfo from "./childcomps/detailparaminfo";
import detailcommentinfo from "./childcomps/detailcommentinfo";
import goodslist from "../../components/content/goods/goodslist";
import detailbottombar from "./childcomps/detailbottombar";
import {backtopmixin} from "../../common/mixin"
import {mapActions} from "vuex"
// import backtop from "../../components/content/BackTop/backtop"

export default {
name:"Detail",
mixins:[backtopmixin],
  data() {
    return {
      iid: null,
      topimage: [],
      goods: {},
      shopinfo: {},
      detailInfo: {},
      paraminfo: {},
      commentinfo: {},
      goodslist: [],
      themetopY: [],
      currentIndex: 0,
      // message:'',
      // show:true
    //  isShowbacktop:false,
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res => {
      console.log(res);
      this.topimage = res.result.itemInfo.topImages;
      this.goods = new Goods(
        res.result.itemInfo,
        res.result.columns,
        res.result.shopInfo.services
      );
      this.shopinfo = new Shop(res.result.shopInfo);
      console.log(res.result.detailInfo);
      this.detailInfo = res.result.detailInfo;
      this.paraminfo = new GoodsParam(
        res.result.itemParams.info,
        res.result.itemParams.rule
      );
      if (res.result.rate.cRate !== 0) {
        this.commentinfo = res.result.rate.list[0];
      }
    });
    getRecommend().then(res => {
      // console.log(res);
      this.goodslist = res.data.list;
    });
  },
  components: {
    detailnavbar,
    detailswiperbar,

    detailbaseinfo,
    detailshopinfo,
    detailgoodsinfo,
    detailparaminfo,
    detailcommentinfo,
    goodslist,
    // detailrecommendinfo,
    bscroll,
    detailbottombar,
    //  Toast
    // backtop
  },
  methods: {
  ...mapActions({
  cart:'addcart'
  }),
    imageLoad() {
      this.$refs.scroll.scroll.refresh();
      this.themetopY.push(0);
      this.themetopY.push(this.$refs.params.$el.offsetTop);
      this.themetopY.push(this.$refs.comment.$el.offsetTop);
      this.themetopY.push(this.$refs.recommend.$el.offsetTop);
      this.themetopY.push(Number.MAX_VALUE);
    },
    titleclick(index) {
      this.$refs.scroll.scroll.scrollTo(0, -this.themetopY[index], 1000);
    },
    controll(position) {
      const positiony = -position.y;
      let length = this.themetopY.length;
      // for (let i = 0; i < length; i++) {
      //   if (
      //     (this.currentIndex !== i &&
      //       i < length - 1 &&
      //         positiony >= this.themetopY[i] &&
      //         positiony < this.themetopY[i + 1]) ||
      //     (i === length - 1 && positiony > this.themetopY[i])
      //   ) {
      //     this.currentIndex = i;
      //     console.log(i);
      //     this.$refs.nav.currentIndex = this.currentIndex;
      //   }
      // }
      for(let i =0; i< length-1; i++){
      if(positiony>this.themetopY[i] && positiony < this.themetopY[i+1]){
      this.currentIndex = i;
      this.$refs.nav.currentIndex=this.currentIndex;
      this.isShowbacktop=(-position.y)>1000;
       }
      };
        
    },
 addToCart(){
 const product={};
 product.image=this.topimage[0];
 product.title=this.goods.title;
 product.desc=this.goods.desc;
 product.price=this.goods.realPrice;
 product.iid=this.iid;
//  this.$store.commit('addcart',product)
this.cart(product).then(res => {
// this.show=true;
// this.message=res;
// setTimeout(() => {
// this.show=false;
// this.message=''
//   },2000)
console.log(this.$toast);
this.$toast.show(res,3000)
})
// this.$store.dispatch("addcart",product).then(res =>{
// console.log(res);
// })
   }
  }
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detailnav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.content {
  height: calc(100% - 44px);
  background-color: #fff;
  /* position:absolute;
    top: 44px;
    left: 0;
    right: 0; */
}
</style>
