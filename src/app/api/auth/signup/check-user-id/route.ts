import { checkUserId } from "@/lib/fetcher/auth/signup";

export const POST = async (req: Request) => {
  const body = await req.json();
  console.log('Received body:', body);
  const { userId } = body;

  const result = await checkUserId(userId);

  return Response.json(!result);
}
