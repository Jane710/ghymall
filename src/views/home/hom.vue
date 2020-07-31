<template>
  <div id="home">
    <NarBar class="home-nav">
      <div slot="center">购物街</div>
    </NarBar>
    <TabControl :title="['流行', '新款', '精品']" 
    @tabclick="tabclick" 
   ref="tabcontrol1"
   class="tab-control"
   v-show="istabfixed"
    />
  <bscroll class="content"  ref="scroll" 
  :probe-type='3'  
  @roll="contentroll"
  :pullUpLoad='true'
  @pullupload='upload'
  >
   <HomeSwiper :banners="banners" @swiperload="swiperloader" />
    <recommend :recommands="recommands" />
    <feature />
    <TabControl :title="['流行', '新款', '精品']" 
    @tabclick="tabclick" 
   ref="tabcontrol2"
    />
   <goodslist  :goodslist="show"/>
  </bscroll>
 <backtop @click.native="backclick" v-show="isShowbacktop"/>
  </div>
</template>

<script>
import NarBar from "../../components/common/navbar/NarBar";
import { getHomeMultidate, getHomeGoods } from "../../network/home.js";
import HomeSwiper from "./childComps/HomeSwiper";
import recommend from "./childComps/recommend";
import feature from "./childComps/feature";
import TabControl from "../../components/content/tabcontrol/TabControl";
import goodslist from "../../components/content/goods/goodslist"
import bscroll from "../../components/common/scroll/bscroll"
import backtop from "../../components/content/BackTop/backtop";
import {backtopmixin} from "../../common/mixin"
export default {
  components: {
    NarBar,
    HomeSwiper,
    recommend,
    feature,
    TabControl,
    goodslist,
    bscroll,
    // backtop
  },
  data() {
    return {
      banners: [],
      recommands: [],
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] }
      },
      currentType:'pop',
      isShowbacktop:false,
      istabfixed:false,
      taboffsettop:0, 
      saveY:0
    };
  },
  mixins:[backtopmixin],
   computed: {
    show(){
    return this.goods[this.currentType].list
    },
   },
   destroyed(){
   console.log('home destoryed');
   },
   activated(){
   this.$refs.scroll.scroll.scrollTo(0,this.saveY,1000)
   this.$refs.scroll.scroll.refresh()
   },
   deactivated(){
   this.saveY=this.$refs.scroll.scroll.y;
   console.log(this.saveY);
   },
  created() {
 this.getHomeMultidate();
  this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
    
  },
  mounted(){
  this.$bus.$on("itemimgload",() =>{
  
     this.$refs.scroll.scroll.refresh()
    })
  },
  methods: {
    getHomeMultidate() {
      getHomeMultidate().then(res => {
        this.banners = res.data.banner;
        this.recommands = res.data.recommend;
      });
    },
 getHomeGoods(type) {
    const page=this.goods[type].page+1
      getHomeGoods(type, page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        
        this.goods[type].page+=1;
        this.$refs.scroll.scroll.finishPullUp()
      });
    },
  tabclick(index){
    switch(index){
    case 0:
    this.currentType='pop'
    break;
    case 1:
    this.currentType='new'
    break;
    case 2:
    this.currentType='sell'
    
      }
      this.$refs.tabcontrol1.currentIndex=index;
      this.$refs.tabcontrol2.currentIndex=index;
    },
  //  backclick(){
  //   this.$refs.scroll.scroll.scrollTo(0,0,1000)
  //   },
   contentroll(position){
   this.isShowbacktop=(-position.y)>1000;
   this.istabfixed=(-position.y)>this.taboffsettop
     },
  upload(){
    this.getHomeGoods(this.currentType);
    this.$refs.scroll.scroll.refresh()
    },
    swiperloader(){
    this.taboffsettop=this.$refs.tabcontrol2.$el.offsetTop;
    },

   
    
   },

 
}

 
</script>

<style scoped>
#home {
  position: relative;
  padding-top: 44px;
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

/* .tab-control{
   position: sticky;
    top: 44px;
    z-index: 9;
} */
.content{
position:absolute;
overflow: hidden;
top: 44px;
bottom: 49px;
left: 0;
right: 0;
}
  .tab-control {
    position: relative;
    z-index: 9;
  }
</style>
