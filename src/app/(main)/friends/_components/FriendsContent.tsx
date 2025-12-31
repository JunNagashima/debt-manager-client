'use client';

import React, { useState } from 'react';
import { SearchBox } from './SearchBox';
import { FriendRequestsSection } from './FriendRequestsSection';
import { PendingRequestsSection } from './PendingRequestsSection';
import { FriendsListSection } from './FriendsListSection';
import { AddFriendModal } from './modals/AddFriendModal';
import { AcceptConfirmModal } from './modals/AcceptConfirmModal';
import { RejectConfirmModal } from './modals/RejectConfirmModal';
import { CancelRequestModal } from './modals/CancelRequestModal';
import { FriendMenuModal } from './modals/FriendMenuModal';
import { RemoveFriendModal } from './modals/RemoveFriendModal';
import styles from './FriendsContent.module.scss';

export const FriendsContent: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddFriendOpen, setIsAddFriendOpen] = useState(false);
  const [isAcceptConfirmOpen, setIsAcceptConfirmOpen] = useState(false);
  const [isRejectConfirmOpen, setIsRejectConfirmOpen] = useState(false);
  const [isCancelRequestOpen, setIsCancelRequestOpen] = useState(false);
  const [isFriendMenuOpen, setIsFriendMenuOpen] = useState(false);
  const [isRemoveFriendOpen, setIsRemoveFriendOpen] = useState(false);

  console.log('FriendsContent rendered:', { searchQuery });

  return (
    <>
      {/* ヘッダー */}
      <header className={styles.header}>
        <h1 className={styles['header__title-center']}>フレンド</h1>
        <button
          className={styles['header__btn--right']}
          aria-label="フレンド追加"
          onClick={() => setIsAddFriendOpen(true)}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="8.5" cy="7" r="4"></circle>
            <line x1="20" y1="8" x2="20" y2="14"></line>
            <line x1="23" y1="11" x2="17" y2="11"></line>
          </svg>
        </button>
      </header>

      {/* コンテンツ */}
      <div className={styles.content}>
        <SearchBox value={searchQuery} onChange={setSearchQuery} />

        <FriendRequestsSection
          onAcceptClick={() => setIsAcceptConfirmOpen(true)}
          onRejectClick={() => setIsRejectConfirmOpen(true)}
        />

        <PendingRequestsSection
          onCancelClick={() => setIsCancelRequestOpen(true)}
        />

        <FriendsListSection
          searchQuery={searchQuery}
          onMenuClick={() => setIsFriendMenuOpen(true)}
        />
      </div>

      {/* FAB */}
      <button
        className={styles.fab}
        onClick={() => setIsAddFriendOpen(true)}
        aria-label="フレンド追加"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="8.5" cy="7" r="4"></circle>
          <line x1="20" y1="8" x2="20" y2="14"></line>
          <line x1="23" y1="11" x2="17" y2="11"></line>
        </svg>
      </button>

      {/* モーダル群 */}
      <AddFriendModal
        isOpen={isAddFriendOpen}
        onClose={() => setIsAddFriendOpen(false)}
      />

      <AcceptConfirmModal
        isOpen={isAcceptConfirmOpen}
        onClose={() => setIsAcceptConfirmOpen(false)}
      />

      <RejectConfirmModal
        isOpen={isRejectConfirmOpen}
        onClose={() => setIsRejectConfirmOpen(false)}
      />

      <CancelRequestModal
        isOpen={isCancelRequestOpen}
        onClose={() => setIsCancelRequestOpen(false)}
      />

      <FriendMenuModal
        isOpen={isFriendMenuOpen}
        onClose={() => setIsFriendMenuOpen(false)}
        onRemoveClick={() => {
          setIsFriendMenuOpen(false);
          setIsRemoveFriendOpen(true);
        }}
      />

      <RemoveFriendModal
        isOpen={isRemoveFriendOpen}
        onClose={() => setIsRemoveFriendOpen(false)}
      />
    </>
  );
};
