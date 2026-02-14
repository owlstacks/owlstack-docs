---
slug: migrating-from-larasap
title: Migrating from Larasap to OwlStack
authors: [alihesari]
tags: [migration]
---

If you've been using **Larasap** (Laravel Social Auto Posting), upgrading to OwlStack gives you a modern, type-safe API with support for more platforms and better architecture.

<!-- truncate -->

## Why Migrate?

Larasap served the community well, but OwlStack is a complete rewrite with modern PHP practices:

| Feature | Larasap | OwlStack |
|:--------|:--------|:---------|
| PHP Version | 7.4+ | 8.1+ |
| Type Safety | Partial | Full (readonly, enums) |
| Architecture | Facade-only | Core + Framework packages |
| Platforms | 4 | 11+ |
| Testing | Limited | Full test suite |
| Immutability | No | Yes (immutable DTOs) |

## Step-by-Step Migration

### 1. Install OwlStack

```bash
composer remove toolkito/larasap
composer require owlstack/laravel
```

### 2. Publish Config

```bash
php artisan vendor:publish --tag=owlstack-config
```

### 3. Update Environment Variables

```dotenv
# Old (Larasap)
TELEGRAM_BOT_TOKEN=xxx
TELEGRAM_CHAT_ID=xxx

# New (OwlStack)
OWLSTACK_TELEGRAM_BOT_TOKEN=xxx
OWLSTACK_TELEGRAM_CHAT_ID=xxx
```

### 4. Update Code

**Before (Larasap):**

```php
use Toolkito\Larasap\SendTo;

SendTo::telegram('Hello World', '', 'test');
```

**After (OwlStack):**

```php
use Owlstack\Core\Content\Post;
use Owlstack\Laravel\Facades\Owlstack;

$post = Post::create('Hello World');
Owlstack::to('telegram')->publish($post);
```

### 5. Events

OwlStack fires proper Laravel events:

```php
use Owlstack\Laravel\Events\PostPublished;
use Owlstack\Laravel\Events\PostFailed;

// In EventServiceProvider
PostPublished::class => [LogSuccessfulPost::class],
PostFailed::class => [NotifyOnFailure::class],
```

## Need Help?

Check out the full [migration guide](/docs/frameworks/laravel/migration-from-larasap) in our documentation.
