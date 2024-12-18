'use client';

import { useStorageUrl } from '@/app/utils';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { useUser } from '@clerk/nextjs';
import { useQuery } from 'convex/react';
import { useRouter } from 'next/navigation';

const EventCard = ({ eventId }: { eventId: Id<'events'> }) => {
  const { user } = useUser();
  const router = useRouter();

  const event = useQuery(api.events.getById, { eventId });

  const availability = useQuery(api.events.getEventAvailability, { eventId });

  const userTicket = useQuery(api.tickets.getUserTicketForEvent, {
    eventId,
    userId: user?.id ?? ''
  });

  const queuePosition = useQuery(api.waitingList.getQueuePosition, {
    eventId,
    userId: user?.id ?? ''
  });

  const imageUrl = useStorageUrl(event?.imageStorageId);

  if (!event || !availability) return null;

  const isPastEvent = event.eventDate < Date.now();
  const isEventOwner = event.userId === user?.id;

  return (
    <div
      onClick={() => router.push(`/events/${eventId}`)}
      className={`bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 cursor-pointer overflow-hidden relative ${
        isPastEvent ? 'opacity-75 hover:opacity-100' : ''
      }`}
    >
      <h1>EventCard</h1>
    </div>
  );
};

export default EventCard;
