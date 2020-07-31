<template>
  <div id="tar-bar">
  
      <slot></slot>
      
    </div>
</template>

<script>
export default {
name:'tab'
}
</script>

<style scoped>

#tar-bar {
  display: flex;
  background: #f6f6f6;
  position: fixed;
  z-index: 8;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -1px 1px rgba(100,100,100,.2);
}

</style>