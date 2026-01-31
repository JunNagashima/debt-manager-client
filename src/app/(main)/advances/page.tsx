import { AdvanceListContent } from '@/features/main/advances/_components/AdvanceListContent';
import { findUserId } from '@/lib/fetcher/main/accounts';
import { selectFriends } from '@/lib/fetcher/main/friends';

export default async function AdvanceListPage() {
  const currentUserId = await findUserId();

  const friends = await selectFriends();

  const friendOptions = friends?.map((friend) => {
    const isUserLow = friend.userLow === currentUserId;
    return {
      value: isUserLow ? friend.userHigh : friend.userLow,
      text: isUserLow ? friend.userHighAccount.name : friend.userLowAccount.name,
    };
  });

  console.log({ friends });

  return <AdvanceListContent friendOptions={friendOptions ?? []} />;
}
