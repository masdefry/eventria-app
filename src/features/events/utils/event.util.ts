import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { EventImage, TicketType } from '../types/event.type';

export function formatDate(dateStr: string): string {
  return format(new Date(dateStr), 'dd MMM yyyy • HH:mm', { locale: id });
}

export function getPrimaryImage(eventImages: EventImage[]): string {
  return (
    eventImages.find((img) => img.isPrimary)?.imageUrl ??
    eventImages[0].imageUrl
  );
}

export function getLowestPrice(ticketTypes: TicketType[]): string {
  if (!ticketTypes?.length) return 'Free';
  const lowest = Math.min(...ticketTypes.map((t) => Number(t.price)));
  return lowest === 0 ? 'Free' : `Rp ${lowest.toLocaleString('id-ID')}`;
}
