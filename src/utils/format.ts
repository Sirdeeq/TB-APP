import { format, formatDistance } from 'date-fns';

export function formatDate(date: string): string {
  return format(new Date(date), 'MMM d, yyyy');
}

export function formatTimeAgo(date: string): string {
  return formatDistance(new Date(date), new Date(), { addSuffix: true });
}

export function formatPhoneNumber(phone: string): string {
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
}