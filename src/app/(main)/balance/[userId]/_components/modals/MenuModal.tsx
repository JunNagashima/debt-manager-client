'use client';

import React from 'react';
import { Modal } from '@/components/ui/Modal';
import styles from './MenuModal.module.scss';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOffsetClick: () => void;
}

export const MenuModal: React.FC<MenuModalProps> = ({
  isOpen,
  onClose,
  onOffsetClick,
}) => {
  const handleEditFriend = () => {
    console.log('フレンド情報編集');
    onClose();
  };

  const handleDeleteFriend = () => {
    if (confirm('本当にこのフレンドを削除しますか？')) {
      console.log('フレンド削除');
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="メニュー" size="sm">
      <div className={styles.menu}>
        <ul className={styles.menu__list}>
          <li className={styles.menu__item} onClick={onOffsetClick}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5" />
            </svg>
            相殺を提案する
          </li>
          <li className={styles.menu__item} onClick={handleEditFriend}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            履歴をエクスポート
          </li>
          <li
            className={`${styles.menu__item} ${styles['menu__item--danger']}`}
            onClick={handleDeleteFriend}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <line x1="18" y1="8" x2="23" y2="13" />
              <line x1="23" y1="8" x2="18" y2="13" />
            </svg>
            フレンドを解除
          </li>
        </ul>
      </div>
    </Modal>
  );
};
