import { responseError, responseSuccess } from "@/app/api/utils";
import { dbClient } from "@/db";
import { NextRequest } from "next/server";

type Params = {
  params: {
    id: string;
  };
};

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest, { params }: Params) {
  const data = await dbClient.query.dpdCalon.findMany({
    where: (table, { eq }) => eq(table.dapilId, params.id),
  });

  if (data.length === 0) {
    return responseError("Dapil tidak ditemukan");
  }

  return responseSuccess(data);
}
