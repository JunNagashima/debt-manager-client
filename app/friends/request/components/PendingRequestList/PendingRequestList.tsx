'use client';

import { useState, useEffect } from 'react';
import styles from './PendingRequestListStyle.module.scss';

interface PendingRequest {
  id: string;
  userId: string;
  name: string;
  status: string;
}

export default function PendingRequestList() {
  const [pendingRequests, setPendingRequests] = useState<PendingRequest[]>([]);

  useEffect(() => {
    // TODO: Fetch pending requests from API
    // Mock data for now
    setPendingRequests([
      {
        id: '1',
        userId: 'user_005',
        name: '山田花子',
        status: '待機中',
      },
    ]);
  }, []);

  return (
    <div className={styles.pendingRequests}>
      <h3 className={styles.sectionTitle}>申請中</h3>

      {pendingRequests.length > 0 ? (
        <div className={styles.pendingList}>
          {pendingRequests.map((request) => (
            <div key={request.id} className={styles.pendingItem}>
              <div className={styles.friendAvatarSmall}>👤</div>
              <div className={styles.pendingInfo}>
                <span className={styles.pendingName}>{request.name}</span>
                <span className={styles.pendingId}>{request.userId}</span>
              </div>
              <span className={styles.pendingStatus}>{request.status}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <p className={styles.emptyMessage}>申請中のフレンドはいません</p>
        </div>
      )}
    </div>
  );
}
