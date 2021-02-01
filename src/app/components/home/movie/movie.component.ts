import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Movie} from '../../../movies/movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MovieComponent {
  @Input() movie: Movie;

  getStarsSize() {
    return Array(this.movie.rating).map(i => i);
  }
}
