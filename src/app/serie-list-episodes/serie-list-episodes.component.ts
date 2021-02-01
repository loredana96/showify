
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/services/movie.service';
import { ISearchedMovie, ISerieEpisodes, ISerieEpisodesDataResponse } from 'src/types/Movies.interface';

@Component({
  selector: 'app-serie-list-episodes',
  templateUrl: './serie-list-episodes.component.html',
  styleUrls: [ './serie-list-episodes.component.scss' ]
})

export class SerieListEpisodesComponent {

    airedSeason: string;
    airedEpisodeNumber: string;
    episodeName: string;
    guestStars: string;
    overview: string;
    filenameImg: string;
    serieEpisode: ISerieEpisodesDataResponse;
    searchedMoviesByCategory: ISearchedMovie[] = [];
    filteredEpisodesBySeazon: ISerieEpisodesDataResponse;
    episodesInSeason:ISerieEpisodes[] = [];

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

    getSeasons() {
       let seasons = this.serieEpisode.data.map(d => d.airedSeason);
       seasons = [...new Set(seasons)];
       return seasons;
    }

    getSearchedMovies(event) {
        this.word = event.target.value;
        this.isSearched = true
        this.movieService
        .getSearchedMovie(this.word)
        .subscribe(events => {
            if(events) {
            this.searchedMoviesByCategory = events.data;
            } 
        });
    }

    getEpisodesBySeason(season: number) {
        return this.serieEpisode.data.filter(d => d.airedSeason === season);
    }
}