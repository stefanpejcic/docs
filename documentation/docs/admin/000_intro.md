---
sidebar_position: 1
---

# Getting Started with OpenAdmin

The OpenAdmin offers an administrator-level interface where you can efficiently handle tasks such as creating and managing users, setting up hosting plans, configuring backups, and editing OpenPanel settings.

![openpanel vs openadmin](/img/admin/openadmin_vs_openpanel_what_is_the_difference.png)



## Requirements

Hardware Requirements

| Operating system and version | Processor                                 | RAM                                 | Disk Space                             | Architecture |
| ---------------------------- | -----------------------------------------| ----------------------------------- | -------------------------------------- | ------------ |
| [Ubuntu 20.04](https://releases.ubuntu.com/22.04/) or newer            | Minimum: 1.1 GHz<br></br>Recommended: 2 GHz    | Minimum: 1 GB<br></br>Recommended: 4 GB   | Minimum: 12 GB<br></br>Recommended: 20 GB   | 64-bit       |



Docker and any required Docker images will be installed for you.

All users data resides in `/var` and we recommend, if your disk is partitioned, that this partition contains most of your available space.

## Installation

To install openpanel follow these steps: 

1. Log in to your new server;
- as root via SSH or
- as a user with sudo privileges and type "sudo -i"
2. Copy and paste openpanel installation command into the terminal
```shell
cd /root && (curl -sSL -o install https://get.openpanel.co || wget -qO install https://get.openpanel.co) && chmod +x install && ./install
```

:::info
We recommend that you run the installation command within a Linux screen session. The Linux Screen utility allows you to create a shell session that will stay active through a network disruption.
:::

OpenPanel installation process will by default perform the following steps:
- Check if your OS and available hardware resources meet the bare minimum system requirements
- Check if existing hosting panel or webserver is already installed
- Detect your OS and the package manager to be used for installation commands
- Check if another OpenPanel installaiton is in progress or eas interrupted
- Update and start installing required packages
- Configure and start all required system services
- Download required Docker images
- Set domain, generate SSL, and configure services
- Create hosting packages

The installation script also supports optional flags that can be used to install additional services, skip certain installation steps or display debugging information:

| Flag                | What it does                                                                                                      |
|---------------------|-------------------------------------------------------------------------------------------------------------------|
| `--with_modsec`     | Rebuild Nginx with ModSecurity module and set the OWASP core ruleset.                                                   |
| `--debug`           | Display on screen each installation step and output debugging information.                                   |
| `--skip-requirements`| Do not check if the server meets the minimum recommended requirements for running OpenPanel.                          |
| `--skip-panel-check`| Do not check if other hosting panels or webservers are installed and overwrite.                                               |
| `--repair`          | Do not check if OpenPanel installation is already running or previously failed and overwrite configuration.                     |
| `--skip-firewall`   | Do not install UFW and skip setting custom firewall rules.                                                          |
| `--skip-images`     | Skip building Docker images for Nginx and Apache.                                                                   |
| `--skip-ssl`        | Do not check if the server hostname is pointed to the IP and set it to be used for OpenPanel; instead, the server IP will be used. |
| `--skip-plans`      | Skip creating default Nginx and Apache hosting plans.                                                                                   |

Example: Install OpenPanel in debug mode

```shell
cd /root && (curl -sSL -o install https://get.openpanel.co || wget -qO install https://get.openpanel.co) && chmod +x install && ./install --debug
```


:::info
openpanel will install Docker, MySQL, Nginx, and several other tools on your server. You should install it on a fresh server, otherwise, you risk facing installation errors.
:::

:::warning
Port 53, 80, 443 and 2083 must be available and not blocked by your hosting provider firewall.
:::

### Troubleshooting failed installation

In a rare case that the OpenPanel installation process fails you shoud be able to determine the root cause from the error message alone.

You can also run the installation process with the `--debug` flag and afterwards check the installation log file for errors:

```bash
cat /root/openpanel_install.log
```

:::tip
In nearly 99.9% of instances, installation failures result from conflicts with residual services from a previous hosting panel or web server. If a web server was previously installed on the server, it is advisable to reinstall the operating system before attempting to install OpenPanel again.
:::

### Reporting bugs

If you encountered any errors while running the installation script, and **you are able to again reproduce the error** on another server (or same after reinstalling the OS) then please copy & paste the installation log file to [the community forums](https://community.openpanel.co).


## Post Install Steps

- [access admin panel](/docs/admin/intro#access-adminpanel)
- [set custom nameservers](/docs/admin/intro#set-nameservers)
- [create a package](/docs/admin/plans/hosting_plans#create-a-plan)
- [create a new user account](/docs/admin/users/openpanel#create-users)

### Access AdminPanel

Run `opencli admin` command to find the address on which AdminPanel is accessible. Example output:

```bash
root@server:/home# opencli admin
● AdminPanel is running and is available on: https://server.openpanel.co:2087/
```

To login to admin panel you need a username and password.

Default username for the main Administrator account is **admin** and password is random generated. To set a new password for the admin account run command: `opencli password NEW_PASSWORD_HERE`

Example:
```bash
root@server:/home# opencli admin password ba63vfav7fq36vas
Password for user 'admin' changed.

===============================================================
● AdminPanel is running and is available on: https://server.openpanel.co:2087/

- username: admin
- password: ba63vfav7fq36vas

===============================================================
```

## Updates

The panel will check for new updates nightly. If available, it will check your local update and patch preferences and update only when enabled.

To enable or disable updates, navigate to OpenAdmin > General Settings and check or uncheck the 'Auto Updates' and 'Auto Patches'.

![openadmin update preferences](/img/admin/openadmin_set_update_preferences.png)

If you want to update manually regardless of the schedule, you can run the following command.

```shell
opencli update
```
