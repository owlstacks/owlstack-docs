---
sidebar_position: 2
title: Character Limits
description: Platform character limits and how OwlStack handles truncation.
---

# Character Limits

OwlStack handles character truncation automatically on the server. Your content is trimmed at word boundaries with an ellipsis when it exceeds a platform's limit.

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

## How truncation works

- Breaks at **word boundaries** -- never cuts a word in half
- Appends an **ellipsis** to indicate truncation
- Accounts for hashtags and URLs in the character budget
- For Twitter, accounts for `t.co` URL wrapping (23 characters per URL)

You don't need to truncate manually. Just write your content and OwlStack formats it for each platform.
