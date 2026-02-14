---
sidebar_position: 6
title: Error Handling
description: How OwlStack handles errors and exceptions.
---

# Error Handling

OwlStack uses an exception-safe approach. The `OwlStackClient` catches all API errors internally and returns `DeliveryResult` objects with error details. It **never throws exceptions**.

## Checking for errors

```php
$results = $client->publish($post, [Platform::Twitter]);

foreach ($results as $result) {
    if ($result->isFailed()) {
        echo "Failed on {$result->platform()->value}: {$result->error()}\n";
        echo "Error code: {$result->errorCode()}\n";
    }
}
```

## Error codes

| Code | Description |
|:-----|:------------|
| `rate_limited` | Platform rate limit hit. OwlStack retries automatically. |
| `content_too_long` | Content exceeds platform character limit after formatting. |
| `media_invalid` | Media type or size not supported by the platform. |
| `auth_failed` | Platform credentials are invalid or expired. |
| `platform_error` | Unexpected error from the platform API. |
| `plan_limit` | Your plan's monthly post limit has been reached. |
| `platform_not_connected` | The platform is not connected in your dashboard. |
| `api_key_invalid` | Invalid or revoked API key. |

## Exception hierarchy (owlstack/core)

The `owlstack/core` package defines typed exception classes you can use in your own code:

```php
use OwlStack\Exceptions\OwlStackException;
use OwlStack\Exceptions\AuthenticationException;
use OwlStack\Exceptions\RateLimitException;
use OwlStack\Exceptions\ContentTooLongException;
use OwlStack\Exceptions\MediaValidationException;
use OwlStack\Exceptions\PlatformException;
```

These are used internally by the cloud service. The SDK client translates API error responses into `DeliveryResult` objects, so you rarely need to catch them directly.

## Retries

OwlStack automatically retries transient failures (rate limits, network timeouts) on the server side with exponential backoff. You don't need to implement retry logic in your application.
