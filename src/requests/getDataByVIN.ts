import type { AxiosResponse } from "axios";
import { AxiosInterceptorVPIC } from "./index";
import type { VinDataAllFieldsProps } from "../types/vin.type";

export default async function getDataByVIN(
  vin: string,
): Promise<AxiosResponse<VinDataAllFieldsProps, unknown>> {
  try {
    const response: AxiosResponse = await AxiosInterceptorVPIC.get(
      `/vehicles/decodevin/${vin}?format=json`,
    );
    return response;
  } catch (error) {
    const normalizedError =
      error instanceof Error ? error : new Error(String(error));
    console.error(`ERROR >> getDataByVIN: ${normalizedError.message}`);
    throw normalizedError;
  }
}
