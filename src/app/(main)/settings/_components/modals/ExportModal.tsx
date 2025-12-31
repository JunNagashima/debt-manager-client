'use client';

import React, { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import styles from './SettingsModal.module.scss';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Period = 'all' | '1m' | '3m' | '6m' | '1y';
type Format = 'csv' | 'pdf';

export const ExportModal: React.FC<ExportModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [period, setPeriod] = useState<Period>('all');
  const [format, setFormat] = useState<Format>('csv');

  const handleExport = () => {
    console.log('データエクスポート:', { period, format });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="データをエクスポート">
      <div className={styles.modal}>
        <p className={styles['export-desc']}>
          取引履歴をファイルとしてダウンロードできます。
        </p>

        <div className={styles['form-group']}>
          <label className={styles['form-label']}>期間</label>
          <select
            className={styles['form-select']}
            value={period}
            onChange={(e) => setPeriod(e.target.value as Period)}
          >
            <option value="all">すべて</option>
            <option value="1m">過去1ヶ月</option>
            <option value="3m">過去3ヶ月</option>
            <option value="6m">過去6ヶ月</option>
            <option value="1y">過去1年</option>
          </select>
        </div>

        <div className={styles['form-group']}>
          <label className={styles['form-label']}>ファイル形式</label>
          <div className={styles['radio-buttons']}>
            <label
              className={`${styles['radio-button']} ${
                format === 'csv' ? styles['radio-button--active'] : ''
              }`}
            >
              <input
                type="radio"
                name="format"
                value="csv"
                checked={format === 'csv'}
                onChange={() => setFormat('csv')}
              />
              <span>CSV</span>
            </label>
            <label
              className={`${styles['radio-button']} ${
                format === 'pdf' ? styles['radio-button--active'] : ''
              }`}
            >
              <input
                type="radio"
                name="format"
                value="pdf"
                checked={format === 'pdf'}
                onChange={() => setFormat('pdf')}
              />
              <span>PDF</span>
            </label>
          </div>
        </div>

        <div className={styles['form-footer']}>
          <button className={styles['btn--secondary']} onClick={onClose}>
            キャンセル
          </button>
          <button className={styles['btn--primary']} onClick={handleExport}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            ダウンロード
          </button>
        </div>
      </div>
    </Modal>
  );
};
