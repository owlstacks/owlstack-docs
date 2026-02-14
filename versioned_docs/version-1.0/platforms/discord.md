---
sidebar_position: 6
title: Discord
description: Publishing to Discord channels via bot or webhook.
---

# Discord

Discord supports two modes — **bot** and **webhook** — with rich embed support.

## Credentials

**Bot mode:**

| Key | Required | Description |
|:----|:---------|:------------|
| `bot_token` | ✅ | Discord bot token |
| `channel_id` | ✅ | Target channel ID |

**Webhook mode:**

| Key | Required | Description |
|:----|:---------|:------------|
| `webhook_url` | ✅ | Discord webhook URL |

```php
// Bot mode
$credentials = new PlatformCredentials('discord', [
    'bot_token' => '...',
    'channel_id' => '...',
]);

// Webhook mode
$credentials = new PlatformCredentials('discord', [
    'webhook_url' => 'https://discord.com/api/webhooks/...',
]);
```

## Options

| Option | Type | Description |
|:-------|:-----|:------------|
| `embed` | `bool` | Use rich embed format |
| `color` | `int` | Embed color (hex) |
| `thread_id` | `string` | Send to a thread |
| `tts` | `bool` | Text-to-speech |

```php
$result = $publisher->publish($post, 'discord', [
    'embed' => true,
    'color' => 0x5865F2,
    'thread_id' => '...',
    'tts' => false,
]);
```

## Constraints

| Constraint | Value |
|:-----------|:------|
| Max text length | 2,000 characters |
| Max media | 10 |
| Supported media types | JPEG, PNG, GIF, WebP, MP4 |
| Formatter markup | Markdown |
