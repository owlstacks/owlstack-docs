---
sidebar_position: 2
title: Starter Plan
description: OwlStack Starter plan - for individual creators and small projects.
---

# Starter Plan

**$19/month** (or $179/year)

The Starter plan is designed for individual creators, bloggers, and small projects that need reliable multi-platform publishing.

## What's included

- **3 platform connections** - Connect up to 3 social platforms
- **200 posts/month** - Enough for daily publishing across 3 platforms
- **Basic analytics** - Post counts and delivery status
- **All SDK features** - Post builder, Media, DeliveryResult, events
- **Email support** - Standard response time

## Available platforms

Connect any 3 of the 11 supported platforms:

Twitter/X, Telegram, Facebook, LinkedIn, Instagram, Discord, Pinterest, Reddit, Slack, Tumblr, WhatsApp

## SDK usage

```php
use OwlStack\Cloud\OwlStackClient;
use OwlStack\Post;
use OwlStack\Enums\Platform;

$client = new OwlStackClient('your-starter-api-key');

$post = Post::create('Published with OwlStack Starter!')
    ->withHashtags(['owlstack']);

// Publish to your 3 connected platforms
$results = $client->publish($post, [
    Platform::Twitter,
    Platform::LinkedIn,
    Platform::Telegram,
]);
```

## Upgrade path

Need more platforms or posts? Upgrade to [Pro](/plans/pro) for all 11 platforms and 2,000 posts/month.
