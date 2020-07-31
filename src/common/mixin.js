import backtop from '../components/content/BackTop/backtop'

export const backtopmixin={
components:{
backtop
  },
data(){
return {
isShowbacktop:false
    }
  },
methods:{
    backclick(){
this.$refs.scroll.scroll.scrollTo(0,0,1000)
    }
  }
}