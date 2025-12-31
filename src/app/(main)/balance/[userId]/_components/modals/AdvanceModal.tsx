'use client';

import React, { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import styles from './BalanceActionModal.module.scss';

interface AdvanceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdvanceModal: React.FC<AdvanceModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [note, setNote] = useState('');

  const handleSubmit = () => {
    console.log('立替申請:', { amount, date, note });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="立替を申請">
      <div className={styles.form}>
        <div className={styles.form__group}>
          <label className={styles.form__label}>相手</label>
          <div className={styles['form-static']}>
            <div className={styles['form-static__avatar']}>佐</div>
            <span className={styles['form-static__name']}>佐藤 花子</span>
          </div>
        </div>

        <div className={styles.form__group}>
          <label className={styles.form__label}>金額</label>
          <div className={styles.form__amount}>
            <span className={styles.form__prefix}>¥</span>
            <input
              type="number"
              className={styles.form__input}
              placeholder="0"
              min="1"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.form__group}>
          <label className={styles.form__label}>日付</label>
          <input
            type="date"
            className={styles.form__input}
            value={date}
            max={new Date().toISOString().split('T')[0]}
            onChange={(e) => setDate(e.target.value)}
          />
          <p className={styles.form__hint}>未来の日付は選択できません</p>
        </div>

        <div className={styles.form__group}>
          <label className={styles.form__label}>メモ（任意）</label>
          <input
            type="text"
            className={styles.form__input}
            placeholder="例：ランチ代"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>

        <div className={styles.form__footer}>
          <button className={styles['btn--secondary']} onClick={onClose}>
            キャンセル
          </button>
          <button className={styles['btn--primary']} onClick={handleSubmit}>
            申請する
          </button>
        </div>
      </div>
    </Modal>
  );
};
