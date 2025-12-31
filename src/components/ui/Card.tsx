'use client';

import React from 'react';
import styles from './Card.module.scss';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  footer?: React.ReactNode;
  onClick?: () => void;
  hoverable?: boolean;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  footer,
  onClick,
  hoverable = false,
  className = '',
}) => {
  const handleClick = () => {
    if (onClick) {
      console.log('Card clicked:', { title });
      onClick();
    }
  };

  const cardClass = [
    styles.card,
    hoverable ? styles['card--hoverable'] : '',
    onClick ? styles['card--clickable'] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={cardClass} onClick={handleClick}>
      {(title || subtitle) && (
        <div className={styles.card__header}>
          {title && <h3 className={styles.card__title}>{title}</h3>}
          {subtitle && <p className={styles.card__subtitle}>{subtitle}</p>}
        </div>
      )}
      <div className={styles.card__body}>{children}</div>
      {footer && <div className={styles.card__footer}>{footer}</div>}
    </div>
  );
};
