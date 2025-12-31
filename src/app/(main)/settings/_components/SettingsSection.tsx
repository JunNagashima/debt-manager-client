'use client';

import React from 'react';
import styles from './SettingsSection.module.scss';

interface SettingsSectionProps {
  title?: string;
  children: React.ReactNode;
}

export const SettingsSection: React.FC<SettingsSectionProps> = ({
  title,
  children,
}) => {
  return (
    <section className={styles.section}>
      {title && <h2 className={styles.section__title}>{title}</h2>}
      <ul className={styles['settings-list']}>{children}</ul>
    </section>
  );
};
