---
sidebar_position: 4
title: Events
description: Laravel event integration for OwlStack publishing.
---

# Laravel - Events

OwlStack dispatches events through Laravel's event system automatically.

## Available events

| Event | When |
|:------|:-----|
| `OwlStack\Events\PostPublished` | After successful publishing |
| `OwlStack\Events\PostFailed` | After a publishing failure |

## Listening

```php
use OwlStack\Events\PostPublished;
use OwlStack\Events\PostFailed;

// In a service provider or EventServiceProvider
Event::listen(PostPublished::class, function (PostPublished $event) {
    Log::info("Published to {$event->result->platform()->value}", [
        'external_id' => $event->result->externalId(),
        'url' => $event->result->externalUrl(),
    ]);
});

Event::listen(PostFailed::class, function (PostFailed $event) {
    Log::error("Failed to publish to {$event->result->platform()->value}", [
        'error' => $event->result->error(),
        'code' => $event->result->errorCode(),
    ]);
});
```

## Using listener classes

```php
// app/Listeners/LogPublishing.php
use OwlStack\Events\PostPublished;

class LogPublishing
{
    public function handle(PostPublished $event): void
    {
        DeliveryLog::create([
            'platform' => $event->result->platform()->value,
            'external_id' => $event->result->externalId(),
            'external_url' => $event->result->externalUrl(),
            'published_at' => now(),
        ]);
    }
}
```

## Webhook events

For server-to-server notifications (e.g., async delivery confirmation), use [webhooks](/events/webhooks) instead of SDK events.
