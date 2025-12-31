'use client';

import React, { useState } from 'react';
import { InfoBanner } from './InfoBanner';
import { OffsetCandidates } from './OffsetCandidates';
import { Tabs } from './Tabs';
import { ReceivedTab } from './ReceivedTab';
import { SentTab } from './SentTab';
import { HelpModal } from './modals/HelpModal';
import { CreateOffsetModal } from './modals/CreateOffsetModal';
import { ApproveOffsetModal } from './modals/ApproveOffsetModal';
import { ApprovedDetailModal } from './modals/ApprovedDetailModal';
import { RejectedDetailModal } from './modals/RejectedDetailModal';
import { SentPendingDetailModal } from './modals/SentPendingDetailModal';
import styles from './OffsetListContent.module.scss';

type TabType = 'received' | 'sent';

export const OffsetListContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('received');
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isApproveOpen, setIsApproveOpen] = useState(false);
  const [isApprovedDetailOpen, setIsApprovedDetailOpen] = useState(false);
  const [isRejectedDetailOpen, setIsRejectedDetailOpen] = useState(false);
  const [isSentPendingDetailOpen, setIsSentPendingDetailOpen] = useState(false);

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
            onApprovedClick={() => setIsApprovedDetailOpen(true)}
            onRejectedClick={() => setIsRejectedDetailOpen(true)}
          />
        ) : (
          <SentTab
            onPendingClick={() => setIsSentPendingDetailOpen(true)}
            onApprovedClick={() => setIsApprovedDetailOpen(true)}
          />
        )}
      </div>

      {/* モーダル群 */}
      <HelpModal isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />

      <CreateOffsetModal
        isOpen={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
      />

      <ApproveOffsetModal
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
