<template>
  <div class="work-container-wrapper">
    <div class="work-container-main-wrapper">
      <basic-car-box v-for="(item, index) in data" :key="index" :group="item"/>
    </div>
    <div class="work-container-footer">
      <basic-footer/>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import menuList from '@/assets/menuList.json'

const data = ref(menuList.data)
</script>

<style lang="scss" scoped>
.work-container-wrapper {
  width: 100%;
  min-height: 100%;
  background-color: #12181F;
  color: white;

  .work-container-main-wrapper {
    max-width: 1200px;
    margin: auto;
    overflow: hidden;
  }
  .work-container-footer{
    background-color: rgba(0, 0, 0, 0);
  }
}

</style>
