<template>
  <div id="recommend">
    <div
      v-for="item in recommands.list"
      :key="item.recommend"
      class="recommend-item"
    >
      <a :href="item.link"></a>
      <img :src="item.image" alt="" />
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "recommend",
  props: {
    recommands: {
      default() {
        return [];
      }
    }
  }
};
</script>

<style>
#recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 20px;
  border-bottom: 10px solid #eee;
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  width:70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>
