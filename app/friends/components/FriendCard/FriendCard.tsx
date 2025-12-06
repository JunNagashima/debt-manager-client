'use client';

import { useRouter } from 'next/navigation';
import styles from './FriendCardStyle.module.scss';
import { AiOutlineRight, AiOutlineUser } from "react-icons/ai";

interface FriendCardProps {
  id: string;
  name: string;
  userId: string;
  balanceType: 'advance' | 'borrowed' | 'neutral';
  balanceAmount: number;
}

const FriendCard = ({ id, name, userId, balanceType, balanceAmount }: FriendCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/history?userId=${id}`);
  };

  const getBalanceLabel = () => {
    if (balanceType === 'advance') return 'あなたが立替:';
    if (balanceType === 'borrowed') return 'あなたが借入:';
    return '残高:';
  };

  return (
    <div className={styles.friendCard} onClick={handleClick}>
      <div className={styles.friendAvatar}><AiOutlineUser /></div>
      <div className={styles.friendInfo}>
        <h3 className={styles.friendName}>{name}</h3>
        <p className={styles.friendId}>{userId}</p>
        <div className={styles.friendBalance}>
          <span className={styles.balanceLabel}>{getBalanceLabel()}</span>
          <span className={`${styles.balanceValue} ${styles[balanceType]}`}>
            ¥{balanceAmount.toLocaleString()}
          </span>
        </div>
      </div>
      <div className={styles.friendArrow}><AiOutlineRight /></div>
    </div>
  );
};

export default FriendCard;
