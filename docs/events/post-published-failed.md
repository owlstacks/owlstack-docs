---
sidebar_position: 2
title: PostPublished & PostFailed
description: The two core publishing events and their properties.
---

# PostPublished & PostFailed

## PostPublished

Fired when a post is successfully published to a platform.

```php
use OwlStack\Events\PostPublished;

$event->post;    // The Post object that was published
$event->result;  // The DeliveryResult (platform, externalId, externalUrl)
```

## PostFailed

Fired when publishing fails.

```php
use OwlStack\Events\PostFailed;

$event->post;    // The Post object that failed
$event->result;  // The DeliveryResult (platform, error message, error code)
```

## Laravel example

```php
use OwlStack\Events\PostPublished;
use OwlStack\Events\PostFailed;

Event::listen(PostPublished::class, function (PostPublished $event) {
    Log::info("Published to {$event->result->platform()->value}", [
        'external_id' => $event->result->externalId(),
        'url' => $event->result->externalUrl(),
    ]);
});

Event::listen(PostFailed::class, function (PostFailed $event) {
    Log::error("Failed on {$event->result->platform()->value}: {$event->result->error()}");
});
```

## WordPress example

```php
add_action('owlstack_post_published', function ($result) {
    error_log("Published to {$result->platform()->value}");
});

add_action('owlstack_post_failed', function ($result) {
    error_log("Failed: {$result->error()}");
});
```
