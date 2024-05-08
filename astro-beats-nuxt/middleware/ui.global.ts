import useUiStore from "~/store/ui";

export default defineNuxtRouteMiddleware(async (to, from) => {
  useUiStore().setPageLoader(true);
  useUiStore().setPath(to.fullPath);

  if (to.name === "starsign") {
    const name = to.params.starsign as string;
    useUiStore().setHeaderText(name.charAt(0).toUpperCase() + name.slice(1));
  } else {
    useUiStore().setHeaderText("LunaTunes");
  }
});
