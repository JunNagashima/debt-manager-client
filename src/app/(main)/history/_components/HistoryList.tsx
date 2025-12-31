'use client';

import React from 'react';
import styles from './HistoryList.module.scss';

type FilterType = 'all' | 'advance' | 'repayment' | 'offset';

interface HistoryListProps {
  filter: FilterType;
  onItemClick: (type: 'advance' | 'repayment' | 'offset') => void;
}

interface HistoryItem {
  id: string;
  type: 'advance' | 'repayment' | 'offset';
  direction: 'in' | 'out' | 'both';
  user: string;
  amount: number;
  memo: string;
  status?: 'pending' | 'approved' | 'rejected';
}

interface HistoryGroup {
  date: string;
  day: string;
  weekday: string;
  items: HistoryItem[];
}

export const HistoryList: React.FC<HistoryListProps> = ({
  filter,
  onItemClick,
}) => {
  const historyGroups: HistoryGroup[] = [
    {
      date: '2025-12-20',
      day: '20',
      weekday: '金',
      items: [
        {
          id: '1',
          type: 'advance',
          direction: 'out',
          user: '鈴木 一郎',
          amount: 2000,
          memo: 'タクシー代',
        },
        {
          id: '2',
          type: 'repayment',
          direction: 'in',
          user: '佐藤 花子',
          amount: 3000,
          memo: 'ランチ代の返済',
        },
      ],
    },
    {
      date: '2025-12-19',
      day: '19',
      weekday: '木',
      items: [
        {
          id: '3',
          type: 'advance',
          direction: 'in',
          user: '佐藤 花子',
          amount: 3000,
          memo: 'ランチ代',
          status: 'pending',
        },
        {
          id: '4',
          type: 'repayment',
          direction: 'out',
          user: '鈴木 一郎',
          amount: 2000,
          memo: 'カフェ代の返済',
        },
      ],
    },
    {
      date: '2025-12-18',
      day: '18',
      weekday: '水',
      items: [
        {
          id: '5',
          type: 'repayment',
          direction: 'in',
          user: '田中 美咲',
          amount: 2500,
          memo: '映画代の返済',
        },
      ],
    },
    {
      date: '2025-12-15',
      day: '15',
      weekday: '日',
      items: [
        {
          id: '6',
          type: 'offset',
          direction: 'both',
          user: '高橋 健太',
          amount: 3000,
          memo: '残高を清算',
        },
        {
          id: '7',
          type: 'advance',
          direction: 'in',
          user: '鈴木 一郎',
          amount: 2500,
          memo: '飲み物代',
        },
      ],
    },
    {
      date: '2025-12-12',
      day: '12',
      weekday: '木',
      items: [
        {
          id: '8',
          type: 'advance',
          direction: 'out',
          user: '田中 美咲',
          amount: 6500,
          memo: 'プレゼント代',
        },
      ],
    },
    {
      date: '2025-12-10',
      day: '10',
      weekday: '火',
      items: [
        {
          id: '9',
          type: 'offset',
          direction: 'both',
          user: '佐藤 花子',
          amount: 5000,
          memo: '相殺提案',
          status: 'rejected',
        },
        {
          id: '10',
          type: 'repayment',
          direction: 'out',
          user: '佐藤 花子',
          amount: 1200,
          memo: '交通費の返済',
        },
      ],
    },
  ];

  const getIconClass = (type: string, direction: string) => {
    if (type === 'offset') return styles['history-item__icon--offset'];
    if (type === 'advance' && direction === 'out')
      return styles['history-item__icon--advance-out'];
    if (type === 'advance' && direction === 'in')
      return styles['history-item__icon--advance-in'];
    if (type === 'repayment' && direction === 'in')
      return styles['history-item__icon--repayment-in'];
    if (type === 'repayment' && direction === 'out')
      return styles['history-item__icon--repayment-out'];
    return '';
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'advance':
        return '立替';
      case 'repayment':
        return '返済';
      case 'offset':
        return '相殺';
      default:
        return '';
    }
  };

  const getUserDirection = (type: string, direction: string, user: string) => {
    if (type === 'offset') return `⇄ ${user}`;
    if (direction === 'out') return `→ ${user}`;
    return `← ${user}`;
  };

  const formatAmount = (amount: number, type: string, direction: string) => {
    if (type === 'offset') return `¥${amount.toLocaleString()}`;
    const sign = direction === 'in' ? '+' : '-';
    return `${sign}¥${amount.toLocaleString()}`;
  };

  const getAmountClass = (type: string, direction: string) => {
    if (type === 'offset') return '';
    return direction === 'in'
      ? styles['history-item__amount--lent']
      : styles['history-item__amount--borrowed'];
  };

  const getStatusLabel = (status?: string) => {
    switch (status) {
      case 'pending':
        return '承認待ち';
      case 'rejected':
        return '却下';
      default:
        return '';
    }
  };

  const filteredGroups = historyGroups
    .map((group) => ({
      ...group,
      items: group.items.filter((item) => {
        if (filter === 'all') return true;
        return item.type === filter;
      }),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <div className={styles['history-list']}>
      {filteredGroups.map((group) => (
        <div key={group.date} className={styles['history-group']}>
          <div className={styles['history-group__date']}>
            <span className={styles['history-group__day']}>{group.day}</span>
            <span className={styles['history-group__weekday']}>
              {group.weekday}
            </span>
          </div>
          <ul className={styles['history-group__items']}>
            {group.items.map((item) => (
              <li
                key={item.id}
                className={`${styles['history-item']} ${
                  item.status === 'rejected'
                    ? styles['history-item--rejected']
                    : ''
                }`}
                onClick={() => onItemClick(item.type)}
              >
                <div
                  className={`${styles['history-item__icon']} ${getIconClass(
                    item.type,
                    item.direction
                  )}`}
                >
                  {item.type === 'offset' ? (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5" />
                    </svg>
                  ) : item.direction === 'out' ? (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 5v14M5 12l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 19V5M5 12l7 7 7-7" />
                    </svg>
                  )}
                </div>
                <div className={styles['history-item__content']}>
                  <div className={styles['history-item__main']}>
                    <span className={styles['history-item__type']}>
                      {getTypeLabel(item.type)}
                    </span>
                    <span className={styles['history-item__user']}>
                      {getUserDirection(item.type, item.direction, item.user)}
                    </span>
                  </div>
                  <p className={styles['history-item__memo']}>{item.memo}</p>
                  {item.status && (
                    <span
                      className={`${styles['history-item__status']} ${
                        styles[`history-item__status--${item.status}`]
                      }`}
                    >
                      {getStatusLabel(item.status)}
                    </span>
                  )}
                </div>
                <div
                  className={`${styles['history-item__amount']} ${getAmountClass(
                    item.type,
                    item.direction
                  )}`}
                >
                  {formatAmount(item.amount, item.type, item.direction)}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
