import { Doc } from './_generated/dataModel';

export const DURATION = {
  TICKET_OFFER: 30 * 60 * 1000 // 30 minutes
} as const;

// status types for better type safety
export const TICKET_STATUS: Record<string, Doc<'tickets'>['status']> = {
  VALID: 'valid',
  USED: 'used',
  REFUNDED: 'refunded',
  CANCELLED: 'cancelled'
} as const;

export const WAITING_LIST_STATUS: Record<string, Doc<'waitingList'>['status']> =
  {
    WAITING: 'waiting',
    OFFERED: 'offered',
    PURCHASED: 'purchased',
    EXPIRED: 'expired'
  } as const;
