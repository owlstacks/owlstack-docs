---
sidebar_position: 3
title: Architecture
description: OwlStack's contract-driven, layered architecture overview.
---

# Architecture Overview

OwlStack is built on a **contract-driven, layered architecture** with zero framework dependencies. Framework packages (Laravel, WordPress) provide concrete implementations for storage, queues, and events.

## Package hierarchy

```mermaid
graph TB
    subgraph "Free"
        CORE[owlstack-core<br/>Framework-agnostic PHP engine]
        LARAVEL[owlstack-laravel<br/>ServiceProvider + Facade]
        WP[owlstack-wordpress<br/>Plugin + Admin UI + REST API]
    end

    subgraph "Pro"
        PRO_CORE[owlstack-pro-core<br/>Batch, Scheduling, AI, Analytics]
        PRO_LARAVEL[owlstack-pro-laravel<br/>Eloquent, Queue Jobs, Commands]
        PRO_WP[owlstack-pro-wordpress<br/>Coming soon]
    end

    CORE --> LARAVEL
    CORE --> WP
    CORE --> PRO_CORE
    PRO_CORE --> PRO_LARAVEL
    PRO_CORE --> PRO_WP
```

## Core architecture

```mermaid
graph TB
    subgraph "Your Application"
        APP[Application Code]
    end

    subgraph "OwlStack Core"
        direction TB
        PUB[Publisher]
        REG[PlatformRegistry]

        subgraph "Content Layer"
            POST[Post]
            MEDIA[Media / MediaCollection]
            CLINK[CanonicalLink]
        end

        subgraph "Platform Layer"
            PI[PlatformInterface]
            TG[Telegram]
            TW[Twitter/X]
            FB[Facebook]
            LI[LinkedIn]
            DC[Discord]
            IG[Instagram]
            PT[Pinterest]
            RD[Reddit]
            SL[Slack]
            TB[Tumblr]
            WA[WhatsApp]
        end

        subgraph "Formatting"
            FI[FormatterInterface]
            CT[CharacterTruncator]
            HE[HashtagExtractor]
        end

        subgraph "Infrastructure"
            HTTP[HttpClient]
            AUTH[OAuthHandler]
            EVT[EventDispatcher]
            CFG[Config / Credentials]
        end
    end

    APP --> PUB
    PUB --> REG
    REG --> PI
    PI --> TG & TW & FB & LI & DC & IG & PT & RD & SL & TB & WA
    PUB --> EVT
    TG & TW & FB & LI & DC & IG & PT & RD & SL & TB & WA --> HTTP
    POST --> PUB
    MEDIA --> POST
```

## Publishing flow

```mermaid
sequenceDiagram
    participant App as Application
    participant Pub as Publisher
    participant Reg as PlatformRegistry
    participant Fmt as Formatter
    participant Plat as Platform
    participant HTTP as HttpClient
    participant API as External API
    participant Evt as EventDispatcher

    App->>Pub: publish(Post, "telegram")
    Pub->>Reg: get("telegram")
    Reg-->>Pub: TelegramPlatform
    Pub->>Plat: publish(Post, options)
    Plat->>Fmt: format(Post)
    Fmt-->>Plat: Formatted text
    Plat->>HTTP: post(apiUrl, payload)
    HTTP->>API: HTTP Request
    API-->>HTTP: Response
    HTTP-->>Plat: Response array
    Plat-->>Pub: PlatformResponse

    alt Success
        Pub->>Evt: dispatch(PostPublished)
        Pub-->>App: PublishResult ✓
    else Failure
        Pub->>Evt: dispatch(PostFailed)
        Pub-->>App: PublishResult ✗
    end
```

## Key design principles

### Contract-driven

Every infrastructure concern is defined as an interface:

- `PlatformInterface` — Platform publishing contract
- `FormatterInterface` — Content formatting contract
- `HttpClientInterface` — HTTP communication contract
- `EventDispatcherInterface` — Event dispatch contract
- `TokenStoreInterface` — Token persistence contract
- `OAuthProviderInterface` — OAuth flow contract

This means you can swap any implementation — use Guzzle instead of cURL, Redis instead of database for tokens, or any custom event system.

### Immutable value objects

All data objects are readonly:

```php
$post = new Post(title: 'Hello', body: 'World');
// $post->title = 'Changed'; // ❌ Cannot modify readonly property
```

This eliminates bugs from accidental mutation during the publishing pipeline.

### Exception-safe publishing

The `Publisher` wraps all platform calls in try/catch and always returns a `PublishResult`:

```php
$result = $publisher->publish($post, 'twitter');
// Never throws — always check $result->success
```

Individual platform classes **do** throw typed exceptions (`RateLimitException`, `ContentTooLongException`, etc.) for direct usage.

### Source directory structure

| Directory | Purpose |
|:----------|:--------|
| `Auth/` | OAuth handler, access tokens, token store contracts |
| `Config/` | `PlatformCredentials`, `OwlstackConfig`, `ConfigValidator` |
| `Content/` | `Post`, `Media`, `MediaCollection`, `CanonicalLink` |
| `Delivery/` | `DeliveryStatus` enum |
| `Events/` | `EventDispatcherInterface`, `PostPublished`, `PostFailed` |
| `Exceptions/` | `OwlstackException` hierarchy |
| `Formatting/` | Per-platform formatters, `CharacterTruncator`, `HashtagExtractor` |
| `Http/` | cURL `HttpClient`, `HttpClientInterface` |
| `Platforms/` | 11 platform implementations + `PlatformRegistry` + contracts |
| `Publishing/` | `Publisher`, `PublishResult` |
| `Support/` | `Arr`, `Str`, `Clock` utilities |
