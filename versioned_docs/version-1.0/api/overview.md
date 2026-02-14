---
sidebar_position: 1
title: API Overview
description: OwlStack REST API overview and conventions.
---

# API Reference

The OwlStack REST API powers all SDK functionality. You can also call it directly for custom integrations.

## Base URL

```
https://api.owlstack.dev/v1
```

## Authentication

All requests require an API key in the `Authorization` header:

```bash
curl https://api.owlstack.dev/v1/publish \
  -H "Authorization: Bearer your-api-key" \
  -H "Content-Type: application/json"
```

## Response format

All responses are JSON:

```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "request_id": "req_abc123",
    "timestamp": "2026-03-15T10:00:00Z"
  }
}
```

## Error responses

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "The body field is required.",
    "details": { ... }
  },
  "meta": {
    "request_id": "req_abc123"
  }
}
```

## HTTP status codes

| Code | Meaning |
|:-----|:--------|
| `200` | Success |
| `201` | Created |
| `400` | Bad request (validation error) |
| `401` | Unauthorized (invalid API key) |
| `403` | Forbidden (plan limit or permission) |
| `404` | Not found |
| `422` | Unprocessable entity |
| `429` | Rate limited |
| `500` | Server error |

## Pagination

List endpoints support cursor-based pagination:

```bash
GET /v1/logs?limit=50&after=cursor_abc123
```

Response includes pagination info:

```json
{
  "data": [...],
  "pagination": {
    "has_more": true,
    "next_cursor": "cursor_def456"
  }
}
```

## SDKs

While you can call the API directly, we recommend using the official SDKs:

- **PHP**: `owlstack/cloud` (or `owlstack/laravel` for Laravel)
- **WordPress**: `owlstack/wordpress` plugin
