import type { IconHistory } from '@tabler/icons-react';

export type Category = 'history' | 'files' | 'settings';

export interface CategoryItem {
  icon: typeof IconHistory;
  label: string;
  value: Category;
}
