'use client';

import React from 'react';
import styles from './FAB.module.scss';

interface FABProps {
  onClick: () => void;
}

export const FAB: React.FC<FABProps> = ({ onClick }) => {
  return (
    <button
      className={styles.fab}
      onClick={onClick}
      aria-label="新規立替申請"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
    </button>
  );
};
