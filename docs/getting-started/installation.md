---
sidebar_position: 1
title: Installation
description: How to install OwlStack SDK packages via Composer.
---

# Installation

## Requirements

| Requirement | Version |
|:------------|:--------|
| PHP | 8.1 or higher |
| ext-curl | * |
| ext-json | * |

## PHP (standalone)

```bash
composer require owlstack/cloud
```

This installs `owlstack/cloud` (the API client) and `owlstack/core` (interfaces, value objects) automatically.

## Laravel

```bash
composer require owlstack/laravel
```

This installs `owlstack/laravel`, `owlstack/cloud`, and `owlstack/core` automatically.

Then publish the config file:

```bash
php artisan vendor:publish --tag=owlstack-config
```

Add your API key to `.env`:

```ini
OWLSTACK_API_KEY=your-api-key-here
```

See the [Laravel quick start](./quick-start-laravel.md) for setup details.

## WordPress

Download the OwlStack plugin from the [OwlStack dashboard](https://app.owlstack.dev) or install via Composer:

```bash
cd wp-content/plugins/owlstack-wordpress
composer install
```

Activate the plugin from **WP Admin > Plugins**, then enter your API key in **WP Admin > OwlStack > Settings**.

See the [WordPress quick start](./quick-start-wordpress.md) for setup details.

## Get your API key

1. Sign up at [app.owlstack.dev](https://app.owlstack.dev)
2. Create a project
3. Copy your API key from the project dashboard
4. Connect your social media platforms via OAuth

:::tip Free tier available
The Starter plan starts at $19/mo, but you can try OwlStack with a free tier: 1 platform, 10 posts/month. No credit card required.
:::
