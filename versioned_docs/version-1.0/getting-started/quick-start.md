---
sidebar_position: 2
title: Quick Start (Standalone PHP)
description: Publish your first post with OwlStack Core in minutes.
---

# Quick Start — Standalone PHP

This guide gets you publishing to a social media platform in under 5 minutes using `owlstack-core` directly.

## 1. Install

```bash
composer require owlstack/owlstack-core
```

## 2. Configure credentials

Each platform needs specific API credentials. Here's an example with Telegram (the simplest to set up):

```php
use Owlstack\Core\Config\PlatformCredentials;

$credentials = new PlatformCredentials('telegram', [
    'api_token' => 'your-bot-token',
    'channel_username' => '@your-channel',
]);
```

:::tip Getting a Telegram Bot Token
1. Open Telegram and search for **@BotFather**
2. Send `/newbot` and follow the prompts
3. Copy the API token
4. Add your bot as an admin to your channel
:::

## 3. Create the platform

```php
use Owlstack\Core\Http\HttpClient;
use Owlstack\Core\Platforms\Telegram\TelegramPlatform;
use Owlstack\Core\Platforms\Telegram\TelegramFormatter;

$httpClient = new HttpClient();
$formatter  = new TelegramFormatter();
$platform   = new TelegramPlatform($credentials, $httpClient, $formatter);
```

## 4. Register and publish

```php
use Owlstack\Core\Content\Post;
use Owlstack\Core\Platforms\PlatformRegistry;
use Owlstack\Core\Publishing\Publisher;

$registry = new PlatformRegistry();
$registry->register($platform);

$publisher = new Publisher($registry);

$post = new Post(
    title: 'Hello World',
    body: 'My first post via OwlStack!',
    url: 'https://example.com/hello-world',
    tags: ['opensource', 'php'],
);

$result = $publisher->publish($post, 'telegram');

if ($result->success) {
    echo "✓ Published! ID: {$result->externalId}\n";
    echo "  URL: {$result->externalUrl}\n";
} else {
    echo "✗ Failed: {$result->error}\n";
}
```

## 5. Multi-platform publishing

Add more platforms and publish to all of them:

```php
$registry->register($twitterPlatform);
$registry->register($discordPlatform);

foreach ($registry->names() as $name) {
    $result = $publisher->publish($post, $name);
    echo $result->success
        ? "✓ {$name}: {$result->externalUrl}\n"
        : "✗ {$name}: {$result->error}\n";
}
```

## Full example

```php
<?php

require __DIR__ . '/vendor/autoload.php';

use Owlstack\Core\Content\Post;
use Owlstack\Core\Config\PlatformCredentials;
use Owlstack\Core\Http\HttpClient;
use Owlstack\Core\Platforms\PlatformRegistry;
use Owlstack\Core\Platforms\Telegram\TelegramPlatform;
use Owlstack\Core\Platforms\Telegram\TelegramFormatter;
use Owlstack\Core\Publishing\Publisher;

// Setup
$credentials = new PlatformCredentials('telegram', [
    'api_token' => getenv('TELEGRAM_BOT_TOKEN'),
    'channel_username' => getenv('TELEGRAM_CHANNEL'),
]);

$platform = new TelegramPlatform(
    $credentials,
    new HttpClient(),
    new TelegramFormatter(),
);

$registry = new PlatformRegistry();
$registry->register($platform);
$publisher = new Publisher($registry);

// Publish
$post = new Post(
    title: 'Hello World',
    body: 'My first post via OwlStack!',
    url: 'https://example.com/hello-world',
    tags: ['opensource', 'php'],
);

$result = $publisher->publish($post, 'telegram');

echo $result->success
    ? "Published: {$result->externalUrl}\n"
    : "Failed: {$result->error}\n";
```

## Next steps

- [Core Concepts](../core-concepts/posts-and-content.md) — Learn about Posts, Media, and the content model
- [Platforms](../platforms/overview.mdx) — See all 11 supported platforms and their credentials
- [Formatting](../formatting/platform-formatters.md) — Understand how content is formatted per platform
