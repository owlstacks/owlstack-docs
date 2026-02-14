---
sidebar_position: 10
title: Slack
description: Publishing messages to Slack channels via bot or webhook.
---

# Slack

Slack supports two modes — **bot token** and **webhook** — with Block Kit layout support.

## Credentials

**Bot token mode:**

| Key | Required | Description |
|:----|:---------|:------------|
| `bot_token` | ✅ | Slack bot token (`xoxb-...`) |
| `channel` | ✅ | Target channel (`#general`) |

**Webhook mode:**

| Key | Required | Description |
|:----|:---------|:------------|
| `webhook_url` | ✅ | Slack webhook URL |

```php
// Bot token
$credentials = new PlatformCredentials('slack', [
    'bot_token' => 'xoxb-...',
    'channel' => '#general',
]);

// Webhook
$credentials = new PlatformCredentials('slack', [
    'webhook_url' => 'https://hooks.slack.com/services/...',
]);
```

## Options

| Option | Type | Description |
|:-------|:-----|:------------|
| `blocks` | `bool` | Use Block Kit layout |
| `thread_ts` | `string` | Reply in thread |
| `unfurl_links` | `bool` | Unfurl URLs |

```php
$result = $publisher->publish($post, 'slack', [
    'blocks' => true,
    'thread_ts' => '...',
    'unfurl_links' => true,
]);
```

## Constraints

| Constraint | Value |
|:-----------|:------|
| Max text length | 40,000 characters |
| Formatter markup | mrkdwn |
| URL format | `<url\|text>` |
