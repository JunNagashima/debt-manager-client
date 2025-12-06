import AccountInfoSection from './components/AccountInfoSection/AccountInfoSection';
import OtherSettingsSection from './components/OtherSettingsSection/OtherSettingsSection';
import styles from './page.module.scss';

const SettingsPage = () => {
  return (
    <div className={styles.container}>
      <AccountInfoSection />
      <OtherSettingsSection />
    </div>
  );
};

export default SettingsPage;
