---
sidebar_position: 3
title: Hashtag Extraction
description: How OwlStack handles hashtags from your tags.
---

# Hashtag Extraction

When you set tags on a `Post`, OwlStack automatically converts them to platform-appropriate hashtags.

## How it works

```php
$post = Post::create('Check out our new release!')
    ->withHashtags(['php', 'laravel', 'social-media']);

// OwlStack appends: #php #laravel #socialmedia
$client->publish($post, [Platform::Twitter]);
```

The hashtag engine:

- **Prefixes** each tag with `#`
- **Removes** special characters (spaces, punctuation)
- **Limits** the number of hashtags based on the character budget
- **Appends** hashtags to the formatted content only if there's room

## Character-budget-aware

Hashtags are only included if there's enough room within the platform's character limit. On Twitter (280 chars), if your content is 270 characters, hashtags won't be appended. On Telegram (4,096 chars), they almost always fit.

## Platform-specific behavior

| Platform | Hashtag Behavior |
|:---------|:----------------|
| Twitter/X | Appended at end, budget-aware |
| Instagram | Appended at end, up to 30 |
| LinkedIn | Appended at end |
| Facebook | Inline or appended |
| Others | Appended at end |
