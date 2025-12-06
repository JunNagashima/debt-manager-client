'use client';

import { useState } from 'react';
import styles from './AccountInfoSectionStyle.module.scss';

const AccountInfoSection = () => {
  const [userName, setUserName] = useState('山田太郎');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: API連携
    console.log('名前を更新:', userName);
  };

  return (
    <section className={styles.settingsSection}>
      <h3 className={styles.sectionTitle}>アカウント情報</h3>
      
      <form onSubmit={handleSubmit} className={styles.settingsForm}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="userId">
            ユーザーID
          </label>
          <input 
            type="text" 
            id="userId" 
            className={styles.formInput} 
            value="user_001" 
            disabled
          />
          <p className={styles.formHint}>※ ユーザーIDは変更できません</p>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="userName">
            名前
          </label>
          <input 
            type="text" 
            id="userName" 
            className={styles.formInput} 
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            maxLength={100}
          />
        </div>

        <div className={styles.formActions}>
          <button type="submit" className={styles.btnPrimary}>
            保存する
          </button>
        </div>
      </form>
    </section>
  );
};

export default AccountInfoSection;
