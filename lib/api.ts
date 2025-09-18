'use client'

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

async function apiFetch<T = unknown>(
  url: string,
  method: HttpMethod,
  body?: unknown,
  options: RequestInit = {}
): Promise<T> {
  const fullUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/v1${url}`

  const fetchOptions: RequestInit = {
    ...options,
    method,
    credentials: 'include', // cookie kèm theo
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  }

  // chỉ thêm body nếu là POST hoặc PUT
  if (body && (method === 'POST' || method === 'PUT')) {
    fetchOptions.body = JSON.stringify(body)
  }

  const res = await fetch(fullUrl, fetchOptions)

  if (!res.ok) {
    const error = await res.json().catch(() => ({}))
    throw new Error(error.message || 'API request failed')
  }

  return res.json()
}

// 👉 Helpers cụ thể
export const api = {
  get: <T = unknown>(url: string, options?: RequestInit) =>
    apiFetch<T>(url, 'GET', undefined, options),

  post: <T = unknown>(url: string, body?: unknown, options?: RequestInit) =>
    apiFetch<T>(url, 'POST', body, options),

  put: <T = unknown>(url: string, body?: unknown, options?: RequestInit) =>
    apiFetch<T>(url, 'PUT', body, options),

  delete: <T = unknown>(url: string, options?: RequestInit) =>
    apiFetch<T>(url, 'DELETE', undefined, options),
}
