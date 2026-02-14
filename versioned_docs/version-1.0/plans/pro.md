---
sidebar_position: 3
title: Pro Plan
description: OwlStack Pro plan - for teams and power users.
---

# Pro Plan

**$49/month** (or $449/year)

The Pro plan unlocks the full power of OwlStack for teams and power users who need advanced publishing features.

## What's included

Everything in Starter, plus:

- **All 11 platforms** - Connect every supported platform
- **2,000 posts/month** - High-volume publishing
- **Scheduling** - Schedule posts for future delivery
- **Batch publishing** - Publish to many platforms in one API call with per-platform optimization
- **Templates** - Create reusable post templates
- **Full analytics** - Engagement metrics, delivery logs, performance trends
- **Webhooks** - Server-to-server event notifications
- **Priority email support**

## Scheduling

```php
use OwlStack\Cloud\OwlStackClient;
use OwlStack\Post;
use OwlStack\Enums\Platform;

$client = new OwlStackClient('your-pro-api-key');

$post = Post::create('Scheduled for tomorrow morning!')
    ->withUrl('https://example.com/article');

// Schedule for specific time (UTC)
$client->schedule($post, [Platform::Twitter, Platform::LinkedIn], [
    'scheduled_at' => '2026-03-15T09:00:00Z',
]);
```

## Batch publishing

```php
// Publish multiple posts in one call
$client->publishBatch([
    ['post' => $post1, 'platforms' => [Platform::Twitter]],
    ['post' => $post2, 'platforms' => [Platform::LinkedIn]],
    ['post' => $post3, 'platforms' => [Platform::Telegram]],
]);
```

## Templates

```php
// Create a reusable template
$client->createTemplate('product-launch', [
    'body' => 'Introducing {product_name} - {description}',
    'hashtags' => ['launch', 'product'],
    'platforms' => [Platform::Twitter, Platform::LinkedIn, Platform::Facebook],
]);

// Use the template
$client->publishFromTemplate('product-launch', [
    'product_name' => 'OwlStack Pro',
    'description' => 'Advanced social media publishing',
]);
```

## Upgrade path

Need AI-powered content? Upgrade to [Pro+AI](/plans/pro-ai) for content generation, auto-hashtags, and A/B testing.
