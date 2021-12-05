<template>
  <n-layout-header style="height: 64px" bordered>
    头部

    <div class="right-container">
      <n-space size="small">
        <icon-render tip-title="全屏">
          <ScanCircle />
        </icon-render>
        <icon-render tip-title="GitHub">
          <LogoGithub />
        </icon-render>
      </n-space>

      <personal-setting />
    </div>

    <global-drawer />
  </n-layout-header>
</template>

<script lang="ts" setup>
import { LogoGithub, ScanCircle } from '@vicons/ionicons5'
</script>

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
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }
}
</style>
