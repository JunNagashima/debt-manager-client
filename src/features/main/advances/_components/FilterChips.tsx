'use client';

import React from 'react';
import styles from './FilterChips.module.scss';

type FilterType = 'all' | 'pending' | 'approved' | 'rejected';

interface FilterChipsProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export const FilterChips: React.FC<FilterChipsProps> = ({
  activeFilter,
  onFilterChange,
}) => {
  const filters: { value: FilterType; label: string }[] = [
    { value: 'all', label: 'すべて' },
    { value: 'pending', label: '承認待ち' },
    { value: 'approved', label: '承認済み' },
    { value: 'rejected', label: '却下' },
  ];

  return (
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
  );
};
