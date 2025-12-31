'use client';

import React, { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import styles from './AddFriendModal.module.scss';

interface AddFriendModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TabType = 'search' | 'qr';

export const AddFriendModal: React.FC<AddFriendModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('search');
  const [userId, setUserId] = useState('');
  const [searchResult, setSearchResult] = useState<'none' | 'found' | 'notfound'>('none');

  const handleSearch = () => {
    if (userId.trim()) {
      // デモ用: 実際はAPI呼び出し
      setSearchResult('found');
    } else {
      setSearchResult('notfound');
    }
  };

  const handleSendRequest = () => {
    console.log('フレンド申請送信:', userId);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="フレンドを追加">
      <div className={styles.modal}>
        {/* タブ */}
        <div className={styles['add-friend-tabs']}>
          <button
            className={`${styles['add-friend-tabs__item']} ${
              activeTab === 'search' ? styles['add-friend-tabs__item--active'] : ''
            }`}
            onClick={() => setActiveTab('search')}
          >
            ID検索
          </button>
          <button
            className={`${styles['add-friend-tabs__item']} ${
              activeTab === 'qr' ? styles['add-friend-tabs__item--active'] : ''
            }`}
            onClick={() => setActiveTab('qr')}
          >
            QRコード
          </button>
        </div>

        {/* ID検索タブ */}
        {activeTab === 'search' && (
          <div className={styles['add-friend-content']}>
            <div className={styles['form-group']}>
              <label className={styles['form-label']}>ユーザーIDで検索</label>
              <div className={styles['search-input-group']}>
                <span className={styles['search-input-group__prefix']}>@</span>
                <input
                  type="text"
                  className={styles['form-input']}
                  placeholder="ユーザーIDを入力"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
                <button
                  className={styles['search-input-group__btn']}
                  onClick={handleSearch}
                >
                  検索
                </button>
              </div>
            </div>

            {/* 検索結果（見つかった） */}
            {searchResult === 'found' && (
              <div className={styles['search-result']}>
                <div className={styles['search-result__card']}>
                  <div className={styles['search-result__avatar']}>木</div>
                  <div className={styles['search-result__info']}>
                    <p className={styles['search-result__name']}>木村 健一</p>
                    <p className={styles['search-result__id']}>@kimura_k</p>
                  </div>
                  <button
                    className={styles['search-result__btn']}
                    onClick={handleSendRequest}
                  >
                    申請する
                  </button>
                </div>
              </div>
            )}

            {/* 検索結果（見つからない） */}
            {searchResult === 'notfound' && (
              <div className={styles['search-result-empty']}>
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
                <p>ユーザーが見つかりませんでした</p>
              </div>
            )}
          </div>
        )}

        {/* QRコードタブ */}
        {activeTab === 'qr' && (
          <div className={styles['add-friend-content']}>
            <div className={styles['qr-section']}>
              <p className={styles['qr-section__title']}>自分のQRコード</p>
              <div className={styles['qr-section__code']}>
                <div className={styles['qr-placeholder']}>
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                    <rect x="14" y="14" width="3" height="3"></rect>
                    <rect x="18" y="14" width="3" height="3"></rect>
                    <rect x="14" y="18" width="3" height="3"></rect>
                    <rect x="18" y="18" width="3" height="3"></rect>
                  </svg>
                </div>
                <p className={styles['qr-section__id']}>@yamada_hanako</p>
              </div>
              <button className={styles['qr-section__btn']}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect
                    x="9"
                    y="9"
                    width="13"
                    height="13"
                    rx="2"
                    ry="2"
                    ry="2"
                  ></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                IDをコピー
              </button>
            </div>
            <div className={styles['qr-divider']}>
              <span>または</span>
            </div>
            <button className={styles['qr-scan-btn']}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M23 19a2 2 0 0 1-2 2h-3"></path>
                <path d="M21 14v-1a2 2 0 0 0-2-2h-1"></path>
                <path d="M14 21h-1a2 2 0 0 1-2-2v-1"></path>
                <path d="M1 5a2 2 0 0 1 2-2h3"></path>
                <path d="M3 10V9a2 2 0 0 1 2-2h1"></path>
                <path d="M10 3h1a2 2 0 0 1 2 2v1"></path>
              </svg>
              QRコードをスキャン
            </button>
          </div>
        )}
      </div>
    </Modal>
  );
};
