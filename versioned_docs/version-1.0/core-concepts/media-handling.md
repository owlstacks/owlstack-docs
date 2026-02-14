---
sidebar_position: 2
title: Media Handling
description: Working with Media for images, videos, and documents.
---

# Media Handling

## Media

A single media attachment -- image, video, audio, or document.

```php
use OwlStack\Media;

// Quick factory methods
$image = Media::image('/path/to/photo.jpg');
$video = Media::video('/path/to/clip.mp4');

// Full constructor
$image = Media::create(
    path: '/path/to/photo.jpg',
    mimeType: 'image/jpeg',
    altText: 'A sunset over the ocean',
);
```

### Type checks

```php
$image->isImage();    // true
$image->isVideo();    // false
$image->isAudio();    // false
$image->isDocument(); // false
```

## MediaCollection

An immutable, typed collection. Adding items returns a **new** instance.

```php
use OwlStack\MediaCollection;

$collection = new MediaCollection();
$collection = $collection->add($image1);
$collection = $collection->add($image2);
$collection = $collection->add($video);

$collection->count();    // 3
$collection->first();    // $image1
$collection->images();   // MediaCollection with $image1, $image2
$collection->videos();   // MediaCollection with $video
$collection->isEmpty();  // false
$collection->all();      // Media[]
```

### Attaching to a Post

```php
use OwlStack\Post;
use OwlStack\Media;
use OwlStack\MediaCollection;

$post = Post::create('Check out these photos!')
    ->withMediaCollection(new MediaCollection([
        Media::image('/path/to/img1.jpg'),
        Media::image('/path/to/img2.jpg'),
    ]));
```

## Platform media constraints

Each platform has different media requirements. OwlStack handles validation and processing on the server:

| Platform | Max Media | Supported Types |
|:---------|:----------|:---------------|
| Telegram | 10 | JPEG, PNG, GIF, MP4, OGG |
| Twitter/X | 4 | JPEG, PNG, GIF, MP4 |
| Facebook | 1 | JPEG, PNG, GIF, BMP, MP4, AVI |
| LinkedIn | 1 | JPEG, PNG, GIF |
| Discord | 10 | JPEG, PNG, GIF, WebP, MP4 |
| Instagram | 10 | JPEG, MP4 |
| Pinterest | 1 | JPEG, PNG, GIF, WebP, MP4 |
| Reddit | 1 | JPEG, PNG, GIF |

When you publish with media, OwlStack's cloud:
- Validates the file type against the target platform
- Resizes images if they exceed platform limits
- Converts formats as needed (e.g., PNG to JPEG for Instagram)
- Uploads the media to the platform's API
