import Link from 'next/link';
import FriendRequestForm from './components/FriendRequestForm/FriendRequestForm';
import PendingRequestList from './components/PendingRequestList/PendingRequestList';
import styles from './page.module.scss';

export default function FriendRequestPage() {
  return (
    <div className={styles.container}>
      <div className={styles.friendRequestForm}>
        <FriendRequestForm />
        <PendingRequestList />
      </div>
    </div>
  );
}
