import { defineConfig } from "astro/config";

import image from "@astrojs/image";

// https://astro.build/config

export default {
  // ...
  integrations: [
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
  site: "https://keenannicholson.me",
};
