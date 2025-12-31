'use client';

import React, { useEffect } from 'react';
import styles from './Modal.module.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  showCloseButton?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  showCloseButton = true,
}) => {
  useEffect(() => {
    if (isOpen) {
      console.log('Modal opened:', { title, size });
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, title, size]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      console.log('Modal overlay clicked');
      onClose();
    }
  };

  const handleClose = () => {
    console.log('Modal close button clicked');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modal} onClick={handleOverlayClick}>
      <div className={`${styles.modal__content} ${styles[`modal__content--${size}`]}`}>
        {(title || showCloseButton) && (
          <div className={styles.modal__header}>
            {title && <h2 className={styles.modal__title}>{title}</h2>}
            {showCloseButton && (
              <button
                className={styles.modal__close}
                onClick={handleClose}
                aria-label="閉じる"
              >
                ✕
              </button>
            )}
          </div>
        )}
        <div className={styles.modal__body}>{children}</div>
      </div>
    </div>
  );
};
