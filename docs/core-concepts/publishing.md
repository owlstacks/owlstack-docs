---
sidebar_position: 4
title: Publishing
description: The Publisher and PublishResult — OwlStack's core publishing flow.
---

# Publishing

## Publisher

The main orchestrator. It resolves the platform from the registry, publishes, dispatches events, and returns a result — **never throws exceptions**.

```php
use Owlstack\Core\Publishing\Publisher;

$publisher = new Publisher($registry, $eventDispatcher); // dispatcher is optional

$result = $publisher->publish($post, 'telegram', ['chat_id' => '@channel']);
```

The third parameter (`$options`) is passed directly to the platform. Each platform supports different options — see the [Platforms](../platforms/overview.mdx) section.

## PublishResult

An immutable result object returned from every publish call.

```php
$result->success;       // bool
$result->failed();      // bool (inverse of success)
$result->platformName;  // 'telegram'
$result->externalId;    // '12345' or null
$result->externalUrl;   // 'https://t.me/channel/12345' or null
$result->error;         // 'Rate limit exceeded' or null
$result->timestamp;     // DateTimeImmutable
```

### Example: handling the result

```php
$result = $publisher->publish($post, 'twitter');

if ($result->success) {
    // Store the external reference
    saveToDatabase($result->platformName, $result->externalId, $result->externalUrl);
    echo "Published: {$result->externalUrl}";
} else {
    // Log the error
    logError($result->platformName, $result->error);
    echo "Failed: {$result->error}";
}
```

## Multi-platform publishing

```php
$post = new Post(
    title: 'New Release: v2.0',
    body: 'We are excited to announce version 2.0!',
    url: 'https://example.com/releases/v2',
    tags: ['release', 'opensource'],
);

// Publish to all registered platforms
$results = [];
foreach ($registry->names() as $name) {
    $results[$name] = $publisher->publish($post, $name);
}

// Check results
foreach ($results as $platform => $result) {
    echo $result->success
        ? "✓ {$platform}: {$result->externalUrl}\n"
        : "✗ {$platform}: {$result->error}\n";
}
```

:::tip Pro Feature
With **OwlStack Pro**, you can use `BatchPublisher` to publish to multiple platforms in a single call with built-in retry strategies and delivery logging. See [Batch Publishing](../pro/batch-publishing.mdx).
:::
