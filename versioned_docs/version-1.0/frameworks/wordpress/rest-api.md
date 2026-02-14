---
sidebar_position: 4
title: REST API
description: OwlStack WordPress REST API endpoints.
---

# WordPress - REST API

OwlStack registers AJAX endpoints for use from the WordPress admin panel.

## Endpoints

| Action | Description |
|:-------|:------------|
| Test connection | Validates your API key and shows connected platforms |
| Manual publish | Publishes content to selected platforms on demand |
| Log management | Retrieves and manages delivery logs |

All endpoints are authenticated via WordPress nonces and require appropriate user capabilities (`manage_options`).

## Custom REST endpoints

You can also use OwlStack directly in custom REST endpoints:

```php
add_action('rest_api_init', function () {
    register_rest_route('my-plugin/v1', '/publish', [
        'methods' => 'POST',
        'callback' => function (WP_REST_Request $request) {
            $client = owlstack_client();
            $post = \OwlStack\Post::create($request->get_param('message'));
            $results = $client->publish($post, [
                \OwlStack\Enums\Platform::Twitter,
            ]);
            return rest_ensure_response($results);
        },
        'permission_callback' => function () {
            return current_user_can('publish_posts');
        },
    ]);
});
```
