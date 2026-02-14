---
sidebar_position: 2
title: Configuration
description: Full configuration reference for OwlStack Laravel.
---

# Laravel — Configuration

## Environment variables

Add your credentials to `.env`:

```dotenv
# Telegram
TELEGRAM_BOT_TOKEN=your-bot-token
TELEGRAM_BOT_USERNAME=your_bot
TELEGRAM_CHANNEL_USERNAME=@your_channel
TELEGRAM_CHANNEL_SIGNATURE=
TELEGRAM_PARSE_MODE=HTML

# X (Twitter)
TWITTER_CONSUMER_KEY=your-key
TWITTER_CONSUMER_SECRET=your-secret
TWITTER_ACCESS_TOKEN=your-token
TWITTER_ACCESS_TOKEN_SECRET=your-token-secret

# Facebook
FACEBOOK_APP_ID=your-app-id
FACEBOOK_APP_SECRET=your-app-secret
FACEBOOK_PAGE_ACCESS_TOKEN=your-page-token
FACEBOOK_PAGE_ID=your-page-id
FACEBOOK_GRAPH_VERSION=v21.0

# Proxy (optional — for restricted networks)
OWLSTACK_PROXY_HOST=localhost
OWLSTACK_PROXY_PORT=9050
OWLSTACK_PROXY_TYPE=7
```

## Auto-registration

Only platforms with valid credentials are registered. If you leave Twitter credentials empty, only Telegram and Facebook will be available. No errors — platforms are silently skipped.

## Proxy support

For restricted networks (e.g., countries blocking Telegram), configure a SOCKS proxy:

```dotenv
OWLSTACK_PROXY_HOST=localhost
OWLSTACK_PROXY_PORT=9050
OWLSTACK_PROXY_TYPE=7
```

| Proxy Type | Value | Description |
|:-----------|:------|:------------|
| HTTP | `0` | CURLPROXY_HTTP |
| SOCKS4 | `4` | CURLPROXY_SOCKS4 |
| SOCKS5 | `7` | CURLPROXY_SOCKS5 |
