'use client';

import React, { useState } from 'react';
import { Tabs } from './Tabs';
import { FilterChips } from './FilterChips';
import { ReceivedTab } from './ReceivedTab';
import { SentTab } from './SentTab';
import { CreateAdvanceModal } from './modals/CreateAdvanceModal';
import { ApproveAdvanceModal } from './modals/ApproveAdvanceModal';
import { ApprovedDetailModal } from './modals/ApprovedDetailModal';
import { RejectedDetailModal } from './modals/RejectedDetailModal';
import { SentPendingDetailModal } from './modals/SentPendingDetailModal';
import { FAB } from './FAB';
import styles from './AdvanceListContent.module.scss';

type TabType = 'received' | 'sent';
type FilterType = 'all' | 'pending' | 'approved' | 'rejected';

export const AdvanceListContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('received');
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isApproveOpen, setIsApproveOpen] = useState(false);
  const [isApprovedDetailOpen, setIsApprovedDetailOpen] = useState(false);
  const [isRejectedDetailOpen, setIsRejectedDetailOpen] = useState(false);
  const [isSentPendingDetailOpen, setIsSentPendingDetailOpen] = useState(false);

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
            onApproveClick={() => setIsApproveOpen(true)}
            onApprovedClick={() => setIsApprovedDetailOpen(true)}
            onRejectedClick={() => setIsRejectedDetailOpen(true)}
          />
        ) : (
          <SentTab
            filter={activeFilter}
            onPendingClick={() => setIsSentPendingDetailOpen(true)}
            onApprovedClick={() => setIsApprovedDetailOpen(true)}
          />
        )}
      </div>

      {/* FAB */}
      <FAB onClick={() => setIsCreateOpen(true)} />

      {/* モーダル群 */}
      <CreateAdvanceModal
        isOpen={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
      />

      <ApproveAdvanceModal
        isOpen={isApproveOpen}
        onClose={() => setIsApproveOpen(false)}
      />

      <ApprovedDetailModal
        isOpen={isApprovedDetailOpen}
        onClose={() => setIsApprovedDetailOpen(false)}
      />

      <RejectedDetailModal
        isOpen={isRejectedDetailOpen}
        onClose={() => setIsRejectedDetailOpen(false)}
      />

      <SentPendingDetailModal
        isOpen={isSentPendingDetailOpen}
        onClose={() => setIsSentPendingDetailOpen(false)}
      />
    </>
  );
};
