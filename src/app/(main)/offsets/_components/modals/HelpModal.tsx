'use client';

import React from 'react';
import { Modal } from '@/components/ui/Modal';
import styles from './HelpModal.module.scss';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="相殺とは？">
      <div className={styles.modal}>
        <div className={styles['help-content']}>
          <div className={styles['help-item']}>
            <div className={styles['help-item__icon']}>🔄</div>
            <div className={styles['help-item__text']}>
              <p className={styles['help-item__title']}>貸し借りを相殺</p>
              <p className={styles['help-item__desc']}>
                お互いに貸し借りがある場合、差し引きして残高をまとめられます
              </p>
            </div>
          </div>
          <div className={styles['help-item']}>
            <div className={styles['help-item__icon']}>💰</div>
            <div className={styles['help-item__text']}>
              <p className={styles['help-item__title']}>現金のやり取り不要</p>
              <p className={styles['help-item__desc']}>
                相殺を使えば、実際にお金を渡さなくても精算できます
              </p>
            </div>
          </div>
          <div className={styles['help-item']}>
            <div className={styles['help-item__icon']}>✅</div>
            <div className={styles['help-item__text']}>
              <p className={styles['help-item__title']}>相手の承認が必要</p>
              <p className={styles['help-item__desc']}>
                相殺は提案後、相手が承認すると成立します
              </p>
            </div>
          </div>
        </div>
        <div className={styles['help-example']}>
          <p className={styles['help-example__title']}>例）</p>
          <p className={styles['help-example__text']}>
            あなたがAさんに ¥3,000 貸している
            <br />
            Aさんがあなたに ¥1,000 貸している
          </p>
          <p className={styles['help-example__result']}>
            → 相殺後: あなたがAさんに <strong>¥2,000 貸し</strong>
          </p>
        </div>
        <button
          className={styles['btn--primary']}
          onClick={onClose}
        >
          わかりました
        </button>
      </div>
    </Modal>
  );
};
