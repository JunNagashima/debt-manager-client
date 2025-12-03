'use client';

import BaseButton from "@/app/_components/Button/BaseButton";
import DashBoardCard from "../DashBoardCard/DashBoardCard";
import styles from './DashBoardPage.module.scss';

const DUMMY_DATA_LIST = [
  {
    userName: '長島潤',
    advanceAmount: 5000,
    borrowAmount: 2000,
  },
  {
    userName: '長島麗菜',
    advanceAmount: 0,
    borrowAmount: 0,
  },
  {
    userName: '長島潤',
    advanceAmount: 5000,
    borrowAmount: 8000,
  },
  {
    userName: '長島潤',
    advanceAmount: 5000,
    borrowAmount: 5000,
  },
];
const DashBoardPage = () => {
  return (
    <div className={styles.container}>
      {DUMMY_DATA_LIST.map((data, index) => (
        <DashBoardCard
          key={index}
          userName={data.userName}
          advanceAmount={data.advanceAmount}
          borrowAmount={data.borrowAmount}
        />
      ))}
      <div className={styles.buttonGroup}>
        <BaseButton type='primary' size='large' clickEvent={() => console.log('立替・返済を入力')}>立替・返済を入力</BaseButton>
        <BaseButton type='secondary' size='large' clickEvent={() => console.log('履歴を見る')}>履歴を見る</BaseButton>
      </div>
    </div>
  );
}

export default DashBoardPage;
