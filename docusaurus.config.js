// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Arenalinq Help Center",
  tagline: "Recruiting management for college athletics",
  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },

  // TODO: Update to your actual help center domain
  url: "https://help.arenalinq.com",
  baseUrl: "/",

  organizationName: "arenalinq",
  projectName: "help-center",

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Light mode only — matching Arenalinq app
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        style: "primary",
        title: "",
        logo: {
          alt: "Arenalinq",
          src: "img/logo.svg",
          href: "/",
        },
        items: [
          {
            type: "html",
            position: "left",
            value:
              '<span style="font-size: 17px; font-weight: 600; color: #30403F; margin-left: 8px;">Help Center</span>',
          },
          {
            href: "https://arenalinq.com",
            label: "ArenaLinq.com",
            position: "right",
          },
          {
            href: "https://app.arenalinq.com",
            label: "Sign In →",
            position: "right",
            className: "navbar__link--signin",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Help Center",
            items: [
              {
                label: "Getting Started",
                to: "/getting-started/signing-in",
              },
              {
                label: "Importing Players",
                to: "/importing-players/preparing-your-file",
              },
              {
                label: "Managing Your Pipeline",
                to: "/managing-your-pipeline/backlog-and-pipeline",
              },
              { label: "FAQ & Support", to: "/faq" },
            ],
          },
          {
            title: "Arenalinq",
            items: [
              { label: "Website", href: "https://arenalinq.com" },
              { label: "Sign In", href: "https://app.arenalinq.com" },
            ],
          },
          {
            title: "Support",
            items: [
              {
                label: "support@arenalinq.com",
                href: "mailto:support@arenalinq.com",
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Arenalinq. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
      },
    }),
};

export default config;
