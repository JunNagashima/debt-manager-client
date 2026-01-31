'use client';

import React from 'react';
import styles from './Tabs.module.scss';

type TabType = 'received' | 'sent';

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
        受け取った申請
        <span className={styles.tabs__badge}>2</span>
      </button>
      <button
        className={`${styles.tabs__item} ${
          activeTab === 'sent' ? styles['tabs__item--active'] : ''
        }`}
        onClick={() => onTabChange('sent')}
      >
        送った申請
      </button>
    </div>
  );
};
