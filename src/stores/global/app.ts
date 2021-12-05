export const useApp = defineStore({
  id: 'app',
  state: () => ({
    collapsed: true,
    drawerActive: false
  }),
  actions: {
    toggleDrawer() {
      this.drawerActive = !this.drawerActive
    },
    toggleCollapsed() {
      this.collapsed = !this.collapsed
    }
  }
})
