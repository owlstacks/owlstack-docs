---
sidebar_position: 2
title: Admin Panel
description: Configuring OwlStack from the WordPress admin panel.
---

# WordPress — Admin Panel

After activating the plugin, navigate to **WP Admin → OwlStack → Settings**.

## Settings page

The settings page lets you configure credentials for each platform:

- **Telegram** — Bot token, channel username
- **Twitter/X** — Consumer key/secret, access token/secret
- **Facebook** — App ID/secret, page access token, page ID
- **Proxy** — Optional proxy configuration for restricted networks

Settings are stored securely in `wp_options` with encryption for sensitive values.

## Connection testing

Each platform section has a **Test Connection** button that verifies your credentials are valid before you publish.
