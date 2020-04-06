import { GridCellConfigProvider } from './grid-cell-config-provider';
import { Config } from './config';

export class DefaultConfig extends GridCellConfigProvider {
  get config(): Config {
    return { rtl: false };
  }
}
