---
sidebar_position: 3
title: Platform Configuration
description: Configuring platform credentials with PlatformCredentials and OwlstackConfig.
---

# Platform Configuration

## PlatformCredentials

A readonly credential bag for a single platform.

```php
use Owlstack\Core\Config\PlatformCredentials;

$creds = new PlatformCredentials('twitter', [
    'consumer_key' => '...',
    'consumer_secret' => '...',
    'access_token' => '...',
    'access_token_secret' => '...',
]);

$creds->get('consumer_key');         // value
$creds->has('consumer_key');         // true
$creds->require('consumer_key');     // value or throws InvalidArgumentException
$creds->all();                       // full credentials array
```

## OwlstackConfig

Central configuration for multiple platforms.

```php
use Owlstack\Core\Config\OwlstackConfig;

$config = new OwlstackConfig(
    platforms: [
        'telegram' => ['api_token' => '...'],
        'twitter'  => ['consumer_key' => '...', /* ... */],
    ],
    options: [
        'default_hashtag_count' => 5,
    ],
);

$config->hasPlatform('telegram');    // true
$config->credentials('telegram');    // PlatformCredentials
$config->configuredPlatforms();      // ['telegram', 'twitter']
$config->option('default_hashtag_count'); // 5
```

## ConfigValidator

Validates that required credential keys are present for each platform.

```php
use Owlstack\Core\Config\ConfigValidator;

$validator = new ConfigValidator();
$missing = $validator->validate($credentials); // ['access_token_secret']

// Or validate all platforms at once (throws on failure)
$validator->validateConfig($config);
```

## Required credentials per platform

| Platform | Required Keys |
|:---------|:-------------|
| Telegram | `api_token` |
| Twitter/X | `consumer_key`, `consumer_secret`, `access_token`, `access_token_secret` |
| Facebook | `app_id`, `app_secret`, `page_access_token`, `page_id` |
| LinkedIn | `access_token`, `person_id` or `organization_id` |
| Discord | `bot_token` + `channel_id`, **or** `webhook_url` |
| Instagram | `access_token`, `instagram_account_id` |
| Pinterest | `access_token`, `board_id` |
| Reddit | `client_id`, `client_secret`, `access_token`, `username` |
| Slack | `bot_token` + `channel`, **or** `webhook_url` |
| Tumblr | `access_token`, `blog_identifier` |
| WhatsApp | `access_token`, `phone_number_id` |
