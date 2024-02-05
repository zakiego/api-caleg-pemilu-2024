import {
  createCalonDetailApiUrl,
  responseError,
  responseSuccess,
} from "@/app/api/utils";
import { dbClient } from "@/db";
import { NextRequest } from "next/server";

type Params = {
  params: {
    id: string;
  };
};

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest, { params }: Params) {
  const data = await dbClient.query.dprdProvCalon.findMany({
    where: (table, { eq }) => eq(table.dapilId, params.id),
  });

  if (data.length === 0) {
    return responseError("Dapil tidak ditemukan");
  }

  const withUrl = data.map((calon) => ({
    url: createCalonDetailApiUrl("dprd-provinsi", calon.id),
    ...calon,
  }));

  return responseSuccess(withUrl);
}
