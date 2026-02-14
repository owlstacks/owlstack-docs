---
sidebar_position: 2
title: Admin Panel
description: Configuring OwlStack from the WordPress admin panel.
---

# WordPress - Admin Panel

After activating the plugin, navigate to **WP Admin -> OwlStack -> Settings**.

## Settings page

The settings page has two sections:

### API Key

Enter your OwlStack API key. This is the only credential you need - all platform authentication is handled via the OwlStack dashboard.

### Connected Platforms

Shows which platforms are connected to your OwlStack account. Platforms are connected through the [OwlStack dashboard](https://app.owlstack.dev) using OAuth - no manual token entry needed.

### Proxy (optional)

For restricted networks, configure a proxy:

- **Host** - Proxy hostname
- **Port** - Proxy port
- **Type** - HTTP, SOCKS4, or SOCKS5

## Connection testing

The **Test Connection** button verifies that your API key is valid and shows your connected platforms and plan information.
