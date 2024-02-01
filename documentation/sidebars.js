/** @type {import('@docusaurus/plugin-content-docs/src/sidebars/types').Sidebars} */
module.exports = {
    mainSidebar: [
        // Devtools
        {
            type: "link",
            href: "/enterprise",
            label: "Enterprise Edition",
            className: "enterprise-badge",
        },
 
        // Enterprise Edition
        {
            type: "category",
            label: "Enterprise Edition",
            className: "category-as-header",
            items: ["enterprise-edition/okta/index"],
        },
    ],
};
