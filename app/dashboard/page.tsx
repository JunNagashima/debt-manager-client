import styles from './page.module.scss';
import DashBoardPage from './_components/DashBoardPage/DashBoardPage';

const page = () => {
  return (
    <div className={styles.dashboardContainer}>
      <p className={styles.dashboardTitle}>残高サマリー</p>
      <div className={styles.border} />
      <DashBoardPage />
    </div>
  );
}

export default page;
