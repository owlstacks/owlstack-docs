---
sidebar_position: 2
title: Custom Formatters
description: Implementing FormatterInterface for custom content formatting.
---

# Custom Formatters

Create a custom formatter for your platform by implementing `FormatterInterface`.

```php
use Owlstack\Core\Formatting\Contracts\FormatterInterface;
use Owlstack\Core\Content\Post;

class MastodonFormatter implements FormatterInterface
{
    public function format(Post $post, array $options = []): string
    {
        $text = $post->body;

        // Add hashtags
        if (!empty($post->tags)) {
            $hashtags = array_map(fn($tag) => '#' . $tag, $post->tags);
            $text .= "\n\n" . implode(' ', $hashtags);
        }

        // Add URL
        if ($post->url) {
            $text .= "\n\n" . $post->url;
        }

        // Truncate to max length
        if (mb_strlen($text) > $this->maxLength()) {
            $text = mb_substr($text, 0, $this->maxLength() - 1) . '…';
        }

        return $text;
    }

    public function platform(): string
    {
        return 'mastodon';
    }

    public function maxLength(): int
    {
        return 500;
    }
}
```

You can also use the built-in `CharacterTruncator` and `HashtagExtractor` utilities:

```php
use Owlstack\Core\Formatting\CharacterTruncator;
use Owlstack\Core\Formatting\HashtagExtractor;

$truncator = new CharacterTruncator(ellipsis: '…');
$extractor = new HashtagExtractor();
```
