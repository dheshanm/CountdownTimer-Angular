export interface Event {
  title?: string;
  subtitle?: string;
  isFeatured?: boolean;
  content?: string;
  time_unix?: number;
  tags?: string[];
}
