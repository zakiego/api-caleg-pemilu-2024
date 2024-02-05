import { sql } from "drizzle-orm";
import { integer, pgTable, text, json } from "drizzle-orm/pg-core";

export const dprRiDapil = pgTable("dpr_ri_dapil", {
  id: text("id").primaryKey().notNull(),
  namaDapil: text("nama_dapil").notNull(),
});

export const dprRiCalon = pgTable("dpr_ri_calon", {
  id: text("id").primaryKey().notNull(),
  namaPartai: text("nama_partai").notNull(),
  logoPartai: text("logo_partai").notNull(),
  dapilId: text("dapil_id")
    .references(() => dprRiDapil.id)
    .notNull(),
  namaDapil: text("nama_dapil").notNull(),
  nomorUrut: integer("nomor_urut").notNull(),
  pasFoto: text("pas_foto").notNull(),
  nama: text("nama").notNull(),
  jenisKelamin: text("jenis_kelamin").notNull(),

  pilihanPublikasi: json("pilihan_publikasi").$type<string[] | null>(),
  statusPublikasi: text("status_publikasi").$type<
    "Bersedia" | "Tidak Bersedia" | "Bersedia Sebagian" | null
  >(),

  tempatLahir: text("tempat_lahir"),

  usia: integer("usia"),

  agama: text("agama"),
  statusDisabilitas: text("status_disabilitas"),

  pekerjaan: text("pekerjaan"),

  riwayatPekerjaan:
    json("riwayat_pekerjaan").$type<
      {
        namaPerusahaanLembaga: string | null;
        jabatan: string | null;
        tahunMasuk: string | null;
        tahunKeluar: string | null;
      }[]
    >(),

  statusHukum: text("status_hukum"),

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
      nomorSertifikat: string | null;
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

  programUsulan: json("program_usulan").$type<string[] | null>(),

  motivasi: json("motivasi").$type<string[] | null>(),
});
