const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "https://my.kloud101.com/api"

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message)
    this.name = "ApiError"
  }
}

async function apiFetch<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    ...options,
  })

  if (!res.ok) {
    throw new ApiError(res.status, `${res.status}: ${res.statusText}`)
  }

  return res.json() as Promise<T>
}

export function apiFetchAuth<T>(
  path: string,
  token: string,
  options?: RequestInit
): Promise<T> {
  return apiFetch<T>(path, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      ...options?.headers,
    },
  })
}

export function getAuthToken(): string | null {
  if (typeof window === "undefined") return null
  return localStorage.getItem("kloud101-token")
}

export { apiFetch }
