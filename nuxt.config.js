export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "Engeneer World" || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
      },
      { rel: "stylesheet", href: "https://unpkg.com/ress/dist/ress.min.css" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "rgb(61, 147, 168)" },
  /*
   ** Global CSS
   */

  css: [{ src: "~/assets/sass/app.scss", lang: "scss" }],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/scroll.js"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
