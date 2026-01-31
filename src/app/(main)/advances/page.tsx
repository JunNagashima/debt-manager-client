import { AdvanceListContent } from '@/features/main/advances/_components/AdvanceListContent';

export default function AdvanceListPage() {
  console.log('AdvanceListPage: Server Component rendered');

  // ダミーデータ取得（実際はAPIやDBから取得）
  const friendOptions = [
    { value: '1', text: '長島 潤' },
    { value: '2', text: '鈴木 一郎' },
    { value: '3', text: '田中 美咲' },
    { value: 'user_c', text: '高橋 健太' },
  ];

  return <AdvanceListContent friendOptions={friendOptions} />;
}
