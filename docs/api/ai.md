---
sidebar_position: 5
title: AI
description: REST API endpoints for AI-powered features.
---

# AI API

**Pro+AI plan required.**

## `POST /v1/ai/generate`

Generate platform-optimized posts from a prompt.

```bash
curl -X POST https://api.owlstack.dev/v1/ai/generate \
  -H "Authorization: Bearer your-api-key" \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "Announce our new API v2",
    "platforms": ["twitter", "linkedin"],
    "tone": "professional",
    "max_variants": 1
  }'
```

### Response

```json
{
  "success": true,
  "data": {
    "posts": [
      {
        "platform": "twitter",
        "body": "Excited to announce API v2!...",
        "hashtags": ["api", "devtools"]
      },
      {
        "platform": "linkedin",
        "body": "We're thrilled to announce...",
        "hashtags": ["api", "technology"]
      }
    ]
  }
}
```

## `POST /v1/ai/optimize`

Optimize existing content for specific platforms.

```bash
curl -X POST https://api.owlstack.dev/v1/ai/optimize \
  -H "Authorization: Bearer your-api-key" \
  -H "Content-Type: application/json" \
  -d '{
    "body": "We launched a new API. Check it out.",
    "platforms": ["twitter", "linkedin"]
  }'
```

## `POST /v1/ai/hashtags`

Get AI-suggested hashtags for content.

```bash
curl -X POST https://api.owlstack.dev/v1/ai/hashtags \
  -H "Authorization: Bearer your-api-key" \
  -H "Content-Type: application/json" \
  -d '{
    "content": "We just released OwlStack 2.0",
    "platform": "twitter",
    "count": 5
  }'
```

### Response

```json
{
  "success": true,
  "data": {
    "hashtags": ["owlstack", "saas", "ai", "socialmedia", "devtools"],
    "scores": [95, 82, 78, 71, 65]
  }
}
```

## `POST /v1/ai/ab-test`

Create an A/B test with content variants.

```bash
curl -X POST https://api.owlstack.dev/v1/ai/ab-test \
  -H "Authorization: Bearer your-api-key" \
  -H "Content-Type: application/json" \
  -d '{
    "variants": ["Version A", "Version B", "Version C"],
    "platforms": ["twitter"],
    "duration_hours": 24
  }'
```

## `GET /v1/ai/ab-test/{id}`

Get A/B test results.

```bash
curl https://api.owlstack.dev/v1/ai/ab-test/abt_abc123 \
  -H "Authorization: Bearer your-api-key"
```
