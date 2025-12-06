'use client';
import { usePathname } from 'next/navigation';
import NavItem from '@/app/_components/NavItem/NavItem';
import styles from './Navbar.module.scss';
import { AiFillHome, AiFillFileAdd, AiFillDatabase, AiOutlineTeam, AiFillSetting } from "react-icons/ai";

const Navbar = () => {
  const pathname = usePathname();
  const navList = [
    { name: 'ダッシュボード', path: '/dashboard', icon: <AiFillHome /> },
    { name: '立替・返済入力', path: '/input', icon: <AiFillFileAdd /> },
    { name: '履歴', path: '/history', icon: <AiFillDatabase /> },
    { name: 'フレンド', path: '/friends', icon: <AiOutlineTeam /> },
    { name: '設定', path: '/settings', icon: <AiFillSetting /> },
  ]
  return (
    <div className={styles.navbar}>
      <div className={styles.titleArea}>
        <p className={styles.title}>立替管理</p>
      </div>
      {navList.map((nav) => (
        <NavItem key={nav.path} isActive={pathname === nav.path} path={nav.path} icon={nav.icon}>{nav.name}</NavItem>
      ))}
    </div>
  );
}

export default Navbar;
