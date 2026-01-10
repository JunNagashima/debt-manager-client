import { fetcher } from '@/lib/fetcher/fetcher';

interface CheckUserIdResponse {
  exists: boolean;
}

export const checkUserId = async (userId: string, auth?: string) => {
  return fetcher<CheckUserIdResponse>({
    url: 'accounts/check-user-id',
    method: 'POST',
    body: { userId },
    auth,
  });
}
