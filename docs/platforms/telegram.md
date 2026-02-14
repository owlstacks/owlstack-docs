---
sidebar_position: 2
title: Telegram
description: Publishing to Telegram channels and groups via Bot API.
---

# Telegram

Telegram is one of the most feature-rich platforms in OwlStack, supporting text, media, media groups, inline keyboards, locations, contacts, and venues.

## Credentials

| Key | Required | Description |
|:----|:---------|:------------|
| `api_token` | ✅ | Bot API token from @BotFather |
| `channel_username` | Optional | Default channel (e.g., `@mychannel`) |

```php
$credentials = new PlatformCredentials('telegram', [
    'api_token' => 'your-bot-token',
    'channel_username' => '@your-channel',
]);
```

:::tip Getting a Bot Token
1. Open Telegram and search for **@BotFather**
2. Send `/newbot` and follow the prompts
3. Copy the API token
4. Add your bot as an **admin** to your channel/group
:::

## Basic publishing

```php
$result = $publisher->publish($post, 'telegram');
```

## Options

| Option | Type | Description |
|:-------|:-----|:------------|
| `chat_id` | `string` | Override target chat/channel |
| `parse_mode` | `string` | `HTML` or `Markdown` |
| `disable_notification` | `bool` | Send silently |
| `inline_keyboard` | `array` | Inline keyboard buttons |

```php
$result = $publisher->publish($post, 'telegram', [
    'chat_id' => '@specific-channel',
    'parse_mode' => 'HTML',
    'disable_notification' => true,
    'inline_keyboard' => [
        [['text' => 'Visit Site', 'url' => 'https://example.com']],
    ],
]);
```

## Extended methods

The Telegram platform exposes additional methods beyond standard publishing:

```php
$platform->sendLocation($chatId, 40.7128, -74.0060);
$platform->sendVenue($chatId, 40.7128, -74.0060, 'NYC Office', '123 Main St');
$platform->sendContact($chatId, '+1234567890', 'John');
$platform->pinMessage($chatId, $messageId);
```

## Constraints

| Constraint | Value |
|:-----------|:------|
| Max text length | 4,096 characters |
| Max media per group | 10 |
| Supported media types | JPEG, PNG, GIF, MP4, OGG |
| Formatter markup | HTML |
