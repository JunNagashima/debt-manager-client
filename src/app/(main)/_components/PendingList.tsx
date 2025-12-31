'use client';

import React, { useState } from 'react';
import { ApproveAdvanceModal } from './modals/ApproveAdvanceModal';
import { ApproveOffsetModal } from './modals/ApproveOffsetModal';
import { ApproveFriendModal } from './modals/ApproveFriendModal';
import styles from './PendingList.module.scss';

interface PendingItem {
  id: string;
  type: 'advance' | 'offset' | 'friend';
  title: string;
  description: string;
}

export const PendingList: React.FC = () => {
  const [isAdvanceApproveOpen, setIsAdvanceApproveOpen] = useState(false);
  const [isOffsetApproveOpen, setIsOffsetApproveOpen] = useState(false);
  const [isFriendApproveOpen, setIsFriendApproveOpen] = useState(false);

  const pendingItems: PendingItem[] = [
    {
      id: '1',
      type: 'advance',
      title: '立替申請が届いています',
      description: '佐藤さんから ¥3,000',
    },
    {
      id: '2',
      type: 'offset',
      title: '相殺の提案が届いています',
      description: '鈴木さんから',
    },
    {
      id: '3',
      type: 'friend',
      title: 'フレンド申請が届いています',
      description: '山本 太郎さんから',
    },
  ];

  const handleItemClick = (item: PendingItem) => {
    console.log('PendingItem clicked:', item);
    switch (item.type) {
      case 'advance':
        setIsAdvanceApproveOpen(true);
        break;
      case 'offset':
        setIsOffsetApproveOpen(true);
        break;
      case 'friend':
        setIsFriendApproveOpen(true);
        break;
    }
  };

  const handleViewAll = () => {
    console.log('View all pending items clicked');
  };

  const getIconText = (type: PendingItem['type']) => {
    switch (type) {
      case 'advance':
        return '立';
      case 'offset':
        return '相';
      case 'friend':
        return '友';
      default:
        return '';
    }
  };

  return (
    <>
      <section className={styles.section}>
        <div className={styles.section__header}>
          <h2 className={styles.section__title}>
            対応待ち
            <span className={styles.section__badge}>{pendingItems.length}</span>
          </h2>
          <button className={styles.section__link} onClick={handleViewAll}>
            すべて見る
          </button>
        </div>
        <ul className={styles['pending-list']}>
          {pendingItems.map((item) => (
            <li
              key={item.id}
              className={styles['pending-item']}
              onClick={() => handleItemClick(item)}
            >
              <div
                className={`${styles['pending-item__icon']} ${
                  styles[`pending-item__icon--${item.type}`]
                }`}
              >
                {getIconText(item.type)}
              </div>
              <div className={styles['pending-item__content']}>
                <p className={styles['pending-item__title']}>{item.title}</p>
                <p className={styles['pending-item__desc']}>
                  {item.description}
                </p>
              </div>
              <span className={styles['pending-item__action']}>確認</span>
            </li>
          ))}
        </ul>
      </section>

      <ApproveAdvanceModal
        isOpen={isAdvanceApproveOpen}
        onClose={() => setIsAdvanceApproveOpen(false)}
      />
      <ApproveOffsetModal
        isOpen={isOffsetApproveOpen}
        onClose={() => setIsOffsetApproveOpen(false)}
      />
      <ApproveFriendModal
        isOpen={isFriendApproveOpen}
        onClose={() => setIsFriendApproveOpen(false)}
      />
    </>
  );
};
