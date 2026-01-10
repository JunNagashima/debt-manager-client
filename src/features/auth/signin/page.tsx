'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './signin.module.scss';
import PasswordInput from './components/PasswordInput';
import ForgotPasswordModal from './components/ForgotPasswordModal';
import { useSignInForm } from './hooks/useSignInForm';

const SignInPage = () => {
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const {
    register,
    handleSubmit,
    errors,
    hasError
  } = useSignInForm();

  return (
    <>
      <div className={styles.authCard}>
        <h2 className={styles.authCardTitle}>ログイン</h2>
        {hasError && (
          <div className={styles.errorMessage}>
            メールアドレスまたはパスワードが正しくありません。
          </div>
        )}
        <form className={styles.authForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>メールアドレス</label>
            <input
              type="email"
              className={`${styles.formInput} ${styles.formInputAuth}`}
              placeholder="example@mail.com"
              {...register('email')}
            />
            {errors.email && (
              <span className={styles.errorMessage}>{errors.email.message}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>パスワード</label>
            <PasswordInput
              {...register('password')}
              placeholder="パスワードを入力"
            />
            {errors.password && (
              <span className={styles.errorMessage}>{errors.password.message}</span>
            )}
          </div>

          <div className={styles.formOptions}>
            {/* TODO:今後実装予定 */}
            {/* <label className={styles.checkboxInline}>
              <input
                type="checkbox"
                {...register('rememberMe')}
              />
              <span>ログイン状態を保持</span>
            </label> */}
            <button
              type="button"
              className={styles.formLink}
              onClick={() => setShowForgotPasswordModal(true)}
            >
              パスワードを忘れた方
            </button>
          </div>

          <button type="submit" className={`${styles.btn} ${styles.btnPrimary} ${styles.btnFull} ${styles.btnLg}`}>
            ログイン
          </button>
        </form>

        <p className={styles.authSwitch}>
          アカウントをお持ちでない方は
          <Link href="/signup">新規登録</Link>
        </p>
      </div>

      <ForgotPasswordModal
        isOpen={showForgotPasswordModal}
        onClose={() => setShowForgotPasswordModal(false)}
      />
    </>
  );
}

export default SignInPage;
