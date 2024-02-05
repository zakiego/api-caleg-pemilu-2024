import { dpdCalon, dpdDapil } from "./dpd";
import { dprRiCalon, dprRiDapil } from "./dpr-ri";
import { dprdKabkotDapil, dprdKabkotCalon } from "./dprd-kabkot";
import { dprdProvCalon, dprdProvDapil } from "./dprd-prov";

export const dbSchema = {
  dpdDapil,
  dpdCalon,

  dprRiCalon,
  dprRiDapil,

  dprdProvCalon,
  dprdProvDapil,

  dprdKabkotDapil,
  dprdKabkotCalon,
};
