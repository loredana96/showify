import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/services/movie.service';
import { IActors, IGenres, IMovieDataResponse, IPeople } from 'src/types/Movies.interface';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { faBell, faBookmark, faFilm, faHeart, faHome, faList, faPlay, faSearch, faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: [ './movie-detail.component.scss' ]
})

export class MovieDetailComponent implements OnInit {

  releaseDate: string;
  releaseYear: string;
  movieTitle: string[];
  overview: string[];
  image: string;
  actor: string;
  role: string;
  runSource: string[];
  url: string;
  genres: IGenres[];
  runTime: number;
  hours: number; 
  minutes: number;
  

  movieDetail: IMovieDataResponse;
  actors: IActors[];

  faBell = faBell;
  faList = faList;
  faHeart = faHeart;
  faBookmark = faBookmark;
  faStar = faStar;
  faPlay = faPlay;

  constructor( private router:Router, private movieService: MovieService, private activatedRoute: ActivatedRoute) {
    // const id = this.activatedRoute.snapshot.params['id'];
    this.activatedRoute.params.subscribe((params) => {
        const id = params['id']
        this.movieService.getMovie(id)
        .subscribe(m => {
            this.releaseDate = m.data.release_dates[0].date.replace(/-/g, "/");
            this.releaseYear = this.releaseDate.slice(0, 4)
            this.image = m.data.artworks[0].url;
            this.genres = m.data.genres;
            this.runTime = (m.data.runtime);
            this.hours = Math.floor(this.runTime / 60); 
            this.minutes = this.runTime % 60;
            this.actors = m.data.people.actors.slice(0,3);
            this.runSource = m.data.remoteids.filter(data => data.source_name).filter(source => source.source_name !== "Facebook" && source.source_name !== "Instagram" && source.source_name !== "Twitter").map(d => d.source_name);
            this.movieTitle = m.data.translations.filter(language => language.language_code === "eng").map(lang => lang.name);
            this.overview = m.data.translations.filter(overview => overview.language_code === "eng").map(description => (description.overview.slice(0,300)));
        });
    });
    }

  ngOnInit() {
    this.url = "https://thetvdb.com'+this.image+')"
  }

}