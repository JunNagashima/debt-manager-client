'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './signin.module.scss';
import PasswordInput from './components/PasswordInput';
import ForgotPasswordModal from './components/ForgotPasswordModal';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement sign in logic
    console.log('Sign in:', { email, password, rememberMe });
  };

  return (
    <>
      <div className={styles.authCard}>
        <h2 className={styles.authCardTitle}>ログイン</h2>

        <form className={styles.authForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>メールアドレス</label>
            <input
              type="email"
              className={`${styles.formInput} ${styles.formInputAuth}`}
              placeholder="example@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>パスワード</label>
            <PasswordInput
              value={password}
              onChange={setPassword}
              placeholder="パスワードを入力"
            />
          </div>

          <div className={styles.formOptions}>
            <label className={styles.checkboxInline}>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span>ログイン状態を保持</span>
            </label>
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
