import type { Localized, Lang } from '../i18n/utils';

export type { Localized };
export type { Lang };

export interface Fact {
  label: Localized;
  value: Localized;
  icon: string;
}

export interface SpokenLanguage {
  name: Localized;
  level: Localized;
}
