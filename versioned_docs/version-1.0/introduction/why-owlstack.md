---
sidebar_position: 2
title: Why OwlStack?
description: The problems OwlStack solves and why you should use it.
---

# Why OwlStack?

## The problem

Publishing to social media from code means dealing with:

- **11 different APIs** with different auth methods, endpoints, and SDKs
- **Different character limits** — 280 for Twitter, 63,206 for Facebook, 4,096 for Telegram
- **Different media constraints** — Instagram requires hosted URLs, Twitter needs chunked uploads, Discord supports webhooks
- **Different markup formats** — HTML for Telegram, Markdown for Discord, mrkdwn for Slack
- **OAuth complexity** — Token refresh, scopes, 1.0a vs 2.0
- **Rate limiting** — Each platform has different limits and retry strategies
- **Error handling** — Inconsistent error responses across platforms

## The solution

OwlStack provides:

### One API for everything

```php
// Same pattern for all 11 platforms
$result = $publisher->publish($post, 'telegram');
$result = $publisher->publish($post, 'twitter');
$result = $publisher->publish($post, 'discord');
```

### Zero dependencies

Pure PHP 8.1+. Only `ext-curl` and `ext-json` required. No bloated SDKs, no framework lock-in.

### Contract-driven architecture

Every concern (HTTP, storage, events, auth) is backed by an interface. Swap implementations without changing your code.

### Exception-safe publishing

`Publisher::publish()` **never throws**. It always returns a `PublishResult` with success/failure status, error messages, and platform details.

### Immutable value objects

`Post`, `Media`, `MediaCollection`, and `AccessToken` are all readonly. No surprises, no side effects.

### Platform-aware formatting

Each platform has its own formatter that automatically handles character limits, markup conversion, hashtag injection, and URL formatting.

### Built for integration

OwlStack is the engine. Laravel and WordPress packages are thin wrappers that wire it into your framework's conventions — config files, facades, service providers, hooks, and admin panels.

## Comparison

| Feature | OwlStack | Raw API calls | Other SDKs |
|:--------|:---------|:-------------|:-----------|
| Platforms supported | 11 | 1 per SDK | Varies |
| Dependencies | 0 | Many per SDK | Heavy |
| Unified API | ✅ | ❌ | Partial |
| Exception-safe | ✅ | ❌ | Varies |
| Auto-formatting | ✅ | ❌ | ❌ |
| Framework support | Laravel, WordPress | Manual | Varies |
| Media validation | ✅ | Manual | Partial |
| OAuth management | ✅ | Manual | Partial |
