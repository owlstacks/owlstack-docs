---
sidebar_position: 4
title: Events
description: Laravel event integration for OwlStack publishing.
---

# Laravel — Events

OwlStack dispatches events through Laravel's event system automatically.

## Available events

| Event | When |
|:------|:-----|
| `Owlstack\Core\Events\PostPublished` | After successful publishing |
| `Owlstack\Core\Events\PostFailed` | After a publishing failure |

## Listening

```php
use Owlstack\Core\Events\PostPublished;
use Owlstack\Core\Events\PostFailed;

// In a service provider or EventServiceProvider
Event::listen(PostPublished::class, function (PostPublished $event) {
    Log::info("Published to {$event->result->platformName}", [
        'external_id' => $event->result->externalId,
        'url' => $event->result->externalUrl,
    ]);
});

Event::listen(PostFailed::class, function (PostFailed $event) {
    Log::error("Failed to publish to {$event->result->platformName}", [
        'error' => $event->result->error,
    ]);
});
```

## Using listener classes

```php
// app/Listeners/LogPublishing.php
class LogPublishing
{
    public function handle(PostPublished $event): void
    {
        DeliveryLog::create([
            'platform' => $event->result->platformName,
            'external_id' => $event->result->externalId,
            'external_url' => $event->result->externalUrl,
            'published_at' => $event->result->timestamp,
        ]);
    }
}
```
