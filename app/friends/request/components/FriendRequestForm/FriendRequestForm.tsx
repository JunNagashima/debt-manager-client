'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import styles from './FriendRequestFormStyle.module.scss';

export default function FriendRequestForm() {
  const [targetUserId, setTargetUserId] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: API call to send friend request
    console.log('Friend request sent to:', targetUserId);
    setTargetUserId('');
  };

  return (
    <form id="friendRequestForm" onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label className={styles.formLabel} htmlFor="targetUserId">
          ユーザーID
        </label>
        <input
          type="text"
          id="targetUserId"
          className={styles.formInput}
          placeholder="例: user_002"
          required
          pattern="[a-zA-Z0-9_]{3,50}"
          value={targetUserId}
          onChange={(e) => setTargetUserId(e.target.value)}
        />
        <p className={styles.formHint}>相手のユーザーIDを入力してください</p>
      </div>

      <div className={styles.formActions}>
        <Link href="/friends" className={`${styles.btn} ${styles.btnSecondary} ${styles.btnLarge}`}>
          キャンセル
        </Link>
        <button type="submit" className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLarge}`}>
          申請する
        </button>
      </div>
    </form>
  );
}
