import { defineStore, acceptHMRUpdate } from "pinia";

const useUiStore = defineStore("uiStore", {
  state: () => {
    return {
      pageLoader: false,
      headerText: "AstroBeats",
      loadingStarsign: false,
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
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUiStore, import.meta.hot));
}

export default useUiStore;
