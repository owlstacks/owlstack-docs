---
sidebar_position: 3
title: Usage
description: Using OwlStack in Laravel — DI, Facade, Telegram, Twitter, Facebook features.
---

# Laravel — Usage

## Dependency Injection (recommended)

```php
use Owlstack\Laravel\SendTo;

class PostController extends Controller
{
    public function publish(SendTo $sendTo)
    {
        $result = $sendTo->telegram('Hello from Laravel!');
        $result = $sendTo->twitter('Hello from Laravel!');
        $result = $sendTo->x('Hello from Laravel!'); // alias
        $result = $sendTo->facebook('Check this out!', 'link', [
            'link' => 'https://example.com',
        ]);
    }
}
```

## Facade

```php
use Owlstack\Laravel\Facades\Owlstack;

Owlstack::telegram('Hello from the facade!');
Owlstack::twitter('Tweet from the facade!');
```

## Telegram features

```php
// Photo
$sendTo->telegram('Photo caption', [
    'type' => 'photo',
    'file' => '/path/to/image.jpg',
]);

// Video
$sendTo->telegram('Video caption', [
    'type' => 'video',
    'file' => '/path/to/video.mp4',
    'duration' => 120,
    'width' => 1920,
    'height' => 1080,
]);

// Document
$sendTo->telegram('Document caption', [
    'type' => 'document',
    'file' => '/path/to/file.pdf',
]);

// Location
$sendTo->telegram('', [
    'type' => 'location',
    'latitude' => 51.5074,
    'longitude' => -0.1278,
]);

// Contact
$sendTo->telegram('', [
    'type' => 'contact',
    'phone_number' => '+1234567890',
    'first_name' => 'John',
    'last_name' => 'Doe',
]);

// Media group
$sendTo->telegram('Album caption', [
    'type' => 'media_group',
    'files' => [
        ['type' => 'photo', 'media' => '/path/to/img1.jpg'],
        ['type' => 'photo', 'media' => '/path/to/img2.jpg'],
    ],
]);

// Inline keyboard
$sendTo->telegram('Click below!', null, [
    [['text' => 'Visit', 'url' => 'https://example.com']],
]);
```

## Twitter / X features

```php
// Text tweet
$sendTo->twitter('Hello Twitter!');

// With media
$sendTo->twitter('Check this photo!', [
    'path' => '/path/to/image.jpg',
    'mime_type' => 'image/jpeg',
]);

// Multiple media
$sendTo->twitter('Multiple images!', [
    ['path' => '/path/to/img1.jpg', 'mime_type' => 'image/jpeg'],
    ['path' => '/path/to/img2.jpg', 'mime_type' => 'image/jpeg'],
]);
```

## Facebook features

```php
// Link post
$sendTo->facebook('Check this article!', 'link', [
    'link' => 'https://example.com/article',
]);

// Photo post
$sendTo->facebook('Beautiful photo!', 'photo', [
    'photo' => '/path/to/image.jpg',
]);

// Video post
$sendTo->facebook('Watch this!', 'video', [
    'video' => '/path/to/video.mp4',
    'title' => 'My Video',
    'description' => 'A great video.',
]);
```

## Using Post objects directly

```php
use Owlstack\Core\Content\Post;
use Owlstack\Core\Content\Media;
use Owlstack\Core\Content\MediaCollection;

$post = new Post(
    title: 'My Article',
    body: 'Full article body text...',
    url: 'https://example.com/article',
    tags: ['laravel', 'php'],
    media: new MediaCollection([
        new Media('/path/to/image.jpg', 'image/jpeg', altText: 'Article image'),
    ]),
);

// Single platform
$result = $sendTo->publish($post, 'telegram');

// All platforms
$results = $sendTo->toAll($post);
// Returns: ['telegram' => PublishResult, 'twitter' => PublishResult, ...]
```

## Testing

Mock the HTTP client in your tests:

```php
use Owlstack\Core\Http\Contracts\HttpClientInterface;

$mock = $this->createMock(HttpClientInterface::class);
$mock->method('post')->willReturn([
    'status' => 200,
    'headers' => [],
    'body' => json_encode(['ok' => true, 'result' => ['message_id' => 1]]),
]);

$this->app->instance(HttpClientInterface::class, $mock);
```
