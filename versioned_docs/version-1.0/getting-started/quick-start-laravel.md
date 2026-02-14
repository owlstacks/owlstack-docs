---
sidebar_position: 3
title: Quick Start (Laravel)
description: Set up OwlStack in a Laravel application.
---

# Quick Start — Laravel

This guide gets OwlStack working in your Laravel application in minutes.

## 1. Install

```bash
composer require owlstack/owlstack-laravel
```

## 2. Publish config

```bash
php artisan vendor:publish --tag=owlstack-config
```

This creates `config/owlstack.php`.

## 3. Add credentials to `.env`

```dotenv
# Telegram
TELEGRAM_BOT_TOKEN=your-bot-token
TELEGRAM_BOT_USERNAME=your_bot
TELEGRAM_CHANNEL_USERNAME=@your_channel
TELEGRAM_CHANNEL_SIGNATURE=
TELEGRAM_PARSE_MODE=HTML

# X (Twitter)
TWITTER_CONSUMER_KEY=your-key
TWITTER_CONSUMER_SECRET=your-secret
TWITTER_ACCESS_TOKEN=your-token
TWITTER_ACCESS_TOKEN_SECRET=your-token-secret

# Facebook
FACEBOOK_APP_ID=your-app-id
FACEBOOK_APP_SECRET=your-app-secret
FACEBOOK_PAGE_ACCESS_TOKEN=your-page-token
FACEBOOK_PAGE_ID=your-page-id
FACEBOOK_GRAPH_VERSION=v21.0
```

:::info
Only platforms with valid credentials are registered. If you leave Twitter credentials empty, only Telegram and Facebook will be available.
:::

## 4. Publish content

### Via Dependency Injection (recommended)

```php
use Owlstack\Laravel\SendTo;

class PostController extends Controller
{
    public function publish(SendTo $sendTo)
    {
        // Telegram
        $result = $sendTo->telegram('Hello from Laravel!');

        // Twitter/X
        $result = $sendTo->twitter('Hello from Laravel!');
        $result = $sendTo->x('Hello from Laravel!'); // alias

        // Facebook
        $result = $sendTo->facebook('Check this out!', 'link', [
            'link' => 'https://example.com',
        ]);
    }
}
```

### Via Facade

```php
use Owlstack\Laravel\Facades\Owlstack;

Owlstack::telegram('Hello from the facade!');
Owlstack::twitter('Tweet from the facade!');
```

## 5. Check results

All methods return `Owlstack\Core\Publishing\PublishResult`:

```php
$result = $sendTo->telegram('Hello!');

$result->success;      // bool
$result->platformName; // 'telegram'
$result->externalId;   // '12345'
$result->externalUrl;  // URL if available
$result->error;        // error message if failed
```

## 6. Listen to events

```php
use Owlstack\Core\Events\PostPublished;
use Owlstack\Core\Events\PostFailed;

Event::listen(PostPublished::class, function (PostPublished $event) {
    Log::info("Published to {$event->result->platformName}", [
        'external_id' => $event->result->externalId,
    ]);
});

Event::listen(PostFailed::class, function (PostFailed $event) {
    Log::error("Failed: {$event->result->error}");
});
```

## Using Post objects directly

For full control, create `Post` objects:

```php
use Owlstack\Core\Content\Post;
use Owlstack\Core\Content\Media;
use Owlstack\Core\Content\MediaCollection;

$post = new Post(
    title: 'My Article',
    body: 'Full article body text...',
    url: 'https://example.com/article',
    tags: ['laravel', 'php'],
    media: new MediaCollection([
        new Media('/path/to/image.jpg', 'image/jpeg', altText: 'Article image'),
    ]),
);

// Publish to a specific platform
$result = $sendTo->publish($post, 'telegram');

// Publish to all configured platforms
$results = $sendTo->toAll($post);
// Returns: ['telegram' => PublishResult, 'twitter' => PublishResult, ...]
```

## Next steps

- [Laravel Configuration](../frameworks/laravel/configuration.md) — Full config reference
- [Laravel Usage](../frameworks/laravel/usage.md) — Telegram, Twitter, Facebook features in detail
- [Laravel Events](../frameworks/laravel/events.md) — Event handling in Laravel
