---
sidebar_position: 3
title: Custom Dispatchers
description: Building your own event dispatcher implementation.
---

# Custom Event Dispatchers

Implement `EventDispatcherInterface` to integrate with any event system.

## Example: PSR-14 bridge

```php
use Owlstack\Core\Events\Contracts\EventDispatcherInterface;
use Psr\EventDispatcher\EventDispatcherInterface as PsrDispatcher;

class Psr14Bridge implements EventDispatcherInterface
{
    public function __construct(
        private PsrDispatcher $psrDispatcher,
    ) {}

    public function dispatch(object $event): void
    {
        $this->psrDispatcher->dispatch($event);
    }
}
```

## Example: multi-dispatcher

```php
class MultiDispatcher implements EventDispatcherInterface
{
    /** @var EventDispatcherInterface[] */
    private array $dispatchers = [];

    public function add(EventDispatcherInterface $dispatcher): void
    {
        $this->dispatchers[] = $dispatcher;
    }

    public function dispatch(object $event): void
    {
        foreach ($this->dispatchers as $dispatcher) {
            $dispatcher->dispatch($event);
        }
    }
}
```

## Example: queue-based

```php
class QueuedDispatcher implements EventDispatcherInterface
{
    public function dispatch(object $event): void
    {
        // Push to your queue system for async processing
        $this->queue->push(new ProcessPublishEvent($event));
    }
}
```
