---
sidebar_position: 1
title: What is OwlStack?
description: OwlStack is a cloud-powered social media publishing service with PHP, Laravel, and WordPress SDKs.
slug: /introduction/what-is-owlstack
---

# What is OwlStack?

**OwlStack** is a cloud-powered social media publishing service that lets you publish content to 11+ platforms through a single API. It comes with official SDKs for PHP, Laravel, and WordPress.

```php
use OwlStack\Post;
use OwlStack\Enums\Platform;
use OwlStack\Cloud\OwlStackClient;

$client = new OwlStackClient(apiKey: env('OWLSTACK_API_KEY'));

$post = Post::create('Launching our new product!')
    ->withMedia(Media::image('/path/to/photo.jpg'))
    ->withHashtags(['launch', 'startup']);

$results = $client->publish($post, [
    Platform::Twitter,
    Platform::LinkedIn,
    Platform::Telegram,
]);
```

## How it works

1. **You write content** using OwlStack's clean PHP SDK (Post, Media, etc.)
2. **OwlStack's cloud** handles all platform APIs, formatting, rate limiting, and delivery
3. **You get results** back with delivery status, external URLs, and error details

You never interact with Twitter's API, Telegram's Bot API, or LinkedIn's Graph API directly. OwlStack handles all of that on the server side, so you don't have to maintain 11 different API integrations.

## Supported platforms

| Platform | Features |
|:---------|:---------|
| Telegram | Channels, groups, media groups, inline keyboards |
| Twitter/X | Threads, polls, quote tweets |
| Facebook | Pages, scheduled publishing |
| LinkedIn | Personal profiles, company pages |
| Discord | Rich embeds, file attachments |
| Instagram | Carousels, Reels, Stories |
| Pinterest | Board and section targeting |
| Reddit | Self posts, link posts, flair |
| Slack | Block Kit messages |
| Tumblr | NPF content blocks |
| WhatsApp | Template messages, documents |

## What you install

OwlStack provides lightweight SDK packages that communicate with the cloud service:

| Package | Purpose |
|:--------|:--------|
| `owlstack/core` | Interfaces, value objects, enums (open source, MIT) |
| `owlstack/cloud` | API client that talks to `api.owlstack.dev` |
| `owlstack/laravel` | Laravel service provider, facade, events |
| `owlstack/wordpress` | WordPress plugin with admin panel and meta boxes |

The SDKs are thin clients. All the heavy lifting (platform API calls, formatting, retries, AI) happens on OwlStack's servers.

## Plans

| Plan | Platforms | Posts/mo | Key features |
|:-----|:----------|:---------|:-------------|
| **Starter** | 3 | 100 | Basic publishing, 1 team member |
| **Pro** | All 11 | 1,000 | Batch, scheduling, logging, templates, analytics |
| **Pro + AI** | All 11 | 1,000 | Everything in Pro + AI content generation, optimization |
| **Enterprise** | All 11 | Unlimited | Custom integrations, SLA, dedicated support |

[View pricing details](/plans/overview)
