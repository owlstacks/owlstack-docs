---
sidebar_position: 5
title: Migration from Larasap
description: Upgrading from alihesari/larasap to owlstack/laravel.
---

# Migration from Larasap

If you're upgrading from the old `alihesari/larasap` package, follow these steps.

## Step-by-step

### 1. Replace the package

```bash
composer remove alihesari/larasap
composer require owlstack/laravel
```

### 2. Create config

Delete `config/larasap.php` and publish the new config:

```bash
php artisan vendor:publish --tag=owlstack-config
```

### 3. Add API key

Replace your platform credentials in `.env` with a single API key:

```diff
- TELEGRAM_BOT_TOKEN=...
- TWITTER_CONSUMER_KEY=...
- FACEBOOK_PAGE_ACCESS_TOKEN=...
+ OWLSTACK_API_KEY=your-api-key-here
```

Get your API key from the [OwlStack dashboard](https://app.owlstack.dev).

### 4. Connect platforms

Connect your social accounts via the [OwlStack dashboard](https://app.owlstack.dev) using OAuth. No more manual token management.

### 5. Update imports

```diff
- use Alihesari\Larasap\SendTo;
+ use OwlStack\Laravel\Facades\OwlStack;
+ use OwlStack\Post;
+ use OwlStack\Enums\Platform;
```

### 6. Update publishing calls

```diff
// Old: platform-specific static calls
- SendTo::telegram($msg);
- SendTo::twitter($msg);
- SendTo::facebook('link', $data);

// New: unified API
+ OwlStack::publish($msg, [Platform::Telegram]);
+ OwlStack::publish($msg, [Platform::Twitter]);
+ OwlStack::publish($msg, [Platform::Facebook]);

// Or use Post builder for complex content
+ $post = Post::create($msg)
+     ->withUrl('https://example.com')
+     ->withHashtags(['laravel']);
+ OwlStack::publish($post, [Platform::Twitter, Platform::Facebook]);
```

### 7. Update event listeners

```diff
- use Owlstack\Core\Events\PostPublished;
+ use OwlStack\Events\PostPublished;

// Property access changed to methods:
- $event->result->platformName
+ $event->result->platform()->value

- $event->result->externalId
+ $event->result->externalId()
```

### 8. Remove old dependencies

The `facebook/graph-sdk` and `facebook/php-business-sdk` dependencies are no longer needed - OwlStack Cloud handles all API communication.

## Key API changes

| Old (Larasap) | New (OwlStack) |
|:--------------|:---------------|
| `SendTo::telegram($msg)` | `OwlStack::publish($msg, [Platform::Telegram])` |
| `SendTo::x($msg)` | `OwlStack::publish($msg, [Platform::Twitter])` |
| `SendTo::facebook('link', $data)` | `OwlStack::publish($post, [Platform::Facebook])` |
| Platform credentials in `.env` | Single `OWLSTACK_API_KEY` |
| Returns raw array | Returns `DeliveryResult[]` |
| Static calls only | Facade + DI |
| Self-hosted API calls | Cloud-powered API |
