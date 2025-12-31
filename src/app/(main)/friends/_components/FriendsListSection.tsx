'use client';

import React from 'react';
import styles from './FriendsListSection.module.scss';

interface FriendsListSectionProps {
  searchQuery: string;
  onMenuClick: () => void;
}

interface Friend {
  id: string;
  name: string;
  avatar: string;
  balance: {
    amount: number;
    type: 'lent' | 'borrowed' | 'settled';
  };
}

export const FriendsListSection: React.FC<FriendsListSectionProps> = ({
  searchQuery,
  onMenuClick,
}) => {
  const friends: Friend[] = [
    {
      id: '1',
      name: '佐藤 花子',
      avatar: '佐',
      balance: { amount: 6000, type: 'lent' },
    },
    {
      id: '2',
      name: '鈴木 一郎',
      avatar: '鈴',
      balance: { amount: 2500, type: 'borrowed' },
    },
    {
      id: '3',
      name: '田中 美咲',
      avatar: '田',
      balance: { amount: 6500, type: 'lent' },
    },
    {
      id: '4',
      name: '高橋 健太',
      avatar: '高',
      balance: { amount: 0, type: 'settled' },
    },
  ];

  const filteredFriends = friends.filter((friend) =>
    friend.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getBalanceText = (balance: Friend['balance']) => {
    if (balance.type === 'settled') return '¥0 清算済み';
    const sign = balance.type === 'lent' ? '貸し' : '借り';
    return `¥${balance.amount.toLocaleString()} ${sign}`;
  };

  const getBalanceClass = (type: 'lent' | 'borrowed' | 'settled') => {
    switch (type) {
      case 'lent':
        return styles['friend-card__balance--lent'];
      case 'borrowed':
        return styles['friend-card__balance--borrowed'];
      case 'settled':
        return styles['friend-card__balance--settled'];
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.section__header}>
        <h2 className={styles.section__title}>フレンド一覧</h2>
        <span className={styles.section__count}>{filteredFriends.length}人</span>
      </div>
      <ul className={styles['friend-list']}>
        {filteredFriends.map((friend) => (
          <li
            key={friend.id}
            className={styles['friend-card']}
            onClick={() => console.log('Friend clicked:', friend.id)}
          >
            <div className={styles['friend-card__avatar']}>
              {friend.avatar}
            </div>
            <div className={styles['friend-card__info']}>
              <p className={styles['friend-card__name']}>{friend.name}</p>
              <p
                className={`${styles['friend-card__balance']} ${getBalanceClass(
                  friend.balance.type
                )}`}
              >
                {getBalanceText(friend.balance)}
              </p>
            </div>
            <button
              className={styles['friend-card__menu']}
              onClick={(e) => {
                e.stopPropagation();
                onMenuClick();
              }}
              aria-label="メニュー"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="12" cy="5" r="1"></circle>
                <circle cx="12" cy="19" r="1"></circle>
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
