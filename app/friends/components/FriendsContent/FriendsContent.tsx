'use client';

import { useState } from 'react';
import Tabs from '../Tabs/Tabs';
import FriendList from '../FriendList/FriendList';
import RequestList from '../RequestList/RequestList';

const FriendsContent = () => {
  const [activeTab, setActiveTab] = useState<'friends' | 'requests'>('friends');

  const tabs = [
    { id: 'friends' as const, label: 'フレンド' },
    { id: 'requests' as const, label: '申請', badge: 2 },
  ];

  return (
    <>
      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      
      {activeTab === 'friends' && <FriendList />}
      {activeTab === 'requests' && <RequestList />}
    </>
  );
};

export default FriendsContent;
