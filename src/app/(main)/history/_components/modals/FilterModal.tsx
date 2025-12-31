'use client';

import React, { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import styles from './FilterModal.module.scss';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FilterModal: React.FC<FilterModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [types, setTypes] = useState({
    advance: true,
    repayment: true,
    offset: true,
  });
  const [friend, setFriend] = useState('');
  const [dateFrom, setDateFrom] = useState('2025-12-01');
  const [dateTo, setDateTo] = useState('2025-12-21');
  const [amountMin, setAmountMin] = useState('');
  const [amountMax, setAmountMax] = useState('');
  const [statuses, setStatuses] = useState({
    confirmed: true,
    pending: true,
    rejected: false,
  });

  const handleReset = () => {
    setTypes({ advance: true, repayment: true, offset: true });
    setFriend('');
    setDateFrom('2025-12-01');
    setDateTo('2025-12-21');
    setAmountMin('');
    setAmountMax('');
    setStatuses({ confirmed: true, pending: true, rejected: false });
  };

  const handleApply = () => {
    console.log('フィルター適用:', {
      types,
      friend,
      dateFrom,
      dateTo,
      amountMin,
      amountMax,
      statuses,
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="絞り込み">
      <div className={styles.modal}>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>取引の種類</label>
          <div className={styles['checkbox-group']}>
            <label className={styles['checkbox-item']}>
              <input
                type="checkbox"
                checked={types.advance}
                onChange={(e) =>
                  setTypes({ ...types, advance: e.target.checked })
                }
              />
              <span className={styles['checkbox-item__label']}>立替</span>
            </label>
            <label className={styles['checkbox-item']}>
              <input
                type="checkbox"
                checked={types.repayment}
                onChange={(e) =>
                  setTypes({ ...types, repayment: e.target.checked })
                }
              />
              <span className={styles['checkbox-item__label']}>返済</span>
            </label>
            <label className={styles['checkbox-item']}>
              <input
                type="checkbox"
                checked={types.offset}
                onChange={(e) =>
                  setTypes({ ...types, offset: e.target.checked })
                }
              />
              <span className={styles['checkbox-item__label']}>相殺</span>
            </label>
          </div>
        </div>

        <div className={styles['form-group']}>
          <label className={styles['form-label']}>フレンド</label>
          <select
            className={styles['form-select']}
            value={friend}
            onChange={(e) => setFriend(e.target.value)}
          >
            <option value="">すべてのフレンド</option>
            <option value="1">佐藤 花子</option>
            <option value="2">鈴木 一郎</option>
            <option value="3">田中 美咲</option>
            <option value="4">高橋 健太</option>
          </select>
        </div>

        <div className={styles['form-group']}>
          <label className={styles['form-label']}>期間</label>
          <div className={styles['date-range']}>
            <input
              type="date"
              className={styles['form-input']}
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
            />
            <span className={styles['date-range__separator']}>〜</span>
            <input
              type="date"
              className={styles['form-input']}
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
            />
          </div>
        </div>

        <div className={styles['form-group']}>
          <label className={styles['form-label']}>金額</label>
          <div className={styles['amount-range']}>
            <div className={styles['form-amount']}>
              <span className={styles['form-amount__prefix']}>¥</span>
              <input
                type="number"
                className={styles['form-input']}
                placeholder="下限"
                value={amountMin}
                onChange={(e) => setAmountMin(e.target.value)}
              />
            </div>
            <span className={styles['amount-range__separator']}>〜</span>
            <div className={styles['form-amount']}>
              <span className={styles['form-amount__prefix']}>¥</span>
              <input
                type="number"
                className={styles['form-input']}
                placeholder="上限"
                value={amountMax}
                onChange={(e) => setAmountMax(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className={styles['form-group']}>
          <label className={styles['form-label']}>ステータス</label>
          <div className={styles['checkbox-group']}>
            <label className={styles['checkbox-item']}>
              <input
                type="checkbox"
                checked={statuses.confirmed}
                onChange={(e) =>
                  setStatuses({ ...statuses, confirmed: e.target.checked })
                }
              />
              <span className={styles['checkbox-item__label']}>確定済み</span>
            </label>
            <label className={styles['checkbox-item']}>
              <input
                type="checkbox"
                checked={statuses.pending}
                onChange={(e) =>
                  setStatuses({ ...statuses, pending: e.target.checked })
                }
              />
              <span className={styles['checkbox-item__label']}>承認待ち</span>
            </label>
            <label className={styles['checkbox-item']}>
              <input
                type="checkbox"
                checked={statuses.rejected}
                onChange={(e) =>
                  setStatuses({ ...statuses, rejected: e.target.checked })
                }
              />
              <span className={styles['checkbox-item__label']}>却下</span>
            </label>
          </div>
        </div>

        <div className={styles['form-footer']}>
          <button className={styles['btn--secondary']} onClick={handleReset}>
            リセット
          </button>
          <button className={styles['btn--primary']} onClick={handleApply}>
            適用する
          </button>
        </div>
      </div>
    </Modal>
  );
};
