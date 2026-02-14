---
sidebar_position: 1
title: Posts & Content
description: The Post and Media value objects for defining content.
---

# Posts & Content

The content layer uses **immutable value objects** that are platform-agnostic. You create them once and publish to any platform.

## Post

The central content object. All properties are readonly.

```php
use OwlStack\Post;
use OwlStack\Media;

$post = Post::create('The full article content goes here...')
    ->withTitle('My Article Title')
    ->withUrl('https://example.com/my-article')
    ->withMedia(Media::image('/path/to/photo.jpg'))
    ->withHashtags(['php', 'social-media', 'automation'])
    ->withMetadata(['wp_post_id' => 42]);
```

### Builder methods

| Method | Description |
|:-------|:------------|
| `Post::create(string $body)` | Create a new post with body content |
| `->withTitle(string $title)` | Set the title |
| `->withUrl(string $url)` | Set the canonical URL |
| `->withExcerpt(string $excerpt)` | Set a short summary |
| `->withMedia(Media $media)` | Attach a media file |
| `->withMediaCollection(MediaCollection $media)` | Attach multiple media |
| `->withHashtags(array $tags)` | Set hashtags |
| `->withMetadata(array $metadata)` | Set arbitrary key-value data |

### Helper methods

```php
$post->hasMedia();                    // bool
$post->hasUrl();                      // bool
$post->getMeta('wp_post_id');         // 42
$post->getMeta('missing', 'default'); // 'default'
```

## How content is formatted

When you publish, OwlStack's cloud automatically formats your content for each platform:

- **Character limits** are enforced (280 for Twitter, 4,096 for Telegram, etc.)
- **Hashtags** are injected in the platform's preferred style
- **Markup** is converted (HTML for Telegram, Markdown for Discord, etc.)
- **URLs** are appended as "Read more" links where appropriate
- **Media** is resized and converted to meet platform requirements

You don't need to worry about any of this. Just create a `Post` with your content and OwlStack handles the rest.
