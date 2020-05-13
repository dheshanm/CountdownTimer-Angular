export interface Event {
  id?: string;
  title?: string;
  subtitle?: string;
  isFeatured?: boolean;
  count?: number;
  content?: string;
  time_unix?: number;
  tags?: string[];
  userID?: string;
}
