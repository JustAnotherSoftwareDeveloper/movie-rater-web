import { User } from './../shared/models/user';
import { MovieService } from './../shared/services/movie.service';
import { UserService } from './../shared/services/user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoryService } from '../shared/services/category.service';
import { RatingService } from '../shared/services/rating.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Category } from '../shared/models/category';
import { Movie } from '../shared/models/movie';
import { Rating } from '../shared/models/rating';
import { Subject } from 'rxjs';
import { filter, tap, flatMap } from 'rxjs/operators';

@Component({
  selector: 'movie-user-rating-control',
  templateUrl: './user-rating-control.component.html',
  styleUrls: ['./user-rating-control.component.scss']
})
export class UserRatingControlComponent implements OnInit,OnDestroy {


  public loading: { users: boolean, movies: boolean, categories: boolean, ratings: boolean } = {
    users: true,
    movies: true,
    categories: true,
    ratings: false
  }

  private userSubject = new Subject<User>();

  public users: User[] = [];
  public categories: Category[] = [];
  public movies: Movie[] = [];
  public selectedUser: User = null;
  public userRatings: Rating[] = null;
  public userMoviesNotRated : Movie[] = [];
  constructor(
    private userService: UserService,
    private categoryService: CategoryService,
    private movieService: MovieService,
    private ratingService: RatingService,
    private toastr: ToastrService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe(categories => {
      this.categories = categories;
      this.loading.categories = false;
    })
    this.movieService.getAllMovies().subscribe(movies => {
      this.movies = movies;
      this.loading.movies = false;
    })
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.loading.users = false;
    })
    this.userSubject.pipe(
      filter(user => user !== null),
      tap(() => {
        this.loading.ratings = true;
        this.userRatings = [];
        this.userMoviesNotRated = [];
      }),
      flatMap(user => this.ratingService.getRatingsForUser(user.userId))
    ).subscribe(ratings => this.initRatings(ratings))

  }

  private initRatings(ratings: Rating[]) {
    this.userRatings = ratings;
    this.userMoviesNotRated = this.getMoviesNotRated();
    this.loading.ratings = false;
  } 

  ngOnDestroy(): void {
    this.userSubject.unsubscribe();
  }

  commonDataLoaded() {
    return !(this.loading.users && this.loading.movies && this.loading.categories);
  }

  onUserChanged() {
    this.userSubject.next(this.selectedUser);
  }

  submitUser(name: string, modal: NgbActiveModal) {
    this.userService.addUser({username: name}).subscribe(user => {
      this.users.push(user);
      this.users = [...this.users];
      modal.close();
      this.toastr.success('User Added');
    })
  }

  updateRating(rating: Rating) {
    this.ratingService.editRating(rating).subscribe();
  }

  deleteRating(rating: Rating, index: number) {
    this.ratingService.deleteRating(rating.ratingId).subscribe(() => {
        this.userRatings.splice(index,1);
        this.userRatings = [...this.userRatings];
        this.userMoviesNotRated = this.getMoviesNotRated();
        this.toastr.warning(`Rating for ${rating.movie.movieName} deleted`);
    });

  }

  submitRating(movie: Movie, category: Category, score: number, modal: NgbActiveModal) {
    const numScore = score ? score : 0;
    const rating : Rating = {movie: movie, category: category, score: numScore, user: this.selectedUser};
    this.ratingService.addRating(rating).pipe(
      flatMap(() => this.ratingService.getRatingsForUser(this.selectedUser.userId))
    ).subscribe((ratings) => {
      this.initRatings(ratings);
      modal.close();
      this.toastr.success('Rating Saved');
    });
      
  }

  open(template) {
    this.modalService.open(template, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {});
  }

  private getMoviesNotRated() : Movie[] {
    const ratedMovieIds = new Set<number>(this.userRatings.map(rating => rating.movie.movieId));
    return this.movies.filter(movie => !ratedMovieIds.has(movie.movieId))
  }

}
