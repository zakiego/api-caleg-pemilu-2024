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

export const createApiUrl = (type: Caleg, id: string) => {
  switch (type) {
    case "dpd":
      return `${HOST}/api/dpd/detail/${id}`;
    case "dpr-ri":
      return `${HOST}/api/dpr-ri/detail/${id}`;
    case "dprd-provinsi":
      return `${HOST}/api/dprd-provinsi/detail/${id}`;
    case "dprd-kabupaten-kota":
      return `${HOST}/api/dprd-kabupaten-kota/detail/${id}`;
  }
};
