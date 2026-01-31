import { createAdvance } from '@/lib/fetcher/main/advances';
import { createAdvanceRequestSchema } from '@/lib/schemas/main/advances.request.schema';
import { ZodError } from 'zod';

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const input = createAdvanceRequestSchema.parse(body);

    await createAdvance(input);

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    if (error instanceof ZodError) {
      console.error('Validation error:', error);
      return Response.json({ error: 'Validation Error' }, { status: 400 });
    }
    console.error('POST /api/main/advances error:', error);
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
