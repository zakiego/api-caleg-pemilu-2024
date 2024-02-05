import { createApiUrl, responseSuccess } from "@/app/api/utils";
import { dbClient } from "@/db";
import { NextRequest } from "next/server";

export const dynamic = "force-static";

export async function GET(request: NextRequest) {
  const data = await dbClient.query.dprdProvDapil.findMany();

  const withUrl = data.map((item) => {
    return {
      ...item,
      url: createApiUrl("dprd-provinsi", item.id),
    };
  });

  return responseSuccess(withUrl);
}
