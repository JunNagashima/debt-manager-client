'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ProfileCard } from './ProfileCard';
import { SettingsSection } from './SettingsSection';
import { SettingsItem } from './SettingsItem';
import { ToggleSwitch } from './ToggleSwitch';
import { EditProfileModal } from './modals/EditProfileModal';
import { ChangeEmailModal } from './modals/ChangeEmailModal';
import { ChangePasswordModal } from './modals/ChangePasswordModal';
import { ThemeModal } from './modals/ThemeModal';
import { LanguageModal } from './modals/LanguageModal';
import { CurrencyModal } from './modals/CurrencyModal';
import { ExportModal } from './modals/ExportModal';
import { LogoutModal } from './modals/LogoutModal';
import { DeleteAccountModal } from './modals/DeleteAccountModal';
import styles from './SettingsContent.module.scss';

export const SettingsContent: React.FC = () => {
  const router = useRouter();
  const [pushNotification, setPushNotification] = useState(true);
  const [emailNotification, setEmailNotification] = useState(false);
  const [reminder, setReminder] = useState(true);

  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isChangeEmailOpen, setIsChangeEmailOpen] = useState(false);
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const [isDeleteAccountOpen, setIsDeleteAccountOpen] = useState(false);

  console.log('SettingsContent rendered');

  return (
    <>
      {/* ヘッダー */}
      <header className={styles.header}>
        <button
          className={styles.header__btn}
          aria-label="戻る"
          onClick={() => router.back()}
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
        <h1 className={styles.header__title}>設定</h1>
        <div className={styles.header__btn} style={{ visibility: 'hidden' }} />
      </header>

      {/* コンテンツ */}
      <div className={styles.content}>
        <ProfileCard onClick={() => setIsEditProfileOpen(true)} />

        {/* アカウント設定 */}
        <SettingsSection title="アカウント">
          <SettingsItem
            icon="user"
            label="プロフィール編集"
            onClick={() => setIsEditProfileOpen(true)}
          />
          <SettingsItem
            icon="mail"
            label="メールアドレス"
            value="hanako@example.com"
            onClick={() => setIsChangeEmailOpen(true)}
          />
          <SettingsItem
            icon="lock"
            label="パスワード変更"
            onClick={() => setIsChangePasswordOpen(true)}
          />
        </SettingsSection>

        {/* 通知設定 */}
        <SettingsSection title="通知">
          <SettingsItem
            icon="bell"
            label="プッシュ通知"
            description="立替申請や返済記録の通知"
            rightElement={
              <ToggleSwitch
                checked={pushNotification}
                onChange={setPushNotification}
              />
            }
          />
          <SettingsItem
            icon="mail"
            label="メール通知"
            description="週次サマリーをメールで受け取る"
            rightElement={
              <ToggleSwitch
                checked={emailNotification}
                onChange={setEmailNotification}
              />
            }
          />
          <SettingsItem
            icon="bell"
            label="リマインダー"
            description="未清算の残高をリマインド"
            rightElement={
              <ToggleSwitch checked={reminder} onChange={setReminder} />
            }
          />
        </SettingsSection>

        {/* アプリ設定 */}
        <SettingsSection title="アプリ">
          <SettingsItem
            icon="sun"
            label="テーマ"
            value="ライト"
            onClick={() => setIsThemeOpen(true)}
          />
          <SettingsItem
            icon="globe"
            label="言語"
            value="日本語"
            onClick={() => setIsLanguageOpen(true)}
          />
          <SettingsItem
            icon="dollar"
            label="通貨"
            value="日本円（¥）"
            onClick={() => setIsCurrencyOpen(true)}
          />
        </SettingsSection>

        {/* データ・プライバシー */}
        <SettingsSection title="データ・プライバシー">
          <SettingsItem
            icon="download"
            label="データをエクスポート"
            onClick={() => setIsExportOpen(true)}
          />
          <SettingsItem icon="shield" label="プライバシーポリシー" />
          <SettingsItem icon="file" label="利用規約" />
        </SettingsSection>

        {/* サポート */}
        <SettingsSection title="サポート">
          <SettingsItem icon="help" label="ヘルプ・FAQ" />
          <SettingsItem icon="message" label="お問い合わせ" />
          <SettingsItem icon="info" label="アプリについて" value="バージョン 1.0.0" />
        </SettingsSection>

        {/* ログアウト・退会 */}
        <SettingsSection>
          <SettingsItem
            icon="logout"
            label="ログアウト"
            variant="logout"
            onClick={() => setIsLogoutOpen(true)}
          />
          <SettingsItem
            icon="trash"
            label="アカウントを削除"
            variant="danger"
            onClick={() => setIsDeleteAccountOpen(true)}
          />
        </SettingsSection>
      </div>

      {/* モーダル群 */}
      <EditProfileModal
        isOpen={isEditProfileOpen}
        onClose={() => setIsEditProfileOpen(false)}
      />

      <ChangeEmailModal
        isOpen={isChangeEmailOpen}
        onClose={() => setIsChangeEmailOpen(false)}
      />

      <ChangePasswordModal
        isOpen={isChangePasswordOpen}
        onClose={() => setIsChangePasswordOpen(false)}
      />

      <ThemeModal
        isOpen={isThemeOpen}
        onClose={() => setIsThemeOpen(false)}
      />

      <LanguageModal
        isOpen={isLanguageOpen}
        onClose={() => setIsLanguageOpen(false)}
      />

      <CurrencyModal
        isOpen={isCurrencyOpen}
        onClose={() => setIsCurrencyOpen(false)}
      />

      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
      />

      <LogoutModal
        isOpen={isLogoutOpen}
        onClose={() => setIsLogoutOpen(false)}
      />

      <DeleteAccountModal
        isOpen={isDeleteAccountOpen}
        onClose={() => setIsDeleteAccountOpen(false)}
      />
    </>
  );
};
