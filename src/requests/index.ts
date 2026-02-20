import { AxiosInterceptorClient } from "../services/axiosInterceptor";

export const AxiosInterceptorVPIC = new AxiosInterceptorClient(
  "https://vpic.nhtsa.dot.gov/api",
);
