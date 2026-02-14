---
sidebar_position: 7
title: Instagram
description: Publishing photos, carousels, Reels, and Stories to Instagram.
---

# Instagram

Instagram uses a two-step container publishing flow via the Content Publishing API. OwlStack handles this automatically.

## Credentials

| Key | Required | Description |
|:----|:---------|:------------|
| `access_token` | ✅ | Instagram Graph API token |
| `instagram_account_id` | ✅ | Instagram Business Account ID |

```php
$credentials = new PlatformCredentials('instagram', [
    'access_token' => '...',
    'instagram_account_id' => '...',
]);
```

## Options

| Option | Type | Description |
|:-------|:-----|:------------|
| `media_type` | `string` | `IMAGE`, `REELS`, or `STORIES` |
| `image_url` | `string` | Publicly accessible image URL |
| `location_id` | `string` | Facebook location ID |
| `alt_text` | `string` | Alt text for accessibility |
| `carousel` | `array` | Array of carousel items |

```php
// Single image
$result = $publisher->publish($post, 'instagram', [
    'media_type' => 'IMAGE',
    'image_url' => 'https://example.com/photo.jpg',
    'alt_text' => 'Photo description',
]);

// Carousel
$result = $publisher->publish($post, 'instagram', [
    'carousel' => [
        ['image_url' => 'https://example.com/1.jpg'],
        ['image_url' => 'https://example.com/2.jpg'],
    ],
]);
```

:::warning
Instagram requires media to be hosted at **publicly accessible URLs**. Local file paths are not supported.
:::

## Constraints

| Constraint | Value |
|:-----------|:------|
| Max text length | 2,200 characters |
| Max media (carousel) | 10 |
| Supported media types | JPEG, MP4 |
| Publishing method | Two-step container |
