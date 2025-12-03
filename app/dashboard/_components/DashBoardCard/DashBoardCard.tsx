'use client';

import styles from './DashBoardCard.module.scss';
import BaseButton from '@/app/_components/Button/BaseButton';

interface Props {
  userName: string;
  advanceAmount: number;
  borrowAmount: number;
}
const DashBoardCard = ({ userName, advanceAmount, borrowAmount }: Props) => {
  // 立替や借入があるかを判断する変数
  const hasBalance = advanceAmount !== 0 && borrowAmount !== 0;
  const netAmount = advanceAmount - borrowAmount;

  // 相殺後の金額によって適したテキストのclass名を返す関数
  const netAmountClass = () => {
    if (netAmount > 0) {
      return styles.positive;
    } else if (netAmount < 0) {
      return styles.negative;
    } else {
      return styles.neutral;
    }
  }

  // 相殺後の金額によって適した背景色のclass名を返す関数
  const netAmountBgClass = () => {
    if (netAmount > 0) {
      return styles.bgPositive;
    } else if (netAmount < 0) {
      return styles.bgNegative;
    } else {
      return styles.bgNeutral;
    }
  }

  // 立替,借入を渡して適したclass名を返す関数
  const amountClass = (type: 'advance' | 'borrow') => {
    const isPositive = netAmount > 0;
    const isNegative = netAmount < 0;
    switch (type) {
      case 'advance':
        return isPositive ? styles.positive : styles.primary;
      case 'borrow':
        return isNegative ? styles.negative : styles.primary;
      default:
        return styles.primary;
    }
  }

  // 現在のステータスの文言を返す関数
  const statusText = () => {
    // 立替,借入が0の場合は、精算済みを返す
    if (!hasBalance) {
      return '精算済み';
    }

    if (netAmount > 0) {
      return '立替中';
    } else if (netAmount < 0) {
      return '借入中';
    } else {
      return '精算可能です';
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <p className={styles.userName}>{userName}</p>
        <div className={`${styles.badge} ${netAmountBgClass()}`}>{statusText()}</div>
      </div>
      <div className={styles.cardBody}>
        {hasBalance && <div className={styles.balanceAmountGroup}>
          <div className={styles.balanceItem}>
            <span className={styles.balanceLabel}>あなたが立替</span>
            <span className={`${styles.balanceAmount} ${amountClass('advance')}`}>¥{advanceAmount.toLocaleString('ja-JP')}</span>
          </div>
          <div className={styles.balanceItem}>
            <span className={styles.balanceLabel}>あなたが借入</span>
            <span className={`${styles.balanceAmount} ${amountClass('borrow')}`}>¥{borrowAmount.toLocaleString('ja-JP')}</span>
          </div>
        </div>}
        <div className={styles.balanceNet}>
          <span className={styles.balanceLabel}>{hasBalance ? '相殺後' : '残高'}</span>
          <span className={`${styles.balanceAmount} ${netAmountClass()}`}>¥{netAmount.toLocaleString('ja-JP')}</span>
        </div>
      </div>
      <div className={styles.cardFooter}>
        <BaseButton type='secondary' size='small' clickEvent={() => alert('履歴を見る')}>履歴を見る</BaseButton>
        {hasBalance && <BaseButton type='primary' size='small' clickEvent={() => alert('相殺する')}>相殺する</BaseButton>}
      </div>
    </div>
  );
}

export default DashBoardCard;
