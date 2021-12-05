export const useApp = defineStore({
  id: 'app',
  state: () => ({
    collapsed: true,
    drawerActive: true
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
