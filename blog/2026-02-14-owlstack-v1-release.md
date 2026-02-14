---
slug: owlstack-v1-release
title: "OwlStack v1.0: Unified Social Media Publishing for PHP"
authors: [alihesari]
tags: [release, announcement]
---

We're thrilled to announce the official release of **OwlStack v1.0** — a modern, zero-dependency PHP SDK for publishing content to 11 social media platforms through a single, unified API.

<!-- truncate -->

## What is OwlStack?

OwlStack lets you publish to Telegram, Twitter/X, Facebook, LinkedIn, Discord, Instagram, Pinterest, Reddit, Slack, Tumblr, and WhatsApp — all with one consistent interface.

```php
use Owlstack\Core\Content\Post;
use Owlstack\Core\Publishing\Publisher;

$post = Post::create('Hello from OwlStack! 🦉')
    ->withUrl('https://owlstack.dev');

$results = $publisher->publishToMany($post, ['telegram', 'twitter', 'linkedin']);
```

## Highlights

- **11 Platforms** supported out of the box
- **Zero Dependencies** — pure PHP 8.1+ with built-in cURL HTTP client
- **Immutable DTOs** — thread-safe `Post` objects with a fluent builder API
- **Smart Formatting** — automatic text truncation, hashtag extraction, and per-platform formatting
- **Event System** — hook into post lifecycle with listeners and dispatchers
- **Framework Integrations** — first-class Laravel and WordPress packages

## Framework Support

### Laravel

```bash
composer require owlstack/laravel
```

```php
use Owlstack\Laravel\Facades\Owlstack;

Owlstack::to('telegram', 'twitter')->publish($post);
```

### WordPress

Install the OwlStack plugin and publish directly from the post editor with meta boxes, admin settings, and REST API support.

## OwlStack Pro

For teams and businesses, **OwlStack Pro** adds:

- Batch publishing across multiple platforms
- Scheduled publishing with time windows and cron expressions
- Queue integration for background processing
- Delivery logging with full attempt history
- Content templates with placeholder resolution
- Automation rules and triggers
- AI-powered caption generation and hashtag suggestions
- Engagement analytics and reporting

## Get Started

Install the core package:

```bash
composer require owlstack/core
```

Then head over to the [Getting Started](/getting-started/installation) guide for a full walkthrough.

We'd love your feedback — star us on [GitHub](https://github.com/owlstacks) and let us know what you think!
