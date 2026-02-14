---
sidebar_position: 3
title: Platform Credentials
description: Pass-per-request credentials as an alternative to managed OAuth.
---

# Platform Credentials

By default, OwlStack manages platform credentials via OAuth through the dashboard. However, you can also pass your own platform credentials with each request.

## When to use pass-per-request

- You already have platform API credentials
- You want full control over token management
- You're migrating from a direct API integration
- Enterprise compliance requires you to manage your own tokens

## How it works

Pass credentials as part of the platform configuration:

```php
use OwlStack\Enums\Platform;

$result = $client->publish($post, [
    Platform::Twitter->withCredentials([
        'consumer_key' => env('TWITTER_CONSUMER_KEY'),
        'consumer_secret' => env('TWITTER_CONSUMER_SECRET'),
        'access_token' => env('TWITTER_ACCESS_TOKEN'),
        'access_token_secret' => env('TWITTER_ACCESS_TOKEN_SECRET'),
    ]),
]);
```

OwlStack uses the provided credentials for that request only. Credentials are not stored on our servers.

## Required credentials by platform

| Platform | Required Fields |
|:---------|:---------------|
| Telegram | `api_token`, `channel_username` |
| Twitter/X | `consumer_key`, `consumer_secret`, `access_token`, `access_token_secret` |
| Facebook | `page_access_token`, `page_id` |
| LinkedIn | `access_token`, `person_id` or `organization_id` |
| Discord | `bot_token` + `channel_id`, or `webhook_url` |
| Instagram | `access_token`, `instagram_account_id` |
| Pinterest | `access_token`, `board_id` |
| Reddit | `client_id`, `client_secret`, `access_token`, `username` |
| Slack | `bot_token` + `channel`, or `webhook_url` |
| Tumblr | `access_token`, `blog_identifier` |
| WhatsApp | `access_token`, `phone_number_id` |

## Mixing modes

You can use managed OAuth for some platforms and pass-per-request for others:

```php
$results = $client->publish($post, [
    // Uses managed OAuth (connected in dashboard)
    Platform::LinkedIn,
    Platform::Facebook,

    // Uses your own credentials
    Platform::Twitter->withCredentials([
        'consumer_key' => '...',
        'consumer_secret' => '...',
        'access_token' => '...',
        'access_token_secret' => '...',
    ]),
]);
```
