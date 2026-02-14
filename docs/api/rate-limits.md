---
sidebar_position: 8
title: Rate Limits
description: API rate limiting and usage quotas.
---

# Rate Limits

OwlStack enforces rate limits to ensure fair usage and service reliability.

## Limits by plan

| Plan | Requests/minute | Posts/month | Burst |
|:-----|:----------------|:------------|:------|
| Free | 10 | 10 | 5 |
| Starter | 60 | 200 | 20 |
| Pro | 300 | 2,000 | 50 |
| Pro+AI | 300 | 5,000 | 50 |
| Enterprise | Custom | Unlimited | Custom |

## Rate limit headers

Every response includes rate limit information:

```
X-RateLimit-Limit: 300
X-RateLimit-Remaining: 298
X-RateLimit-Reset: 1710500460
```

| Header | Description |
|:-------|:------------|
| `X-RateLimit-Limit` | Maximum requests per minute |
| `X-RateLimit-Remaining` | Requests remaining in current window |
| `X-RateLimit-Reset` | Unix timestamp when the limit resets |

## Rate limited response

When rate limited, the API returns `429 Too Many Requests`:

```json
{
  "success": false,
  "error": {
    "code": "RATE_LIMITED",
    "message": "Rate limit exceeded. Try again in 32 seconds.",
    "retry_after": 32
  }
}
```

## Post quotas

Post quotas are separate from request rate limits:

```json
{
  "success": false,
  "error": {
    "code": "QUOTA_EXCEEDED",
    "message": "Monthly post limit reached (200/200). Upgrade your plan for more posts.",
    "quota": {
      "used": 200,
      "limit": 200,
      "resets_at": "2026-04-01T00:00:00Z"
    }
  }
}
```

## Best practices

1. **Check headers** -- Monitor `X-RateLimit-Remaining` to avoid hitting limits
2. **Implement backoff** -- On `429`, wait for `retry_after` seconds before retrying
3. **Batch requests** -- Use batch publishing instead of individual calls
4. **Cache results** -- Don't poll the API unnecessarily
5. **Use webhooks** -- For delivery confirmation, use webhooks instead of polling

## SDK handling

The official PHP SDK handles rate limits automatically:

```php
use OwlStack\Cloud\OwlStackClient;

$client = new OwlStackClient('your-api-key');

// The SDK automatically retries on 429 with exponential backoff
$results = $client->publish($post, $platforms);
```
