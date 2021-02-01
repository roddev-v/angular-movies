import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Movie} from '../../movies/movie.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  movies: Movie[] = [];

  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.data.subscribe(m => this.movies = m[0] as Array<Movie>);
  }
}
