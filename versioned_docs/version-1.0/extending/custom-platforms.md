---
sidebar_position: 1
title: Custom Platforms
description: Implementing PlatformInterface to add your own platform.
---

# Custom Platforms

Add support for any platform by implementing `PlatformInterface`.

## Example: Mastodon

```php
use Owlstack\Core\Platforms\Contracts\PlatformInterface;
use Owlstack\Core\Platforms\Contracts\PlatformResponseInterface;
use Owlstack\Core\Platforms\PlatformResponse;
use Owlstack\Core\Content\Post;

class MastodonPlatform implements PlatformInterface
{
    public function name(): string
    {
        return 'mastodon';
    }

    public function publish(Post $post, array $options = []): PlatformResponseInterface
    {
        // Your API calls here...
        return PlatformResponse::success(
            externalId: '12345',
            externalUrl: 'https://mastodon.social/@user/12345',
            rawResponse: $apiResponse,
        );
    }

    public function delete(string $externalId): bool
    {
        // Delete the post via API
        return true;
    }

    public function validateCredentials(): bool
    {
        // Test API connection
        return true;
    }

    public function constraints(): array
    {
        return [
            'max_text_length' => 500,
            'max_media_count' => 4,
            'supported_media_types' => ['image/jpeg', 'image/png', 'image/gif'],
            'max_media_size' => 10 * 1024 * 1024,
        ];
    }
}
```

## Register your platform

```php
$registry = new PlatformRegistry();
$registry->register(new MastodonPlatform($credentials, $httpClient, $formatter));

// Now you can publish to it
$result = $publisher->publish($post, 'mastodon');
```
