import React from 'react';
import { Summary } from './_components/Summary';
import { QuickActions } from './_components/QuickActions';
import { PendingList } from './_components/PendingList';
import { BalanceList } from './_components/BalanceList';

export default function HomePage() {
  console.log('HomePage: Server Component rendered');

  return (
    <>
      <Summary />
      <QuickActions />
      <PendingList />
      <BalanceList />
    </>
  );
}
