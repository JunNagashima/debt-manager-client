'use client';

import styles from './OtherSettingsSectionStyle.module.scss';
import { AiOutlineRight } from "react-icons/ai";

const OtherSettingsSection = () => {
  const showAbout = () => {
    // TODO: アプリについてのモーダルを表示
    console.log('アプリについて');
  };

  const showHelp = () => {
    // TODO: ヘルプ画面へ遷移
    console.log('ヘルプ');
  };

  const logout = () => {
    // TODO: ログアウト処理
    if (confirm('ログアウトしますか？')) {
      console.log('ログアウト');
    }
  };

  return (
    <section className={styles.settingsSection}>
      <h3 className={styles.sectionTitle}>その他</h3>

      <div className={styles.settingsMenu}>
        <button className={styles.settingsMenuItem} onClick={showAbout}>
          <span className={styles.settingsMenuText}>アプリについて</span>
          <span className={styles.settingsMenuArrow}><AiOutlineRight /></span>
        </button>

        <button className={styles.settingsMenuItem} onClick={showHelp}>
          <span className={styles.settingsMenuText}>ヘルプ</span>
          <span className={styles.settingsMenuArrow}><AiOutlineRight /></span>
        </button>

        <button
          className={`${styles.settingsMenuItem} ${styles.danger}`}
          onClick={logout}
        >
          <span className={styles.settingsMenuText}>ログアウト</span>
          <span className={styles.settingsMenuArrow}><AiOutlineRight /></span>
        </button>
      </div>
    </section>
  );
};

export default OtherSettingsSection;
