---
sidebar_position: 1
title: OAuth Flow
description: OwlStack's OAuth handling with OAuthHandler.
---

# OAuth Flow

The auth layer provides contracts for OAuth flows. Framework packages supply concrete implementations for token storage.

## OAuthHandler

```php
use Owlstack\Core\Auth\OAuthHandler;

$handler = new OAuthHandler($provider, $tokenStore, 'twitter');

// Step 1: Generate authorization URL
$authUrl = $handler->authorize('https://app.com/callback', ['tweet.read', 'tweet.write']);
// Redirect user to $authUrl

// Step 2: Handle callback after user authorizes
$token = $handler->handleCallback($code, 'https://app.com/callback', 'user-123');

// Step 3: Get valid token (auto-refreshes if expired)
$token = $handler->getToken('user-123');
```

## Flow diagram

```mermaid
sequenceDiagram
    participant App as Your App
    participant OH as OAuthHandler
    participant OP as OAuthProvider
    participant TS as TokenStore
    participant API as Platform API

    App->>OH: authorize(redirectUri, scopes)
    OH->>OP: getAuthorizationUrl()
    OP-->>OH: Auth URL
    OH-->>App: Auth URL → redirect user

    Note over App: User authorizes on platform

    App->>OH: handleCallback(code, redirectUri, accountId)
    OH->>OP: exchangeCode(code, redirectUri)
    OP->>API: POST /oauth/token
    API-->>OP: AccessToken
    OP-->>OH: AccessToken
    OH->>TS: store(platform, accountId, token)
    OH-->>App: AccessToken

    App->>OH: getToken(accountId)
    OH->>TS: get(platform, accountId)
    TS-->>OH: AccessToken
    alt Token Expired
        OH->>OP: refreshToken(token)
        OP->>API: POST /oauth/refresh
        API-->>OP: New AccessToken
        OP-->>OH: New AccessToken
        OH->>TS: store(platform, accountId, newToken)
    end
    OH-->>App: Valid AccessToken
```

The `OAuthHandler` requires two interface implementations:

- **`OAuthProviderInterface`** — Generates auth URLs, exchanges codes, refreshes tokens
- **`TokenStoreInterface`** — Persists and retrieves access tokens
