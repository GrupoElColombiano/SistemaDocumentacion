export default {
  base: "/",
  title: "Docs integracion Piano Hey!",
  head: [
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
      },
    ],
  ],
  themeConfig: {
    repo: "",
    logo: "/logo.svg",
    nav: [
      { text: "Guia", link: "/introduction" }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/GrupoElColombiano/integracion_hey" },
      { icon: "twitter", link: "https://twitter.com/elcolombiano" },
      { icon: "facebook", link: "https://www.facebook.com/ElColombiano/" },
    ],
    sidebar: [
      {
        title: "Guide",
        collapsable: true,
        items: [
          {
            text: "Introducción",
            link: "/introduction",
          },
          {
            text: "Instalación",
            link: "global/instalacion",
          }
        ]
      },
      {
        text: "Operación",
        collapsible: true,
        items: [
          {
            text: "Ejecución",
            link: "api/ejecucion",
          }
        ],
      }
    ],
  },
};
