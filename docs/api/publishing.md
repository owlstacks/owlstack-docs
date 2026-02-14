---
sidebar_position: 3
title: Publishing
description: REST API endpoints for publishing content.
---

# Publishing API

## `POST /v1/publish`

Publish content to one or more platforms.

### Request

```bash
curl -X POST https://api.owlstack.dev/v1/publish \
  -H "Authorization: Bearer your-api-key" \
  -H "Content-Type: application/json" \
  -d '{
    "body": "Hello from the OwlStack API!",
    "platforms": ["twitter", "linkedin"],
    "title": "Optional title",
    "url": "https://example.com",
    "hashtags": ["owlstack", "api"],
    "options": {
      "twitter": {
        "thread": false
      }
    }
  }'
```

### Request body

| Field | Type | Required | Description |
|:------|:-----|:---------|:------------|
| `body` | string | Yes | Post body text |
| `platforms` | string[] | Yes | Platform identifiers |
| `title` | string | No | Post title (used by platforms that support it) |
| `url` | string | No | Link to attach |
| `hashtags` | string[] | No | Hashtags (without `#`) |
| `media` | object[] | No | Media attachments |
| `options` | object | No | Per-platform options |

### Media attachments

```json
{
  "media": [
    {
      "type": "image",
      "url": "https://example.com/image.jpg",
      "alt_text": "Description of the image"
    },
    {
      "type": "video",
      "url": "https://example.com/video.mp4"
    }
  ]
}
```

Or upload files as `multipart/form-data`.

### Response

```json
{
  "success": true,
  "data": {
    "results": [
      {
        "platform": "twitter",
        "status": "published",
        "external_id": "1234567890",
        "external_url": "https://twitter.com/user/status/1234567890"
      },
      {
        "platform": "linkedin",
        "status": "published",
        "external_id": "urn:li:share:987654",
        "external_url": "https://linkedin.com/feed/update/urn:li:share:987654"
      }
    ]
  }
}
```

## `POST /v1/publish/batch`

Publish multiple posts in one request. **Pro plan required.**

```bash
curl -X POST https://api.owlstack.dev/v1/publish/batch \
  -H "Authorization: Bearer your-api-key" \
  -H "Content-Type: application/json" \
  -d '{
    "posts": [
      {
        "body": "First post",
        "platforms": ["twitter"]
      },
      {
        "body": "Second post",
        "platforms": ["linkedin", "facebook"]
      }
    ]
  }'
```
