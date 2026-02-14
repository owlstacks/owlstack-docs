---
sidebar_position: 5
title: Hooks
description: WordPress actions and filters provided by OwlStack.
---

# WordPress -- Hooks

## Actions

### `owlstack_post_published`

Fired after successful publishing. Receives a `PostPublished` event object.

```php
add_action('owlstack_post_published', function ($event) {
    error_log("Published to {$event->result->platform()->value}");
    error_log("External ID: {$event->result->externalId()}");
    error_log("URL: {$event->result->externalUrl()}");
});
```

### `owlstack_post_failed`

Fired after a publishing failure. Receives a `PostFailed` event object.

```php
add_action('owlstack_post_failed', function ($event) {
    error_log("Failed on {$event->result->platform()->value}: {$event->result->error()}");
    error_log("Error code: {$event->result->errorCode()}");
});
```

### `owlstack_before_publish`

Fired before publishing starts. Receives `WP_Post` and array of `Platform` enums.

```php
add_action('owlstack_before_publish', function ($wp_post, $platforms) {
    // Log or modify before publishing
}, 10, 2);
```

### `owlstack_after_publish`

Fired after publishing completes. Receives `WP_Post` and array of `DeliveryResult` objects.

```php
add_action('owlstack_after_publish', function ($wp_post, $results) {
    foreach ($results as $result) {
        if ($result->isSuccessful()) {
            // Handle success
        }
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
    // Add default hashtags, modify body, etc.
    return $post;
});
```

### `owlstack_publish_platforms`

Modifies the list of platforms before publishing.

```php
use OwlStack\Enums\Platform;

add_filter('owlstack_publish_platforms', function ($platforms, $wp_post) {
    // Always include Twitter for blog posts
    if ($wp_post->post_type === 'post') {
        $platforms[] = Platform::Twitter;
    }
    return array_unique($platforms);
}, 10, 2);
```
