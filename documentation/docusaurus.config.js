/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

require("dotenv").config();

const redirectJson = require("./redirects.json");
const tutorialData = require("./tutorial-units");

/** @type {import('@docusaurus/types/src/index').DocusaurusConfig} */
const siteConfig = {
    title: "OpenPanel",
    tagline: 'Unparalleled support. Effortless website hosting. Continuous feature development.',
    url: "https://openpanel.co",
    baseUrl: "/",
    onBrokenLinks: 'ignore',
    projectName: "refine",
    organizationName: "refinedev",
    trailingSlash: true,
    favicon: "img/refine_favicon.svg",
    scripts: ["https://platform.twitter.com/widgets.js"],
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: Boolean(process.env.DISABLE_DOCS)
                    ? false
                    : {
                          path: "./docs",
                          sidebarPath: require.resolve("./sidebars.js"),
                          editUrl:
                              "https://github.com/refinedev/refine/tree/master/documentation",
                          showLastUpdateAuthor: true,
                          showLastUpdateTime: true,
                          disableVersioning:
                              process.env.DISABLE_VERSIONING === "true",
                          versions: {
                              current: {
                                  label: "4.xx.xx",
                              },
                          },
                          lastVersion: "current",
                          admonitions: {
                              tag: ":::",
                              keywords: [
                                  "additional",
                                  "note",
                                  "tip",
                                  "info-tip",
                                  "info",
                                  "caution",
                                  "danger",
                                  "sourcecode",
                                  "create-example",
                                  "simple",
                              ],
                          },
                          exclude: ["**/**/_*.md"],
                      },
                blog: false,
                theme: {
                    customCss: [
                        require.resolve("./src/refine-theme/css/colors.css"),
                        require.resolve("./src/refine-theme/css/fonts.css"),
                        require.resolve("./src/refine-theme/css/custom.css"),
                        require.resolve("./src/css/custom.css"),
                        require.resolve("./src/css/split-pane.css"),
                        require.resolve("./src/css/demo-page.css"),
                    ],
                },
                gtag: {
                    trackingID: "G-27Z1WY952H",
                },
                sitemap: {
                    ignorePatterns: ["**/_*.md"],
                },
            },
        ],
    ],
    plugins: [
        [
            "@docusaurus/plugin-client-redirects",
            {
                redirects: redirectJson.redirects,
                createRedirects(existingPath) {
                    if (existingPath.includes("/api-reference/core/")) {
                        return [
                            existingPath.replace(
                                "/api-reference/core/",
                                "/api-references/",
                            ),
                        ];
                    }
                    return undefined; // Return a falsy value: no redirect created
                },
            },
        ],
        [
            "docusaurus-plugin-copy",
            {
                id: "Copy Workers",
                path: "static/workers",
                context: "workers",
                include: ["**/*.{js}"],
            },
        ],
        async function tailwindcss() {
            return {
                name: "docusaurus-tailwindcss",
                configurePostCss(postcssOptions) {
                    postcssOptions.plugins.push(require("tailwindcss"));
                    postcssOptions.plugins.push(require("autoprefixer"));
                    return postcssOptions;
                },
            };
        },
        "./plugins/docgen.js",
        "./plugins/examples.js",
        "./plugins/checklist.js",
        ...(process.env.DISABLE_BLOG
            ? []
            : [
                  [
                      "./plugins/blog-plugin.js",
                      {
                          blogTitle: "Blog",
                          blogDescription:
                              "A resource for Refine, front-end ecosystem, and web development",
                          routeBasePath: "/blog",
                          postsPerPage: 12,
                          blogSidebarTitle: "All posts",
                          blogSidebarCount: 0,
                          feedOptions: {
                              type: "all",
                              copyright: `Copyright © ${new Date().getFullYear()} refine.`,
                          },
                      },
                  ],
              ]),
        "./plugins/intercom.js",
        "./plugins/clarity.js",
        "./plugins/templates.js",
        "./plugins/example-redirects.js",
    ],
    themeConfig: {
        prism: {
            theme: require("prism-react-renderer/themes/github"),
            darkTheme: require("prism-react-renderer/themes/vsDark"),
            magicComments: [
                // Remember to extend the default highlight class name as well!
                {
                    className: "theme-code-block-highlighted-line",
                    line: "highlight-next-line",
                    block: { start: "highlight-start", end: "highlight-end" },
                },
                {
                    className: "code-block-hidden",
                    line: "hide-next-line",
                    block: { start: "hide-start", end: "hide-end" },
                },
                {
                    className: "theme-code-block-added-line",
                    line: "added-line",
                    block: { start: "added-start", end: "added-end" },
                },
                {
                    className: "theme-code-block-removed-line",
                    line: "removed-line",
                    block: { start: "removed-start", end: "removed-end" },
                },
            ],
        },
        image: "img/refine_social.png",
        algolia: {
            appId: "AEUKT9VWIW",
            apiKey: '8c38649d5d06ae64c7d6c595b9dcf4ac',
            indexName: 'codex-openpanel',
            contextualSearch: true,
            replaceSearchResultPathname: {
                from: '/docs/', // or as RegExp: /\/docs\//
                to: '/',
            },
            searchParameters: {},
            searchPagePath: 'search',
        },
        metadata: [
            {
                name: "keywords",
                content:
                    "react-admin, react-framework, internal-tool, admin-panel, ant-design, material ui, mui",
            },
        ],
        navbar: {
            logo: {
                alt: "refine",
                src: "img/refine_logo.png",
            },
            items: [
                { to: "https://docusaurus.io/docs/api/docusaurus-config", label: "Blog", position: "left" },
                {
                    type: "docsVersionDropdown",
                    position: "right",
                    dropdownActiveClassDisabled: true,
                },
                {
                    href: "https://github.com/",
                    position: "right",
                    className: "header-icon-link header-github-link",
                },
                {
                    href: "https://discord.gg/",
                    position: "right",
                    className: "header-icon-link header-discord-link",
                },
                {
                    href: "https://twitter.com/",
                    position: "right",
                    className: "header-icon-link header-twitter-link",
                },
            ],
        },
        footer: {
            logo: {
                alt: "refine",
                src: "/img/refine_logo.png",
            },
            links: [
                {
                    title: "Resources",
                    items: [
                        {
                            label: "Getting Started",
                            to: "https://docusaurus.io/docs/api/docusaurus-config",
                        },
                        {
                            label: "Tutorials",
                            to: "https://docusaurus.io/docs/api/docusaurus-config",
                        },
                        {
                            label: "Blog",
                            to: "https://docusaurus.io/docs/api/docusaurus-config",
                        },
                    ],
                },
                {
                    title: "Product",
                    items: [
                        {
                            label: "Examples",
                            to: "https://docusaurus.io/docs/api/docusaurus-config",
                        },
                        {
                            label: "Integrations",
                            to: "https://docusaurus.io/docs/api/docusaurus-config",
                        },
                        {
                            label: "Become an Expert",
                            to: "https://docusaurus.io/docs/api/docusaurus-config",
                        },
                    ],
                },
                {
                    title: "Company",
                    items: [
                        {
                            label: "About",
                            to: "https://google.rs",
                        },
                        {
                            label: "Store 🎁",
                            to: "https://google.rs",
                        },
                    ],
                },
                {
                    title: "__LEGAL",
                    items: [
                        {
                            label: "License",
                            to: "https://github.com/refinedev/refine/blob/master/LICENSE",
                        },
                        // {
                        //     label: "Terms",
                        //     to: "/enterprise",
                        // },
                        // {
                        //     label: "Privacy",
                        //     to: "/privacy-policy",
                        // },
                        // {
                        //     label: "info@refine.dev",
                        //     to: "mailto:info@refine.dev",
                        // },
                    ],
                },
                {
                    title: "__SOCIAL",
                    items: [
                        {
                            href: "https://github.com/",
                            label: "github",
                        },
                        {
                            href: "https://discord.gg/",
                            label: "discord",
                        },
                        {
                            href: "https://reddit.com/r/",
                            label: "reddit",
                        },
                        {
                            href: "https://twitter.com/",
                            label: "twitter",
                        },
                        {
                            href: "https://www.linkedin.com/company/",
                            label: "linkedin",
                        },
                    ],
                },
            ],
        },
        docs: {
            sidebar: {
                autoCollapseCategories: true,
            },
        },
        colorMode: {
            defaultMode: "dark",
        },
    },
    customFields: {
        /** Footer Fields */
        footerDescription:
            '<strong style="font-weight:700;">OpenPanel</strong> is a next generation hosting panel for more secure and provacy focused hosting.',
        contactTitle: "Contact",
        contactDescription: [
            "OpenPanel Co.",
            "256 neka adresa 31 Amsterdam, NL 19702",
        ],
        contactEmail: "info@openpanel.co",
        /** ---- */
        /** Live Preview */
        LIVE_PREVIEW_URL:
            process.env.LIVE_PREVIEW_URL ?? "http://localhost:3030/preview",
        /** ---- */
        tutorial: tutorialData,
    },
    webpack: {
        jsLoader: (isServer) => ({
            loader: require.resolve("swc-loader"),
            options: {
                jsc: {
                    parser: {
                        syntax: "typescript",
                        tsx: true,
                    },
                    target: "es2017",
                },
                module: {
                    type: isServer ? "commonjs" : "es6",
                },
            },
        }),
    },
};

module.exports = siteConfig;
