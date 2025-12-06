'use client';

import styles from './DeleteModal.module.scss';

interface DeleteModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function DeleteModal({ isOpen, onConfirm, onCancel }: DeleteModalProps) {
  if (!isOpen) return null;

  return (
    <div className={`${styles.modal} ${isOpen ? styles.show : ''}`}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h3 className={styles.modalTitle}>削除の確認</h3>
          <button className={styles.modalClose} onClick={onCancel}>
            ✕
          </button>
        </div>
        <div className={styles.modalBody}>
          <p className={styles.modalMessage}>この履歴を削除しますか?</p>
        </div>
        <div className={styles.modalFooter}>
          <button className={`${styles.btn} ${styles.btnSecondary}`} onClick={onCancel}>
            キャンセル
          </button>
          <button className={`${styles.btn} ${styles.btnDanger}`} onClick={onConfirm}>
            削除
          </button>
        </div>
      </div>
    </div>
  );
}
