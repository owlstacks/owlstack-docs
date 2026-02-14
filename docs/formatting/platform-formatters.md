---
sidebar_position: 1
title: Platform Formatters
description: How OwlStack formats content for each platform.
---

# Platform Formatters

OwlStack automatically formats your content for each target platform on the server side. You don't need to worry about character limits, markup syntax, or hashtag placement.

## How it works

When you publish a post, OwlStack's cloud:

1. Takes your post body
2. Converts markup to the platform's format (HTML for Telegram, Markdown for Discord, etc.)
3. Injects hashtags from your tags within the character budget
4. Appends the canonical URL if there's room
5. Truncates at a word boundary to respect character limits

```php
// You write this:
$post = Post::create('Check out our new blog post about PHP 8.3!')
    ->withUrl('https://example.com/php-83')
    ->withHashtags(['php', 'programming']);

// For Telegram (HTML, 4096 chars), OwlStack sends:
// Check out our new blog post about PHP 8.3!
// 
// Read more: https://example.com/php-83
// #php #programming

// For Twitter (plain text, 280 chars), OwlStack sends:
// Check out our new blog post about PHP 8.3!
// 
// https://example.com/php-83 #php #programming
```

## Markup by platform

| Platform | Markup Format |
|:---------|:-------------|
| Telegram | HTML |
| Twitter/X | Plain text |
| Facebook | Plain text |
| LinkedIn | Plain text |
| Discord | Markdown |
| Instagram | Plain text |
| Pinterest | Plain text |
| Reddit | Markdown |
| Slack | mrkdwn |
| Tumblr | NPF (Neue Post Format) |
| WhatsApp | Plain text |
