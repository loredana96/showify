import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { forkJoin, Observable, of, zip } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';
import { DUMMY_SERIES } from 'src/data/dummy';
import { MovieService } from 'src/services/movie.service';
import { IGenres, IMovie, IMovieDataResponse, IMovieUpdates, ISearchedMovie, ISearchedMovieDataResponse } from 'src/types/Movies.interface';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: [ './movie-list.component.scss' ]
})

export class MovieListComponent implements OnInit {

    constructor(private cdRef:ChangeDetectorRef, private movieService: MovieService) {}

    batchResponses: Observable<IMovieDataResponse[]>;
    batchSearchResponses: Observable<ISearchedMovieDataResponse[]>;

    movies: IMovieDataResponse[] = [];
    genres: Set<IGenres> = new Set();
    searchedMoviesByCategory: ISearchedMovieDataResponse;

    releaseDate: string[];
    image: string;
    author: string;
    title: string;
    overview: string;

    typedChars: string;
    isSearched = false;
    word: string;

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
        this.movieService.getMovie('24');
        this.batchResponses = forkJoin(observables);
        this.batchResponses
        .pipe(map(e => {
            return e.filter(e => e !== undefined);
        }))
        .subscribe(data => { this.handleMovieResponse(data)});
    }

    handleMovieResponse(data: IMovieDataResponse[]) {
        this.movies = data;
        
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

    getReleaseDate(movie: IMovieDataResponse) {
        return movie.data.release_dates[0].date.replace(/-/g, " ");
    }

    getSearchedReleaseDate(movie: ISearchedMovieDataResponse) {
        return movie.data.map(movie => movie.firstAired);
    }

    getImage(movie: IMovieDataResponse) {
        return movie.data.artworks[0].url;
    }

    getSearchedImage(movie: ISearchedMovieDataResponse) {
        return movie.data.map(movie => movie.image);
    }
    
    getRunSource(movie: IMovieDataResponse) {
       return movie.data.remoteids.filter(data => data.source_name).filter(source => source.source_name !== "Facebook" && source.source_name !== "Instagram" && source.source_name !== "Twitter").map(d => d.source_name);
    }

    getSearchedRunSource(movie: ISearchedMovieDataResponse) {
        return movie.data.map(movie => movie.status);
     }
    
    getTitle(movie: IMovieDataResponse) {
        // return DUMMY_SERIES[0].name;
        return movie.data.translations.filter(language => language.language_code === "eng").map(lang => lang.name);
    } 

    getSearchedTitle(movie: ISearchedMovieDataResponse) {
        return movie.data.map(movie => movie.seriesName);
    }

    getOverview(movie: IMovieDataResponse) {
        return movie.data.translations.filter(overview => overview.language_code === "eng").map(description => description.overview);
    }

    getSearchedOverview(movie: ISearchedMovieDataResponse) {
        return movie.data.map(movie => movie.overview);
    }

    getNetwork(movie: ISearchedMovieDataResponse) {
        return movie.data.map(movie => movie.network);
    }

    getSearchedNetwork(movie: ISearchedMovieDataResponse) {
        return movie.data.map(movie => movie.network);
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

    getSearchedMovies(event) {
        this.word = event.target.value;
        console.log (this.word)
        this.isSearched = true
        this.movieService.getSearchedMovie(this.word).subscribe(events => {
        if(events) {
          this.searchedMoviesByCategory = events;
          console.log(this.searchedMoviesByCategory.data)
          console.log
          return this.searchedMoviesByCategory
        } })      
    }
}