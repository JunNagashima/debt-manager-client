'use client';

import styles from './VerifyEmailModal.module.scss';

interface VerifyEmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
}

export default function VerifyEmailModal({ isOpen, onClose, email }: VerifyEmailModalProps) {
  const handleOpenEmailApp = () => {
    // TODO: Implement email app opening logic
    console.log('Open email app');
  };

  const handleResendEmail = () => {
    // TODO: Implement resend email logic
    console.log('Resend verification email');
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>メールを確認してください</h2>
        </div>
        
        <div className={`${styles.modalBody} ${styles.modalBodyCenter}`}>
          <div className={styles.verifyIcon}>
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          <p className={styles.modalDesc}>
            <strong>{email}</strong> に<br />
            確認メールを送信しました
          </p>
          <p className={styles.modalHint}>
            メール内のリンクをクリックして<br />
            登録を完了してください。
          </p>
        </div>
        
        <div className={`${styles.modalFooter} ${styles.modalFooterStack}`}>
          <button
            className={`${styles.btn} ${styles.btnPrimary} ${styles.btnFull}`}
            onClick={handleOpenEmailApp}
          >
            メールアプリを開く
          </button>
          <button
            className={`${styles.btn} ${styles.btnGhost} ${styles.btnFull}`}
            onClick={handleResendEmail}
          >
            確認メールを再送信
          </button>
        </div>
      </div>
    </div>
  );
}
