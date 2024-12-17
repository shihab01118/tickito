'use client';

import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { useUser } from '@clerk/nextjs';
import { useQuery } from 'convex/react';
import { useRouter } from 'next/navigation';

const EventCard = ({ eventId }: { eventId: Id<'events'> }) => {
  const { user } = useUser();
  const router = useRouter();

  const event = useQuery(api.events.getById, {
    eventId
  });

  return (
    <div>
      <h1>EventCard</h1>
    </div>
  );
};

export default EventCard;
