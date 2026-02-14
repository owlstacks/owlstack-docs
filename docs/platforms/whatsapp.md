---
sidebar_position: 12
title: WhatsApp
description: Sending messages via WhatsApp Cloud API.
---

# WhatsApp

Send text messages, media, documents, and template messages via the WhatsApp Cloud API.

## Credentials

| Key | Required | Description |
|:----|:---------|:------------|
| `access_token` | ✅ | WhatsApp Cloud API access token |
| `phone_number_id` | ✅ | WhatsApp Business phone number ID |

```php
$credentials = new PlatformCredentials('whatsapp', [
    'access_token' => '...',
    'phone_number_id' => '...',
]);
```

## Options

| Option | Type | Description |
|:-------|:-----|:------------|
| `to` | `string` | **Required.** Recipient phone number (E.164 format) |
| `message_type` | `string` | `text`, `image`, `video`, `document`, `template` |
| `template_name` | `string` | Template name (for template messages) |
| `template_lang` | `string` | Template language code (e.g., `en_US`) |
| `preview_url` | `bool` | Show URL preview |

```php
// Text message
$result = $publisher->publish($post, 'whatsapp', [
    'to' => '+1234567890',
    'message_type' => 'text',
    'preview_url' => true,
]);

// Template message
$result = $publisher->publish($post, 'whatsapp', [
    'to' => '+1234567890',
    'message_type' => 'template',
    'template_name' => 'hello_world',
    'template_lang' => 'en_US',
]);
```

## Constraints

| Constraint | Value |
|:-----------|:------|
| Max text length | 4,096 characters |
| Supported media types | JPEG, PNG, MP4, PDF, DOCX |
| API | WhatsApp Cloud API |
