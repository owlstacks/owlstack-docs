---
sidebar_position: 5
title: Hooks
description: WordPress actions and filters provided by OwlStack.
---

# WordPress — Hooks

## Actions

### `owlstack_post_published`

Fired after successful publishing. Receives a `PostPublished` event object.

```php
add_action('owlstack_post_published', function ($event) {
    error_log("Published to {$event->result->platformName}");
    error_log("External ID: {$event->result->externalId}");
});
```

### `owlstack_post_failed`

Fired after a publishing failure. Receives a `PostFailed` event object.

```php
add_action('owlstack_post_failed', function ($event) {
    error_log("Failed on {$event->result->platformName}: {$event->result->error}");
});
```

### `owlstack_before_publish`

Fired before publishing starts. Receives `WP_Post` and array of platform names.

```php
add_action('owlstack_before_publish', function ($wp_post, $platforms) {
    // Log or modify before publishing
}, 10, 2);
```

### `owlstack_after_publish`

Fired after publishing completes. Receives `WP_Post` and array of results.

```php
add_action('owlstack_after_publish', function ($wp_post, $results) {
    foreach ($results as $platform => $result) {
        // Process results
    }
}, 10, 2);
```

## Filters

### `owlstack_supported_post_types`

Controls which post types show the OwlStack meta box. Default: `['post']`.

```php
add_filter('owlstack_supported_post_types', function ($types) {
    return ['post', 'page', 'product'];
});
```

### `owlstack_post_data`

Modifies the `Post` object before publishing.

```php
add_filter('owlstack_post_data', function ($post) {
    // Modify title, body, tags, etc.
    return $post;
});
```

### `owlstack_publish_options`

Modifies platform-specific options before publishing.

```php
add_filter('owlstack_publish_options', function ($options, $platform) {
    if ($platform === 'telegram') {
        $options['parse_mode'] = 'HTML';
    }
    return $options;
}, 10, 2);
```
