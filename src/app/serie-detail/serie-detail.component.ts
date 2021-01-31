import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/services/movie.service';
import { IActors, IGenres, IMovieDataResponse, IPeople } from 'src/types/Movies.interface';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { faBell, faBookmark, faFilm, faHeart, faHome, faList, faPlay, faSearch, faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: [ './serie-detail.component.scss' ]
})

export class SerieDetailComponent implements OnInit {

  airsDayOfTheWeek: string;
  airsTime: string;
  seriesName: string;
  overview: string;
  image: string;
  rating: string;
  role: string;
  runSource: string[];
  url: string;
  genre: string[];
  runTime: string;
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
    this.activatedRoute.params.subscribe((params) => {
        const id = params['id']
        this.movieService. getSerieById(id)
        .subscribe(m => {
            this.airsDayOfTheWeek = m.data.airsDayOfWeek
            this.airsTime = m.data.airsTime;
            this.image = m.data.banner;
            this.genre = m.data.genre;
            this.runTime = m.data.runtime;
            // this.hours = Math.floor(this.runTime / 60); 
            // this.minutes = this.runTime % 60;
            this.rating = m.data.rating;
            this.seriesName = m.data.seriesName;
            this.overview = m.data.overview;
        });
    });
    }

  ngOnInit() {
    this.url = "https://thetvdb.com'+this.image+')"
  }

}