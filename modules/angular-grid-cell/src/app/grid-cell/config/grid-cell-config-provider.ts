import { Config } from './config';

export abstract class GridCellConfigProvider {
  abstract get config(): Config;
}
