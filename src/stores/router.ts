import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useRouterStore = defineStore('router', () => {
  const tabName = ref("Tab Name")
  function changeTabName(name: string) {
    tabName.value = name;
  }

  return { tabName, changeTabName }
})
