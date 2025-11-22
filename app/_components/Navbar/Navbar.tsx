'use client';
import { usePathname } from 'next/navigation';
import NavItem from '@/app/_components/NavItem/NavItem';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const pathname = usePathname();
  const navList = [
    { name: 'ダッシュボード', path: '/dashboard' },
    { name: '立替・返済入力', path: '/input' },
    { name: '履歴', path: '/history' },
    { name: 'フレンド', path: '/friends' },
    { name: '設定', path: '/settings' },
  ]
  return (
    <div className={styles.navbar}>
      <div className={styles.titleArea}>
        <p className={styles.title}>立替管理</p>
      </div>
      {navList.map((nav) => (
        <NavItem key={nav.path} isActive={pathname === nav.path} path={nav.path} >{nav.name}</NavItem>
      ))}
    </div>
  );
}

export default Navbar;
