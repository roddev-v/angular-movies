import {Meta} from './meta.model';
import {Type} from 'class-transformer';
import {Data} from './data.model';

export class Yts {
  status: string;
  'status_message': string;

  @Type(() => Data)
  data: Data;

  @Type(() => Meta)
  '@meta': Meta;
}
