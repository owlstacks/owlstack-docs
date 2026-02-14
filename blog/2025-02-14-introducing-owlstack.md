---
slug: introducing-owlstack
title: Introducing OwlStack — Unified Social Media Publishing for PHP
authors: [alihesari]
tags: [announcement]
---

We're excited to announce **OwlStack**, a modern PHP SDK for publishing content to 11+ social media platforms with a single, unified API.

<!-- truncate -->

## Why OwlStack?

If you've ever built a social media integration in PHP, you know the pain: every platform has a different API, different rate limits, different media requirements, and different authentication flows. OwlStack solves this by providing a **single interface** that works across all platforms.

```php
use Owlstack\Core\Content\Post;
use Owlstack\Core\Publishing\Publisher;

$post = Post::create('Hello from OwlStack! 🦉')
    ->withUrl('https://owlstack.dev');

$results = $publisher->publishToMany($post, ['telegram', 'twitter', 'linkedin']);
```

## Key Features

- **11 Platforms**: Telegram, Twitter/X, Facebook, LinkedIn, Discord, Instagram, Pinterest, Reddit, Slack, Tumblr, WhatsApp
- **Zero Dependencies**: Pure PHP 8.1+ with built-in cURL HTTP client
- **Immutable DTOs**: Thread-safe `Post` objects with fluent builder API
- **Smart Formatting**: Automatic text truncation, hashtag extraction, per-platform formatting
- **Framework Integrations**: Laravel and WordPress packages available

## Framework Support

### Laravel

```bash
composer require owlstack/laravel
```

Publish to social media with a single facade call:

```php
use Owlstack\Laravel\Facades\Owlstack;

Owlstack::to('telegram', 'twitter')->publish($post);
```

### WordPress

Install the OwlStack plugin and publish directly from the post editor with meta boxes and REST API support.

## What's Next?

- **OwlStack Pro**: Batch publishing, scheduling, delivery logging, AI integration, and analytics
- **More Platforms**: We're always adding new platform support
- **Community**: Join us on [GitHub](https://github.com/owlstacks) to contribute

Get started today with our [Quick Start Guide](/getting-started/quick-start).
