<template>
  <div class="car-box-main-item-wrapper">
    <h3 class="car-box-main-item-title">
      {{ group.title }}
    </h3>
    <el-divider class="car-box-main-item-divider"></el-divider>
    <el-row>
      <el-col v-for="(item,index) in group.data" :key="index" :span="4" :xs="12">
        <div class="car-box-main-item-container" @click="handleSkip(item.url)">
          <img :src="getImageUrl(item.icon)" :alt="item.title">
          <span>{{ item.title }}</span>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script setup>

defineProps({
  group: {
    type: Object,
    required: true,
    default: () => ({})
  }
})
// 加载图片
const getImageUrl = (url) => {
  return new URL(url, import.meta.url).href.toString()
}
// 跳转
const handleSkip = (url) => {
  window.open(url, '_blank')
}

</script>

<style lang="scss" scoped>
.car-box-main-item-wrapper {
  background-color: #161D26;
  border-radius: 16px;
  padding-bottom: 16px;

  .car-box-main-item-title {
    margin: 16px 0 0;
    padding: 15px 15px 15px 30px;
  }

  .car-box-main-item-divider {
    background-color: #EEEEEE;
    margin: 0;
  }

  .car-box-main-item-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 8px;
    padding: 8px;
    border: 1px solid white;
    border-radius: 8px;

    img {
      height: 36px;
      width: auto;
    }
  }

  .car-box-main-item-container:hover {
    border: 1px solid #409EFF;
    color: #409EFF;
    cursor: pointer;
  }


}

</style>
