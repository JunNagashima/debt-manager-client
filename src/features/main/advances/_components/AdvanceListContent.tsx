'use client';

import React, { useState } from 'react';
import { Tabs } from './Tabs';
import { FilterChips } from './FilterChips';
import { ReceivedTab } from './ReceivedTab';
import { SentTab } from './SentTab';
import { AdvanceFormModal } from '@/app/(main)/_components/modals/AdvanceFormModal';
import { AdvanceDetailModal } from './modals/AdvanceDetailModal';
import { FAB } from './FAB';
import styles from './AdvanceListContent.module.scss';

type TabType = 'received' | 'sent';
type FilterType = 'all' | 'pending' | 'approved' | 'rejected';

interface FriendOption {
  value: string;
  text: string;
}

// モーダル用のデータ型
interface DetailModalState {
  isOpen: boolean;
  status: 'pending' | 'approved' | 'rejected';
  direction: 'sent' | 'received';
  data: {
    amount: number;
    counterpartyName: string;
    applicationDate: string;
    approvedDate?: string;
    rejectedDate?: string;
    memo?: string;
  };
}

interface AdvanceListContentProps {
  friendOptions: FriendOption[];
}

export const AdvanceListContent: React.FC<AdvanceListContentProps> = ({
  friendOptions,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('received');
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [detailModal, setDetailModal] = useState<DetailModalState>({
    isOpen: false,
    status: 'pending',
    direction: 'received',
    data: {
      amount: 0,
      counterpartyName: '',
      applicationDate: '',
    },
  });

  const openDetailModal = (
    status: 'pending' | 'approved' | 'rejected',
    direction: 'sent' | 'received',
    data: DetailModalState['data']
  ) => {
    setDetailModal({
      isOpen: true,
      status,
      direction,
      data,
    });
  };

  const closeDetailModal = () => {
    setDetailModal(prev => ({ ...prev, isOpen: false }));
  };

  const handleApprove = () => {
    console.log('立替申請承認');
    closeDetailModal();
  };

  const handleReject = () => {
    console.log('立替申請却下');
    closeDetailModal();
  };

  const handleCancel = () => {
    console.log('申請取消');
  };

  // 仮データ（実際はリストアイテムからクリック時に渡される）
  const handleReceivedPendingClick = () => {
    openDetailModal('pending', 'received', {
      amount: 3000,
      counterpartyName: '佐藤 花子',
      applicationDate: '2025/12/19',
      memo: 'ランチ代',
    });
  };

  const handleReceivedApprovedClick = () => {
    openDetailModal('approved', 'received', {
      amount: 2500,
      counterpartyName: '鈴木 一郎',
      applicationDate: '2025/12/15',
      approvedDate: '2025/12/15',
      memo: '飲み物代',
    });
  };

  const handleReceivedRejectedClick = () => {
    openDetailModal('rejected', 'received', {
      amount: 1000,
      counterpartyName: '高橋 健太',
      applicationDate: '2025/12/05',
      rejectedDate: '2025/12/06',
      memo: '交通費',
    });
  };

  const handleSentPendingClick = () => {
    openDetailModal('pending', 'sent', {
      amount: 2000,
      counterpartyName: '鈴木 一郎',
      applicationDate: '2025/12/20',
      memo: 'タクシー代',
    });
  };

  const handleSentApprovedClick = () => {
    openDetailModal('approved', 'sent', {
      amount: 1500,
      counterpartyName: '田中 太郎',
      applicationDate: '2025/12/18',
      approvedDate: '2025/12/18',
      memo: 'お菓子代',
    });
  };

  console.log('AdvanceListContent rendered:', { activeTab, activeFilter });

  return (
    <>
      {/* ヘッダー */}
      <header className={styles.header}>
        <h1 className={styles['header__title-center']}>立替申請</h1>
        <button
          className={styles['header__btn--right']}
          aria-label="新規作成"
          onClick={() => setIsCreateOpen(true)}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
      </header>

      {/* コンテンツ */}
      <div className={styles.content}>
        <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
        
        <FilterChips activeFilter={activeFilter} onFilterChange={setActiveFilter} />

        {activeTab === 'received' ? (
          <ReceivedTab
            filter={activeFilter}
            onApproveClick={handleReceivedPendingClick}
            onApprovedClick={handleReceivedApprovedClick}
            onRejectedClick={handleReceivedRejectedClick}
          />
        ) : (
          <SentTab
            filter={activeFilter}
            onPendingClick={handleSentPendingClick}
            onApprovedClick={handleSentApprovedClick}
          />
        )}
      </div>

      {/* FAB */}
      <FAB onClick={() => setIsCreateOpen(true)} />

      {/* モーダル群 */}
      <AdvanceFormModal
        isOpen={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
        friendOptions={friendOptions}
      />

      <AdvanceDetailModal
        isOpen={detailModal.isOpen}
        onClose={closeDetailModal}
        status={detailModal.status}
        direction={detailModal.direction}
        data={detailModal.data}
        onApprove={handleApprove}
        onReject={handleReject}
        onCancel={handleCancel}
      />
    </>
  );
};
