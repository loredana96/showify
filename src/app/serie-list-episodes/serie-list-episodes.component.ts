import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { asyncScheduler, forkJoin, interval, Observable, of, zip } from 'rxjs';
import { catchError, debounceTime, filter, map, throttleTime } from 'rxjs/operators';
import { DUMMY_SERIES } from 'src/data/dummy';
import { MovieService } from 'src/services/movie.service';
import { IGenres, IMovie, IMovieDataResponse, IMovieUpdates, ISearchedMovie, ISearchedMovieDataResponse, ISerieEpisodes, ISerieEpisodesDataResponse } from 'src/types/Movies.interface';

@Component({
  selector: 'app-serie-list-episodes',
  templateUrl: './serie-list-episodes.component.html',
  styleUrls: [ './serie-list-episodes.component.scss' ]
})

export class SerieListEpisodesComponent  {

    airedSeason: string;
    airedEpisodeNumber: string;
    episodeName: string;
    guestStars: string;
    overview: string;
    filenameImg: string;
    serieEpisode: ISerieEpisodesDataResponse;
    searchedMoviesByCategory: ISearchedMovie[] = [];
    filteredEpisodesBySeazon: ISerieEpisodesDataResponse;

    typedChars: string;
    isSearched = false;
    word: string;


    constructor( private router:Router, private movieService: MovieService, private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe((params) => {
            const id = params['id']
            this.movieService.getSerieEpisodes(id)
            .subscribe(m => {
              this.serieEpisode = m;
              
            });
        });
    }

    getSearchedMovies(event) {
        this.word = event.target.value;
        this.isSearched = true
        this.movieService
        .getSearchedMovie(this.word)
        .subscribe(events => {
            console.log (this.word)
            if(events) {
            this.searchedMoviesByCategory = events.data;
            } 
        });
    }
}