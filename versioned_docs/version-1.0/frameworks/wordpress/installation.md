---
sidebar_position: 1
title: Installation
description: Installing the OwlStack WordPress plugin.
---

# WordPress - Installation

## Requirements

- PHP 8.1+
- WordPress 6.4+

## Install

Download the OwlStack plugin from the [OwlStack dashboard](https://app.owlstack.dev) or install via Composer:

```bash
composer require owlstack/wordpress
```

## Activate

Go to **WP Admin -> Plugins** and activate **OwlStack**.

## Configure

After activation, go to **WP Admin -> OwlStack -> Settings** and enter your API key.

Get your API key from the [OwlStack dashboard](https://app.owlstack.dev).

## Features overview

- **Admin Settings Page** - Enter your API key and configure options
- **Publish Meta Box** - Select platforms from the post editor
- **Delivery Logs** - Track all publishing activity
- **REST API** - AJAX endpoints for testing and manual publishing
- **WordPress Events** - Hooks into `do_action` for publishing events
- **OAuth via Dashboard** - Connect platforms through the OwlStack dashboard (no local tokens)
