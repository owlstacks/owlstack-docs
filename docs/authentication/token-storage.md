---
sidebar_position: 3
title: Token Storage
description: Implementing TokenStoreInterface for persisting OAuth tokens.
---

# Token Storage

## TokenStoreInterface

OwlStack defines a contract for persisting access tokens. You implement this for your storage layer.

```php
use Owlstack\Core\Auth\Contracts\TokenStoreInterface;
use Owlstack\Core\Auth\AccessToken;

class DatabaseTokenStore implements TokenStoreInterface
{
    public function get(string $platform, string $accountId): ?AccessToken
    {
        // Retrieve from database
    }

    public function store(string $platform, string $accountId, AccessToken $token): void
    {
        // Persist to database
    }

    public function revoke(string $platform, string $accountId): void
    {
        // Delete from database
    }

    public function has(string $platform, string $accountId): bool
    {
        // Check existence
    }
}
```

## Framework implementations

| Framework | Implementation |
|:----------|:-------------|
| **Laravel** | Uses encrypted Eloquent storage via the service provider |
| **WordPress** | Uses `wp_options` with encryption |
| **Standalone** | Implement `TokenStoreInterface` yourself (file, database, Redis, etc.) |
