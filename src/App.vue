<script setup lang="ts">
import { useSettings } from '@/stores'
import { zhCN, dateZhCN } from 'naive-ui'

const { globalTheme } = toRefs(useSettings())
</script>

<template>
  <n-config-provider :theme="globalTheme" :date-locale="dateZhCN" :locale="zhCN">
    <n-message-provider>
      <n-notification-provider>
        <n-loading-bar-provider>
          <router-view />
        </n-loading-bar-provider>
      </n-notification-provider>
    </n-message-provider>
  </n-config-provider>
</template>
