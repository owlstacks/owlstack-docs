---
sidebar_position: 2
title: PostPublished & PostFailed
description: The two core publishing events and their properties.
---

# PostPublished & PostFailed

## PostPublished

Dispatched when a post is successfully published to a platform.

```php
use Owlstack\Core\Events\PostPublished;

// Available properties:
$event->post;    // The Post object that was published
$event->result;  // The PublishResult (success, externalId, externalUrl, etc.)
```

## PostFailed

Dispatched when publishing fails.

```php
use Owlstack\Core\Events\PostFailed;

// Available properties:
$event->post;    // The Post object that failed
$event->result;  // The PublishResult (error message, platform name, etc.)
```

## Example: logging

```php
use Owlstack\Core\Events\PostPublished;
use Owlstack\Core\Events\PostFailed;

class PublishLogger implements EventDispatcherInterface
{
    public function dispatch(object $event): void
    {
        if ($event instanceof PostPublished) {
            logger("✓ Published to {$event->result->platformName}");
            logger("  External ID: {$event->result->externalId}");
            logger("  URL: {$event->result->externalUrl}");
        }

        if ($event instanceof PostFailed) {
            logger("✗ Failed on {$event->result->platformName}");
            logger("  Error: {$event->result->error}");
        }
    }
}
```
