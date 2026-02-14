---
sidebar_position: 5
title: Migration from Larasap
description: Upgrading from alihesari/larasap to owlstack/owlstack-laravel.
---

# Migration from Larasap

If you're upgrading from the old `alihesari/larasap` package, follow these steps.

## Step-by-step

### 1. Replace the package

```bash
composer remove alihesari/larasap
composer require owlstack/owlstack-laravel
```

### 2. Rename config

Rename `config/larasap.php` to `config/owlstack.php` and update the format:

```bash
php artisan vendor:publish --tag=owlstack-config
```

### 3. Update imports

```diff
- use Alihesari\Larasap\SendTo;
+ use Owlstack\Laravel\SendTo;
```

### 4. Update call style

```diff
// Old: static calls
- SendTo::telegram($msg);

// New: instance method (via DI)
+ $sendTo->telegram($msg);

// Or via facade
+ Owlstack::telegram($msg);
```

### 5. Update Facebook calls

```diff
- SendTo::facebook('link', $data);
+ $sendTo->facebook($msg, 'link', $data);
```

### 6. Update event listeners

If you had custom event listeners, update them to use the new event classes.

### 7. Remove old dependencies

The `facebook/graph-sdk` and `facebook/php-business-sdk` dependencies are no longer needed — OwlStack uses its own HTTP client.

## Key API changes

| Old (Larasap) | New (OwlStack) |
|:--------------|:---------------|
| `SendTo::telegram($msg)` | `$sendTo->telegram($msg)` |
| `SendTo::x($msg)` | `$sendTo->x($msg)` or `$sendTo->twitter($msg)` |
| `SendTo::facebook('link', $data)` | `$sendTo->facebook($msg, 'link', $data)` |
| Returns raw array | Returns `PublishResult` |
| Static calls only | DI + Facade |
