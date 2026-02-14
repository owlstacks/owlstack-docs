---
sidebar_position: 1
title: Installation
description: How to install OwlStack packages via Composer.
---

# Installation

## Requirements

| Requirement | Version |
|:------------|:--------|
| PHP | ≥ 8.1 |
| ext-curl | * |
| ext-json | * |

## Core package (standalone PHP)

```bash
composer require owlstack/owlstack-core
```

This is the framework-agnostic core. Use this if you're building a standalone PHP application or integrating with a framework not yet supported.

## Laravel

```bash
composer require owlstack/owlstack-laravel
```

This installs both `owlstack-laravel` and `owlstack-core` automatically.

Then publish the config file:

```bash
php artisan vendor:publish --tag=owlstack-config
```

See the [Laravel quick start](./quick-start-laravel.md) for setup details.

## WordPress

```bash
cd wp-content/plugins/owlstack-wordpress
composer install
```

Then activate the plugin from **WP Admin → Plugins**.

See the [WordPress quick start](./quick-start-wordpress.md) for setup details.

## Pro packages

```bash
# Standalone PHP
composer require owlstack/owlstack-pro-core

# Laravel
composer require owlstack/owlstack-pro-laravel
```

:::tip Pro License Required
Pro packages require a valid OwlStack Pro license. Visit [owlstack.dev](https://owlstack.dev) for licensing information.
:::
