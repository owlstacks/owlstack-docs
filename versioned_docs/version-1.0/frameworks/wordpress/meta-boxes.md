---
sidebar_position: 3
title: Meta Boxes
description: Using the OwlStack publish meta box in the WordPress post editor.
---

# WordPress - Meta Boxes

## Publish meta box

When editing a post, the **OwlStack** meta box appears in the sidebar. It lets you:

1. **Select platforms** - Check which connected platforms to publish to
2. **Auto-publish** - Automatically publish when you hit "Publish"
3. **View status** - See delivery status for each platform

Only platforms connected via your OwlStack dashboard (and available on your plan) are shown.

## Supported post types

By default, the meta box appears on `post` type only. Customize with the filter:

```php
add_filter('owlstack_supported_post_types', function ($types) {
    return ['post', 'page', 'product']; // Add more post types
});
```

## Post data

The meta box builds an `OwlStack\Post` object from your WordPress post:

- **Title** - From `post_title`
- **Body** - From `post_content` (stripped of HTML)
- **URL** - Post permalink
- **Tags** - From post tags (used as hashtags)
- **Media** - Featured image, if set
- **Metadata** - Includes `wp_post_id`
