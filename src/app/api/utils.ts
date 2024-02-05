import { env } from "@/lib/env";
import { NextResponse } from "next/server";

type ResponseSuccess<T> = {
  status: "success";
  data: T;
};

type ResponseError = {
  status: "error";
  message: string;
};

export const responseSuccess = <T>(data: T) =>
  NextResponse.json({
    status: "success",
    data,
  });

export const responseError = (message: string) =>
  NextResponse.json({
    status: "error",
    message,
  });

export type Caleg = "dpd" | "dpr-ri" | "dprd-provinsi" | "dprd-kabupaten-kota";

export const HOST =
  env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://caleg.zakiego.com";

export const createDapilDetailApiUrl = (type: Caleg, id: string) => {
  switch (type) {
    case "dpd":
      return `${HOST}/api/dpd/dapil/${id}`;
    case "dpr-ri":
      return `${HOST}/api/dpr-ri/dapil/${id}`;
    case "dprd-provinsi":
      return `${HOST}/api/dprd-provinsi/dapil/${id}`;
    case "dprd-kabupaten-kota":
      return `${HOST}/api/dprd-kabupaten-kota/dapil/${id}`;
  }
};

export const createCalonDetailApiUrl = (type: Caleg, id: string) => {
  switch (type) {
    case "dpd":
      return `${HOST}/api/dpd/calon/${id}`;
    case "dpr-ri":
      return `${HOST}/api/dpr-ri/calon/${id}`;
    case "dprd-provinsi":
      return `${HOST}/api/dprd-provinsi/calon/${id}`;
    case "dprd-kabupaten-kota":
      return `${HOST}/api/dprd-kabupaten-kota/calon/${id}`;
  }
};
