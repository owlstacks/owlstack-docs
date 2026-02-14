---
sidebar_position: 2
title: Configuration
description: Full configuration reference for OwlStack Laravel.
---

# Laravel -- Configuration

## Environment variables

Add your API key to `.env`:

```ini
OWLSTACK_API_KEY=your-api-key-here
```

Configuration is published to `config/owlstack.php`:

```php
return [
    'api_key' => env('OWLSTACK_API_KEY'),

    // Optional: override the API base URL
    'api_url' => env('OWLSTACK_API_URL', 'https://api.owlstack.dev'),

    // Optional: HTTP timeout in seconds
    'timeout' => env('OWLSTACK_TIMEOUT', 30),

    // Optional: proxy settings for restricted networks
    'proxy' => [
        'host' => env('OWLSTACK_PROXY_HOST'),
        'port' => env('OWLSTACK_PROXY_PORT'),
        'type' => env('OWLSTACK_PROXY_TYPE', 7),
    ],
];
```

## Platform connections

Platform connections are managed in the [OwlStack dashboard](https://app.owlstack.dev), not in your Laravel configuration. The API key determines which platforms are available.

## Proxy support

For restricted networks (e.g., countries blocking certain platforms), configure a SOCKS proxy:

```ini
OWLSTACK_PROXY_HOST=localhost
OWLSTACK_PROXY_PORT=9050
OWLSTACK_PROXY_TYPE=7
```

| Proxy Type | Value | Description |
|:-----------|:------|:------------|
| HTTP | `0` | CURLPROXY_HTTP |
| SOCKS4 | `4` | CURLPROXY_SOCKS4 |
| SOCKS5 | `7` | CURLPROXY_SOCKS5 |
