interface BaseParams {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: string;
  order?: 'asc' | 'desc';
  category?: string;
}

export function buildParams(
  base: Record<string, string>,
  {
    page = 1,
    limit = 10,
    search,
    sortBy = 'createdAt',
    order = 'desc',
    category,
  }: BaseParams = {},
): URLSearchParams {
  const cleanBase = Object.fromEntries(
    Object.entries(base).filter(([, v]) => v !== undefined && v !== ''),
  );

  const params = new URLSearchParams({
    ...cleanBase,
    page: String(page),
    limit: String(limit),
    sortBy,
    order,
  });

  if (category) params.set('category', category);
  if (search) params.set('search', search);

  return params;
}
