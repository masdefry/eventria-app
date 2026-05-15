import { PaginationMeta } from '@/types/api.type';

export interface EventImages {
  id: string;
  imageUrl: string;
  isPrimary: boolean;
}

export interface TicketTypes {
  id: string;
  price: number;
}

export interface Events {
  id: string;
  title: string;
  location: string;
  startDate: string;
  category: string;
  slug: string;
  soldTickets: number;
  eventImages: EventImages[];
  ticketTypes: TicketTypes[];
}

export interface EventListData {
  events: Events[];
  meta: PaginationMeta;
}
