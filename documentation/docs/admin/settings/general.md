---
sidebar_position: 1
---

# General Settings

Change ports, domain, enable ssl, etc.

![openadmin general panel settings](/img/admin/adminpanel_general_settings.png)

The General Settings page enables you to specify the domain name for accessing both the admin and user panels, with an option to switch to an IP address. 

## Set domain for OpenPanel

To enable access to both OpenAdmin and OpenPanel through a domain name, such as srv.your-domain.com:2083, follow these three steps:

1. Set the desired name as the server hostname.
2. Point the domain name to the public IP of the server.
3. Configure the domain name in OpenAdmin under OpenAdmin Settings.

Completing these steps will allow users to access both OpenAdmin and OpenPanel using the specified domain name and port.

![openadmin set_domainname](/img/admin/adminpanel_domainname.png)

## Set IP address for OpenPanel

To access OpenPanel and OpenAdmin via server public IP address, choose the "Server IP address" option and click save. The modification is immediate, redirecting you to the designated IP:2087 for the admin panel upon saving.

![openadmin set ip](/img/admin/adminpanel_serverip.png)

## Change OpenPanel port

Port configurations for OpenAdmin and OpenPanel interfaces can be modified from their default settings (2087 for OpenAdmin and 203 for OpenPanel). 

![openadmin set port for openpanel](/img/admin/openpanel_settings.png)

To modify the port for the OpenPanel from the default `2083` to another value, you can easily set the desired port in the "OpenPanel Port" field.
It's important to note that the port must fall within the range of 1000-33000.

## Change OpenAdmin port

Port configurations for OpenAdmin and OpenPanel interfaces can be modified from their default settings (2087 for OpenAdmin and 203 for OpenPanel). 

![openadmin set port for openadmin](/img/admin/openadmin_settings.png)

To modify the port for the AdminPanel from the default `2087` to another value, you can easily set the desired port in the "OpenAdmin Port" field.
It's important to note that the port must fall within the range of 1000-33000.


# Force HTTPS

Enabling the "Force HTTPS" option ensures that the panels are accessible via HTTPS, recommended for enhanced security features like CORS and header checks in the OpenPanel interface.
To activate HTTPS, select the "Force HTTPS" option; to deactivate, simply uncheck it.

# Change /openpanel

By default, when users add a domain, the addition of "/openpanel" to the domain URL will redirect them to the OpenPanel interface. However, you have the flexibility to customize this, such as changing it to "/awesome," allowing users to access the OpenPanel via "their-domain.com/awesome".

To change the "/openpanel" to something else, simply set the value for the "OpenPanel is also available on:" field and click on save. Changes take effect instantly without service interruption.
![openadmin set custom path](/img/admin/openpanel_settings_available_on_openpanel.png)

## Enable Updates

The Update Preferences section provides the option to enable or disable Auto updates and Auto patches. Patches involve minor updates aimed at fixing bugs without introducing new features. On the other hand, Updates encompass major updates that introduce new features, potentially impacting existing functionality.

![openadmin set update preferences](/img/admin/openpanel_settings_updates.png)

Examples:
- Autoupdate: 1.0.2 will **NOT** be updated to 1.0.3 BUT 1.0.2 will be updated to 2.0.0
- Autopatch:  1.0.2 will be updated to 1.0.3 BUT 1.0.2 will **NOT** be updated to 2.0.0
