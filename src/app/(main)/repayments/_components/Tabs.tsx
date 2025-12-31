'use client';

import React from 'react';
import styles from './Tabs.module.scss';

type TabType = 'received' | 'paid';

interface TabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const Tabs: React.FC<TabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className={styles.tabs}>
      <button
        className={`${styles.tabs__item} ${
          activeTab === 'received' ? styles['tabs__item--active'] : ''
        }`}
        onClick={() => onTabChange('received')}
      >
        受け取った返済
      </button>
      <button
        className={`${styles.tabs__item} ${
          activeTab === 'paid' ? styles['tabs__item--active'] : ''
        }`}
        onClick={() => onTabChange('paid')}
      >
        支払った返済
      </button>
    </div>
  );
};
