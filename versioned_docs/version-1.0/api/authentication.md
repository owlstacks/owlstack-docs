---
sidebar_position: 2
title: Authentication
description: API authentication and API key management.
---

# API Authentication

## API keys

Every request to the OwlStack API must include an API key.

### Header authentication

```bash
curl https://api.owlstack.dev/v1/me \
  -H "Authorization: Bearer your-api-key"
```

### Get your API key

1. Log in to the [OwlStack dashboard](https://app.owlstack.dev)
2. Go to **Settings -> API Keys**
3. Click **Create API Key**
4. Copy the key (it's only shown once)

## Endpoints

### `GET /v1/me`

Returns your account info and plan details.

```bash
curl https://api.owlstack.dev/v1/me \
  -H "Authorization: Bearer your-api-key"
```

```json
{
  "success": true,
  "data": {
    "id": "usr_abc123",
    "email": "dev@example.com",
    "plan": "pro",
    "platforms_connected": 5,
    "posts_used": 142,
    "posts_limit": 2000,
    "api_key_name": "production"
  }
}
```

### `GET /v1/platforms`

Returns your connected platforms.

```bash
curl https://api.owlstack.dev/v1/platforms \
  -H "Authorization: Bearer your-api-key"
```

```json
{
  "success": true,
  "data": [
    {
      "platform": "twitter",
      "connected": true,
      "account_name": "@myaccount",
      "connected_at": "2026-01-15T08:00:00Z"
    }
  ]
}
```

## Key permissions

API keys can be scoped (Enterprise plan):

| Permission | Description |
|:-----------|:------------|
| `publish` | Create and publish posts |
| `schedule` | Create and manage scheduled posts |
| `analytics` | Read analytics data |
| `logs` | Read delivery logs |
| `ai` | Use AI features |
| `admin` | Manage API keys and settings |
