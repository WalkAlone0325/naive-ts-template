<template>
  <n-layout-sider
    collapse-mode="transform"
    content-style="padding: 24px;"
    show-trigger="bar"
    bordered
    :collapse-width="120"
    :width="240"
  >
    侧边栏
  </n-layout-sider>
</template>

<script lang="ts" setup></script>
<script>
export default {
  name: 'BaseLayout'
}
</script>
