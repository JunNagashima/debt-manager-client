'use client';

import { useState } from "react";
import styles from './page.module.scss';
import BaseButton from "@/app/_components/Button/BaseButton";

const Page = () => {
  const [activeTab, setActiveTab] = useState('advance');
  const TAB_LIST = [
    { id: 'advance', name: '立替' },
    { id: 'borrow', name: '返済' },
  ];

  return (
    <>
      <div className={styles.tabs}>
        {TAB_LIST.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tab} ${tab.id === activeTab ? styles.active : ''}`}
            data-tab={tab.id}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className={styles.tabContent}>
        <form id="advanceForm" className={styles.inputForm}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="advanceUser">相手</label>
            <select id="advanceUser" className={styles.formSelect} required>
              <option value="">選択してください</option>
              <option value="user_002">佐藤花子</option>
              <option value="user_003">鈴木一郎</option>
              <option value="user_004">田中太郎</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="advanceAmount">金額</label>
            <div className={styles.inputWithPrefix}>
              <span className={styles.inputPrefix}>¥</span>
              <input
                type="text"
                id="advanceAmount"
                className={`${styles.formInput} ${styles.withPrefix}`}
                placeholder="0"
                required
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="advanceDate">発生日</label>
            <input
              type="date"
              id="advanceDate"
              className={styles.formInput}
              required
              value=""
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="advanceNote">メモ (任意)</label>
            <textarea
              id="advanceNote"
              className={styles.formTextarea}
              placeholder="例: ランチ代"
              rows={3}
            ></textarea>
          </div>

          <div className={styles.formActions}>
            <BaseButton type='secondary' size="large" clickEvent={() => console.log('クリア')}>クリア</BaseButton>
            <BaseButton type='primary' size="large" clickEvent={() => console.log('立替を登録')}>立替を登録</BaseButton>
          </div>
        </form>
      </div>
    </>
  );
}

export default Page;
