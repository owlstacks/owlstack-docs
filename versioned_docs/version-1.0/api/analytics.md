---
sidebar_position: 6
title: Analytics
description: REST API endpoints for analytics and reporting.
---

# Analytics API

**Pro plan required.** Full engagement metrics require **Pro+AI**.

## `GET /v1/analytics/summary`

Get a publishing summary for a date range.

```bash
curl "https://api.owlstack.dev/v1/analytics/summary?from=2026-01-01&to=2026-01-31" \
  -H "Authorization: Bearer your-api-key"
```

### Response

```json
{
  "success": true,
  "data": {
    "total_posts": 142,
    "successful": 138,
    "failed": 4,
    "platforms_used": ["twitter", "linkedin", "telegram"],
    "success_rate": 97.2
  }
}
```

## `GET /v1/analytics/platforms`

Get per-platform breakdown.

```bash
curl "https://api.owlstack.dev/v1/analytics/platforms?from=2026-01-01&to=2026-01-31" \
  -H "Authorization: Bearer your-api-key"
```

### Response

```json
{
  "success": true,
  "data": [
    {
      "platform": "twitter",
      "posts": 50,
      "successful": 49,
      "failed": 1,
      "success_rate": 98.0
    }
  ]
}
```

## `GET /v1/analytics/engagement/{post_id}`

Get engagement metrics for a specific post. **Pro+AI plan required.**

```bash
curl https://api.owlstack.dev/v1/analytics/engagement/pub_abc123 \
  -H "Authorization: Bearer your-api-key"
```

### Response

```json
{
  "success": true,
  "data": {
    "post_id": "pub_abc123",
    "platforms": {
      "twitter": {
        "likes": 42,
        "retweets": 12,
        "replies": 5,
        "impressions": 2840
      }
    }
  }
}
```

## `GET /v1/analytics/export`

Export analytics data as CSV or JSON.

```bash
curl "https://api.owlstack.dev/v1/analytics/export?format=csv&from=2026-01-01&to=2026-01-31" \
  -H "Authorization: Bearer your-api-key" \
  -o analytics.csv
```
