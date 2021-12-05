<template>
  <n-drawer :show="drawerActive" @update:show="toggleDrawer" :width="500" placement="right">
    <n-drawer-content title="全局配置"> </n-drawer-content>
  </n-drawer>
</template>

<script lang="ts" setup>
import { useApp } from '@/stores'

const { drawerActive, toggleDrawer } = toRefs(useApp())
</script>
