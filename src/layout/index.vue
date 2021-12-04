<template>
  <n-layout class="layout-container" has-sider>
    <SideBar />
    <n-layout>
      <n-layout-header>头部</n-layout-header>
      <n-layout-content native-scrollbar content-style="padding: 24px;">内容</n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script lang="ts" setup>
import SideBar from './components/SideBar/index.vue'
</script>

<script lang="ts">
export default {
  name: 'BaseLayout'
}
</script>

<style>
.n-layout-header,
.n-layout-footer {
  background: rgba(128, 128, 128, 0.2);
  padding: 24px;
}

.n-layout-sider {
  background: rgba(128, 128, 128, 0.3);
}

.n-layout-content {
  background: rgba(128, 128, 128, 0.4);
}
</style>
