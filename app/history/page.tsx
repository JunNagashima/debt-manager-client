import styles from './pageStyle.module.scss';
import HistoryClient from './components/HistoryClient/HistoryClient';

// Mock data fetch function - 実際はAPIから取得
async function getHistoryData() {
  const historyItems = [
    {
      id: 'adv_001',
      type: 'advance' as const,
      date: '2025-11-22',
      amount: 3000,
      userName: '佐藤花子',
      note: 'ランチ代',
      timestamp: '2025-11-22 12:00',
      isAdjustment: false,
    },
    {
      id: 'rep_001',
      type: 'repayment' as const,
      date: '2025-11-21',
      amount: 1000,
      userName: '鈴木一郎',
      note: 'ランチ代の返済',
      timestamp: '2025-11-21 15:30',
      isAdjustment: false,
    },
    {
      id: 'adj_001',
      type: 'adjustment' as const,
      date: '2025-11-20',
      amount: 500,
      userName: '佐藤花子',
      note: '返済削除調整',
      timestamp: 'system',
      isAdjustment: true,
    },
  ];

  const users = [
    { id: 'user_002', name: '佐藤花子' },
    { id: 'user_003', name: '鈴木一郎' },
    { id: 'user_004', name: '田中太郎' },
  ];

  return { historyItems, users };
}

export default async function HistoryPage() {
  const { historyItems, users } = await getHistoryData();

  return (
    <div className={styles.container}>
      <HistoryClient initialHistoryItems={historyItems} users={users} />
    </div>
  );
}
