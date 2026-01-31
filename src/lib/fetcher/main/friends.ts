import { Account, Friend } from "@/types";
import { fetcher } from "../fetcher";

interface FriendWithAccount extends Friend {
  userLow: string;
  userHigh: string;
  createdAt: Date;
  userLowAccount: Account
  userHighAccount: Account
}
export const selectFriends = async (): Promise<FriendWithAccount[]> => {
  return await fetcher({
    url: 'friends',
    method: 'GET',
    auth: true,
  });
}
