---
title: Type
---

> Catatan:
> 
> Type ini digenerate menggunakan [transform.tools](https://transform.tools/json-to-typescript), jika terdapat kesalahan atau perbaikan, silahkan [buat issue](https://github.com/zakiego/api-caleg-pemilu-2024/issues/new) atau pull request.

Type ini digunakan untuk mendeskripsikan struktur data yang diberikan oleh API. Berikut adalah type yang tersedia dalam bahasa TypeScript.

---

## Dapil

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

---

## Calon

Ada perbedaan type untuk data `calon`. Berikut adalah type untuk masing-masing:

### DPD
  
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

### DPR RI, DPRD Provinsi, dan DPRD Kabupaten/Kota

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
