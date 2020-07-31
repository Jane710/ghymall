<template>
  <div>
  <NarBar>
  <div slot="left" class="back" @click="backclick">
  <img src="../../../assets/img/common/back.svg" alt="">
  </div>
    <div slot="center" class="title">
      <div
        v-for="(item, index) in title"
        :key="index"
        class="itemtitle"
        :class="{ active: index === currentIndex }"
        @click="titleclick(index)"
      >{{ item}}</div>
    </div>
    </NarBar>
  </div>
</template>

<script>
import NarBar from "../../../components/common/navbar/NarBar";
export default {
  data() {
    return {
      title: ["商品", "参数", "讨论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    titleclick(index) {
      this.currentIndex = index;
      this.$emit('titleclick',index)
    },
    backclick(){
    this.$router.back()
    }
  },
  components: {
    NarBar
  }
};
</script>

<style scoped>
.title {
  display: flex;

}
.itemtitle {
  flex: 1;
  text-align: center;
}
.active {
  color: var(--color-high-text);
}
.back{
margin-top: 8px;
margin-left: 10px;
}
</style>
