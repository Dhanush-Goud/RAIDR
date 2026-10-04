import { ApiError } from "@/types/api";

/** Public backend URL. Empty or unset means Demo Mode. */
export const API_BASE_URL = (process.env.NEXT_PUBLIC_API_BASE_URL ?? "").trim().replace(/\/+$/, "");

export const isDemoMode = API_BASE_URL === "";

export async function apiPost<TResponse, TBody>(path: string, body: TBody): Promise<TResponse> {
  let response: Response;
  try {
    response = await fetch(`${API_BASE_URL}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch {
    throw new ApiError("Network request failed");
  }
  if (!response.ok) throw new ApiError("Request failed", response.status);
  return (await response.json()) as TResponse;
}

export async function apiGet<TResponse>(path: string): Promise<TResponse> {
  let response: Response;
  try {
    response = await fetch(`${API_BASE_URL}${path}`);
  } catch {
    throw new ApiError("Network request failed");
  }
  if (!response.ok) throw new ApiError("Request failed", response.status);
  return (await response.json()) as TResponse;
}
