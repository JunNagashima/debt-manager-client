'use client';

import React from 'react';
import { Modal } from '@/components/ui/Modal';
import styles from './HistoryDetailModal.module.scss';

interface HistoryDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'advance' | 'repayment' | 'offset' | 'rejected';
}

type TransactionConfig = {
  badge: { label: string; className: string };
  statusBadge?: { label: string; className: string };
  amount: string;
  amountClass?: string;
  direction: string;
  details: Array<{ label: string; value: React.ReactNode }>;
  balanceChange?: {
    title: string;
    before: { label: string; value: string; className: string };
    after: { label: string; value: string; className: string };
  };
  message?: {
    icon: React.ReactNode;
    text: string;
    className: string;
  };
};

const createTransactionConfig = (): Record<'advance' | 'repayment' | 'offset' | 'rejected', TransactionConfig> => ({
  advance: {
    badge: { label: '立替', className: 'transaction-badge--advance' },
    amount: '+¥2,000',
    amountClass: 'transaction-detail__amount--lent',
    direction: 'あなた → 鈴木 一郎さん',
    details: [
      { label: '日付', value: '2025/12/20' },
      { label: 'メモ', value: 'タクシー代' },
      { 
        label: 'ステータス', 
        value: (
          <span className={`${styles['status-badge']} ${styles['status-badge--pending']}`}>
            承認待ち
          </span>
        ),
      },
    ],
  },
  repayment: {
    badge: { label: '返済', className: 'transaction-badge--repayment' },
    amount: '+¥3,000',
    amountClass: 'transaction-detail__amount--lent',
    direction: '佐藤 花子さん → あなた',
    details: [
      { label: '日付', value: '2025/12/20' },
      { label: 'メモ', value: 'ランチ代の返済' },
    ],
    balanceChange: {
      title: 'この取引による残高変化',
      before: { label: '取引前', value: '¥9,000 貸し', className: 'balance-change__value--lent' },
      after: { label: '取引後', value: '¥6,000 貸し', className: 'balance-change__value--lent' },
    },
  },
  offset: {
    badge: { label: '相殺', className: 'transaction-badge--offset' },
    statusBadge: { label: '完了', className: 'transaction-badge--approved' },
    amount: '¥3,000',
    direction: '高橋 健太さん との相殺',
    details: [
      { label: '完了日', value: '2025/12/15' },
      { label: 'メモ', value: '残高を清算' },
    ],
    message: {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      ),
      text: '残高が清算されました',
      className: 'success-message',
    },
  },
  rejected: {
    badge: { label: '相殺', className: 'transaction-badge--offset' },
    statusBadge: { label: '却下', className: 'transaction-badge--rejected' },
    amount: '¥5,000',
    direction: '佐藤 花子さん からの提案',
    details: [
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
      text: 'この提案は却下されました',
      className: 'rejected-message',
    },
  },
});

export const HistoryDetailModal: React.FC<HistoryDetailModalProps> = ({
  isOpen,
  onClose,
  type,
}) => {
  const TRANSACTION_CONFIG = createTransactionConfig();
  const config = TRANSACTION_CONFIG[type];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="取引詳細">
      <div className={styles.modal}>
        <div className={styles['transaction-detail']}>
          <div className={styles['transaction-detail__type']}>
            <span className={`${styles['transaction-badge']} ${styles[config.badge.className]}`}>
              {config.badge.label}
            </span>
            {config.statusBadge && (
              <span className={`${styles['transaction-badge']} ${styles[config.statusBadge.className]}`}>
                {config.statusBadge.label}
              </span>
            )}
          </div>
          <div className={`${styles['transaction-detail__amount']} ${config.amountClass ? styles[config.amountClass] : ''}`}>
            {config.amount}
          </div>
          <p className={styles['transaction-detail__direction']}>{config.direction}</p>
        </div>

        <div className={styles['confirm-card']}>
          {config.details.map((detail, index) => (
            <div key={index} className={styles['confirm-row']}>
              <span className={styles['confirm-row__label']}>{detail.label}</span>
              <span className={styles['confirm-row__value']}>{detail.value}</span>
            </div>
          ))}
        </div>

        {config.balanceChange && (
          <div className={styles['balance-change']}>
            <p className={styles['balance-change__title']}>{config.balanceChange.title}</p>
            <div className={styles['balance-change__row']}>
              <div className={styles['balance-change__item']}>
                <span className={styles['balance-change__label']}>{config.balanceChange.before.label}</span>
                <span className={`${styles['balance-change__value']} ${styles[config.balanceChange.before.className]}`}>
                  {config.balanceChange.before.value}
                </span>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              <div className={styles['balance-change__item']}>
                <span className={styles['balance-change__label']}>{config.balanceChange.after.label}</span>
                <span className={`${styles['balance-change__value']} ${styles[config.balanceChange.after.className]}`}>
                  {config.balanceChange.after.value}
                </span>
              </div>
            </div>
          </div>
        )}

        {config.message && (
          <div className={styles[config.message.className]}>
            {config.message.icon}
            <p>{config.message.text}</p>
          </div>
        )}

        <button className={styles['btn--full']} onClick={onClose}>
          閉じる
        </button>
      </div>
    </Modal>
  );
};
