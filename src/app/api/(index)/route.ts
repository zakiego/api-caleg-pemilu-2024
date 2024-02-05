import { Caleg, HOST, responseSuccess } from "@/app/api/utils";
import { NextRequest } from "next/server";

export const dynamic = "force-static";

export async function GET(request: NextRequest) {
  const data: Record<Caleg, string> = {
    dpd: `${HOST}/api/dpd/dapil/list`,
    "dpr-ri": `${HOST}/api/dpr-ri/dapil/list`,
    "dprd-provinsi": `${HOST}/api/dprd-provinsi/dapil/list`,
    "dprd-kabupaten-kota": `${HOST}/api/dprd-kabupaten-kota/dapil/list`,
  };

  return responseSuccess(data);
}
