import { createDapilDetailApiUrl, responseSuccess } from "@/app/api/utils";
import { dbClient } from "@/db";
import { NextRequest } from "next/server";

export const dynamic = "force-static";

export async function GET(request: NextRequest) {
  const data = await dbClient.query.dprdKabkotDapil.findMany();

  const withUrl = data.map((item) => {
    return {
      ...item,
      url: createDapilDetailApiUrl("dprd-kabupaten-kota", item.id),
    };
  });

  return responseSuccess(withUrl);
}
