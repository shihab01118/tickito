import { v } from 'convex/values';
import { query } from './_generated/server';
import { WAITING_LIST_STATUS } from './constants';

export const getQueuePosition = query({
  args: {
    eventId: v.id('events'),
    userId: v.string()
  },
  handler: async (ctx, { eventId, userId }) => {
    // get entry for the specific user and event combination
    const entry = await ctx.db
      .query('waitingList')
      .withIndex('by_user_and_event', (q) =>
        q.eq('userId', userId).eq('eventId', eventId)
      )
      .filter((q) => q.neq(q.field('status'), WAITING_LIST_STATUS.EXPIRED))
      .first();

    if (!entry) return null;

    // get total number of people ahead in line
    const peopleAhead = await ctx.db
      .query('waitingList')
      .withIndex('by_event_and_status', (q) => q.eq('eventId', eventId))
      .filter((q) =>
        q.and(
          q.lt(q.field('_creationTime'), entry?._creationTime),
          q.or(
            q.eq(q.field('status'), WAITING_LIST_STATUS.WAITING),
            q.eq(q.field('status'), WAITING_LIST_STATUS.OFFERED)
          )
        )
      )
      .collect()
      .then((entries) => entries.length);

    return {
      ...entry,
      position: peopleAhead + 1
    };
  }
});
