import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable, of, zip } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';
import { MovieService } from 'src/services/movie.service';
import { IMovie, IMovieUpdates } from 'src/types/Movies.interface';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: [ './movie-list.component.scss' ]
})

export class MovieListComponent implements OnInit {

    batchResponses: Observable<IMovie[]>;

    movies: IMovie[] = [];

    constructor(private movieService: MovieService) {}

    ngOnInit() {
        this.movieService.getMovieUpdates('1611606780').subscribe(data => this.handleMovieUpdatesResponse(data));
    }

    handleMovieUpdatesResponse(data: IMovieUpdates) {
        const movies = data.movies.slice(1, 5);
        let observables: Observable<IMovie>[] = [];
        for (let movie in movies) {
            observables.push(
                this.movieService
                .getMovie(movie)
                .pipe(catchError(e => of(undefined)))
            )
        }
        this.batchResponses = forkJoin(observables);
        this.batchResponses
        .pipe(map(e => {
            return e.filter(e => e !== undefined);
        }))
        .subscribe(data => this.handleMovieResponse(data));
    }

    handleMovieResponse(data: IMovie[]) {
        this.movies = data;
    }
}
