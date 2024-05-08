import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faTwitterSquare,
  faTwitch,
  faGithubSquare,
  faTwitter,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";

import {
  faBars,
  faPlay,
  faPause,
  faMusic,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faTwitterSquare,
  faTwitch,
  faGithubSquare,
  faBars,
  faTwitter,
  faPlay,
  faPause,
  faSpotify,
  faMusic,
  faHome
);

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
  //@ts-ignore
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon, {});
});
