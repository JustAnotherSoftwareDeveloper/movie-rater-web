import { Movie } from './../models/movie';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  addMovie(movie: Movie) : Observable<Movie> {
    return this.http.post('/Movie',movie).pipe(
      map((json : any) => {
        movie.movieId = json.identifiers[0].movieId;
        return movie;
      })
    );
  }

  editMovie(Movie: Movie) : Observable<Movie> {
    return this.http.put('/Movie',Movie) as Observable<Movie>
  }

  getAllMovies() : Observable<Movie[]> {
    return this.http.get('/movies') as Observable<Movie[]>
  }
}
