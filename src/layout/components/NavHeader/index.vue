<template>
  <n-layout-header style="height: 64px" bordered>
    头部
    <div class="right-container">
      <personal-setting />
    </div>
    <global-drawer />
  </n-layout-header>
</template>

<script lang="ts" setup></script>

<script lang="ts">
export default {
  name: 'NavHeader'
}
</script>

<style lang="scss" scoped>
.n-layout-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .right-container {
    margin-right: 10px;
  }
}
</style>
