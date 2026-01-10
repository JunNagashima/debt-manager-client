interface FetcherOptions {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  body?: unknown;
  headers?: Record<string, string>;
  auth?: string; // Bearer token
}

const API_URL = process.env.API_URL;

export const fetcher = async <T>({
  url,
  method = 'GET',
  body,
  headers = {},
  auth,
}: FetcherOptions): Promise<T> => {
  const apiUrl = `${API_URL}${url}`;
  const defaultHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    ...headers,
  };

  if (auth) {
    defaultHeaders['Authorization'] = `Bearer ${auth}`;
  }

  const config: RequestInit = {
    method,
    headers: defaultHeaders,
  };

  if (body && method !== 'GET') {
    config.body = JSON.stringify(body);
  }

  const res = await fetch(apiUrl, config);

  if (!res.ok) {
    throw res.json();
  }

  return res.json();
}
