import { Category } from './category';
import { Movie } from './movie';
import { User } from './user';
export interface Rating {
    ratingId?: number;
    score: number;
    user: User;
    movie: Movie;
    category: Category;
}