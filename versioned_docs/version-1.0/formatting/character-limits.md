---
sidebar_position: 2
title: Character Limits & Truncation
description: Word-boundary-aware text truncation with CharacterTruncator.
---

# Character Limits & Truncation

## CharacterTruncator

Word-boundary-aware text truncation that keeps your content readable.

```php
use Owlstack\Core\Formatting\CharacterTruncator;

$truncator = new CharacterTruncator(ellipsis: '…');
$truncator->truncate('Hello World', maxLength: 8); // 'Hello…'
```

The truncator:

- Breaks at **word boundaries** — never cuts a word in half
- Appends an **ellipsis** to indicate truncation
- Accounts for the ellipsis length in the character budget

## Platform character limits

| Platform | Max Characters |
|:---------|:--------------|
| Twitter/X | 280 |
| Pinterest | 800 |
| Discord | 2,000 |
| Instagram | 2,200 |
| LinkedIn | 3,000 |
| Telegram | 4,096 |
| Tumblr | 4,096 |
| WhatsApp | 4,096 |
| Reddit | 40,000 |
| Slack | 40,000 |
| Facebook | 63,206 |

Formatters use these limits automatically — you don't need to truncate manually unless you want custom behavior.
