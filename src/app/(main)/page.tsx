import React from 'react';
import { Summary } from './_components/Summary';
import { QuickActions } from './_components/QuickActions';
import { PendingList } from './_components/PendingList';
import { BalanceList } from './_components/BalanceList';

const HomePage = async() => {
  console.log('HomePage: Server Component rendered');
  // const fetchData = async () => {
  //   const apiUrl = process.env.API_URL!;
  //   try {
  //     const res = await fetch(apiUrl, {
  //       cache: 'no-store',
  //       signal: AbortSignal.timeout(5000) // 5 second timeout
  //     });

  //     if (!res.ok) {
  //       throw new Error(`HTTP error! status: ${res.status}`);
  //     }

  //     return await res.json();
  //   } catch (error) {
  //     console.error('Failed to fetch data:', error);
  //     return { name: 'Unable to connect to server' };
  //   }
  // };

  // const data = await fetchData();
  return (
    <>
      <Summary />
      <QuickActions />
      <PendingList />
      <BalanceList />
    </>
  );
}

export default HomePage;
