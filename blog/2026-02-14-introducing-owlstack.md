---
slug: introducing-owlstack
title: "Introducing OwlStack: One SDK, 11 Social Platforms"
authors: [alihesari]
tags: [announcement]
---

Meet **OwlStack** — an open-source PHP SDK that lets you publish content to 11 social media platforms through a single, unified API. No more juggling different SDKs, authentication flows, and content format quirks for every platform.

<!-- truncate -->

## The Problem

Every social media platform has its own API, rate limits, media requirements, and authentication flow. Building integrations means writing platform-specific code over and over — and maintaining it as APIs change.

If you've ever had to:

- Post to Telegram, Twitter, and LinkedIn from the same app
- Handle OAuth for some platforms and bot tokens for others
- Truncate text differently per platform
- Upload media with different size and format constraints

...you know how painful it gets.

## The Solution

OwlStack gives you **one interface** for all of it:

```php
use Owlstack\Core\Content\Post;

$post = Post::create('Exciting news! 🦉')
    ->withUrl('https://owlstack.dev')
    ->withMedia(Media::image('/path/to/image.jpg'))
    ->withTags(['opensource', 'php', 'socialmedia']);

// Publish everywhere
$results = $publisher->publishToMany($post, [
    'telegram', 'twitter', 'facebook', 'linkedin', 'discord',
]);
```

Each platform gets properly formatted content — text truncated to the right length, hashtags handled correctly, media validated against platform constraints — all automatically.

## Supported Platforms

| Platform | Auth | Key Features |
|:---------|:-----|:-------------|
| Telegram | Bot Token | Media groups, inline keyboards, channels |
| Twitter/X | OAuth 1.0a | Threads, polls, quote tweets |
| Facebook | OAuth 2.0 | Pages, scheduled publishing |
| LinkedIn | OAuth 2.0 | Personal & company pages |
| Discord | Bot / Webhook | Rich embeds, file attachments |
| Instagram | OAuth 2.0 | Carousels, Reels, Stories |
| Pinterest | OAuth 2.0 | Board & section targeting |
| Reddit | OAuth 2.0 | Self & link posts, flair |
| Slack | Bot / Webhook | Block Kit messages |
| Tumblr | OAuth 2.0 | NPF content blocks |
| WhatsApp | Business API | Templates, documents |

## Design Principles

- **Zero dependencies** — pure PHP 8.1+ with built-in cURL HTTP client
- **Immutable by default** — `Post` objects are readonly DTOs, safe to pass around
- **Extensible** — implement `PlatformInterface` to add any platform
- **Framework-agnostic** — the core has no framework coupling

## Framework Integrations

### Laravel

```bash
composer require owlstack/laravel
```

```php
use Owlstack\Laravel\Facades\Owlstack;

Owlstack::to('telegram', 'twitter')->publish($post);
```

Full config file, events (`PostPublished`, `PostFailed`), and queue support included.

### WordPress

Install the plugin and get admin settings, post editor meta boxes, and a REST API for AJAX publishing — no code required.

## What About Pro?

**OwlStack Pro** extends the core with features for teams and high-volume use cases: batch publishing, scheduling, queue integration, delivery logging, content templates, automation rules, AI-powered captions, and analytics. All documented with Pro badges right alongside the free features.

## Get Involved

OwlStack is fully open source. We'd love your contributions:

- ⭐ [Star us on GitHub](https://github.com/owlstacks)
- 📖 [Read the docs](/)
- 🚀 [Get started](/getting-started/installation)

Let's make social media publishing in PHP simple.
