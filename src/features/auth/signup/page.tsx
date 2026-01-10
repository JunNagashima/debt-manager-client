'use client';

import Link from 'next/link';
import styles from './signup.module.scss';
import PasswordStrengthInput from './components/PasswordStrengthInput';
import PasswordInput from '../signin/components/PasswordInput';
import VerifyEmailModal from './components/VerifyEmailModal';
import { useSignUpForm } from './hooks/useSignUpForm';

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    errors,
    email,
    showVerifyModal,
    setShowVerifyModal,
    emailExistsError,
    userIdExistsError
  } = useSignUpForm();

  return (
    <>
      <div className={styles.authCard}>
        <h2 className={styles.authCardTitle}>新規登録</h2>

        <form className={styles.authForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>お名前</label>
            <input
              type="text"
              className={`${styles.formInput} ${styles.formInputAuth}`}
              placeholder="山田 花子"
              {...register('name')}
            />
            {errors.name && (
              <p className={styles.errorMessage}>{errors.name.message}</p>
            )}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>ユーザーID</label>
            <div className={`${styles.inputWithPrefix} ${styles.inputWithPrefixAuth}`}>
              <span className={styles.inputPrefix}>@</span>
              <input
                type="text"
                className={`${styles.formInput} ${styles.formInputAuth}`}
                placeholder="yamada_hanako"
                {...register('userId')}
              />
            </div>
            <p className={styles.formHint}>半角英数字とアンダースコアのみ（後から変更可能）</p>
            {errors.userId && (
              <p className={styles.errorMessage}>{errors.userId.message}</p>
            )}
            {userIdExistsError && <p className={styles.errorMessage}>ユーザーIDは既に使用されています</p>}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>メールアドレス</label>
            <input
              type="email"
              className={`${styles.formInput} ${styles.formInputAuth}`}
              placeholder="example@mail.com"
              {...register('email')}
            />
            {errors.email && (
              <p className={styles.errorMessage}>{errors.email.message}</p>
            )}
            {emailExistsError && <p className={styles.errorMessage}>メールアドレスは既に登録されています</p>}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>パスワード</label>
            <PasswordStrengthInput
              {...register('password')}
              placeholder="8文字以上"
            />
            {errors.password && (
              <p className={styles.errorMessage}>{errors.password.message}</p>
            )}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>パスワード（確認）</label>
            <PasswordInput
              {...register('passwordConfirm')}
              placeholder="もう一度入力"
            />
            {errors.passwordConfirm && (
              <p className={styles.errorMessage}>{errors.passwordConfirm.message}</p>
            )}
          </div>

          <div className={styles.formGroup}>
            <label className={`${styles.checkboxInline} ${styles.checkboxInlineTerms}`}>
              <input
                type="checkbox"
                {...register('agreedToTerms')}
              />
              <span>
                <Link href="/terms">利用規約</Link>と
                <Link href="/privacy">プライバシーポリシー</Link>に同意する
              </span>
            </label>
            {errors.agreedToTerms && (
              <p className={styles.errorMessage}>{errors.agreedToTerms.message}</p>
            )}
          </div>

          <button
            type="submit"
            className={`${styles.btn} ${styles.btnPrimary} ${styles.btnFull} ${styles.btnLg}`}
          >
            アカウントを作成
          </button>
        </form>

        <p className={styles.authSwitch}>
          すでにアカウントをお持ちの方は
          <Link href="/signin">ログイン</Link>
        </p>
      </div>

      <VerifyEmailModal
        isOpen={showVerifyModal}
        onClose={() => setShowVerifyModal(false)}
        email={email}
      />
    </>
  );
}
