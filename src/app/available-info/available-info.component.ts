import { CategoryService } from './../shared/services/category.service';
import { MovieService } from './../shared/services/movie.service';
import { Category } from './../shared/models/category';
import { Movie } from './../shared/models/movie';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'movie-available-info',
  templateUrl: './available-info.component.html',
  styleUrls: ['./available-info.component.scss']
})
export class AvailableInfoComponent implements OnInit {

  public movies: Movie[] = [];

  public loading: {movies: boolean, categories: boolean} = {movies: true, categories: true};
  public categories: Category[];
  constructor(
    private movieService: MovieService,
    private categoryService: CategoryService,
    private toastr: ToastrService,
    private modalService: NgbModal
    ) { }

  ngOnInit() {

    this.movieService.getAllMovies().subscribe(movies => {
      this.movies = movies;
      this.loading.movies = false;
    });
    this.categoryService.getAllCategories().subscribe(categories => {
      this.categories = categories;
      this.loading.categories = false;
    });
  }

  submitMovie(movieName: string, modal : NgbActiveModal) {
    this.movieService.addMovie({movieName: movieName}).subscribe(movie => {
      this.movies.push(movie);
      this.movies = [...this.movies];
      modal.close();
      this.toastr.success('Movie Saved');
    })
  }

  submitCategory(categoryName: string, modal: NgbActiveModal) {
    this.categoryService.addCategory({categoryName: categoryName}).subscribe(category => {
      this.categories.push(category);
      this.categories = [...this.categories];
      modal.close();
      this.toastr.success('Category Saved');
    })
  }

  openModal(template) {
    this.modalService.open(template, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {});
  }
}
