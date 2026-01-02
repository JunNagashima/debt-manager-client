import { z } from 'zod';

export const advanceFormSchema = z.object({
  friendId: z.string().min(1, 'フレンドを選択してください'),
  amount: z
    .string()
    .min(1, '金額を入力してください')
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: '1円以上の金額を入力してください',
    }),
  date: z
    .string()
    .min(1, '日付を選択してください')
    .refine(
      (val) => {
        const selectedDate = new Date(val);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return selectedDate <= today;
      },
      {
        message: '未来の日付は選択できません',
      }
    ),
  note: z.string().optional(),
});

export type AdvanceFormData = z.infer<typeof advanceFormSchema>;
