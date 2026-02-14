---
sidebar_position: 8
title: Pinterest
description: Creating pins with board and section targeting.
---

# Pinterest

Create pins with board and section targeting via Pinterest API v5.

## Credentials

| Key | Required | Description |
|:----|:---------|:------------|
| `access_token` | ✅ | Pinterest API access token |
| `board_id` | ✅ | Target board ID |

```php
$credentials = new PlatformCredentials('pinterest', [
    'access_token' => '...',
    'board_id' => '...',
]);
```

## Options

| Option | Type | Description |
|:-------|:-----|:------------|
| `board_section_id` | `string` | Target section within the board |
| `image_url` | `string` | Pin image URL |
| `alt_text` | `string` | Alt text for accessibility |
| `dominant_color` | `string` | Hex color code |

```php
$result = $publisher->publish($post, 'pinterest', [
    'board_section_id' => '...',
    'image_url' => 'https://example.com/pin.jpg',
    'alt_text' => 'Pin description',
    'dominant_color' => '#FF5733',
]);
```

## Constraints

| Constraint | Value |
|:-----------|:------|
| Max text length | 800 characters |
| Supported media types | JPEG, PNG, GIF, WebP, MP4 |
| API | Pinterest API v5 |
