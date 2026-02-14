---
sidebar_position: 4
title: Pro+AI Plan
description: OwlStack Pro+AI plan -- AI-powered content creation and optimization.
---

# Pro+AI Plan

**$89/month** (or $799/year)

The Pro+AI plan adds AI-powered features to supercharge your content strategy.

## What's included

Everything in Pro, plus:

- **5,000 posts/month** -- Even higher volume
- **AI content generation** -- Generate platform-optimized posts from prompts or URLs
- **Auto-hashtags** -- AI suggests relevant hashtags based on content and trends
- **Post optimization** -- AI rewrites your content for each platform's best practices
- **A/B testing** -- Create content variants and track performance
- **Content calendar** -- AI-suggested optimal posting times

## AI content generation

```php
use OwlStack\Cloud\OwlStackClient;
use OwlStack\Enums\Platform;

$client = new OwlStackClient('your-pro-ai-api-key');

// Generate from a prompt
$posts = $client->ai()->generate(
    prompt: 'Write a post announcing our new API v2 launch',
    platforms: [Platform::Twitter, Platform::LinkedIn],
);

// Each platform gets optimized content
foreach ($posts as $post) {
    echo "{$post->platform->value}: {$post->body}\n";
}

// Publish the generated posts
$client->ai()->generateAndPublish(
    prompt: 'Share our latest blog post about PHP 8.4',
    url: 'https://example.com/blog/php-84',
    platforms: [Platform::Twitter, Platform::LinkedIn],
);
```

## Auto-hashtags

```php
// AI suggests hashtags based on content
$suggestions = $client->ai()->suggestHashtags(
    content: 'We just released OwlStack 2.0 with AI features',
    platform: Platform::Twitter,
    count: 5,
);
// Returns: ['owlstack', 'saas', 'ai', 'socialmedia', 'devtools']
```

## A/B testing

```php
// Create an A/B test
$test = $client->ai()->abTest(
    variants: [
        'Check out our new AI features!',
        'OwlStack now has AI-powered publishing',
        'AI meets social media -- try OwlStack Pro+AI',
    ],
    platforms: [Platform::Twitter],
    duration_hours: 24,
);

// Check results later
$results = $client->ai()->abTestResults($test->id);
```

## Upgrade path

Need unlimited posts, SLA guarantees, or custom integrations? Contact us about [Enterprise](/plans/enterprise).
