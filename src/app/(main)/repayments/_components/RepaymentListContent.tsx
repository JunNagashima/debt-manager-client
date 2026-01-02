'use client';

import React, { useState } from 'react';
import { RepaymentSummary } from './RepaymentSummary';
import { Tabs } from './Tabs';
import { MonthFilter } from './MonthFilter';
import { ReceivedTab } from './ReceivedTab';
import { PaidTab } from './PaidTab';
import { MonthTotal } from './MonthTotal';
import { RepaymentFormModal } from '@/app/(main)/_components/modals/RepaymentFormModal';
import { RepaymentDetailModal } from './modals/RepaymentDetailModal';
import { FAB } from './FAB';
import styles from './RepaymentListContent.module.scss';

type TabType = 'received' | 'paid';

export const RepaymentListContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('received');
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  console.log('RepaymentListContent rendered:', { activeTab, currentMonth });

  const handlePrevMonth = () => {
    const newDate = new Date(currentMonth);
    newDate.setMonth(newDate.getMonth() - 1);
    setCurrentMonth(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(currentMonth);
    newDate.setMonth(newDate.getMonth() + 1);
    const now = new Date();
    if (newDate <= now) {
      setCurrentMonth(newDate);
    }
  };

  const isCurrentMonth = () => {
    const now = new Date();
    return (
      currentMonth.getFullYear() === now.getFullYear() &&
      currentMonth.getMonth() === now.getMonth()
    );
  };

  return (
    <>
      {/* ヘッダー */}
      <header className={styles.header}>
        <h1 className={styles['header__title-center']}>返済記録</h1>
        <button
          className={styles['header__btn--right']}
          aria-label="新規作成"
          onClick={() => setIsCreateOpen(true)}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
      </header>

      {/* コンテンツ */}
      <div className={styles.content}>
        <RepaymentSummary />
        
        <Tabs activeTab={activeTab} onTabChange={setActiveTab} />

        <MonthFilter
          currentMonth={currentMonth}
          onPrevMonth={handlePrevMonth}
          onNextMonth={handleNextMonth}
          isNextDisabled={isCurrentMonth()}
        />

        {activeTab === 'received' ? (
          <ReceivedTab onDetailClick={() => setIsDetailOpen(true)} />
        ) : (
          <PaidTab onDetailClick={() => setIsDetailOpen(true)} />
        )}

        <MonthTotal activeTab={activeTab} />
      </div>

      {/* FAB */}
      <FAB onClick={() => setIsCreateOpen(true)} />

      {/* モーダル群 */}
      <RepaymentFormModal
        isOpen={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
      />

      <RepaymentDetailModal
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        type={activeTab === 'received' ? 'received' : 'paid'}
      />
    </>
  );
};
