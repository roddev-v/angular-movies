import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Movie} from '../../movies/movie.model';
import {MoviesService} from '../movies.service';

@Injectable()
export class MovieResolver implements Resolve<Promise<Movie[]>> {
  constructor(private moviesService: MoviesService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Movie[]> {
    return new Promise<Movie[]>(async resolve => {
      const res = await this.moviesService.get();
      const movies = res.data.movies;
      resolve(movies);
    });
  }
}
