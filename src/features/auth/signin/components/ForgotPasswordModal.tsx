'use client';

import { useState } from 'react';
import styles from './ForgotPasswordModal.module.scss';

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ForgotPasswordModal({ isOpen, onClose }: ForgotPasswordModalProps) {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement password reset logic
    console.log('Reset password for:', email);
    setShowSuccess(true);
  };

  const handleClose = () => {
    setEmail('');
    setShowSuccess(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={handleClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {!showSuccess ? (
          <>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>パスワードをリセット</h2>
              <button className={styles.modalClose} onClick={handleClose}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className={styles.modalBody}>
                <p className={styles.modalDesc}>
                  登録したメールアドレスを入力してください。パスワードリセット用のリンクをお送りします。
                </p>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>メールアドレス</label>
                  <input
                    type="email"
                    className={styles.formInput}
                    placeholder="example@mail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className={styles.modalFooter}>
                <button type="button" className={`${styles.btn} ${styles.btnSecondary}`} onClick={handleClose}>
                  キャンセル
                </button>
                <button type="submit" className={`${styles.btn} ${styles.btnPrimary}`}>
                  送信する
                </button>
              </div>
            </form>
          </>
        ) : (
          <>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>メールを送信しました</h2>
              <button className={styles.modalClose} onClick={handleClose}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div className={`${styles.modalBody} ${styles.modalBodyCenter}`}>
              <div className={styles.successIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <p className={styles.modalDesc}>
                パスワードリセット用のリンクを<br />メールでお送りしました。
              </p>
              <p className={styles.modalHint}>
                メールが届かない場合は、迷惑メールフォルダをご確認ください。
              </p>
            </div>
            <div className={styles.modalFooter}>
              <button className={`${styles.btn} ${styles.btnPrimary} ${styles.btnFull}`} onClick={handleClose}>
                閉じる
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
