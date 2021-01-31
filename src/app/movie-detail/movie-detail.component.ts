import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/services/movie.service';
import { IMovieDataResponse } from 'src/types/Movies.interface';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: [ './movie-detail.component.scss' ]
})

export class MovieDetailComponent implements OnInit {

  releaseDate: string;
  movieTitle: string[];
  overview: string[];
  image: string;
  actor: string;
  role: string;
  runSource: string[];
  movie: IMovieDataResponse;
  url: string;

  movieDetail: IMovieDataResponse;

  constructor( private router:Router, private movieService: MovieService) {
    this.router.getCurrentNavigation().extras.state;
    this.movieDetail = this.movieService.movie;
    this.releaseDate = this.movieDetail.data.release_dates[0].date.replace(/-/g, " ");
    this.image = this.movieDetail.data.artworks[0].url;
    this.runSource = this.movieDetail.data.remoteids.filter(data => data.source_name).filter(source => source.source_name !== "Facebook" && source.source_name !== "Instagram" && source.source_name !== "Twitter").map(d => d.source_name);
    this.movieTitle = this.movieDetail.data.translations.filter(language => language.language_code === "eng").map(lang => lang.name);
    this.overview = this.movieDetail.data.translations.filter(overview => overview.language_code === "eng").map(description => description.overview);
  }

  ngOnInit() {
    this.url = "https://thetvdb.com'+this.image+')"
  }

}