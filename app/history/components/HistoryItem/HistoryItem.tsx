'use client';

import styles from './HistoryItemStyle.module.scss';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

interface HistoryItemProps {
  id: string;
  type: 'advance' | 'repayment' | 'adjustment';
  date: string;
  amount: number;
  userName: string;
  note: string;
  timestamp: string;
  isAdjustment: boolean;
  onEdit: (id: string, type: string) => void;
  onDelete: (id: string, type: string) => void;
}

export default function HistoryItem({
  id,
  type,
  date,
  amount,
  userName,
  note,
  timestamp,
  isAdjustment,
  onEdit,
  onDelete,
}: HistoryItemProps) {
  const typeConfig = {
    advance: { label: '立替', className: styles.advance },
    repayment: { label: '返済', className: styles.repayment },
    adjustment: { label: '調整', className: styles.adjustment },
  };

  const config = typeConfig[type];

  return (
    <div className={`${styles.historyItem} ${config.className}`}>
      <div className={styles.historyHeader}>
        <div className={styles.historyMeta}>
          <span className={styles.historyDate}>{date}</span>
          <span className={`${styles.historyType} ${config.className}`}>
            {config.label}
          </span>
        </div>
        <span
          className={`${styles.historyAmount} ${type === 'advance' ? styles.positive : ''
            }`}
        >
          ¥{amount.toLocaleString()}
        </span>
      </div>

      <div className={styles.historyBody}>
        <div className={styles.historyUser}>
          <span className={styles.userAvatarSmall}><AiOutlineUser /></span>
          <span className={styles.userName}>{userName}</span>
        </div>
        <p className={styles.historyNote}>{note}</p>
      </div>

      <div className={styles.historyFooter}>
        <span className={styles.historyTimestamp}>
          {isAdjustment ? '作成: ' : '登録: '}
          {timestamp}
        </span>
        <div className={styles.historyActions}>
          {isAdjustment ? (
            <span className={styles.historyReadonly}>編集・削除不可</span>
          ) : (
            <>
              <button
                className={styles.btnIcon}
                onClick={() => onEdit(id, type)}
                title="編集"
              >
                <AiFillEdit />
              </button>
              <button
                className={`${styles.btnIcon} ${styles.danger}`}
                onClick={() => onDelete(id, type)}
                title="削除"
              >
                <AiFillDelete />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
