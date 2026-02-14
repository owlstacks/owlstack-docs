---
sidebar_position: 5
title: LinkedIn
description: Publishing to LinkedIn personal profiles and company pages.
---

# LinkedIn

Publish to personal profiles or company pages on LinkedIn with multi-step image upload support.

## Credentials

For **personal profiles**:

| Key | Required | Description |
|:----|:---------|:------------|
| `access_token` | ✅ | OAuth access token |
| `person_id` | ✅ | LinkedIn person URN ID |

For **company pages**:

| Key | Required | Description |
|:----|:---------|:------------|
| `access_token` | ✅ | OAuth access token |
| `organization_id` | ✅ | LinkedIn organization URN ID |

```php
// Personal profile
$credentials = new PlatformCredentials('linkedin', [
    'access_token' => '...',
    'person_id' => 'abc123',
]);

// Company page
$credentials = new PlatformCredentials('linkedin', [
    'access_token' => '...',
    'organization_id' => 'org456',
]);
```

## Options

| Option | Type | Description |
|:-------|:-----|:------------|
| `visibility` | `string` | `PUBLIC` or `CONNECTIONS` |

```php
$result = $publisher->publish($post, 'linkedin', [
    'visibility' => 'PUBLIC',
]);
```

## Constraints

| Constraint | Value |
|:-----------|:------|
| Max text length | 3,000 characters |
| Max media | 1 |
| Supported media types | JPEG, PNG, GIF |
| Image upload | Multi-step (register → upload → publish) |
