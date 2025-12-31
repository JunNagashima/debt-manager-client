'use client';

import React from 'react';
import styles from './RecentActivity.module.scss';

interface Activity {
  id: string;
  type: 'payment' | 'debt' | 'update';
  title: string;
  description: string;
  date: string;
  amount?: string;
}

export const RecentActivity: React.FC = () => {
  // モックデータ
  const activities: Activity[] = [
    {
      id: '1',
      type: 'payment',
      title: '支払い完了',
      description: 'ABC株式会社への支払い',
      date: '2024-01-15',
      amount: '¥50,000',
    },
    {
      id: '2',
      type: 'debt',
      title: '新規債務登録',
      description: 'XYZ商事からの請求',
      date: '2024-01-14',
      amount: '¥120,000',
    },
    {
      id: '3',
      type: 'update',
      title: '情報更新',
      description: 'DEF企業の支払い期限変更',
      date: '2024-01-13',
    },
    {
      id: '4',
      type: 'payment',
      title: '支払い完了',
      description: 'GHI株式会社への支払い',
      date: '2024-01-12',
      amount: '¥30,000',
    },
    {
      id: '5',
      type: 'debt',
      title: '新規債務登録',
      description: 'JKL商事からの請求',
      date: '2024-01-11',
      amount: '¥85,000',
    },
  ];

  const handleActivityClick = (activity: Activity) => {
    console.log('Activity clicked:', activity);
  };

  const getActivityIcon = (type: Activity['type']) => {
    switch (type) {
      case 'payment':
        return '✅';
      case 'debt':
        return '📋';
      case 'update':
        return '🔄';
      default:
        return '📌';
    }
  };

  const getActivityClass = (type: Activity['type']) => {
    return `${styles['recent-activity__item']} ${
      styles[`recent-activity__item--${type}`]
    }`;
  };

  return (
    <div className={styles['recent-activity']}>
      <div className={styles['recent-activity__list']}>
        {activities.map((activity) => (
          <div
            key={activity.id}
            className={getActivityClass(activity.type)}
            onClick={() => handleActivityClick(activity)}
          >
            <div className={styles['recent-activity__icon']}>
              {getActivityIcon(activity.type)}
            </div>
            <div className={styles['recent-activity__content']}>
              <h4 className={styles['recent-activity__title']}>
                {activity.title}
              </h4>
              <p className={styles['recent-activity__description']}>
                {activity.description}
              </p>
              <span className={styles['recent-activity__date']}>
                {activity.date}
              </span>
            </div>
            {activity.amount && (
              <div className={styles['recent-activity__amount']}>
                {activity.amount}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
