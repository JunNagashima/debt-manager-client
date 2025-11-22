'use client';

import { ReactNode } from 'react';
import styles from './NavItem.module.scss';
import { useRouter } from 'next/navigation';

interface Prop {
  isActive: boolean;
  path: string;
  children: ReactNode;
}
const NavItem = ({ isActive, children, path }: Prop) => {
  const router = useRouter();
  const handleClick = () => router.push(path);

  return (
    <div className={`${styles.navItem} ${isActive && styles.active}`} onClick={handleClick}>
      <div className={styles.navItemIcon}>A</div>
      <div className={styles.navItemText}>
        {children}
      </div>
    </div>
  );
}

export default NavItem;
