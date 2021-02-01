import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {plainToClass} from 'class-transformer';
import {Yts} from '../movies/yts.model';

@Injectable()
export class MoviesService {
  private readonly MOVIES_URL = 'https://yts.mx/api/v2/list_movies.json';

  constructor(private http: HttpClient) {
  }

  async get(): Promise<Yts> {
    const res = await this.http.get(this.MOVIES_URL).toPromise();
    return plainToClass(Yts, res);
  }
}
