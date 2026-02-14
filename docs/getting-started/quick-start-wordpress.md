---
sidebar_position: 4
title: Quick Start (WordPress)
description: Set up OwlStack in a WordPress site.
---

# Quick Start — WordPress

This guide gets OwlStack working in your WordPress site.

## 1. Install

```bash
cd wp-content/plugins/owlstack-wordpress
composer install
```

## 2. Activate

Go to **WP Admin → Plugins** and activate **OwlStack**.

## 3. Configure

Navigate to **WP Admin → OwlStack → Settings** and enter your platform credentials:

- **Telegram** — Bot token, channel username
- **Twitter/X** — Consumer key/secret, access token/secret
- **Facebook** — App ID/secret, page access token, page ID

## 4. Publish from the editor

When editing a post, you'll see the **OwlStack** meta box in the sidebar. Select your target platforms and hit **Publish** — the post will be automatically published to all selected platforms.

## 5. Publish from code

```php
// Publish to Telegram
owlstack()->telegram('Hello from WordPress!');

// Publish to Twitter/X
owlstack()->twitter('Hello from WordPress!');

// Publish to Facebook
owlstack()->facebook('Hello from WordPress!', 'link', [
    'link' => 'https://example.com',
]);

// Publish to all configured platforms
$post = new \Owlstack\Core\Content\Post(
    title: 'My Post',
    body: 'Hello world!',
    url: 'https://example.com/my-post',
);
owlstack()->toAll($post);
```

## 6. Hooks

### Actions

```php
// After successful publishing
add_action('owlstack_post_published', function ($event) {
    error_log("Published to {$event->result->platformName}");
});

// After a failure
add_action('owlstack_post_failed', function ($event) {
    error_log("Failed: {$event->result->error}");
});

// Before publishing starts
add_action('owlstack_before_publish', function ($wp_post, $platforms) {
    // Modify or log before publishing
}, 10, 2);
```

### Filters

```php
// Control which post types show the meta box
add_filter('owlstack_supported_post_types', function ($types) {
    return ['post', 'page', 'product'];
});

// Modify the Post object before publishing
add_filter('owlstack_post_data', function ($post) {
    // Modify the Post object
    return $post;
});
```

## Next steps

- [WordPress Admin Panel](../frameworks/wordpress/admin-panel.md) — Settings page walkthrough
- [WordPress Hooks](../frameworks/wordpress/hooks.md) — Full hooks reference
- [WordPress REST API](../frameworks/wordpress/rest-api.md) — AJAX endpoints
