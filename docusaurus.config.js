// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NetValve',
  tagline: 'NetValve Documentation',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://ntvlv.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'netvalve', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  markdown: {
      hooks:  {onBrokenMarkdownLinks: 'warn'},
  },
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [    
    'docusaurus-plugin-image-zoom',   // Image zoom plugin, comment this line to disable 
    ["@cmfcmf/docusaurus-search-local",
      {
        indexDocs: true,
        indexBlog: false,
        language: "en",
      }
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/", // Serve the docs at the site's root
          sidebarPath: './sidebars.js',
          breadcrumbs: true,
          sidebarCollapsible: true,
          sidebarCollapsed: false,
        },
        blog: false,
        theme: {
          customCss: './static/css/custom.css',
        },
      }),
    ],
    // Redocusaurus config
    [
      'redocusaurus',
      {
        specs: [
          // You can also pass it an OpenAPI spec URL
          {
           // spec: 'https://redocly.github.io/redoc/openapi.yaml',
            spec: './combined.yaml',
            route: 'docs/api/',
          },
        ],
        // Theme Options for modifying how redoc renders theme
        theme: {
          // Change with your site colors
          primaryColor: '#1483a8',
        },
      },
    ], 
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/NetValve-social-card.png',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      metadata: [
        {name: 'keywords', content: 'netvalve, Payment Processing, Merchant Services, Credit Card Processing, Online Payment Solutions, Secure Payment Gateway, Mobile Payment Solutions'},
        {name: 'description', content: 'Million-dollar companies &amp; start-ups can now use NetValve to send, accept, &amp; manage business with easy online payments'},
      ],      
      navbar: {
        //hideOnScroll: true,
        title: '',
        logo: {
          alt: 'NetValve Logo',
          src: 'img/logo-light.svg',
          srcDark: 'img/logo.svg',
          href: 'https://netvalve.com',
          target: '_self',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'guidesSidebar',
            position: 'left',
            label: 'Guides',
          },
          {to: '/docs/api', label: 'NetValve API', position: 'left'},
          {
            type: 'search',
            position: 'left',
          }, 
          {
            href: 'https://netvalve.com/company/',
            label: 'About Us',
            position: 'right',
          },
          {
            href: 'https://netvalve.com/contact-us/',
            label: 'Contact Sales',
            position: 'right',
          },
          {
            href: 'https://netvalve.com/blog/',
            label: 'Blog',
            position: 'right',
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: false,
          autoCollapseCategories: false,
        },
      },
      zoom: {
        selector: '.markdown img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)',
        },
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        }
      },       
      footer: {
        style: 'dark',
        links: [
          {
            title: ' ',
            items: [
              {
                html: `
                  <div class="container foot"><div class="ftr-box"><div class="ftr-left"><img src="/img/logo-light.svg" loading="lazy" alt="footer logo" class="ftr-logo"><p class="ftr-abt-p">Netvalve Inc is a financial technology company that utilizes modern day tech for digital payment solutions around the world for any business from corporates to start ups.</p><a href="/company/" class="contact-link ft">More Info</a></div><div class="ftr-center"><div class="ftr-head">Contact Info</div><div class="icon-list-item"><img src="https://netvalve.com/wp-content/themes/netvalve/assets/images/call.svg" loading="lazy" alt="contact icon" class="ftr-list-icon"><div class="ftr-li-p">+1 8442172750</div></div><div class="icon-list-item"><img src="https://netvalve.com/wp-content/themes/netvalve/assets/images/email.svg" loading="lazy" alt="contact icon" class="ftr-list-icon"><div class="ftr-li-p">contact@netvalve.com</div></div><div class="icon-list-item"><img src="https://netvalve.com/wp-content/themes/netvalve/assets/images/location.svg" loading="lazy" alt="contact icon" class="ftr-list-icon"><div class="ftr-li-p address">Netvalve Inc<br>1101 Brickell Avenue. South Tower,<br>8th Floor, Miami, FL 33131</div></div></div><div class="ftr-right"><div class="ftr-head">Follow Us</div><a href="https://www.instagram.com/netvalve/" target="_blank" class="icon-list-item w-inline-block"><img src="https://netvalve.com/wp-content/themes/netvalve/assets/images/instagram.svg" loading="lazy" alt="contact icon" class="ftr-list-icon"><div class="ftr-li-p">Instagram</div></a><a href="https://www.facebook.com/profile.php?id=100087351734709" target="_blank" class="icon-list-item w-inline-block"><img src="https://netvalve.com/wp-content/themes/netvalve/assets/images/facebook.svg" loading="lazy" alt="contact icon" class="ftr-list-icon"><div class="ftr-li-p">Facebook</div></a><a href="https://www.linkedin.com/company/netvalve-inc/about/?viewAsMember=true" target="_blank" class="icon-list-item w-inline-block"><img src="https://netvalve.com/wp-content/themes/netvalve/assets/images/linkedin.svg" loading="lazy" alt="contact icon" class="ftr-list-icon"><div class="ftr-li-p">Linkedin</div></a><a href="https://twitter.com/netvalveinc?s=11&amp;t=lHR5sy5ACbcuOGoXMTQ7QA" target="_blank" class="icon-list-item w-inline-block"><img src="https://netvalve.com/wp-content/themes/netvalve/assets/images/twitter.svg" loading="lazy" alt="contact icon" class="ftr-list-icon"><div class="ftr-li-p">Twitter</div></a></div></div><div class="copy-container"><div class="copy-left"><div class="copy-p">Copyright © 2026 NetValve Inc. All Rights Reserved</div></div><div class="copy-right"><div class="copy-p"><a href="https://netvalve.com/terms" class="legal-link">Terms of Use</a> &nbsp;| &nbsp;<a href="https://netvalve.com/privacy" class="legal-link">Privacy Policy</a></div><img src="https://netvalve.com/wp-content/themes/netvalve/assets/images/PCI-logo.svg" loading="lazy" alt="pci logo" class="pci-logo"><img src="https://netvalve.com/wp-content/themes/netvalve/assets/images/service-provider-badge.png" loading="lazy" alt="service provider badge" width="50" class="badge"></div></div></div>
                `,
              },
            ],
          },
        ],
      //},
      //  ],
      //  copyright: `Copyright © ${new Date().getFullYear()} NetValve Inc. All Rights Reserved.`,
      },
      prism: {
       // additionalLanguages: ['php','java','python','json'],
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
    baseUrlIssueBanner: false,
};

export default config;
