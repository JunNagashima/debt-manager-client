import styles from './TabsStyle.module.scss';

interface Tab {
  id: 'friends' | 'requests';
  label: string;
  badge?: number;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: 'friends' | 'requests';
  onTabChange: (tabId: 'friends' | 'requests') => void;
}

const Tabs = ({ tabs, activeTab, onTabChange }: TabsProps) => {
  return (
    <div className={styles.tabs}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
          {tab.badge && tab.badge > 0 && (
            <span className={styles.tabBadge}>{tab.badge}</span>
          )}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
