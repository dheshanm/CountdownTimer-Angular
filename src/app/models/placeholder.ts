import { User } from './user.model'
import { Event } from './event.model';

export let placeholderUser: User = {
  displayName: 'Loading...',
  email: 'Loading...',
  photoURL: '',
  uid: 'Loading...'
};

export const previewCard: Event = {
  title: 'The Next Day',
  subtitle: 'Preview Card',
  content: 'This is a Preview card, with Dummy data. This is kept here to check if all things are loaded and displayed properly. This card will be removed when Development is complte and is Deployed.',
  count: 12,
  time_unix: (new Date().getTime() / 1000) + (60*60*24),
  tags: ['Preview', '24 Hr Countdown', 'Dummy'],
  userID: 'guest-user',
}