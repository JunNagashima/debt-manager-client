import { createClient } from '@/lib/supabase/server';

interface FetcherOptions {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  body?: unknown;
  headers?: Record<string, string>;
  auth?: boolean; // 認証が必要かどうかのフラグ
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
    const supabase = await createClient();
    const { data: { session } } = await supabase.auth.getSession();
    if (session?.access_token) {
      defaultHeaders['Authorization'] = `Bearer ${session.access_token}`;
    }
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
