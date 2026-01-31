'use client';

import React from 'react';
import { Modal } from '@/components/ui/Modal';
import styles from './DetailModal.module.scss';

type AdvanceStatus = 'pending' | 'approved' | 'rejected';
type AdvanceDirection = 'sent' | 'received';

interface AdvanceDetailData {
  amount: number;
  counterpartyName: string;
  applicationDate: string;
  approvedDate?: string;
  rejectedDate?: string;
  memo?: string;
}

interface AdvanceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  status: AdvanceStatus;
  direction: AdvanceDirection;
  data: AdvanceDetailData;
  onApprove?: () => void;
  onReject?: () => void;
  onCancel?: () => void;
}

const STATUS_CONFIG = {
  pending: { label: '承認待ち', badgeClass: 'transaction-badge--pending' },
  approved: { label: '承認済み', badgeClass: 'transaction-badge--approved' },
  rejected: { label: '却下', badgeClass: 'transaction-badge--rejected' },
} as const;

export const AdvanceDetailModal: React.FC<AdvanceDetailModalProps> = ({
  isOpen,
  onClose,
  status,
  direction,
  data,
  onApprove,
  onReject,
  onCancel,
}) => {
  const statusConfig = STATUS_CONFIG[status];
  const isSent = direction === 'sent';
  const isPending = status === 'pending';
  const isApproved = status === 'approved';
  const isRejected = status === 'rejected';

  const handleCancel = () => {
    if (confirm('この申請を取り消しますか？')) {
      onCancel?.();
      onClose();
    }
  };

  const getDirectionText = () => {
    if (isSent) {
      return `あなた → ${data.counterpartyName}さん`;
    }
    return `${data.counterpartyName}さん → あなた`;
  };

  const getAmountClass = () => {
    if (isSent) return 'transaction-detail__amount--lent';
    return 'transaction-detail__amount--borrowed';
  };

  const getTitle = () => {
    if (isPending && !isSent) return '立替申請の確認';
    return '立替申請の詳細';
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={getTitle()}>
      <div className={styles.modal}>
        <div className={styles['transaction-detail']}>
          <div className={styles['transaction-detail__type']}>
            <span className={`${styles['transaction-badge']} ${styles['transaction-badge--advance']}`}>
              立替
            </span>
            <span className={`${styles['transaction-badge']} ${styles[statusConfig.badgeClass]}`}>
              {statusConfig.label}
            </span>
          </div>
          <div className={`${styles['transaction-detail__amount']} ${styles[getAmountClass()]}`}>
            ¥{data.amount.toLocaleString()}
          </div>
          <p className={styles['transaction-detail__direction']}>
            {getDirectionText()}
          </p>
        </div>

        <div className={styles['confirm-card']}>
          <div className={styles['confirm-row']}>
            <span className={styles['confirm-row__label']}>申請日</span>
            <span className={styles['confirm-row__value']}>{data.applicationDate}</span>
          </div>
          {isApproved && data.approvedDate && (
            <div className={styles['confirm-row']}>
              <span className={styles['confirm-row__label']}>承認日</span>
              <span className={styles['confirm-row__value']}>{data.approvedDate}</span>
            </div>
          )}
          {isRejected && data.rejectedDate && (
            <div className={styles['confirm-row']}>
              <span className={styles['confirm-row__label']}>却下日</span>
              <span className={styles['confirm-row__value']}>{data.rejectedDate}</span>
            </div>
          )}
          {data.memo && (
            <div className={styles['confirm-row']}>
              <span className={styles['confirm-row__label']}>メモ</span>
              <span className={styles['confirm-row__value']}>{data.memo}</span>
            </div>
          )}
        </div>

        {isPending && isSent && (
          <div className={styles['pending-notice']}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <p>相手の承認をお待ちください</p>
          </div>
        )}

        {isPending && !isSent && (
          <div className={styles['impact-notice']}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <div className={styles['impact-notice__content']}>
              <p className={styles['impact-notice__title']}>承認すると...</p>
              <p className={styles['impact-notice__desc']}>
                あなたの借りが <strong>¥{data.amount.toLocaleString()}</strong> 増えます
              </p>
            </div>
          </div>
        )}

        {isPending && !isSent ? (
          <div className={styles.footer}>
            <button className={styles['btn--danger']} onClick={onReject}>
              却下
            </button>
            <button className={styles['btn--primary']} onClick={onApprove}>
              承認する
            </button>
          </div>
        ) : isPending && isSent ? (
          <div className={styles['footer--stack']}>
            <button className={styles['btn--secondary']} onClick={onClose}>
              閉じる
            </button>
            <button className={styles['btn--ghost-danger']} onClick={handleCancel}>
              この申請を取り消す
            </button>
          </div>
        ) : (
          <button className={styles['btn--full']} onClick={onClose}>
            閉じる
          </button>
        )}
      </div>
    </Modal>
  );
};
