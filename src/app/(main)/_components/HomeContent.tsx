'use client';

import React from 'react';
import { StatsCard } from './StatsCard';
import { QuickActions } from './QuickActions';
import { RecentActivity } from './RecentActivity';
import styles from './HomeContent.module.scss';

export const HomeContent: React.FC = () => {
  console.log('HomeContent: Client Component rendered');

  return (
    <div className={styles['home-content']}>
      <section className={styles['home-content__stats']}>
        <h2 className={styles['home-content__section-title']}>統計情報</h2>
        <div className={styles['home-content__stats-grid']}>
          <StatsCard
            title="総債務額"
            value="¥1,234,567"
            trend="+5.2%"
            trendType="up"
          />
          <StatsCard
            title="未払い件数"
            value="12件"
            trend="-2件"
            trendType="down"
          />
          <StatsCard
            title="今月の返済額"
            value="¥345,678"
            trend="+3.1%"
            trendType="up"
          />
          <StatsCard
            title="期限切れ"
            value="3件"
            trend="注意"
            trendType="warning"
          />
        </div>
      </section>

      <div className={styles['home-content__row']}>
        <section className={styles['home-content__quick-actions']}>
          <h2 className={styles['home-content__section-title']}>
            クイックアクション
          </h2>
          <QuickActions />
        </section>

        <section className={styles['home-content__recent']}>
          <h2 className={styles['home-content__section-title']}>最近の活動</h2>
          <RecentActivity />
        </section>
      </div>
    </div>
  );
};
