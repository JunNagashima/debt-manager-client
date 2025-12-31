'use client';

import React from 'react';
import styles from './SearchBox.module.scss';

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBox: React.FC<SearchBoxProps> = ({ value, onChange }) => {
  return (
    <div className={styles['search-box']}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      <input
        type="text"
        className={styles['search-box__input']}
        placeholder="フレンドを検索"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
