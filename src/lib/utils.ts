import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function timeAgo(isoDateString: string): string {
  const date: Date = new Date(isoDateString);
  const now: Date = new Date();
  const secondsDiff: number = Math.floor((now.getTime() - date.getTime()) / 1000);
  const daysDiff: number = Math.floor(secondsDiff / (3600 * 24));

  if (daysDiff < 1) {
      return 'Today'; // or you can return a more precise time like 'X hours ago'
  } else if (daysDiff === 1) {
      return '1 day ago';
  } else {
      return `${daysDiff} days ago`;
  }
}