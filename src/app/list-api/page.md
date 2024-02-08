---
title: List API
---

API ini menyediakan data calon legislatif (caleg) pada Pemilu 2024. Data yang disediakan meliputi:

- [DPD](#dpd)
- [DPR RI](#dpr-ri)
- [DPRD Provinsi](#dprd-provinsi)
- [DPRD Kabupaten/Kota](#dprd-kabupaten-kota)

Type response yang digunakan untuk masing-masing API dapat dilihat di sini: [Type](/type)

## DPD

### List Dapil

**Endpoint**:

<https://caleg.zakiego.com/api/dpd/dapil/list>

**Response**:

```json
{
  "status": "success",
  "data": [
    {
      "id": "11",
      "namaDapil": "ACEH",
      "url": "https://caleg.zakiego.com/api/dpd/dapil/11"
    },
    {
      "id": "12",
      "namaDapil": "SUMATERA UTARA",
      "url": "https://caleg.zakiego.com/api/dpd/dapil/12"
    },
    // ...
  ]
}
```

### List Calon tiap Dapil (many)

**Endpoint**:

[https://caleg.zakiego.com/api/dpd/dapil/{dapil_id}](https://caleg.zakiego.com/api/dpd/dapil/11)

**Response**:

```json
{
  "status": "success",
  "data": [
    {
      "url": "https://caleg.zakiego.com/api/dpd/calon/aceh/6",
      "id": "aceh/6",
      "namaDapil": "ACEH",
      "dapilId": "11",
      "provinsi": "ACEH",
      "nomorUrut": 6,
      "pasFoto": "../berkas-dpd-dct/11/11_6_DARWATI A. GANI.jpg",
      "nama": "DARWATI A. GANI",
      // ...
    },
    {
      "url": "https://caleg.zakiego.com/api/dpd/calon/aceh/2",
      "id": "aceh/2",
      "namaDapil": "ACEH",
      "dapilId": "11",
      "provinsi": "ACEH",
      "nomorUrut": 2,
      "pasFoto": "../berkas-dpd-dct/11/11_2_AHMADA.jpg",
      "nama": "Tgk. AHMADA",
      // ... 
    },
    {
      "url": "https://caleg.zakiego.com/api/dpd/calon/aceh/13",
      "id": "aceh/13",
      "namaDapil": "ACEH",
      "dapilId": "11",
      "provinsi": "ACEH",
      "nomorUrut": 13,
      "pasFoto": "../berkas-dpd-dct/11/11_13_M. FADHIL RAHMI.jpg",
      "nama": "H. M. FADHIL RAHMI, Lc., M.Ag.",
      // ...
    },
    // ...
  ]
}
```

### Detail Calon (one)

**Endpoint**:

[https://caleg.zakiego.com/api/dpd/calon/{caleg_id}](https://caleg.zakiego.com/api/dpd/calon/aceh/6)

**Response**:

```json
{
  "status": "success",
  "data": [
    {
      "id": "aceh/6",
      "namaDapil": "ACEH",
      "dapilId": "11",
      "provinsi": "ACEH",
      "nomorUrut": 6,
      "pasFoto": "../berkas-dpd-dct/11/11_6_DARWATI A. GANI.jpg",
      "nama": "DARWATI A. GANI",
      // ...
    }
  ]
}
```

---

## DPR RI

### Dapil

**Endpoint**:

<https://caleg.zakiego.com/api/dpr-ri/dapil/list>

**Response**:

```json
{
  "status": "success",
  "data": [
    {
      "id": "1101",
      "namaDapil": "ACEH I",
      "url": "https://caleg.zakiego.com/api/dpr-ri/dapil/1101"
    },
    {
      "id": "1102",
      "namaDapil": "ACEH II",
      "url": "https://caleg.zakiego.com/api/dpr-ri/dapil/1102"
    },
    {
      "id": "1201",
      "namaDapil": "SUMATERA UTARA I",
      "url": "https://caleg.zakiego.com/api/dpr-ri/dapil/1201"
    },
    // ...
  ]
}
```

### List Calon tiap Dapil (many)

**Endpoint**:

[https://caleg.zakiego.com/api/dpr-ri/{dapil_id}](https://caleg.zakiego.com/api/dpr-ri/dapil/1101)

**Response**:

```json
{
  "status": "success",
  "data": [
    {
      "url": "https://caleg.zakiego.com/api/dpr-ri/calon/aceh-i/partai-kebangkitan-bangsa/6",
      "id": "aceh-i/partai-kebangkitan-bangsa/6",
      "namaPartai": "Partai Kebangkitan Bangsa",
      "logoPartai": "berkas-sipol/parpol/profil/gambar_parpol/1656538128_Logo PKB.png",
      "dapilId": "1101",
      "namaDapil": "ACEH I",
      "nomorUrut": 6,
      "pasFoto": "https://infopemilu.kpu.go.id/dct/berkas-silon/calon/480581/pas_foto/1695716733_1e78e96a-f401-40f5-88a1-31ade05033d5.jpeg",
      "nama": "drh. HASNIDAR",
      // ...
    },
    {
      "url": "https://caleg.zakiego.com/api/dpr-ri/calon/aceh-i/partai-kebangkitan-bangsa/7",
      "id": "aceh-i/partai-kebangkitan-bangsa/7",
      "namaPartai": "Partai Kebangkitan Bangsa",
      "logoPartai": "berkas-sipol/parpol/profil/gambar_parpol/1656538128_Logo PKB.png",
      "dapilId": "1101",
      "namaDapil": "ACEH I",
      "nomorUrut": 7,
      "pasFoto": "https://infopemilu.kpu.go.id/dct/berkas-silon/calon_unggah/96160/pas_foto/1175012002670001.png",
      "nama": "Tgk. H. SYARIFUDDIN, M.A.",
      // ...
    },
    {
      "url": "https://caleg.zakiego.com/api/dpr-ri/calon/aceh-i/partai-demokrasi-indonesia-perjuangan/1",
      "id": "aceh-i/partai-demokrasi-indonesia-perjuangan/1",
      "namaPartai": "Partai Demokrasi Indonesia Perjuangan",
      "logoPartai": "berkas-sipol/parpol/profil/gambar_parpol/1656305039_LOGO PDI PERJUANGAN.png",
      "dapilId": "1101",
      "namaDapil": "ACEH I",
      "nomorUrut": 1,
      "pasFoto": "https://infopemilu.kpu.go.id/dct/berkas-silon/calon/249295/pas_foto/1684041723_bb9bf726-10a4-4f51-b902-f0fa4e7c6617.jpeg",
      "nama": "SOFYAN DAWOOD",
      // ...
    },
    // ...
  ]
}
```

### Detail Calon (one)

**Endpoint**:

[https://caleg.zakiego.com/api/dpr-ri/calon/{caleg_id}](https://caleg.zakiego.com/api/dpr-ri/calon/aceh-i/partai-kebangkitan-bangsa/6)

**Response**:

```json
{
  "status": "success",
  "data": [
    {
      "id": "aceh-i/partai-kebangkitan-bangsa/6",
      "namaPartai": "Partai Kebangkitan Bangsa",
      "logoPartai": "berkas-sipol/parpol/profil/gambar_parpol/1656538128_Logo PKB.png",
      "dapilId": "1101",
      "namaDapil": "ACEH I",
      "nomorUrut": 6,
      "pasFoto": "https://infopemilu.kpu.go.id/dct/berkas-silon/calon/480581/pas_foto/1695716733_1e78e96a-f401-40f5-88a1-31ade05033d5.jpeg",
      "nama": "drh. HASNIDAR",
      // ...
    }
  ]
}
```

---
  
## DPRD Provinsi

### Dapil

**Endpoint**:

<https://caleg.zakiego.com/api/dprd-provinsi/dapil/list>

**Response**:

```json
{
  "status": "success",
  "data": [
    {
      "id": "110001",
      "namaDapil": "ACEH 1",
      "url": "https://caleg.zakiego.com/api/dprd-provinsi/dapil/110001"
    },
    {
      "id": "110002",
      "namaDapil": "ACEH 2",
      "url": "https://caleg.zakiego.com/api/dprd-provinsi/dapil/110002"
    },
    {
      "id": "110003",
      "namaDapil": "ACEH 3",
      "url": "https://caleg.zakiego.com/api/dprd-provinsi/dapil/110003"
    },
    // ...
  ]
}
```

### List Calon tiap Dapil (many)

**Endpoint**:

[https://caleg.zakiego.com/api/dprd-provinsi/{dapil_id}](https://caleg.zakiego.com/api/dprd-provinsi/dapil/110001)

**Response**:

```json
{
  "status": "success",
  "data": [
    {
      "url": "https://caleg.zakiego.com/api/dprd-provinsi/calon/aceh-1/partai-kebangkitan-bangsa/11",
      "id": "aceh-1/partai-kebangkitan-bangsa/11",
      "namaPartai": "Partai Kebangkitan Bangsa",
      "logoPartai": "berkas-sipol/parpol/profil/gambar_parpol/1656538128_Logo PKB.png",
      "dapilId": "110001",
      "namaDapil": "ACEH 1",
      "nomorUrut": 11,
      "pasFoto": "https://infopemilu.kpu.go.id/dct/berkas-silon/calon_unggah/234457/pas_foto/1106041908680001.jpeg",
      "nama": "H. MUSTAFA ISHAK",
      // ...
    },
    {
      "url": "https://caleg.zakiego.com/api/dprd-provinsi/calon/aceh-1/partai-gerakan-indonesia-raya/2",
      "id": "aceh-1/partai-gerakan-indonesia-raya/2",
      "namaPartai": "Partai Gerakan Indonesia Raya",
      "logoPartai": "berkas-sipol/parpol/profil/gambar_parpol/1657710596_Logo GERINDRA 10x10.png",
      "dapilId": "110001",
      "namaDapil": "ACEH 1",
      "nomorUrut": 2,
      "pasFoto": "https://infopemilu.kpu.go.id/dct/berkas-silon/calon/130729/pas_foto/1683465432_374b38e1-e434-4e6a-99e5-0240e8662616.jpeg",
      "nama": "AGUSSALIM",
      // ...
    },
    {
      "url": "https://caleg.zakiego.com/api/dprd-provinsi/calon/aceh-1/partai-kebangkitan-bangsa/7",
      "id": "aceh-1/partai-kebangkitan-bangsa/7",
      "namaPartai": "Partai Kebangkitan Bangsa",
      "logoPartai": "berkas-sipol/parpol/profil/gambar_parpol/1656538128_Logo PKB.png",
      "dapilId": "110001",
      "namaDapil": "ACEH 1",
      "nomorUrut": 7,
      "pasFoto": "https://infopemilu.kpu.go.id/dct/berkas-silon/calon_unggah/165869/pas_foto/1171011007670001.jpeg",
      "nama": "SAIFULSYAH, S.E.",
      // ...
    },
    // ...
  ]
}
```

### Detail Calon (one)

**Endpoint**:

[https://caleg.zakiego.com/api/dprd-provinsi/calon/{caleg_id}>](https://caleg.zakiego.com/api/dprd-provinsi/calon/aceh-1/partai-kebangkitan-bangsa/11)

**Response**:

```json
{
  "status": "success",
  "data": [
    {
      "id": "aceh-1/partai-kebangkitan-bangsa/11",
      "namaPartai": "Partai Kebangkitan Bangsa",
      "logoPartai": "berkas-sipol/parpol/profil/gambar_parpol/1656538128_Logo PKB.png",
      "dapilId": "110001",
      "namaDapil": "ACEH 1",
      "nomorUrut": 11,
      "pasFoto": "https://infopemilu.kpu.go.id/dct/berkas-silon/calon_unggah/234457/pas_foto/1106041908680001.jpeg",
      "nama": "H. MUSTAFA ISHAK",
      // ...
    }
  ]
}
```

---

## DPRD Kabupaten Kota

### Dapil

**Endpoint**:

<https://caleg.zakiego.com/api/dprd-kabupaten-kota/dapil/list>

**Response**:

```json
{
  "status": "success",
  "data": [
    {
      "id": "110101",
      "namaDapil": "ACEH SELATAN 1",
      "url": "https://caleg.zakiego.com/api/dprd-kabupaten-kota/dapil/110101"
    },
    {
      "id": "110102",
      "namaDapil": "ACEH SELATAN 2",
      "url": "https://caleg.zakiego.com/api/dprd-kabupaten-kota/dapil/110102"
    },
    {
      "id": "110103",
      "namaDapil": "ACEH SELATAN 3",
      "url": "https://caleg.zakiego.com/api/dprd-kabupaten-kota/dapil/110103"
    },
    // ...
  ]
}
```

### List Calon tiap Dapil (many)

**Endpoint**:

[https://caleg.zakiego.com/api/dprd-kabupaten-kota/{dapil_id}](https://caleg.zakiego.com/api/dprd-kabupaten-kota/dapil/110101)

**Response**:

```json
{
  "status": "success",
  "data": [
    {
      "id": "110101",
      "namaDapil": "ACEH SELATAN 1",
      "url": "https://caleg.zakiego.com/api/dprd-kabupaten-kota/dapil/110101"
    },
    {
      "id": "110102",
      "namaDapil": "ACEH SELATAN 2",
      "url": "https://caleg.zakiego.com/api/dprd-kabupaten-kota/dapil/110102"
    },
    {
      "id": "110103",
      "namaDapil": "ACEH SELATAN 3",
      "url": "https://caleg.zakiego.com/api/dprd-kabupaten-kota/dapil/110103"
    },
    // ...
  ]
}
```

### Detail Calon (one)

**Endpoint**:

[https://caleg.zakiego.com/api/dprd-kabupaten-kota/calon/{caleg_id}](https://caleg.zakiego.com/api/dprd-kabupaten-kota/calon/aceh-selatan-1/partai-buruh/1)

**Response**:

```json
{
  "status": "success",
  "data": [
    {
      "id": "aceh-selatan-1/partai-buruh/1",
      "namaPartai": "Partai Buruh",
      "logoPartai": "berkas-sipol/parpol/profil/gambar_parpol/1659959325_LOGO RESMI PB.png",
      "dapilId": "110101",
      "namaDapil": "ACEH SELATAN 1",
      "nomorUrut": 1,
      "pasFoto": "https://infopemilu.kpu.go.id/dct/berkas-silon/calon/360092/pas_foto/1691412790_97108213-f2af-4d39-b3d5-cd29f668dc39.jpeg",
      "nama": "CUT ANISA PRATIWI, S.I.P.",
      // ...
    }
  ]
}
```
