---
sidebar_position: 1
title: Installation & Setup
description: Installing and configuring OwlStack for Laravel.
---

# Laravel — Installation & Setup

## Requirements

- PHP 8.1+
- Laravel 10, 11, or 12

## Install

```bash
composer require owlstack/owlstack-laravel
```

This installs both `owlstack-laravel` and `owlstack-core`.

## Publish config

```bash
php artisan vendor:publish --tag=owlstack-config
```

This creates `config/owlstack.php`.

## Architecture

The Laravel package is a thin wrapper around `owlstack-core`:

```
Your Laravel App
    └── Owlstack\Laravel\SendTo (or Facade)
        └── Owlstack\Core\Publishing\Publisher
            └── Owlstack\Core\Platforms\{Platform}Platform
                └── Owlstack\Core\Http\HttpClient (cURL)
```

The service provider wires everything together:

- **`OwlstackConfig`** — built from `config/owlstack.php`
- **`HttpClient`** — core's cURL client (with optional proxy)
- **Platform instances** — only registered if credentials are configured
- **`PlatformRegistry`** — holds all active platforms
- **`Publisher`** — orchestrates publishing with event dispatch
- **`SendTo`** — high-level API bound as `'owlstack'` singleton
