export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],

    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "https://corddigital.com/images/favicon.png",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Manjari&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Tajawal&display=swap",
      },
    ],
  },

  script: [
    {
      src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
      type: "text/javascript",
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/three.js/84/three.min.js",
      type: "text/javascript",
    },
  ],

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["assets/css/main.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/vue-carousel", "~/plugins/font-awesome.js"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/axios",
    [
      // Doc: https://bootstrap-vue.js.org/docs/
      "bootstrap-vue/nuxt",
      "nuxt-fontawesome",
      {
        imports: [
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["fas"],
          },
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: ["fab"],
          },
        ],
      },
    ],
  ],
  axios: {
    proxyHeaders: false,
  },
  /*
   ** Build configuration
   */
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      });
    },
  },

  router: {
    base: "/cord-graphics/",
    scrollBehavior(to, from, savedPosition) {
      return { x: 0, y: 0 };
    },
  },
};
