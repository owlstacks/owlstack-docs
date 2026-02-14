---
sidebar_position: 3
title: Custom HTTP Client
description: Implementing HttpClientInterface for custom HTTP behavior.
---

# Custom HTTP Client

OwlStack ships with a zero-dependency cURL-based HTTP client, but you can swap it for any implementation.

## HttpClientInterface

```php
use Owlstack\Core\Http\Contracts\HttpClientInterface;

class GuzzleHttpClient implements HttpClientInterface
{
    public function __construct(
        private \GuzzleHttp\Client $guzzle,
    ) {}

    public function post(string $url, array $options = []): array
    {
        $response = $this->guzzle->post($url, $this->mapOptions($options));

        return [
            'status' => $response->getStatusCode(),
            'headers' => $response->getHeaders(),
            'body' => (string) $response->getBody(),
        ];
    }

    public function get(string $url, array $options = []): array
    {
        $response = $this->guzzle->get($url, $this->mapOptions($options));

        return [
            'status' => $response->getStatusCode(),
            'headers' => $response->getHeaders(),
            'body' => (string) $response->getBody(),
        ];
    }

    private function mapOptions(array $options): array
    {
        // Map OwlStack options to Guzzle options
        return $options;
    }
}
```

## Built-in HttpClient

The default client supports:

| Option | Description |
|:-------|:------------|
| `headers` | Custom HTTP headers |
| `json` | JSON request body |
| `body` | Raw request body |
| `form_params` | URL-encoded form data |
| `multipart` | Multipart file uploads |
| `query` | URL query parameters |

```php
use Owlstack\Core\Http\HttpClient;

$client = new HttpClient(
    timeout: 30,
    connectTimeout: 10,
    verifySsl: true,
    proxy: [
        'host' => 'proxy.example.com',
        'port' => 8080,
        'type' => CURLPROXY_SOCKS5,
        'auth' => 'username:password',
    ],
);
```
