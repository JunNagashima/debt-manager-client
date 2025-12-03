'use client';

import styles from './BaseButton.module.scss';

interface Props {
  type: 'primary' | 'secondary' | 'danger';
  size: 'small' | 'medium' | 'large';
  clickEvent: () => void;
  children: React.ReactNode;
}

const BaseButton = ({ type, size, clickEvent, children }: Props) => {

  // sizeによってクラス名を変更
  const buttonSizeClass = () => {
    switch (size) {
      case 'small':
        return `${styles.btnSmall}`;
      case 'medium':
        return styles.btnMedium;
      case 'large':
        return styles.btnLarge;
      default:
        return '';
    }
  }

  // typeによってクラス名を変更
  const buttonTypeClass = () => {
    switch (type) {
      case 'primary':
        return styles.btnPrimary;
      case 'secondary':
        return `${styles.btnSecondary}`;
      case 'danger':
        return styles.btnDanger;
      default:
        return '';
    }
  }
  const onClick = () => {
    clickEvent();
  }

  const classes = [styles.btn, buttonTypeClass(), buttonSizeClass()]
    .filter(Boolean)
    .join(' ');
  return (
    <div>
      <button className={classes} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}

export default BaseButton;
