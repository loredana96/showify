import { Component, EventEmitter, Output } from '@angular/core';
import { faFilm, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { MovieService } from 'src/services/movie.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: [ './movie-search.component.scss' ]
})

export class MovieSearchComponent {

    constructor(private movieService: MovieService) {}

    @Output() searchEvent = new EventEmitter<string>();

    faSearch = faSearch;
    public inputTyped: string;
    isSearched = false;

    public getMoviesBySearch($event) {
        this.searchEvent.emit($event);
    }
   
}
