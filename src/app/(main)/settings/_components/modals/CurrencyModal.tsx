'use client';

import React, { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import styles from './SettingsModal.module.scss';

interface CurrencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Currency = 'jpy' | 'usd' | 'eur' | 'cny';

export const CurrencyModal: React.FC<CurrencyModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>('jpy');

  const currencies = [
    { value: 'jpy' as Currency, label: '日本円（¥）' },
    { value: 'usd' as Currency, label: '米ドル（$）' },
    { value: 'eur' as Currency, label: 'ユーロ（€）' },
    { value: 'cny' as Currency, label: '人民元（¥）' },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="通貨">
      <div className={styles.modal}>
        <ul className={styles['radio-list']}>
          {currencies.map((currency) => (
            <li
              key={currency.value}
              className={`${styles['radio-item']} ${
                selectedCurrency === currency.value
                  ? styles['radio-item--selected']
                  : ''
              }`}
              onClick={() => setSelectedCurrency(currency.value)}
            >
              <span>{currency.label}</span>
              <span className={styles['radio-item__check']}>✓</span>
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
};
