'use client';

import React, { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import styles from './SettingsModal.module.scss';

interface LanguageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Language = 'ja' | 'en' | 'zh' | 'ko';

export const LanguageModal: React.FC<LanguageModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('ja');

  const languages = [
    { value: 'ja' as Language, label: '日本語' },
    { value: 'en' as Language, label: 'English' },
    { value: 'zh' as Language, label: '中文（簡体）' },
    { value: 'ko' as Language, label: '한국어' },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="言語">
      <div className={styles.modal}>
        <ul className={styles['radio-list']}>
          {languages.map((lang) => (
            <li
              key={lang.value}
              className={`${styles['radio-item']} ${
                selectedLanguage === lang.value
                  ? styles['radio-item--selected']
                  : ''
              }`}
              onClick={() => setSelectedLanguage(lang.value)}
            >
              <span>{lang.label}</span>
              <span className={styles['radio-item__check']}>✓</span>
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
};
