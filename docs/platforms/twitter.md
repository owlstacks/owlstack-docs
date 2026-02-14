---
sidebar_position: 3
title: Twitter / X
description: Publishing tweets via Twitter API v2 with OAuth 1.0a.
---

# Twitter / X

OwlStack supports Twitter API v2 with OAuth 1.0a authentication, including polls, quote tweets, and automatic `t.co` URL handling.

## Credentials

| Key | Required | Description |
|:----|:---------|:------------|
| `consumer_key` | ✅ | API Key |
| `consumer_secret` | ✅ | API Key Secret |
| `access_token` | ✅ | Access Token |
| `access_token_secret` | ✅ | Access Token Secret |

```php
$credentials = new PlatformCredentials('twitter', [
    'consumer_key' => '...',
    'consumer_secret' => '...',
    'access_token' => '...',
    'access_token_secret' => '...',
]);
```

## Publishing

```php
$result = $publisher->publish($post, 'twitter');
```

## Options

| Option | Type | Description |
|:-------|:-----|:------------|
| `reply_to` | `string` | Tweet ID to reply to |
| `quote_tweet_id` | `string` | Tweet ID to quote |
| `poll` | `array` | Poll options and duration |

```php
// Reply to a tweet
$result = $publisher->publish($post, 'twitter', [
    'reply_to' => '1234567890',
]);

// Quote tweet
$result = $publisher->publish($post, 'twitter', [
    'quote_tweet_id' => '9876543210',
]);

// Create a poll
$result = $publisher->publish($post, 'twitter', [
    'poll' => [
        'options' => ['Yes', 'No', 'Maybe'],
        'duration_minutes' => 1440,
    ],
]);
```

:::info URL handling
Twitter automatically wraps URLs to 23 characters (`t.co`). The formatter accounts for this in the 280-character budget, so you don't need to worry about URL length.
:::

## Constraints

| Constraint | Value |
|:-----------|:------|
| Max text length | 280 characters |
| Max media | 4 |
| Supported media types | JPEG, PNG, GIF, MP4 |
| Auth method | OAuth 1.0a |
| Retry strategy | Exponential backoff |
