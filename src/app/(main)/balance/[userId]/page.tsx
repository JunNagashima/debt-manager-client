import React from 'react';
import { BalanceDetailContent } from './_components/BalanceDetailContent';

interface BalanceDetailPageProps {
  params: {
    userId: string;
  };
}

export default function BalanceDetailPage({ params }: BalanceDetailPageProps) {
  console.log('BalanceDetailPage: Server Component rendered', params.userId);

  return <BalanceDetailContent userId={params.userId} />;
}
