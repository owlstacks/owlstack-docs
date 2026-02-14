---
sidebar_position: 2
title: Media Handling
description: Working with Media and MediaCollection for images, videos, and documents.
---

# Media Handling

## Media

A single media attachment — image, video, audio, or document.

```php
use Owlstack\Core\Content\Media;

$image = new Media(
    path: '/path/to/photo.jpg',
    mimeType: 'image/jpeg',
    altText: 'A sunset over the ocean',
    width: 1920,
    height: 1080,
    fileSize: 245_000,
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
use Owlstack\Core\Content\MediaCollection;

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

### Iterating

```php
foreach ($collection as $media) {
    echo $media->path;
}
```

### Attaching to a Post

```php
use Owlstack\Core\Content\Post;

$post = new Post(
    title: 'Photo Gallery',
    body: 'Check out these photos!',
    media: new MediaCollection([
        new Media('/path/to/img1.jpg', 'image/jpeg'),
        new Media('/path/to/img2.jpg', 'image/jpeg'),
    ]),
);
```

## Platform media constraints

Each platform has different media limits. OwlStack validates media against these automatically:

| Platform | Max Media | Supported Types |
|:---------|:----------|:---------------|
| Telegram | 10 | JPEG, PNG, GIF, MP4, OGG |
| Twitter/X | 4 | JPEG, PNG, GIF, MP4 |
| Facebook | 1 | JPEG, PNG, GIF, BMP, MP4, AVI |
| LinkedIn | 1 | JPEG, PNG, GIF |
| Discord | 10 | JPEG, PNG, GIF, WebP, MP4 |
| Instagram | 10 | JPEG, MP4 |
| Pinterest | — | JPEG, PNG, GIF, WebP, MP4 |
| Reddit | 1 | JPEG, PNG, GIF |

If you attach unsupported media, a `MediaValidationException` is thrown with details about what went wrong.
