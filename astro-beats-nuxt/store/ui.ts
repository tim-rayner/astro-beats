import { defineStore, acceptHMRUpdate } from "pinia";

const useUiStore = defineStore("uiStore", {
  state: () => {
    return {
      pageLoader: false,
      headerText: "LunaTunes",
      loadingStarsign: false,
      currentPath: "/",
    };
  },
  actions: {
    setPageLoader(value: boolean) {
      this.pageLoader = value;
    },
    setHeaderText(value: string) {
      this.headerText = value;
    },
    setLoadingStarsign(value: boolean) {
      this.loadingStarsign = value;
    },
    setPath(value: string) {
      this.currentPath = value;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUiStore, import.meta.hot));
}

export default useUiStore;
