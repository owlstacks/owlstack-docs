---
sidebar_position: 3
title: Usage
description: Using OwlStack in Laravel -- Facade, DI, and publishing features.
---

# Laravel -- Usage

## Facade

```php
use OwlStack\Laravel\Facades\OwlStack;
use OwlStack\Enums\Platform;

// Publish to a single platform
OwlStack::publish('Hello from Laravel!', [Platform::Telegram]);

// Multiple platforms
OwlStack::publish('Hello from Laravel!', [
    Platform::Telegram,
    Platform::Twitter,
    Platform::LinkedIn,
]);
```

## Dependency Injection

```php
use OwlStack\Cloud\OwlStackClient;
use OwlStack\Post;
use OwlStack\Enums\Platform;

class PostController extends Controller
{
    public function publish(OwlStackClient $client)
    {
        $post = Post::create('Hello from Laravel!')
            ->withHashtags(['laravel', 'php']);

        $results = $client->publish($post, [
            Platform::Twitter,
            Platform::LinkedIn,
        ]);

        foreach ($results as $result) {
            if ($result->isSuccessful()) {
                Log::info("Published to {$result->platform()->value}");
            }
        }
    }
}
```

## Publishing with media

```php
use OwlStack\Post;
use OwlStack\Media;
use OwlStack\MediaCollection;

$post = Post::create('Check out these photos!')
    ->withUrl('https://example.com/gallery')
    ->withHashtags(['photography'])
    ->withMediaCollection(new MediaCollection([
        Media::image('/path/to/img1.jpg'),
        Media::image('/path/to/img2.jpg'),
    ]));

OwlStack::publish($post, [Platform::Instagram, Platform::Twitter]);
```

## Platform-specific options

```php
// Telegram with inline keyboard
OwlStack::publish($post, [Platform::Telegram], [
    'inline_keyboard' => [
        [['text' => 'Visit', 'url' => 'https://example.com']],
    ],
]);

// Twitter poll
OwlStack::publish($post, [Platform::Twitter], [
    'poll' => [
        'options' => ['Yes', 'No', 'Maybe'],
        'duration_minutes' => 1440,
    ],
]);
```

## Testing

Mock the OwlStack client in tests:

```php
use OwlStack\Cloud\OwlStackClient;

$mock = $this->createMock(OwlStackClient::class);
$mock->method('publish')->willReturn([
    // mock DeliveryResult objects
]);

$this->app->instance(OwlStackClient::class, $mock);
```
