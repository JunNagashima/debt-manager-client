'use client';

import React from 'react';
import styles from './Loading.module.scss';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  fullScreen?: boolean;
  text?: string;
}

export const Loading: React.FC<LoadingProps> = ({
  size = 'md',
  fullScreen = false,
  text = '読み込み中...',
}) => {
  console.log('Loading component rendered:', { size, fullScreen, text });

  const spinnerClass = `${styles.loading__spinner} ${styles[`loading__spinner--${size}`]}`;

  const content = (
    <div className={styles.loading__content}>
      <div className={spinnerClass}></div>
      {text && <p className={styles.loading__text}>{text}</p>}
    </div>
  );

  if (fullScreen) {
    return <div className={styles['loading--fullscreen']}>{content}</div>;
  }

  return <div className={styles.loading}>{content}</div>;
};
