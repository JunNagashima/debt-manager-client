import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { createClient } from '@/lib/supabase/client';
import { signUpSchema } from '../schemas/signUp.schema';

type SignUpFormData = z.infer<typeof signUpSchema>;

export const useSignUpForm = () => {
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const [emailExistsError, setEmailExistsError] = useState(false);
  const [userIdExistsError, setUserIdExistsError] = useState(false);
  const supabase = createClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      userId: '',
      email: '',
      password: '',
      passwordConfirm: '',
      agreedToTerms: false,
    },
  });

  const email = watch('email');

  const onSubmit = async (data: SignUpFormData) => {
    console.log('Sign up:', data);
    setEmailExistsError(false);
    setUserIdExistsError(false);

    try {
      const response = await fetch("/api/auth/signup/check-user-id", {
        method: "POST",
        body: JSON.stringify({ userId: data.userId }),
      });

      const result = await response.json();

      if (!result) {
        setUserIdExistsError(true);
        return;
      }

      const { error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
      });

      if (error) {
        if (error.message.includes('already registered')) {
          setEmailExistsError(true);
        } else {
          throw error;
        }
        return;
      }

      setShowVerifyModal(true);
    } catch (error) {
      console.error('Sign up error:', error);
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    email,
    showVerifyModal,
    setShowVerifyModal,
    emailExistsError,
    userIdExistsError,
  };
};
