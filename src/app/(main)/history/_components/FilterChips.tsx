'use client';

import React from 'react';
import styles from './FilterChips.module.scss';

type FilterType = 'all' | 'advance' | 'repayment' | 'offset';

interface FilterChipsProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  onFilterClick: () => void;
}

export const FilterChips: React.FC<FilterChipsProps> = ({
  activeFilter,
  onFilterChange,
  onFilterClick,
}) => {
  const filters: { value: FilterType; label: string }[] = [
    { value: 'all', label: 'すべて' },
    { value: 'advance', label: '立替' },
    { value: 'repayment', label: '返済' },
    { value: 'offset', label: '相殺' },
  ];

  return (
    <div className={styles['history-filters']}>
      <div className={styles['filter-chips']}>
        {filters.map((filter) => (
          <button
            key={filter.value}
            className={`${styles['filter-chip']} ${
              activeFilter === filter.value ? styles['filter-chip--active'] : ''
            }`}
            onClick={() => onFilterChange(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <button className={styles['filter-btn']} onClick={onFilterClick}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
        </svg>
      </button>
    </div>
  );
};
