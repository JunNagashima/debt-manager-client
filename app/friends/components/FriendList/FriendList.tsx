'use client';

import Link from 'next/link';
import FriendCard from '../FriendCard/FriendCard';
import styles from './FriendListStyle.module.scss';
import { AiOutlinePlus } from "react-icons/ai";

const FriendList = () => {
  const friends = [
    {
      id: 'user_002',
      name: '佐藤花子',
      userId: 'user_002',
      balanceType: 'advance' as const,
      balanceAmount: 6000,
    },
    {
      id: 'user_003',
      name: '鈴木一郎',
      userId: 'user_003',
      balanceType: 'borrowed' as const,
      balanceAmount: 2000,
    },
    {
      id: 'user_004',
      name: '田中太郎',
      userId: 'user_004',
      balanceType: 'neutral' as const,
      balanceAmount: 0,
    },
  ];

  return (
    <>
      <div className={styles.friendList}>
        {friends.map((friend) => (
          <FriendCard key={friend.id} {...friend} />
        ))}
      </div>

      <div className={styles.addFriendBtnWrapper}>
        <Link href="/friends/request" className={styles.addFriendBtn}>
          <AiOutlinePlus /> フレンドを追加
        </Link>
      </div>
    </>
  );
};

export default FriendList;
