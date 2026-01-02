'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { DetailSummary } from './DetailSummary';
import { DetailActions } from './DetailActions';
import { BreakdownCard } from './BreakdownCard';
import { Timeline } from './Timeline';
import { MenuModal } from './modals/MenuModal';
import { AdvanceFormModal } from '@/app/(main)/_components/modals/AdvanceFormModal';
import { RepaymentFormModal } from '@/app/(main)/_components/modals/RepaymentFormModal';
import { OffsetFormModal } from '@/app/(main)/_components/modals/OffsetFormModal';
import { TransactionDetailModal } from './modals/TransactionDetailModal';
import styles from './BalanceDetailContent.module.scss';

interface BalanceDetailContentProps {
  userId: string;
}

export const BalanceDetailContent: React.FC<BalanceDetailContentProps> = ({
  userId,
}) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdvanceOpen, setIsAdvanceOpen] = useState(false);
  const [isRepaymentOpen, setIsRepaymentOpen] = useState(false);
  const [isOffsetOpen, setIsOffsetOpen] = useState(false);
  const [isTransactionDetailOpen, setIsTransactionDetailOpen] = useState(false);
  const [historyFilter, setHistoryFilter] = useState<'all' | 'advance' | 'repayment'>('all');

  console.log('BalanceDetailContent rendered:', { userId, historyFilter });

  const handleBack = () => {
    console.log('Back button clicked');
    router.back();
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as 'all' | 'advance' | 'repayment';
    console.log('Filter changed:', value);
    setHistoryFilter(value);
  };

  return (
    <>
      {/* ヘッダー */}
      <header className={styles.header}>
        <button
          className={styles.header__btn}
          aria-label="戻る"
          onClick={handleBack}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className={styles.header__title}>残高詳細</h1>
        <button
          className={styles.header__btn}
          aria-label="メニュー"
          onClick={() => setIsMenuOpen(true)}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="12" cy="5" r="1"></circle>
            <circle cx="12" cy="19" r="1"></circle>
          </svg>
        </button>
      </header>

      {/* コンテンツ */}
      <div className={styles.content}>
        <DetailSummary />
        
        <DetailActions
          onAdvanceClick={() => setIsAdvanceOpen(true)}
          onRepaymentClick={() => setIsRepaymentOpen(true)}
        />

        <BreakdownCard />

        <section className={styles.section}>
          <div className={styles.section__header}>
            <h3 className={styles.section__title}>取引履歴</h3>
            <select
              className={styles['filter-select']}
              value={historyFilter}
              onChange={handleFilterChange}
            >
              <option value="all">すべて</option>
              <option value="advance">立替のみ</option>
              <option value="repayment">返済のみ</option>
            </select>
          </div>

          <Timeline
            filter={historyFilter}
            onTransactionClick={() => setIsTransactionDetailOpen(true)}
          />
        </section>
      </div>

      {/* モーダル群 */}
      <MenuModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onOffsetClick={() => {
          setIsMenuOpen(false);
          setIsOffsetOpen(true);
        }}
      />

      <AdvanceFormModal
        isOpen={isAdvanceOpen}
        onClose={() => setIsAdvanceOpen(false)}
        friend={{ id: '1', name: '佐藤 花子', avatar: '佐' }}
      />

      <RepaymentFormModal
        isOpen={isRepaymentOpen}
        onClose={() => setIsRepaymentOpen(false)}
        friend={{ id: '1', name: '佐藤 花子', avatar: '佐', balance: '現在 ¥6,000 貸し' }}
      />

      <OffsetFormModal
        isOpen={isOffsetOpen}
        onClose={() => setIsOffsetOpen(false)}
        friend={{ id: '1', name: '佐藤 花子', avatar: '佐' }}
      />

      <TransactionDetailModal
        isOpen={isTransactionDetailOpen}
        onClose={() => setIsTransactionDetailOpen(false)}
      />
    </>
  );
};
