'use client';

import { useState, useMemo } from 'react';
import HistoryFilter from '../HistoryFilter/HistoryFilter';
import HistoryList from '../HistoryList/HistoryList';
import DeleteModal from '../DeleteModal/DeleteModal';

interface HistoryItemData {
  id: string;
  type: 'advance' | 'repayment' | 'adjustment';
  date: string;
  amount: number;
  userName: string;
  note: string;
  timestamp: string;
  isAdjustment: boolean;
}

interface User {
  id: string;
  name: string;
}

interface HistoryClientProps {
  initialHistoryItems: HistoryItemData[];
  users: User[];
}

export default function HistoryClient({ initialHistoryItems, users }: HistoryClientProps) {
  const [filterUserId, setFilterUserId] = useState('');
  const [filterFrom, setFilterFrom] = useState('');
  const [filterTo, setFilterTo] = useState('');
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<{ id: string; type: string } | null>(null);

  const handleFilterChange = (userId: string, from: string, to: string) => {
    setFilterUserId(userId);
    setFilterFrom(from);
    setFilterTo(to);
  };

  const handleEdit = (id: string, type: string) => {
    console.log('Edit:', id, type);
    // TODO: 編集画面へ遷移
  };

  const handleDelete = (id: string, type: string) => {
    setDeleteTarget({ id, type });
    setDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (deleteTarget) {
      console.log('Delete confirmed:', deleteTarget);
      // TODO: 削除API呼び出し
    }
    setDeleteModalOpen(false);
    setDeleteTarget(null);
  };

  const handleCancelDelete = () => {
    setDeleteModalOpen(false);
    setDeleteTarget(null);
  };

  // フィルタリング処理
  const filteredItems = useMemo(() => {
    return initialHistoryItems.filter((item) => {
      // ユーザーフィルター
      if (filterUserId) {
        const user = users.find(u => u.id === filterUserId);
        if (!user || item.userName !== user.name) {
          return false;
        }
      }
      
      // 開始日フィルター
      if (filterFrom && item.date < filterFrom) {
        return false;
      }
      
      // 終了日フィルター
      if (filterTo && item.date > filterTo) {
        return false;
      }
      
      return true;
    });
  }, [initialHistoryItems, filterUserId, filterFrom, filterTo, users]);

  return (
    <>
      <HistoryFilter
        users={users}
        onFilterChange={handleFilterChange}
      />

      <HistoryList
        items={filteredItems}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <DeleteModal
        isOpen={deleteModalOpen}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </>
  );
}
