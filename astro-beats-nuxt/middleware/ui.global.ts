import useUiStore from "~/store/ui";
import { storeToRefs } from "pinia";

export default defineNuxtRouteMiddleware(async (to, from) => {
  useUiStore().setPageLoader(true);

  if (to.name === "starsign") {
    const name = to.params.starsign as string;
    useUiStore().setHeaderText(name.charAt(0).toUpperCase() + name.slice(1));
  } else {
    useUiStore().setHeaderText("AstroBeats");
  }
});
