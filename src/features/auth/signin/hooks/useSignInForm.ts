import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signInSchema, SignInFormData } from '../schemas/signInSchema';
import { createClient } from '@/lib/supabase/client';

export const useSignInForm = () => {
  const router = useRouter();
  const [hasError, setHasError] = useState(false);
  const supabase = createClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: SignInFormData) => {
    console.log('Sign in:', data);
    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    if (error) {
      setHasError(true);
      return;
    }

    router.push('/');
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    hasError,
  };
};
