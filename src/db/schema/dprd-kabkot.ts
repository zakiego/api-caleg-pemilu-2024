import { sql } from "drizzle-orm";
import { integer, pgTable, text, json } from "drizzle-orm/pg-core";

export const dprdKabkotDapil = pgTable("dprd_kabkot_dapil", {
	id: text("id").primaryKey().notNull(),
	namaDapil: text("nama_dapil").notNull(),
});

export const dprdKabkotCalon = pgTable("dprd_kabkot_calon", {
	id: text("id").primaryKey().notNull(),
	namaPartai: text("nama_partai").notNull(),
	logoPartai: text("logo_partai").notNull(),
	dapilId: text("dapil_id")
		.references(() => dprdKabkotDapil.id)
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

	status: text("status"),
	parsedData: integer("parsed_data").default(0),

	tempatLahir: text("tempat_lahir"),
	tanggalLahir: text("tanggal_lahir"),
	usia: integer("usia"),

	agama: text("agama"),
	statusPerkawinan: text("status_perkawinan"),
	statusDisabilitas: text("status_disabilitas"),

	alamatLengkap: text("alamat_lengkap"),
	rt: text("rt"),
	rw: text("rw"),
	provinsi: text("provinsi"),
	kabupatenKota: text("kabupaten_kota"),
	kecamatan: text("kecamatan"),
	kelurahan: text("kelurahan"),

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

	riwayatPasangan:
		json("riwayat_pasangan").$type<
			{
				namaPasangan: string | null;
				statusPasangan: string | null;
				jumlahAnak: string | null;
			}[]
		>(),

	programUsulan: json("program_usulan").$type<string[] | null>(),

	motivasi: json("motivasi").$type<string[] | null>(),
});
