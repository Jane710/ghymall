<template>
  <div id="tabcontrol" class="control" >
    <div v-for="(item, index  ) in title" 
    :key="index" class="control-item"
    :class="{active: index==currentindex}"
    @click="itemclick(index)"
    >
        <span> {{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
props:{
    title:{
    type:Array,
    default(){
    return []
      }
    }
  },
  data(){
        return{
        currentindex:0
        }
    },
methods:{
    itemclick(index){
    this.currentindex=index;
    this.$emit('tabclick',index)
    }
  }
}

</script>

<style scoped>
.control{
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;

    background-color: #fff;
}
.control-item{
flex: 1;
}
.control-item span{

padding: 5px;
}
.active span{
color:var(--color-high-text);
border-bottom: 3px solid var(--color-tint);
}
</style>