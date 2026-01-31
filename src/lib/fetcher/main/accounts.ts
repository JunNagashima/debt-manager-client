import { fetcher } from "../fetcher";

export const findUserId = async (): Promise<string> => {
  return await fetcher({
    url: 'accounts/user-id',
    method: 'GET',
    auth: true,
  });
}
