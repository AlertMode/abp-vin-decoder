import type { AxiosResponse } from "axios";
import { AxiosInterceptorVPIC } from "./index";
import type { VinVariablesAllFieldsProps } from "../types/vin.type";

export default async function getVinVariables(): Promise<
  AxiosResponse<VinVariablesAllFieldsProps, unknown>
> {
  try {
    const response: AxiosResponse = await AxiosInterceptorVPIC.get(
      `vehicles/getvehiclevariablelist?format=json`,
    );
    return response;
  } catch (error) {
    const normalizedError =
      error instanceof Error ? error : new Error(String(error));
    console.error(`ERROR >> getVinVariables: ${normalizedError.message}`);
    throw normalizedError;
  }
}
