'use client';

import { useState } from 'react';
import styles from './HistoryFilterStyle.module.scss';

interface User {
  id: string;
  name: string;
}

interface HistoryFilterProps {
  users: User[];
  onFilterChange: (userId: string, from: string, to: string) => void;
}

export default function HistoryFilter({ users, onFilterChange }: HistoryFilterProps) {
  const [selectedUserId, setSelectedUserId] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const handleUserChange = (value: string) => {
    setSelectedUserId(value);
    onFilterChange(value, fromDate, toDate);
  };

  const handleFromDateChange = (value: string) => {
    setFromDate(value);
    onFilterChange(selectedUserId, value, toDate);
  };

  const handleToDateChange = (value: string) => {
    setToDate(value);
    onFilterChange(selectedUserId, fromDate, value);
  };

  return (
    <div className={styles.filterSection}>
      <div className={styles.filterRow}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="filterUser">
            相手
          </label>
          <select
            id="filterUser"
            className={styles.formSelect}
            value={selectedUserId}
            onChange={(e) => handleUserChange(e.target.value)}
          >
            <option value="">全員</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="filterFrom">
            開始日
          </label>
          <input
            type="date"
            id="filterFrom"
            className={styles.formInput}
            value={fromDate}
            onChange={(e) => handleFromDateChange(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="filterTo">
            終了日
          </label>
          <input
            type="date"
            id="filterTo"
            className={styles.formInput}
            value={toDate}
            onChange={(e) => handleToDateChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
