---
sidebar_position: 1
title: Installation & Setup
description: Installing and configuring OwlStack for Laravel.
---

# Laravel - Installation & Setup

## Requirements

- PHP 8.1+
- Laravel 10, 11, or 12

## Install

```bash
composer require owlstack/laravel
```

This installs `owlstack/laravel`, `owlstack/cloud`, and `owlstack/core`.

## Publish config

```bash
php artisan vendor:publish --tag=owlstack-config
```

This creates `config/owlstack.php`.

## Add API key

Add your OwlStack API key to `.env`:

```ini
OWLSTACK_API_KEY=your-api-key-here
```

Get your API key from the [OwlStack dashboard](https://app.owlstack.dev).

## Architecture

The Laravel package is a thin wrapper around the OwlStack cloud client:

```
Your Laravel App
    └── OwlStack\Laravel\Facades\OwlStack (Facade)
        └── OwlStack\Cloud\OwlStackClient
            └── HTTPS → api.owlstack.dev
```

The service provider wires everything together:

- **`OwlStackClient`** - configured with your API key
- **Event bridge** - connects OwlStack events to Laravel's event system
- **Facade** - provides a clean `OwlStack::publish()` API
