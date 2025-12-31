'use client';

import React from 'react';
import styles from './ToggleSwitch.module.scss';

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  checked,
  onChange,
}) => {
  return (
    <label className={styles['toggle-switch']}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className={styles['toggle-switch__slider']}></span>
    </label>
  );
};
