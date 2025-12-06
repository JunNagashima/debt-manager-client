'use client';

import HistoryItem from '../HistoryItem/HistoryItem';
import styles from './HistoryListStyle.module.scss';

interface HistoryItemData {
  id: string;
  type: 'advance' | 'repayment' | 'adjustment';
  date: string;
  amount: number;
  userName: string;
  note: string;
  timestamp: string;
  isAdjustment: boolean;
}

interface HistoryListProps {
  items: HistoryItemData[];
  onEdit: (id: string, type: string) => void;
  onDelete: (id: string, type: string) => void;
}

export default function HistoryList({ items, onEdit, onDelete }: HistoryListProps) {
  if (items.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p className={styles.emptyMessage}>履歴がありません</p>
      </div>
    );
  }

  return (
    <div className={styles.historyList}>
      {items.map((item) => (
        <HistoryItem
          key={item.id}
          {...item}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
