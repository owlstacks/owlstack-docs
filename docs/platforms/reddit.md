---
sidebar_position: 9
title: Reddit
description: Publishing self and link posts to subreddits.
---

# Reddit

Post to subreddits with flair, NSFW, and spoiler support.

## Credentials

| Key | Required | Description |
|:----|:---------|:------------|
| `client_id` | ✅ | Reddit app client ID |
| `client_secret` | ✅ | Reddit app client secret |
| `access_token` | ✅ | OAuth access token |
| `username` | ✅ | Reddit username |

```php
$credentials = new PlatformCredentials('reddit', [
    'client_id' => '...',
    'client_secret' => '...',
    'access_token' => '...',
    'username' => 'your_username',
]);
```

## Options

| Option | Type | Description |
|:-------|:-----|:------------|
| `subreddit` | `string` | **Required.** Target subreddit (without `r/`) |
| `kind` | `string` | `self` (text) or `link` |
| `flair_id` | `string` | Post flair ID |
| `nsfw` | `bool` | Mark as NSFW |
| `spoiler` | `bool` | Mark as spoiler |

```php
$result = $publisher->publish($post, 'reddit', [
    'subreddit' => 'php',
    'kind' => 'self',
    'flair_id' => '...',
    'nsfw' => false,
    'spoiler' => false,
]);
```

## Constraints

| Constraint | Value |
|:-----------|:------|
| Max text length | 40,000 characters |
| Max media | 1 |
| Supported media types | JPEG, PNG, GIF |
| Post types | Self (text) and Link |
