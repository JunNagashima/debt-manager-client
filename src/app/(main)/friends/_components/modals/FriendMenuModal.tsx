'use client';

import React from 'react';
import { Modal } from '@/components/ui/Modal';
import styles from './FriendMenuModal.module.scss';

interface FriendMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRemoveClick: () => void;
}

export const FriendMenuModal: React.FC<FriendMenuModalProps> = ({
  isOpen,
  onClose,
  onRemoveClick,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="佐藤 花子">
      <div className={styles.modal}>
        <ul className={styles['menu-list']}>
          <li className={styles['menu-list__item']} onClick={onClose}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="12" y1="1" x2="12" y2="23"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
            立替を申請
          </li>
          <li className={styles['menu-list__item']} onClick={onClose}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
              <line x1="1" y1="10" x2="23" y2="10"></line>
            </svg>
            返済を記録
          </li>
          <li className={styles['menu-list__item']} onClick={onClose}>
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
            取引履歴を見る
          </li>
          <li
            className={`${styles['menu-list__item']} ${styles['menu-list__item--danger']}`}
            onClick={onRemoveClick}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <line x1="18" y1="8" x2="23" y2="13"></line>
              <line x1="23" y1="8" x2="18" y2="13"></line>
            </svg>
            フレンドを解除
          </li>
        </ul>
      </div>
    </Modal>
  );
};
