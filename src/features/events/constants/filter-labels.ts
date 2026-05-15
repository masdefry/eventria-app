export const FILTER_LABELS = [
  'All Fun',
  'Today',
  'This Weekend',
  'Music',
  'Comedy',
  'Workshop',
  'Seminar',
  'Theater',
  'ART',
  'Festival',
  'Community',
];

export type FilterLabel = (typeof FILTER_LABELS)[number];

export const FILTER_LABELS_MAP: Record<FilterLabel, string | undefined> = {
  'All Fun': undefined,
  Today: 'TODAY',
  Weekend: 'WEEKEND',
  Music: 'MUSIC',
  Comedy: 'COMEDY',
  Workshop: 'WORKSHOP',
  Seminar: 'SEMINAR',
  Theater: 'THEATER',
  ART: 'ART',
  Festival: 'FESTIVAL',
  Community: 'COMMUNITY',
};
