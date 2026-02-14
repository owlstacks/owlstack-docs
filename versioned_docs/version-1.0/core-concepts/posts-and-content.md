---
sidebar_position: 1
title: Posts & Content
description: The Post, Media, and MediaCollection value objects.
---

# Posts & Content

The content layer uses **immutable value objects** that are platform-agnostic. You create them once and pass them to any platform.

## Post

The central content object. All properties are readonly.

```php
use Owlstack\Core\Content\Post;

$post = new Post(
    title: 'My Article Title',
    body: 'The full article content goes here...',
    url: 'https://example.com/my-article',        // optional
    excerpt: 'A short summary for Twitter',        // optional
    media: $mediaCollection,                       // optional
    tags: ['php', 'social-media', 'automation'],   // optional
    metadata: ['wp_post_id' => 42],                // optional
);
```

### Parameters

| Parameter | Type | Default | Description |
|:----------|:-----|:--------|:------------|
| `title` | `string` | *required* | Post title |
| `body` | `string` | *required* | Post body content |
| `url` | `?string` | `null` | Canonical URL to original content |
| `excerpt` | `?string` | `null` | Short summary (used by Twitter) |
| `media` | `?MediaCollection` | `null` | Attached media files |
| `tags` | `array` | `[]` | Tags for hashtag generation |
| `metadata` | `array` | `[]` | Arbitrary key-value store |

### Helper methods

```php
$post->hasMedia();                    // bool
$post->hasUrl();                      // bool
$post->getMeta('wp_post_id');         // 42
$post->getMeta('missing', 'default'); // 'default'
```

## CanonicalLink

Appends a "Read more" link to content, respecting character limits.

```php
use Owlstack\Core\Content\CanonicalLink;

$link = new CanonicalLink("\n\nRead more: {url}");
$text = $link->inject($content, 'https://example.com', maxLength: 280);
```

The link is only injected if there's room within the character limit.
