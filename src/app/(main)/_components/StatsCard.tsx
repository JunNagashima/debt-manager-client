'use client';

import React from 'react';
import styles from './StatsCard.module.scss';

interface StatsCardProps {
  title: string;
  value: string;
  trend?: string;
  trendType?: 'up' | 'down' | 'warning';
}

export const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  trend,
  trendType = 'up',
}) => {
  const handleCardClick = () => {
    console.log('StatsCard clicked:', { title, value, trend, trendType });
  };

  return (
    <div className={styles['stats-card']} onClick={handleCardClick}>
      <div className={styles['stats-card__header']}>
        <h3 className={styles['stats-card__title']}>{title}</h3>
      </div>
      <div className={styles['stats-card__body']}>
        <p className={styles['stats-card__value']}>{value}</p>
        {trend && (
          <span
            className={`${styles['stats-card__trend']} ${
              styles[`stats-card__trend--${trendType}`]
            }`}
          >
            {trend}
          </span>
        )}
      </div>
    </div>
  );
};
