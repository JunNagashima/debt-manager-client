'use client';

import { useState } from 'react';
import styles from './RequestListStyle.module.scss';
import BaseButton from "@/app/_components/Button/BaseButton";
import { AiOutlineUser } from "react-icons/ai";

interface FriendRequest {
  id: string;
  userId: string;
  userName: string;
  receivedAt: string;
}

const RequestList = () => {
  const [requests, setRequests] = useState<FriendRequest[]>([
    {
      id: 'req_001',
      userId: 'user_005',
      userName: '山田花子',
      receivedAt: '2025-11-21',
    },
    {
      id: 'req_002',
      userId: 'user_006',
      userName: '高橋次郎',
      receivedAt: '2025-11-20',
    },
  ]);

  const handleApprove = (requestId: string) => {
    // TODO: API連携
    console.log('Approved:', requestId);
    setRequests(requests.filter(req => req.id !== requestId));
  };

  const handleIgnore = (requestId: string) => {
    // TODO: API連携
    console.log('Ignored:', requestId);
    setRequests(requests.filter(req => req.id !== requestId));
  };

  if (requests.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p className={styles.emptyMessage}>申請はありません</p>
      </div>
    );
  }

  return (
    <div className={styles.requestList}>
      {requests.map((request) => (
        <div key={request.id} className={styles.requestCard}>
          <div className={styles.requestHeader}>
            <div className={styles.friendAvatar}><AiOutlineUser /></div>
            <div className={styles.requestInfo}>
              <h3 className={styles.requestName}>{request.userName}</h3>
              <p className={styles.requestId}>{request.userId}</p>
              <p className={styles.requestDate}>{request.receivedAt} 受信</p>
            </div>
          </div>
          <div className={styles.btnGroup}>
            <BaseButton type='secondary' size='large' clickEvent={() => console.log('無視')}>無視</BaseButton>
            <BaseButton type='primary' size='large' clickEvent={() => console.log('承認')}>承認</BaseButton>
          </div>
        </div>
      ))
      }
    </div >
  );
};

export default RequestList;
