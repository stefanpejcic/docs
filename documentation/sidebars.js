/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const mainSidebar = {
   panel: [
    'panel/intro',
    'panel/dashboard/dashboard',
      {
      type: 'category',
      label: 'Applications',
      items: [
        {
          type: 'doc',
          id: 'panel/applications/applications',
        },
        {
          type: 'doc',
          id: 'panel/applications/pm2',
        },
        {
          type: 'doc',
          id: 'panel/applications/wordpress',
        },
      ],
    },    
      {
      type: 'category',
      label: 'Domain Management',
      items: [
        {
          type: 'doc',
          id: 'panel/domains/domains',
        },
        {
          type: 'doc',
          id: 'panel/domains/dns',
        },
        {
          type: 'doc',
          id: 'panel/domains/SSL',
        },
      ],
    },
      {
      type: 'category',
      label: 'Databases',
      items: [
        {
          type: 'doc',
          id: 'panel/databases/databases',
        },
        {
          type: 'doc',
          id: 'panel/databases/wizard',
        },
        {
          type: 'doc',
          id: 'panel/databases/remote',
        },
        {
          type: 'doc',
          id: 'panel/databases/processlist',
        },
        {
          type: 'doc',
          id: 'panel/databases/phpmyadmin',
        },
      ],
    },
    {
      type: 'category',
      label: 'Files',
      items: [
        {
          type: 'doc',
          id: 'panel/files/files',
        },
        {
          type: 'doc',
          id: 'panel/files/backups',
        },
        {
          type: 'doc',
          id: 'panel/files/FTP',
        },
        {
          type: 'doc',
          id: 'panel/files/disk_usage',
        },
        {
          type: 'doc',
          id: 'panel/files/inodes_explorer',
        },
        {
          type: 'doc',
          id: 'panel/files/malware-scanner',
        },
         {
          type: 'doc',
          id: 'panel/files/fix_permissions',
        },
      ],
    },
      {
      type: 'category',
      label: 'Cache & Search',
      items: [
        {
          type: 'doc',
          id: 'panel/caching/caching',
        },
        {
          type: 'doc',
          id: 'panel/caching/Redis',
        },
        {
          type: 'doc',
          id: 'panel/caching/Memcached',
        },
        {
          type: 'doc',
          id: 'panel/caching/elasticsearch',
        },
      ],
    },
      {
      type: 'category',
      label: 'Analytics',
      items: [
        {
          type: 'doc',
          id: 'panel/analytics/resource_usage',
        },
        {
          type: 'doc',
          id: 'panel/analytics/domain_visitors',
        },
        {
          type: 'doc',
          id: 'panel/analytics/account_activity',
        },
      ],
    },
      {
      type: 'category',
      label: 'Advanced',
      items: [
        {
          type: 'doc',
          id: 'panel/advanced/advanced',
        },
        {
          type: 'doc',
          id: 'panel/advanced/cronjobs',
        },
        {
          type: 'doc',
          id: 'panel/advanced/ssh',
        },
        {
          type: 'doc',
          id: 'panel/advanced/terminal',
        },
        {
          type: 'doc',
          id: 'panel/advanced/process_manager',
        },
         {
          type: 'doc',
          id: 'panel/advanced/server_settings',
        },
      ],
    },
      {
      type: 'category',
      label: 'Account',
      items: [
        {
          type: 'doc',
          id: 'panel/account/account',
        },
        {
          type: 'doc',
          id: 'panel/account/2fa',
        },
        {
          type: 'doc',
          id: 'panel/account/login_history',
        },
         {
          type: 'doc',
          id: 'panel/account/login',
        },
      ],
    },
    // Promo
    {
        type: "link",
        href: "/enterprise",
        label: "OpenPanel BETA",
        className: "enterprise-badge",
    }
  ],


  admin: [
    { type: 'autogenerated', dirName: 'admin' },
    // Promo
    {
      type: 'link',
      href: '/enterprise',
      label: 'OpenPanel BETA',
      className: 'enterprise-badge',
    },
  ],

  changelog: [
    { type: 'autogenerated', dirName: 'changelog' },
    // Promo
    {
      type: 'link',
      href: '/enterprise',
      label: 'OpenPanel BETA',
      className: 'enterprise-badge',
    },
  ],
};

module.exports = mainSidebar;
