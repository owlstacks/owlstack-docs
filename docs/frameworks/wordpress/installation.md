---
sidebar_position: 1
title: Installation
description: Installing the OwlStack WordPress plugin.
---

# WordPress — Installation

## Requirements

- PHP 8.1+
- WordPress 6.4+
- Composer

## Install

```bash
cd wp-content/plugins/owlstack-wordpress
composer install
```

## Activate

Go to **WP Admin → Plugins** and activate **OwlStack**.

## Dependencies

The plugin bundles `owlstack/owlstack-core` via Composer. No external SDKs are needed.

## Features overview

- **Admin Settings Page** — Configure platform credentials and proxy settings
- **Publish Meta Box** — Select platforms from the post editor
- **Delivery Logs** — Track all publishing activity
- **REST API** — AJAX endpoints for testing connections and manual publishing
- **WP HTTP API** — Uses native WordPress HTTP functions
- **WordPress Events** — Hooks into `do_action` for publishing events
- **Token Storage** — Encrypted OAuth token storage via `wp_options`
