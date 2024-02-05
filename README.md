# API Caleg Pemilu 2024

## Note

- Data ini diambil dari web KPU ([infopemilu.kpu.go.id](https://infopemilu.kpu.go.id/)) dalam periode 13 Januari 2024 - 22 Januari 2024
- Jika terjadi perubahan data setelah periode tersebut, maka data yang tersedia di sini mungkin terdapat perbedaan
- Data ini disediakan untuk keperluan pembelajaran dan penelitian, dan tidak boleh digunakan untuk tujuan komersial
- Metode yang digunakan adalah web scraping menggunakan `fetch` biasa pada Node.js, setelah itu data yang berbentuk HTML diubah menjadi JSON menggunakan `cheerio`. Saya tidak mejamin 100% akurasi data saat melakukan parsing, namun saya telah berusaha sebaik mungkin untuk memastikan data yang dihasilkan akurat. Untuk penjelasan lebih lanjut mengenai metode dapat dilihat di sini: [Di Balik Layar: Bagaimana Kami Menscrape 250 Ribu Data Caleg Pemilu 2024](https://zakiego.com/articles/pemilu-2024)

- Jika ada pertanyaan atau masukan, silahkan kontak melalui [@zakiego](https://twitter.com/zakiego)

## Deskripsi

API ini menyediakan data calon legislatif (caleg) pada Pemilu 2024. Data yang disediakan meliputi:

- DPD
  - List Dapil: <https://caleg.zakiego.com/api/dpd/dapil/list>
  - List Calon tiap Dapil (many): [https://caleg.zakiego.com/api/dpd/dapil/{dapil_id}](https://caleg.zakiego.com/api/dpd/dapil/11)
  - Detail Calon (one): [https://caleg.zakiego.com/api/dpd/calon/{caleg_id}](https://caleg.zakiego.com/api/dpd/calon/aceh/6)
- DPR RI
  - Dapil: <https://caleg.zakiego.com/api/dpr-ri/dapil/list>
  - List Calon tiap Dapil (many): [https://caleg.zakiego.com/api/dpr-ri/{dapil_id}](https://caleg.zakiego.com/api/dpr-ri/dapil/1101)
  - Detail Calon (one): [https://caleg.zakiego.com/api/dpr-ri/calon/{caleg_id}](https://caleg.zakiego.com/api/dpr-ri/calon/aceh-i/partai-kebangkitan-bangsa/6)
- DPRD Provinsi
  - Dapil: <https://caleg.zakiego.com/api/dprd-provinsi/dapil/list>
  - List Calon tiap Dapil (many): [https://caleg.zakiego.com/api/dprd-provinsi/{dapil_id}](https://caleg.zakiego.com/api/dprd-provinsi/dapil/110001)
  - Detail Calon (one): [https://caleg.zakiego.com/api/dprd-provinsi/calon/{caleg_id}>](https://caleg.zakiego.com/api/dprd-provinsi/calon/aceh-1/partai-kebangkitan-bangsa/11)
- DPRD Kabupaten/Kota
  - Dapil: <https://caleg.zakiego.com/api/dprd-kabupaten-kota/dapil/list>
  - List Calon tiap Dapil (many): [https://caleg.zakiego.com/api/dprd-kabupaten-kota/{dapil_id}](https://caleg.zakiego.com/api/dprd-kabupaten-kota/dapil/110101)
  - Detail Calon (one): [https://caleg.zakiego.com/api/dprd-kabupaten-kota/calon/{caleg_id}](https://caleg.zakiego.com/api/dprd-kabupaten-kota/calon/aceh-selatan-1/partai-buruh/1)

## Type

> Catatan:
> 
> Type ini digenerate menggunakan [transform.tools](https://transform.tools/json-to-typescript), jika terdapat kesalahan atau perbaikan, silahkan [buat issue](https://github.com/zakiego/api-caleg-pemilu-2024/issues/new) atau pull request.

### Dapil

Type data `dapil` sama untuk semua jenis dapil:

- `dpd`
- `dpr`
- `dprd-provinsi`
- `dprd-kabupaten-kota`

```typescript
export interface Response {
  status: string
  data: Dapil[]
}

export interface Dapil {
  id: string
  namaDapil: string
  url: string
}
```

### Calon

Ada perbedaan type untuk data `calon`. Berikut adalah type untuk masing-masing:

#### DPD
  
```typescript
export interface Response {
  status: string
  data: Calon[]
}

export interface Calon {
  id: string
  namaDapil: string
  dapilId: string
  provinsi: string
  nomorUrut: number
  pasFoto: string
  nama: string
  jenisKelamin: string
  pilihanPublikasi?: string
  tempatTinggal?: string
  statusDisabilitas?: string
  riwayatPekerjaan?: RiwayatPekerjaan[]
  riwayatPendidikan?: RiwayatPendidikan[]
  riwayatKursusDiklat?: RiwayatKursusDiklat[]
  riwayatOrganisasi?: RiwayatOrganisasi[]
  riwayatPenghargaan?: RiwayatPenghargaan[]
  motivasi?: string[]
}

export interface RiwayatPekerjaan {
  namaPerusahaanLembaga: string
  jabatan: string
  tahunMasuk: string
  tahunKeluar: string
}

export interface RiwayatPendidikan {
  jenjangPendidikan: string
  namaInstitusi: string
  tahunMasuk: string
  tahunKeluar: string
}

export interface RiwayatKursusDiklat {
  namaKursus?: string
  lembagaPenyelenggara?: string
  tahunMasuk: string
  tahunKeluar: string
}

export interface RiwayatOrganisasi {
  namaOrganisasi?: string
  jabatan?: string
  tahunMasuk: string
  tahunKeluar: string
}

export interface RiwayatPenghargaan {
  namaPenghargaan?: string
  lembaga?: string
  tahun: string
}
```

#### DPR RI, DPRD Provinsi, dan DPRD Kabupaten/Kota

```typescript
export interface Response {
  status: string
  data: Calon[]
}

export interface Calon {
  id: string
  namaPartai: string
  logoPartai: string
  dapilId: string
  namaDapil: string
  nomorUrut: number
  pasFoto: string
  nama: string
  jenisKelamin: string
  pilihanPublikasi?: string[]
  statusPublikasi?: string
  tempatLahir?: string
  usia?: number
  agama?: string
  statusDisabilitas?: string
  pekerjaan?: string
  riwayatPekerjaan?: RiwayatPekerjaan[]
  statusHukum?: string
  riwayatPendidikan?: RiwayatPendidikan[]
  riwayatKursusDiklat?: RiwayatKursusDiklat[]
  riwayatOrganisasi?: RiwayatOrganisasi[]
  riwayatPenghargaan?: RiwayatPenghargaan[]
  programUsulan?: string[]
  motivasi?: string[]
}

export interface RiwayatPekerjaan {
  namaPerusahaanLembaga: string
  jabatan?: string
  tahunMasuk: string
  tahunKeluar: string
}

export interface RiwayatPendidikan {
  jenjangPendidikan: string
  namaInstitusi: string
  tahunMasuk: string
  tahunKeluar: string
}

export interface RiwayatKursusDiklat {
  namaKursus: string
  lembagaPenyelenggara: string
  nomorSertifikat?: string
  tahunMasuk: string
  tahunKeluar: string
}

export interface RiwayatOrganisasi {
  namaOrganisasi: string
  jabatan: string
  tahunMasuk: string
  tahunKeluar: string
}

export interface RiwayatPenghargaan {
  namaPenghargaan: any
  lembaga: string
  tahun: string
}
```
