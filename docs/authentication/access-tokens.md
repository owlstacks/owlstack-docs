---
sidebar_position: 2
title: Access Tokens
description: The AccessToken value object for managing OAuth tokens.
---

# Access Tokens

## AccessToken

An immutable value object representing an OAuth access token.

```php
use Owlstack\Core\Auth\AccessToken;

$token = new AccessToken(
    token: 'abc123',
    refreshToken: 'refresh_xyz',
    expiresAt: new DateTimeImmutable('+1 hour'),
    scopes: ['tweet.read', 'tweet.write'],
    metadata: ['user_id' => '12345'],
);
```

### Methods

```php
$token->isExpired();     // false (compares against current time)
$token->isRefreshable(); // true (has a refresh token)
```

### Properties

| Property | Type | Description |
|:---------|:-----|:------------|
| `token` | `string` | The access token string |
| `refreshToken` | `?string` | Refresh token for token renewal |
| `expiresAt` | `?DateTimeImmutable` | When the token expires |
| `scopes` | `array` | Granted permission scopes |
| `metadata` | `array` | Additional metadata (user ID, etc.) |

All properties are readonly.
