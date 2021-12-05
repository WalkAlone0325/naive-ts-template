import settings, { ISettings } from '@/settings'

const {
  globalTheme,
  sideHeaderTheme,
  themeEditor,
  menuMode,
  showTrigger,
  showLogo,
  showBorder,
  showBreadcrumb,
  showBreadcrumbIcon,
  isFixedHeader,
  adminTitle
} = settings

type TSettingKey = keyof ISettings

export const useSettings = defineStore({
  id: 'settings',
  state: () => ({
    globalTheme,
    sideHeaderTheme,
    themeEditor,
    menuMode,
    showTrigger,
    showLogo,
    showBorder,
    showBreadcrumb,
    showBreadcrumbIcon,
    isFixedHeader,
    adminTitle
  }),
  actions: {
    changeSetting(settingKey: TSettingKey, data: string | boolean) {
      this[settingKey] = data
    }
  }
})
