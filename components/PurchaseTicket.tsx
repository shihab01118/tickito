'use client';

import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { useUser } from '@clerk/nextjs';
import { useQuery } from 'convex/react';
import { useRouter } from 'next/navigation';

const PurchaseTicket = ({ eventId }: { eventId: Id<'events'> }) => {
  const router = useRouter();
  const { user } = useUser();

  const queuePosition = useQuery(api.waitingList.getQueuePosition, {
    eventId,
    userId: user?.id ?? ''
  });

  return (
    <div>
      <h1>PurchaseTicket</h1>
    </div>
  );
};

export default PurchaseTicket;
