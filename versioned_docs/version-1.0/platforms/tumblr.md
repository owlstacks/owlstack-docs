---
sidebar_position: 11
title: Tumblr
description: Publishing to Tumblr blogs with NPF content blocks.
---

# Tumblr

Publish to Tumblr blogs using NPF (Neue Post Format) content blocks with support for draft, queue, and private states.

## Credentials

| Key | Required | Description |
|:----|:---------|:------------|
| `access_token` | ✅ | Tumblr API access token |
| `blog_identifier` | ✅ | Blog identifier (e.g., `myblog.tumblr.com`) |

```php
$credentials = new PlatformCredentials('tumblr', [
    'access_token' => '...',
    'blog_identifier' => 'myblog.tumblr.com',
]);
```

## Options

| Option | Type | Description |
|:-------|:-----|:------------|
| `post_type` | `string` | `text`, `image`, `video`, `link`, `audio` |
| `state` | `string` | `published`, `draft`, `queue`, `private` |
| `slug` | `string` | URL slug for the post |

```php
$result = $publisher->publish($post, 'tumblr', [
    'post_type' => 'text',
    'state' => 'published',
    'slug' => 'my-post-slug',
]);
```

## Constraints

| Constraint | Value |
|:-----------|:------|
| Max text length | 4,096 characters |
| Content format | NPF content blocks |
| API | Tumblr API v2 |
