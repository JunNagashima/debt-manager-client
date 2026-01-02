'use client';

import React from 'react';
import { Modal } from '@/components/ui/Modal';
import styles from './DetailModal.module.scss';

interface OffsetDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  status: 'approved' | 'rejected' | 'pending';
}

type StatusConfig = {
  badge: { label: string; className: string };
  amount: string;
  direction: string;
  dates: Array<{ label: string; value: string }>;
  offsetResult?: {
    before: { label: string; value: string; className: string };
    after: { label: string; value: string; className: string };
  };
  message: {
    icon: React.ReactNode;
    text: string;
    className: string;
  };
};

const STATUS_CONFIG: Record<'approved' | 'rejected' | 'pending', StatusConfig> = {
  approved: {
    badge: { label: '承認済み', className: 'transaction-badge--approved' },
    amount: '¥3,000',
    direction: '高橋 健太さん との相殺',
    dates: [
      { label: '申請日', value: '2025/12/14' },
      { label: '承認日', value: '2025/12/15' },
    ],
    message: {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      ),
      text: 'この相殺は正常に完了しました',
      className: 'success-message',
    },
  },
  rejected: {
    badge: { label: '却下', className: 'transaction-badge--rejected' },
    amount: '¥5,000',
    direction: '佐藤 花子さん からの提案',
    dates: [
      { label: '申請日', value: '2025/12/09' },
      { label: '却下日', value: '2025/12/10' },
    ],
    message: {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="15" y1="9" x2="9" y2="15"></line>
          <line x1="9" y1="9" x2="15" y2="15"></line>
        </svg>
      ),
      text: 'この相殺提案は却下されました',
      className: 'rejected-message',
    },
  },
  pending: {
    badge: { label: '承認待ち', className: 'transaction-badge--pending' },
    amount: '¥4,000',
    direction: '田中 美咲さん への提案',
    dates: [{ label: '申請日', value: '2025/12/19' }],
    offsetResult: {
      before: { label: '現在', value: '¥6,500 貸し', className: 'offset-result__value--lent' },
      after: { label: '相殺後', value: '¥2,500 貸し', className: 'offset-result__value--lent' },
    },
    message: {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
      text: '相手の承認をお待ちください',
      className: 'pending-notice',
    },
  },
};

export const OffsetDetailModal: React.FC<OffsetDetailModalProps> = ({
  isOpen,
  onClose,
  status,
}) => {
  const config = STATUS_CONFIG[status];

  const handleCancel = () => {
    if (confirm('この提案を取り消しますか？')) {
      console.log('相殺提案取消');
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="相殺申請の詳細">
      <div className={styles.modal}>
        <div className={styles['transaction-detail']}>
          <div className={styles['transaction-detail__type']}>
            <span className={`${styles['transaction-badge']} ${styles['transaction-badge--offset']}`}>
              相殺
            </span>
            <span className={`${styles['transaction-badge']} ${styles[config.badge.className]}`}>
              {config.badge.label}
            </span>
          </div>
          <div className={styles['transaction-detail__amount']}>{config.amount}</div>
          <p className={styles['transaction-detail__direction']}>{config.direction}</p>
        </div>

        <div className={styles['confirm-card']}>
          {config.dates.map((date, index) => (
            <div key={index} className={styles['confirm-row']}>
              <span className={styles['confirm-row__label']}>{date.label}</span>
              <span className={styles['confirm-row__value']}>{date.value}</span>
            </div>
          ))}
        </div>

        {config.offsetResult && (
          <div className={styles['offset-result']}>
            <p className={styles['offset-result__title']}>相殺後の残高（予定）</p>
            <div className={styles['offset-result__change']}>
              <div className={styles['offset-result__before']}>
                <span className={styles['offset-result__label']}>{config.offsetResult.before.label}</span>
                <span className={`${styles['offset-result__value']} ${styles[config.offsetResult.before.className]}`}>
                  {config.offsetResult.before.value}
                </span>
              </div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              <div className={styles['offset-result__after']}>
                <span className={styles['offset-result__label']}>{config.offsetResult.after.label}</span>
                <span className={`${styles['offset-result__value']} ${styles[config.offsetResult.after.className]}`}>
                  {config.offsetResult.after.value}
                </span>
              </div>
            </div>
          </div>
        )}

        <div className={styles[config.message.className]}>
          {config.message.icon}
          <p>{config.message.text}</p>
        </div>

        {status === 'pending' ? (
          <div className={styles['footer--stack']}>
            <button className={styles['btn--secondary']} onClick={onClose}>
              閉じる
            </button>
            <button className={styles['btn--ghost-danger']} onClick={handleCancel}>
              この提案を取り消す
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
