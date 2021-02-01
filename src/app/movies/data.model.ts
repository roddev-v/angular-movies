import {Movie} from './movie.model';
import {Type} from 'class-transformer';

export class Data {
  'movie_count': number;
  limit: number;
  'page_number': number;

  @Type(() => Movie)
  movies: Movie[];
}
