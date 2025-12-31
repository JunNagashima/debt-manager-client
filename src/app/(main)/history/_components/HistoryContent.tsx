'use client';

import React, { useState } from 'react';
import { HistorySummary } from './HistorySummary';
import { FilterChips } from './FilterChips';
import { HistoryList } from './HistoryList';
import { SearchModal } from './modals/SearchModal';
import { FilterModal } from './modals/FilterModal';
import { AdvanceDetailModal } from './modals/AdvanceDetailModal';
import { RepaymentDetailModal } from './modals/RepaymentDetailModal';
import { OffsetDetailModal } from './modals/OffsetDetailModal';
import { RejectedDetailModal } from './modals/RejectedDetailModal';
import styles from './HistoryContent.module.scss';

type FilterType = 'all' | 'advance' | 'repayment' | 'offset';

export const HistoryContent: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isAdvanceDetailOpen, setIsAdvanceDetailOpen] = useState(false);
  const [isRepaymentDetailOpen, setIsRepaymentDetailOpen] = useState(false);
  const [isOffsetDetailOpen, setIsOffsetDetailOpen] = useState(false);
  const [isRejectedDetailOpen, setIsRejectedDetailOpen] = useState(false);

  console.log('HistoryContent rendered:', { currentMonth, activeFilter });

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

  const handleDetailOpen = (type: 'advance' | 'repayment' | 'offset') => {
    if (type === 'advance') {
      setIsAdvanceDetailOpen(true);
    } else if (type === 'repayment') {
      setIsRepaymentDetailOpen(true);
    } else if (type === 'offset') {
      setIsOffsetDetailOpen(true);
    }
  };

  return (
    <>
      {/* ヘッダー */}
      <header className={styles.header}>
        <h1 className={styles['header__title-center']}>履歴</h1>
        <button
          className={styles['header__btn--right']}
          aria-label="検索"
          onClick={() => setIsSearchOpen(true)}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </header>

      {/* コンテンツ */}
      <div className={styles.content}>
        <HistorySummary
          currentMonth={currentMonth}
          onPrevMonth={handlePrevMonth}
          onNextMonth={handleNextMonth}
          isNextDisabled={isCurrentMonth()}
        />

        <FilterChips
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          onFilterClick={() => setIsFilterOpen(true)}
        />

        <HistoryList filter={activeFilter} onItemClick={handleDetailOpen} />

        <button className={styles['btn-load-more']}>
          もっと見る
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </div>

      {/* モーダル群 */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <FilterModal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />

      <AdvanceDetailModal
        isOpen={isAdvanceDetailOpen}
        onClose={() => setIsAdvanceDetailOpen(false)}
      />

      <RepaymentDetailModal
        isOpen={isRepaymentDetailOpen}
        onClose={() => setIsRepaymentDetailOpen(false)}
      />

      <OffsetDetailModal
        isOpen={isOffsetDetailOpen}
        onClose={() => setIsOffsetDetailOpen(false)}
      />

      <RejectedDetailModal
        isOpen={isRejectedDetailOpen}
        onClose={() => setIsRejectedDetailOpen(false)}
      />
    </>
  );
};
