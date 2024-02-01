---
sidebar_position: 1
---

# Getting Started with OpenPanel

OpenPanel offers a distinct advantage over other hosting panels by providing each user with an isolated environment and tools to fully manage it. This ensures that you enjoy full control over your environment, simillar to a VPS experience. You can effortlessly install new PHP versions, modify server configurations, view domain logs, restart services, and perform numerous other advanced tasks.

![openpanel scheme](/img/admin/openpanel_scheme.png)

This panel is the culmination of years of experience in the hosting industry, having spent decades working with various hosting panels we  made sure to include all features that simply make sense.

When we designed OpenPanel, we prioritized features that are not only user-friendly for beginners but also advanced enough to alleviate maintenance tasks for system administrators and hosting support teams.


Some of the unique features worth mentioning are:


- You can [install PHP versions](/docs/panel/advanced/server_settings#install-php-version) you need, [edit php.ini files](/docs/panel/advanced/server_settings#phpini-editor) and set desired limits.
- Control [MySQL settings](/docs/panel/advanced/server_settings#mysql-settings), set limits, [enable remote mysql access](/docs/panel/databases/remote) and much more.
- [Update system services](/docs/panel/advanced/server_settings#service-status) and even install new services that you need.
- Manage WordPress websites easily with [WP Manager](/docs/panel/applications/wordpress).
- Password-less login to [phpMyAdmin](/docs/panel/databases/phpmyadmin) and [Web Terminal](/docs/panel/advanced/terminal).
- Built-in [REDIS](/docs/panel/caching/Redis) and [Memcached](/docs/panel/caching/Memcached) object caching.


## Compare OpenPanel

| Feature / Panel               | OpenPanel   | cPanel   | Plesk | CyberPanel  |
|-------------------------------|-------------|----------|---------|---|
| Upload file size limit in FileManager |      ∞       |     2GB     |     2GB    |  200MB |
| Upload multiple files at once      |      ✔️        |    ❌      |yes | ❌  |
| Upload files in background |       ✔️       |     ❌     |    ❌     |  ❌ |
| Ajax search |      ✔️        |      ❌    |    ❌     | ❌  |
| Restore file premissions in bulk |      ✔️        |      1 file at a time    |    1 file at a time     | 1 file at a time  |
| View total folder size in FileManager |       ✔️      |     ❌      |     ❌    |  yes | ❌  |
| Remote MySQL per account                | ✔️  | ❌ |❌|❌|
| View MySQL processes |      ✔️        |     ❌     |    ❌     |  ❌ |
| Change panel port             | ✔️         | ❌       | ❌      | ❌  |
| Change panel access path                 | ✔️  | ❌ |    ❌     |  ❌ |
|  Force https   |      ✔️        |    ✔️       |    ❌     |  ❌ |
| Dark Mode  |     ✔️         |      ❌    |     ✔️     | ❌  |
| Object Caching  |     REDIS and Memcached        |      ❌    |     ❌    | ❌  |
| Elasticsearch suport   |      ✔️        |     ❌     |     ❌    | ❌  |
| SSH Access per account  |      ✔️        |     ❌ *(per server)     |     ❌ *(per server)    | ❌ *(per server)  |
| Install new PHP versions |      ✔️        |     ❌     |     ❌    | ❌  |
| Change TimeZone for account  |      ✔️        |     ❌     |     ❌    | ❌  |
| View services status  |      ✔️        |     ✔️     |     ✔️     | ❌  |
| Restart server services  |      ✔️        |     ❌     |     ❌    | ❌  |
| Edit MySQL configuration for account |      ✔️        |     ❌     |     ❌    | ❌  |
| Edit server configuration for account |      ✔️        |     ❌     |     ❌    | ❌  |
| Nginx or Apache webserver per account |      ✔️        |     ❌     |     ❌    | ❌  |
| WAF |      ✔️        |     ❌ *(only with ModSecurity)    |     ❌    | ❌  |
| Edit PHP.INI file |      ✔️        |     limited    |     limited    | limited  |
| PHP version per domain name|      ✔️        |     ✔️    |     ✔️    | ❌  |
| View resource usage  |      ✔️        |     ❌ *(only with Cloudlinux)     |     ❌    | ❌  |
| Activity log per account  |      ✔️        |     ❌     |     ❌    | ❌  |
| Detailed login log  |      ✔️        |     ❌     |     ❌    | ❌  |
| View inodes usage per folders  |      ✔️        |     ❌ *(only total count for account)     |     ❌ *(only total count for account)     | ❌  |
| Completelly isolated user accounts  |      ✔️        |     ❌ *(only with Cloudlinux)     |     ❌ *(only with Cloudlinux)     | ❌  |
| Keyboard shortcuts  |      ✔️        |     ❌ *(only in file editor)     |     ❌    | ❌ |
| Display custom messages to users |      ✔️        |     ❌ *(only for all users)     |     ❌ *(only for all users)    | ❌ |
| Localization ready and custom templates  |      ✔️        |     ❌ *(limited style editing)     |     ❌ *(limited style editing)    | ❌ *(limited style editing)  |


---

## Support

Our [Community](https://community.openpanel.co/) serves as our virtual Headquater, where the community helps each other.

**Learn, share** and **discuss** with other community members your questions.
