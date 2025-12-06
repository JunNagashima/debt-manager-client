import FriendsContent from './components/FriendsContent/FriendsContent';
import styles from './page.module.scss';

const FriendsPage = () => {
  return (
    <div className={styles.container}>
      <FriendsContent />
    </div>
  );
};

export default FriendsPage;
