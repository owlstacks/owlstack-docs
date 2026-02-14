---
sidebar_position: 4
title: Facebook
description: Publishing to Facebook Pages via Graph API.
---

# Facebook

Publish to Facebook Pages via the Graph API with support for scheduled publishing and privacy targeting.

## Credentials

| Key | Required | Description |
|:----|:---------|:------------|
| `app_id` | ✅ | Facebook App ID |
| `app_secret` | ✅ | Facebook App Secret |
| `page_access_token` | ✅ | Page Access Token |
| `page_id` | ✅ | Facebook Page ID |

```php
$credentials = new PlatformCredentials('facebook', [
    'app_id' => '...',
    'app_secret' => '...',
    'page_access_token' => '...',
    'page_id' => '...',
]);
```

## Publishing

```php
$result = $publisher->publish($post, 'facebook');
```

## Options

| Option | Type | Description |
|:-------|:-----|:------------|
| `privacy` | `array` | Privacy setting (e.g., `['value' => 'EVERYONE']`) |
| `scheduled_publish_time` | `int` | Unix timestamp for scheduled publishing |

```php
$result = $publisher->publish($post, 'facebook', [
    'privacy' => ['value' => 'EVERYONE'],
    'scheduled_publish_time' => time() + 3600,
]);
```

## Constraints

| Constraint | Value |
|:-----------|:------|
| Max text length | 63,206 characters |
| Max media | 1 |
| Supported media types | JPEG, PNG, GIF, BMP, MP4, AVI |
| API | Graph API |
