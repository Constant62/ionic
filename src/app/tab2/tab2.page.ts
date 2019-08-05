import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  movies: Object[] = [];

  constructor(private movieService: MovieService) {}
  // Quand on arrive sur l'onglet, on va chercher les films sur l'api
  ngOnInit() {
  this.movieService.getPopularMovies().then(movies => this.movies = movies);
  }
}
