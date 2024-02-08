---
title: Getting started
---

## Catatan Penting

- Data ini diambil dari web KPU ([infopemilu.kpu.go.id](https://infopemilu.kpu.go.id/)) dalam periode 13 Januari 2024 - 22 Januari 2024
- Jika terjadi perubahan data setelah periode tersebut, maka data yang tersedia di sini mungkin terdapat perbedaan
- Data ini disediakan untuk keperluan pembelajaran dan penelitian, dan tidak boleh digunakan untuk tujuan komersial
- Metode yang digunakan adalah web scraping menggunakan `fetch` biasa pada Node.js, setelah itu data yang berbentuk HTML diubah menjadi JSON menggunakan `cheerio`. Saya tidak mejamin 100% akurasi data saat melakukan parsing, namun saya telah berusaha sebaik mungkin untuk memastikan data yang dihasilkan akurat. Untuk penjelasan lebih lanjut mengenai metode dapat dilihat di sini: [Di Balik Layar: Bagaimana Kami Menscrape 250 Ribu Data Caleg Pemilu 2024](https://zakiego.com/articles/pemilu-2024)

- Jika ada pertanyaan atau masukan, silahkan kontak melalui [@zakiego](https://twitter.com/zakiego)

## Endpoint

Daftar API yang tersedia bisa dilihat di sini [list API](/list-api).

## Cara Menggunakan

> Contoh ini dibuat oleh GitHub Copilot, jika ada yang kurang pas, silahkan koreksi 😎


Berikut adalah beberapa contoh penggunaan API ini:


### JavaScript (Node.js)

```javascript
const endpoint = 'https://caleg.zakiego.com/api/dpd/dapil/list'
const data = await fetch(endpoint).then(res => res.json())
console.log(data)
```

### Python

```py
import requests

endpoint = 'https://caleg.zakiego.com/api/dpd/dapil/list'
data = requests.get(endpoint).json()
print(data)
```

### Golang

```go
package main

import (
  "encoding/json"
  "fmt"
  "io/ioutil"
  "net/http"
)

func main() {
  endpoint := "https://caleg.zakiego.com/api/dpd/dapil/list"
  res, _ := http.Get(endpoint)
  defer res.Body.Close()
  body, _ := ioutil.ReadAll(res.Body)
  var data map[string]interface{}
  json.Unmarshal(body, &data)
  fmt.Println(data)
}
```

### Shell

```sh
curl -s https://caleg.zakiego.com/api/dpd/dapil/list | jq
```

### Flutter

```dart
import 'package:http/http.dart' as http;
import 'dart:convert';

void main() async {
  var endpoint = 'https://caleg.zakiego.com/api/dpd/dapil/list';
  var response = await http.get(Uri.parse(endpoint));
  var data = json.decode(response.body);
  print(data);
}
```

### PHP

```php
<?php
$endpoint = 'https://caleg.zakiego.com/api/dpd/dapil/list';
$data = json_decode(file_get_contents($endpoint), true);
print_r($data);
```

### Rust

```rust
use reqwest;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let endpoint = "https://caleg.zakiego.com/api/dpd/dapil/list";
    let data: serde_json::Value = reqwest::get(endpoint).await?.json().await?;
    println!("{:?}", data);
    Ok(())
}
```

### Ruby

```ruby
require 'net/http'
require 'json'

endpoint = 'https://caleg.zakiego.com/api/dpd/dapil/list'
uri = URI(endpoint)
response = Net::HTTP.get(uri)
data = JSON.parse(response)
puts data
```

### C#

```csharp
using System;
using System.Net.Http;
using System.Threading.Tasks;

class Program
{
  static async Task Main(string[] args)
  {
    var endpoint = "https://caleg.zakiego.com/api/dpd/dapil/list";
    var client = new HttpClient();
    var response = await client.GetStringAsync(endpoint);
    Console.WriteLine(response);
  }
}
```

### Perl

```perl
use LWP::UserAgent;
use JSON;

my $endpoint = 'https://caleg.zakiego.com/api/dpd/dapil/list';
my $ua = LWP::UserAgent->new;
my $response = $ua->get($endpoint);
my $data = decode_json($response->decoded_content);
print $data;
```

### Shell

```sh
curl -s https://caleg.zakiego.com/api/dpd/dapil/list | jq
```

