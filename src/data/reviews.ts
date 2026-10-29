import type { Review } from '../lib/types';

/**
 * Mock reviews shown in "Latest reviews" on the homepage. The newest come
 * first (by publishDate); the newest one is also the hero's "last signal".
 * The homepage shows as many as fit before the "Coming soon" slot(s).
 */
export const reviews: Review[] = [
  { subject: 'Wandering Light', headline: 'Finding inspiration in everyday moments', publishDate: '2025-04-12' },
  { subject: 'Sky Atlas', headline: 'Worldbuilding: more than just places', publishDate: '2025-03-28' },
  { subject: 'Paper Moons', headline: 'The art of letting go', publishDate: '2025-03-10' },
];

export function getLatestReviews(limit = 4): Review[] {
  return [...reviews]
    .sort((a, b) => Date.parse(b.publishDate) - Date.parse(a.publishDate))
    .slice(0, limit);
}
