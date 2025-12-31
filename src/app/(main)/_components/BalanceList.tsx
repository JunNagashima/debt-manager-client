'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './BalanceList.module.scss';

interface Friend {
  id: string;
  name: string;
  avatar: string;
  status: 'lent' | 'borrowed' | 'settled';
  amount: number;
}

export const BalanceList: React.FC = () => {
  const router = useRouter();

  const friends: Friend[] = [
    {
      id: '1',
      name: '佐藤 花子',
      avatar: '佐',
      status: 'lent',
      amount: 6000,
    },
    {
      id: '2',
      name: '鈴木 一郎',
      avatar: '鈴',
      status: 'borrowed',
      amount: 2500,
    },
    {
      id: '3',
      name: '田中 美咲',
      avatar: '田',
      status: 'lent',
      amount: 6500,
    },
    {
      id: '4',
      name: '高橋 健太',
      avatar: '高',
      status: 'settled',
      amount: 0,
    },
  ];

  const handleFriendClick = (friend: Friend) => {
    console.log('Friend clicked:', friend);
    router.push(`/balance/${friend.id}`);
  };

  const handleViewAll = () => {
    console.log('View all friends clicked');
    router.push('/friends');
  };

  const getStatusText = (status: Friend['status']) => {
    switch (status) {
      case 'lent':
        return 'あなたが貸しています';
      case 'borrowed':
        return 'あなたが借りています';
      case 'settled':
        return '清算済み';
      default:
        return '';
    }
  };

  const formatAmount = (amount: number) => {
    return `¥${amount.toLocaleString()}`;
  };

  return (
    <section className={styles.section}>
      <div className={styles.section__header}>
        <h2 className={styles.section__title}>フレンドとの残高</h2>
        <button className={styles.section__link} onClick={handleViewAll}>
          すべて見る
        </button>
      </div>
      <ul className={styles['balance-list']}>
        {friends.map((friend) => (
          <li
            key={friend.id}
            className={`${styles['balance-item']} ${
              friend.status === 'settled' ? styles['balance-item--settled'] : ''
            }`}
            onClick={() => handleFriendClick(friend)}
          >
            <div className={styles['balance-item__avatar']}>{friend.avatar}</div>
            <div className={styles['balance-item__info']}>
              <p className={styles['balance-item__name']}>{friend.name}</p>
              <p
                className={`${styles['balance-item__status']} ${
                  styles[`balance-item__status--${friend.status}`]
                }`}
              >
                {getStatusText(friend.status)}
              </p>
            </div>
            <span
              className={`${styles['balance-item__amount']} ${
                styles[`balance-item__amount--${friend.status}`]
              }`}
            >
              {formatAmount(friend.amount)}
            </span>
            <span className={styles['balance-item__arrow']}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};
