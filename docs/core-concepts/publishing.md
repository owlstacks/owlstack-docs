---
sidebar_position: 4
title: Publishing
description: How OwlStack's cloud publishing works.
---

# Publishing

## OwlStackClient

The main entry point. It sends your content to the OwlStack cloud API, which handles formatting, platform API calls, and delivery.

```php
use OwlStack\Cloud\OwlStackClient;
use OwlStack\Post;
use OwlStack\Enums\Platform;

$client = new OwlStackClient(apiKey: env('OWLSTACK_API_KEY'));

$post = Post::create('Hello world!')
    ->withHashtags(['php', 'opensource']);

$result = $client->publish($post, [Platform::Telegram]);
```

## DeliveryResult

An immutable result object returned after every publish call.

```php
$result->isSuccessful();  // bool
$result->isFailed();      // bool
$result->platform();      // Platform enum
$result->externalId();    // '12345' or null
$result->externalUrl();   // 'https://t.me/channel/12345' or null
$result->error();         // 'Rate limit exceeded' or null
$result->timestamp();     // DateTimeImmutable
```

### Handling results

```php
$results = $client->publish($post, [
    Platform::Twitter,
    Platform::LinkedIn,
    Platform::Telegram,
]);

foreach ($results as $result) {
    if ($result->isSuccessful()) {
        echo "{$result->platform()->value}: {$result->externalUrl()}\n";
    } else {
        echo "{$result->platform()->value}: {$result->error()}\n";
    }
}
```

## Publishing options

Pass platform-specific options as the third parameter:

```php
// Telegram: specify chat ID
$client->publish($post, [Platform::Telegram], [
    'chat_id' => '@my_channel',
]);

// Twitter: create a thread
$client->publish($post, [Platform::Twitter], [
    'thread' => true,
]);
```

See each platform's documentation for available options.

## What happens on the server

When you call `publish()`, the OwlStack cloud:

1. **Validates** your API key and checks plan limits
2. **Formats** content for each target platform (character limits, markup, hashtags)
3. **Validates** media against platform constraints
4. **Publishes** to each platform's API using stored OAuth credentials
5. **Retries** automatically on transient failures
6. **Returns** results with delivery status, external IDs, and URLs

:::tip Pro Feature
With the **Pro plan**, you can use batch publishing, scheduled publishing, and delivery logging. See [Batch Publishing](../pro/batch-publishing.mdx) and [Scheduling](../pro/scheduling.mdx).
:::
