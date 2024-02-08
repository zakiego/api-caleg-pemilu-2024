import { sql } from "drizzle-orm";
import { integer, pgTable, text, json } from "drizzle-orm/pg-core";

export const dpdDapil = pgTable("dpd_dapil", {
  id: text("id").primaryKey().notNull(),
  namaDapil: text("nama_dapil").notNull(),
});

export const dpdCalon = pgTable("dpd_calon", {
  id: text("id").primaryKey().notNull(),
  namaDapil: text("nama_dapil").notNull(),
  dapilId: text("dapil_id")
    .references(() => dpdDapil.id)
    .notNull(),

  provinsi: text("provinsi").notNull(),

  nomorUrut: integer("nomor_urut").notNull(),
  pasFoto: text("pas_foto").notNull(),
  nama: text("nama").notNull(),
  jenisKelamin: text("jenis_kelamin").notNull(),

  pilihanPublikasi: text("pilihan_publikasi"),

  tempatTinggal: text("tempat_tinggal"),
  statusDisabilitas: text("status_disabilitas"),

  riwayatPekerjaan: json("riwayat_pekerjaan").$type<
    | {
        namaPerusahaanLembaga: string | null;
        jabatan: string | null;
        tahunMasuk: string | null;
        tahunKeluar: string | null;
      }[]
    | null
  >(),

  riwayatPendidikan:
    json("riwayat_pendidikan").$type<
      {
        jenjangPendidikan: string | null;
        namaInstitusi: string | null;
        tahunMasuk: string | null;
        tahunKeluar: string | null;
      }[]
    >(),

  riwayatKursusDiklat: json("riwayat_kursus_diklat").$type<
    {
      namaKursus: string | null;
      lembagaPenyelenggara: string | null;
      tahunMasuk: string | null;
      tahunKeluar: string | null;
    }[]
  >(),

  riwayatOrganisasi:
    json("riwayat_organisasi").$type<
      {
        namaOrganisasi: string | null;
        jabatan: string | null;
        tahunMasuk: string | null;
        tahunKeluar: string | null;
      }[]
    >(),

  riwayatPenghargaan: json("riwayat_penghargaan").$type<
    {
      namaPenghargaan: string | null;
      lembaga: string | null;
      tahun: string | null;
    }[]
  >(),

  motivasi: json("motivasi").$type<string[] | null>(),
});
