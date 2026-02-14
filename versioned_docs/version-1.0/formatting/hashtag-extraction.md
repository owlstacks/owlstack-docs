---
sidebar_position: 3
title: Hashtag Extraction
description: Converting tags to platform-appropriate hashtags.
---

# Hashtag Extraction

## HashtagExtractor

Converts tags to hashtag strings, sanitizing special characters and respecting character budgets.

```php
use Owlstack\Core\Formatting\HashtagExtractor;

$extractor = new HashtagExtractor();
$hashtags = $extractor->extract(['PHP', 'social media'], maxCount: 5);
// '#PHP #socialmedia'
```

The extractor:

- **Prefixes** each tag with `#`
- **Removes** special characters (spaces, punctuation)
- **Limits** the number of hashtags via `$maxCount`
- **Appends** to the formatted content within the character budget

## Usage with Posts

When you set `tags` on a `Post`, the platform formatter uses `HashtagExtractor` automatically:

```php
$post = new Post(
    title: 'My Article',
    body: 'Content here...',
    tags: ['php', 'laravel', 'social-media'],
);

// The formatter will append: #php #laravel #socialmedia
$result = $publisher->publish($post, 'telegram');
```

Hashtags are only appended if there's room within the platform's character limit.
