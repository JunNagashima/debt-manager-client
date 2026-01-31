import { createAdvance } from '@/lib/fetcher/main/advances';
import { createAdvanceRequestSchema } from '@/lib/schemas/main/advances.request.schema';
import { ZodError } from 'zod';

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const input = createAdvanceRequestSchema.parse(body);

    await createAdvance(input);

    return new Response(null, { status: 200 });
  } catch (error) {
    if (error instanceof ZodError) {
      return new Response(null, { status: 400 });
    }
    return new Response(null, { status: 500 });
  }
}
