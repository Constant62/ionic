import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiUrl: string = 'https://api.themoviedb.org/3'
  apiKey: string = '1c30decea45f1c8d0bc1068d770d9059'

  constructor(private http: HttpClient) { }
  // Récupération des films populaires
  //https://api.themoviedb.org/3/movie/popular?api_key=<<1c30decea45f1c8d0bc1068d770d9059>>&language=en-US&page=1
  getPopularMovies(): Promise<any> { 
    
    return this.http.get(this.apiUrl+'/movie/popular?api_key='+this.apiKey+'&language=fr-FR&page=1').toPromise()
    // Après avoir reçu la réponse, on ne récupère que la clée results avec la liste des films
    .then(response => response.results);
  }

  // Récupère les détails d'un film
  getMovie(id: number) { }
}
