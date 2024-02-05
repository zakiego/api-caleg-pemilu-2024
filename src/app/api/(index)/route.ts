import { Caleg, HOST, responseSuccess } from "@/app/api/utils";
import { NextRequest } from "next/server";

export const dynamic = "force-static";

export async function GET(request: NextRequest) {
  const data: Record<Caleg, string> = {
    dpd: `${HOST}/api/dpd/dapil`,
    "dpr-ri": `${HOST}/api/dpr-ri/dapil`,
    "dprd-provinsi": `${HOST}/api/dprd-provinsi/dapil`,
    "dprd-kabupaten-kota": `${HOST}/api/dprd-kabupaten-kota/dapil`,
  };

  return responseSuccess(data);
}
