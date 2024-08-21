import merge from 'lodash/merge';
import { button } from './components/button';
import { table } from './components/table';
import { card } from './components/card';

export function componentsOverrides(theme: any) {
    const components = merge(
      //
      button(theme),
      table(theme),
      card(theme),
    );
  
    return components;
}