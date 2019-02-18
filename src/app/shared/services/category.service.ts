import { Category } from './../models/category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  addCategory(category: Category) : Observable<Category> {
    return this.http.post('/category',category).pipe(
      map((json : any) => {
        category.categoryId = json.identifiers[0].categoryId;
        return category;
      })
    );
  }

  editCategory(category: Category) : Observable<Category> {
    return this.http.put('/category',category) as Observable<Category>
  }

  getAllCategories() : Observable<Category[]> {
    return this.http.get('/categories') as Observable<Category[]>
  }
}
