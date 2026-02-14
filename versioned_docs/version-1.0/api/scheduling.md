---
sidebar_position: 4
title: Scheduling
description: REST API endpoints for scheduled publishing.
---

# Scheduling API

**Pro plan required.**

## `POST /v1/schedule`

Schedule a post for future delivery.

```bash
curl -X POST https://api.owlstack.dev/v1/schedule \
  -H "Authorization: Bearer your-api-key" \
  -H "Content-Type: application/json" \
  -d '{
    "body": "Scheduled post!",
    "platforms": ["twitter", "linkedin"],
    "scheduled_at": "2026-03-15T09:00:00Z"
  }'
```

### Response

```json
{
  "success": true,
  "data": {
    "id": "sch_abc123",
    "status": "scheduled",
    "scheduled_at": "2026-03-15T09:00:00Z",
    "platforms": ["twitter", "linkedin"]
  }
}
```

## `GET /v1/schedule`

List scheduled posts.

```bash
curl https://api.owlstack.dev/v1/schedule \
  -H "Authorization: Bearer your-api-key"
```

### Query parameters

| Parameter | Type | Description |
|:----------|:-----|:------------|
| `status` | string | Filter: `scheduled`, `published`, `cancelled` |
| `platform` | string | Filter by platform |
| `from` | string | Start date (ISO 8601) |
| `to` | string | End date (ISO 8601) |
| `limit` | integer | Results per page (default 25, max 100) |

## `PATCH /v1/schedule/{id}`

Reschedule or modify a scheduled post.

```bash
curl -X PATCH https://api.owlstack.dev/v1/schedule/sch_abc123 \
  -H "Authorization: Bearer your-api-key" \
  -H "Content-Type: application/json" \
  -d '{
    "scheduled_at": "2026-03-16T10:00:00Z"
  }'
```

## `DELETE /v1/schedule/{id}`

Cancel a scheduled post.

```bash
curl -X DELETE https://api.owlstack.dev/v1/schedule/sch_abc123 \
  -H "Authorization: Bearer your-api-key"
```
