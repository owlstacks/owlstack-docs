---
sidebar_position: 7
title: Webhooks
description: REST API endpoints for webhook management.
---

# Webhooks API

**Pro plan required.**

## `POST /v1/webhooks`

Create a webhook endpoint.

```bash
curl -X POST https://api.owlstack.dev/v1/webhooks \
  -H "Authorization: Bearer your-api-key" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://example.com/webhooks/owlstack",
    "events": ["post.published", "post.failed", "post.scheduled"]
  }'
```

### Response

```json
{
  "success": true,
  "data": {
    "id": "wh_abc123",
    "url": "https://example.com/webhooks/owlstack",
    "events": ["post.published", "post.failed", "post.scheduled"],
    "secret": "whsec_...",
    "active": true
  }
}
```

Save the `secret` for signature verification.

## `GET /v1/webhooks`

List all webhook endpoints.

```bash
curl https://api.owlstack.dev/v1/webhooks \
  -H "Authorization: Bearer your-api-key"
```

## `PATCH /v1/webhooks/{id}`

Update a webhook.

```bash
curl -X PATCH https://api.owlstack.dev/v1/webhooks/wh_abc123 \
  -H "Authorization: Bearer your-api-key" \
  -H "Content-Type: application/json" \
  -d '{
    "events": ["post.published"],
    "active": true
  }'
```

## `DELETE /v1/webhooks/{id}`

Delete a webhook.

```bash
curl -X DELETE https://api.owlstack.dev/v1/webhooks/wh_abc123 \
  -H "Authorization: Bearer your-api-key"
```

## Available events

| Event | Description |
|:------|:------------|
| `post.published` | Post successfully delivered to a platform |
| `post.failed` | Post delivery failed |
| `post.scheduled` | Post scheduled for future delivery |
| `post.cancelled` | Scheduled post was cancelled |
| `platform.connected` | New platform connected |
| `platform.disconnected` | Platform disconnected or token expired |

## Webhook payload

```json
{
  "event": "post.published",
  "timestamp": "2026-03-15T10:00:00Z",
  "data": {
    "platform": "twitter",
    "external_id": "1234567890",
    "external_url": "https://twitter.com/user/status/1234567890",
    "post_body": "Hello from OwlStack!"
  }
}
```

## Signature verification

Verify webhook signatures with the `X-OwlStack-Signature` header. See the [webhooks guide](/events/webhooks) for implementation details.
