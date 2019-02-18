import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rating } from '../models/rating';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private http: HttpClient) { }

  getAllRatings() : Observable<Rating[]> {
    return this.http.get('/ratings') as Observable<Rating[]>
  }

  getRatingsForUser(userId : number) : Observable<Rating[]> {
    return this.http.get(`/ratings/${userId}`) as Observable<Rating[]> 
  }

  addRating(rating: Rating) : Observable<any> {
    return this.http.post('/rating', rating);
  }

  editRating(rating: Rating) : Observable<Rating> {
    return this.http.put('/rating',rating) as Observable<Rating>;
  }

  deleteRating(ratingId: number) : Observable<any> {
    return this.http.delete(`/rating/${ratingId}`) as Observable<any> 
  }
}
