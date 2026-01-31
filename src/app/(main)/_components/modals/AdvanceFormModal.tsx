'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Modal } from '@/components/ui/Modal';
import { advanceFormSchema, type AdvanceFormData } from './schemas/advanceFormSchema';
import styles from './AdvanceFormModal.module.scss';

interface Friend {
  id: string;
  name: string;
  avatar: string;
}

interface FriendOption {
  value: string;
  text: string;
}

interface AdvanceFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  friend?: Friend;
  friendOptions?: FriendOption[];
}

export const AdvanceFormModal: React.FC<AdvanceFormModalProps> = ({
  isOpen,
  onClose,
  friend,
  friendOptions,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AdvanceFormData>({
    resolver: zodResolver(advanceFormSchema),
    defaultValues: {
      friendId: friend?.id || '',
      amount: '',
      date: new Date().toISOString().split('T')[0],
      note: '',
    },
  });

  const onSubmit = async (data: AdvanceFormData) => {
    console.log('立替申請:', data);
    await fetch('/api/main/advances', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    reset();
    onClose();
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="立替を申請">
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.form__group}>
          <label className={styles.form__label}>
            {friend ? '相手' : '誰に立て替えた？'}
          </label>
          {friend && (
            <div className={styles['form-static']}>
              <div className={styles['form-static__avatar']}>{friend.avatar}</div>
              <span className={styles['form-static__name']}>{friend.name}</span>
              <input type="hidden" {...register('friendId')} value={friend.id} />
            </div>
          )}
          {friendOptions && (
            <>
              <select
                className={styles.form__select}
                {...register('friendId')}
              >
                <option value="">フレンドを選択</option>
                {friendOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                ))}
              </select>
              {errors.friendId && (
                <p className={styles.form__error}>{errors.friendId.message}</p>
              )}
            </>
          )}
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
              {...register('amount')}
            />
          </div>
          {errors.amount && (
            <p className={styles.form__error}>{errors.amount.message}</p>
          )}
        </div>

        <div className={styles.form__group}>
          <label className={styles.form__label}>日付</label>
          <input
            type="date"
            className={styles.form__input}
            max={new Date().toISOString().split('T')[0]}
            {...register('date')}
          />
          {errors.date ? (
            <p className={styles.form__error}>{errors.date.message}</p>
          ) : (
            <p className={styles.form__hint}>未来の日付は選択できません</p>
          )}
        </div>

        <div className={styles.form__group}>
          <label className={styles.form__label}>メモ（任意）</label>
          <input
            type="text"
            className={styles.form__input}
            placeholder="例：ランチ代"
            {...register('note')}
          />
        </div>

        <div className={styles.form__footer}>
          <button
            type="button"
            className={styles['btn--secondary']}
            onClick={handleClose}
          >
            キャンセル
          </button>
          <button type="submit" className={styles['btn--primary']}>
            申請する
          </button>
        </div>
      </form>
    </Modal>
  );
};
