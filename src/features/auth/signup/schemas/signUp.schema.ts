import { z } from 'zod';

export const signUpSchema = z.object({
  name: z.string()
    .min(1, 'お名前は必須項目です')
    .max(50, 'お名前は50文字以内で入力してください'),
  userId: z.string()
    .min(1, 'ユーザーIDは必須項目です')
    .max(30, 'ユーザーIDは30文字以内で入力してください')
    .regex(/^[a-zA-Z0-9_]+$/, '半角英数字とアンダースコアのみ使用できます'),
  email: z.string()
    .min(1, 'メールアドレスは必須項目です')
    .email('正しいメールアドレスの形式で入力してください'),
  password: z.string()
    .min(8, 'パスワードは8文字以上で入力してください')
    .regex(/^[a-zA-Z0-9]+$/, 'パスワードは半角英数字のみ使用できます'),
  passwordConfirm: z.string()
    .min(8, 'パスワードは8文字以上で入力してください')
    .regex(/^[a-zA-Z0-9]+$/, 'パスワードは半角英数字のみ使用できます'),
  agreedToTerms: z.boolean()
    .refine((val) => val === true, '利用規約とプライバシーポリシーに同意してください'),
}).refine((data) => data.password === data.passwordConfirm, {
  message: 'パスワードが一致しません',
  path: ['passwordConfirm'],
});
