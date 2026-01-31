import { fetcher } from "../fetcher";
import { CreateAdvanceRequest } from '@/lib/schemas/main/advances.request.schema';

export const createAdvance = async (request: CreateAdvanceRequest) => {
  await fetcher({
    url: 'advances',
    method: 'POST',
    body: request,
    auth: true,
  });
}
