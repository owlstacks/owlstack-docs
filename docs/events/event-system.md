---
sidebar_position: 1
title: Event System
description: OwlStack's publishing lifecycle events.
---

# Event System

OwlStack dispatches events during the publishing lifecycle. Hook into these to log, notify, or react to publishing outcomes.

## SDK events

The OwlStack SDK fires events locally in your application after receiving results from the API:

```php
use OwlStack\Events\PostPublished;
use OwlStack\Events\PostFailed;
```

These events are dispatched through your framework's event system:

| Framework | Event System |
|:----------|:------------|
| **Laravel** | `Event::dispatch()` -- listen with `Event::listen()` or event listeners |
| **WordPress** | `do_action()` -- listen with `add_action()` |
| **Standalone PHP** | Implement `EventDispatcherInterface` and pass to client |

## Server-side webhooks

For server-side event notifications, OwlStack can send webhooks to your application. This is useful for:

- Scheduled posts that publish later
- Batch publishing results
- Retry outcomes

See [Webhooks](./webhooks.md) for setup details.
