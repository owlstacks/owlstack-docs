---
sidebar_position: 1
title: Event System
description: OwlStack's publish lifecycle event system.
---

# Event System

OwlStack dispatches events during the publishing lifecycle. Hook into these to log, notify, retry, or react to publishing outcomes.

## EventDispatcherInterface

```php
use Owlstack\Core\Events\Contracts\EventDispatcherInterface;

class MyDispatcher implements EventDispatcherInterface
{
    public function dispatch(object $event): void
    {
        match (true) {
            $event instanceof PostPublished => $this->onPublished($event),
            $event instanceof PostFailed    => $this->onFailed($event),
        };
    }
}
```

## Wiring it up

Pass your dispatcher to the Publisher:

```php
$publisher = new Publisher($registry, new MyDispatcher());
```

The Publisher will call `dispatch()` after every publish — passing either `PostPublished` or `PostFailed`.

## Framework implementations

| Framework | Event System |
|:----------|:------------|
| **Laravel** | Uses Laravel's built-in `Event::dispatch()` — listen with `Event::listen()` or event listeners |
| **WordPress** | Uses `do_action()` — listen with `add_action()` |
| **Standalone** | Implement `EventDispatcherInterface` yourself |
