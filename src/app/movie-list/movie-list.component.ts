import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable, of, zip } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';
import { MovieService } from 'src/services/movie.service';
import { IGenres, IMovie, IMovieDataResponse, IMovieUpdates } from 'src/types/Movies.interface';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: [ './movie-list.component.scss' ]
})

export class MovieListComponent implements OnInit {

    batchResponses: Observable<IMovieDataResponse[]>;

    movies: IMovieDataResponse[] = [];
    genres: Set<IGenres> = new Set();

    constructor(private movieService: MovieService) {}

    ngOnInit() {
        this.movieService.getMovieUpdates('1611606780').subscribe(data => {this.handleMovieUpdatesResponse(data)});
    }

    handleMovieUpdatesResponse(data: IMovieUpdates) {
        const movies = data.movies.slice(1, 200);
        let observables: Observable<IMovieDataResponse>[] = [];
        for (let movie in movies) {
            observables.push(
                this.movieService
                .getMovie(movie)
                .pipe(catchError(e => of(undefined)))
            )
        }
        this.movieService.getMovie('24').subscribe(data => console.log(data));
        this.batchResponses = forkJoin(observables);
        this.batchResponses
        .pipe(map(e => {
            return e.filter(e => e !== undefined);
        }))
        .subscribe(data => { this.handleMovieResponse(data)});
    }

    handleMovieResponse(data: IMovieDataResponse[]) {
        this.movies = data;
        console.log(data);
        
        const genres = data.map(d => d.data.genres);
        const flattenGenres = [].concat(...genres) as IGenres[];
        const flattenGenresIdsSet = new Set(flattenGenres.map(g => g.id));
        
        flattenGenresIdsSet.forEach(id => {
            this.genres.add(flattenGenres.find(g => g.id === id));
        });        
    }

    getMovies(genre: IGenres) {
        return this.movies.filter(m => m.data.genres.find(g => g.id === genre.id)).slice(0, 10);
    }

    getGenresContainingMinimum(numberOfMovies: number) {
        let validGenres: IGenres[] = [];
        for (let genre of this.genres) {
            const movies = this.movies.filter(m => m.data.genres.find(g => g.id === genre.id)).length;
            if (movies >= numberOfMovies)
                validGenres.push(genre);
        }
        return validGenres;
    }
    
}
