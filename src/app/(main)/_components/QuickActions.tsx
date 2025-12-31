'use client';

import React, { useState } from 'react';
import { AdvanceModal } from './modals/AdvanceModal';
import { RepaymentModal } from './modals/RepaymentModal';
import { OffsetModal } from './modals/OffsetModal';
import styles from './QuickActions.module.scss';

export const QuickActions: React.FC = () => {
  const [isAdvanceOpen, setIsAdvanceOpen] = useState(false);
  const [isRepaymentOpen, setIsRepaymentOpen] = useState(false);
  const [isOffsetOpen, setIsOffsetOpen] = useState(false);

  return (
    <>
      <section className={styles['quick-actions']}>
        <button
          className={styles['quick-action']}
          onClick={() => setIsAdvanceOpen(true)}
        >
          <div
            className={`${styles['quick-action__icon']} ${styles['quick-action__icon--advance']}`}
          >
            💸
          </div>
          <span className={styles['quick-action__label']}>立替を申請</span>
        </button>
        <button
          className={styles['quick-action']}
          onClick={() => setIsRepaymentOpen(true)}
        >
          <div
            className={`${styles['quick-action__icon']} ${styles['quick-action__icon--repayment']}`}
          >
            💰
          </div>
          <span className={styles['quick-action__label']}>返済を記録</span>
        </button>
        <button
          className={styles['quick-action']}
          onClick={() => setIsOffsetOpen(true)}
        >
          <div
            className={`${styles['quick-action__icon']} ${styles['quick-action__icon--offset']}`}
          >
            ⚖️
          </div>
          <span className={styles['quick-action__label']}>相殺を提案</span>
        </button>
      </section>

      <AdvanceModal
        isOpen={isAdvanceOpen}
        onClose={() => setIsAdvanceOpen(false)}
      />
      <RepaymentModal
        isOpen={isRepaymentOpen}
        onClose={() => setIsRepaymentOpen(false)}
      />
      <OffsetModal
        isOpen={isOffsetOpen}
        onClose={() => setIsOffsetOpen(false)}
      />
    </>
  );
};
