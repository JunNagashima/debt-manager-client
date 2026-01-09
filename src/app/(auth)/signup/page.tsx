'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './signup.module.scss';
import PasswordStrengthInput from './_components/PasswordStrengthInput';
import PasswordInput from '../signin/_components/PasswordInput';
import VerifyEmailModal from './_components/VerifyEmailModal';

export default function SignUpPage() {
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [showVerifyModal, setShowVerifyModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement sign up logic
    console.log('Sign up:', { name, userId, email, password, agreedToTerms });
    setShowVerifyModal(true);
  };

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
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>ユーザーID</label>
            <div className={`${styles.inputWithPrefix} ${styles.inputWithPrefixAuth}`}>
              <span className={styles.inputPrefix}>@</span>
              <input
                type="text"
                className={`${styles.formInput} ${styles.formInputAuth}`}
                placeholder="yamada_hanako"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                pattern="[a-zA-Z0-9_]+"
                required
              />
            </div>
            <p className={styles.formHint}>半角英数字とアンダースコアのみ（後から変更可能）</p>
          </div>

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
            <PasswordStrengthInput
              value={password}
              onChange={setPassword}
              placeholder="8文字以上"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>パスワード（確認）</label>
            <PasswordInput
              value={passwordConfirm}
              onChange={setPasswordConfirm}
              placeholder="もう一度入力"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={`${styles.checkboxInline} ${styles.checkboxInlineTerms}`}>
              <input
                type="checkbox"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                required
              />
              <span>
                <Link href="/terms">利用規約</Link>と
                <Link href="/privacy">プライバシーポリシー</Link>に同意する
              </span>
            </label>
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
