'use client';

import React, { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import styles from './SearchModal.module.scss';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [keyword, setKeyword] = useState('');

  const recentSearches = ['ランチ', '佐藤', 'タクシー'];

  const handleSearch = () => {
    console.log('検索:', keyword);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="履歴を検索">
      <div className={styles.modal}>
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
            placeholder="メモやフレンド名で検索"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
        </div>

        <div className={styles['search-recent']}>
          <p className={styles['search-recent__title']}>最近の検索</p>
          <ul className={styles['search-recent__list']}>
            {recentSearches.map((search, index) => (
              <li
                key={index}
                className={styles['search-recent__item']}
                onClick={() => setKeyword(search)}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                {search}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Modal>
  );
};
