import { buildParams } from '@/lib/params.util';
import { EventListData, Events } from '../types/event.type';
import { ApiResponse } from '@/types/api.type';

interface GetEventsParams {
  page?: number;
  limit?: number;
  search?: string;
  order?: 'asc' | 'desc';
  sortBy?: string;
  category?: string;
  [key: string]: string | number | undefined;
}

const getBaseUrl = () => {
  if (typeof window === 'undefined') {
    return process.env.API_URL;
  }
  return process.env.NEXT_PUBLIC_API_URL;
};

export async function getEvents({
  page = 1,
  limit = 10,
  search,
  order = 'desc',
  sortBy = 'createdAt',
  category,
  ...rest
}: GetEventsParams = {}): Promise<Events[]> {
  try {
    const params = buildParams(rest as Record<string, string>, {
      page,
      limit,
      search,
      order,
      sortBy,
      category,
    });
    console.log(params);
    const res = await fetch(`${getBaseUrl()}/events?${params.toString()}`, {
      cache: 'no-store',
    });

    if (!res.ok) return [];

    const json: ApiResponse<EventListData> = await res.json();
    return json.data?.events ?? [];
  } catch {
    return [];
  }
}
