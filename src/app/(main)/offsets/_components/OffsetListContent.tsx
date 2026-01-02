'use client';

import React, { useState } from 'react';
import { InfoBanner } from './InfoBanner';
import { OffsetCandidates } from './OffsetCandidates';
import { Tabs } from './Tabs';
import { ReceivedTab } from './ReceivedTab';
import { SentTab } from './SentTab';
import { HelpModal } from './modals/HelpModal';
import { OffsetFormModal } from '@/app/(main)/_components/modals/OffsetFormModal';
import { OffsetApproveModal } from './modals/OffsetApproveModal';
import { OffsetDetailModal } from './modals/OffsetDetailModal';
import styles from './OffsetListContent.module.scss';

type TabType = 'received' | 'sent';

export const OffsetListContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('received');
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isApproveOpen, setIsApproveOpen] = useState(false);
  const [detailStatus, setDetailStatus] = useState<'approved' | 'rejected' | 'pending' | null>(null);

  console.log('OffsetListContent rendered:', { activeTab });

  return (
    <>
      {/* ヘッダー */}
      <header className={styles.header}>
        <h1 className={styles['header__title-center']}>相殺申請</h1>
        <button
          className={styles['header__btn--right']}
          aria-label="相殺とは"
          onClick={() => setIsHelpOpen(true)}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        </button>
      </header>

      {/* コンテンツ */}
      <div className={styles.content}>
        <InfoBanner />

        <OffsetCandidates onProposeClick={() => setIsCreateOpen(true)} />

        <Tabs activeTab={activeTab} onTabChange={setActiveTab} />

        {activeTab === 'received' ? (
          <ReceivedTab
            onApproveClick={() => setIsApproveOpen(true)}
            onApprovedClick={() => setDetailStatus('approved')}
            onRejectedClick={() => setDetailStatus('rejected')}
          />
        ) : (
          <SentTab
            onPendingClick={() => setDetailStatus('pending')}
            onApprovedClick={() => setDetailStatus('approved')}
          />
        )}
      </div>

      {/* モーダル群 */}
      <HelpModal isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />

      <OffsetFormModal
        isOpen={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
      />

      <OffsetApproveModal
        isOpen={isApproveOpen}
        onClose={() => setIsApproveOpen(false)}
      />

      {detailStatus && (
        <OffsetDetailModal
          isOpen={true}
          onClose={() => setDetailStatus(null)}
          status={detailStatus}
        />
      )}
    </>
  );
};
