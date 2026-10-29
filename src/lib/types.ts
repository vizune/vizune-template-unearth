export interface Review {
  /** Review headline */
  headline: string;
  /** The game / work being reviewed */
  subject: string;
  /** ISO date, e.g. "2025-04-12". The homepage shows the newest first */
  publishDate: string;
  /** Where the card links to. Defaults to "#" as this template has no review pages */
  href?: string;
  /** Card image (a URL, or a path in /public such as "/images/my-game.jpg"). A placeholder is used when empty */
  thumbnailUrl?: string;
}
