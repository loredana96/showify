import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/services/movie.service';
import { IMovieDataResponse } from 'src/types/Movies.interface';
import { faBell, faBookmark, faFilm, faHeart, faHome, faList, faPlay, faSearch, faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: [ './movie-card.component.scss' ]
})

export class MovieCardComponent {

  @Input() releaseDate: string;
  @Input() movieTitle: string[];
  @Input() overview: string[];
  @Input() image: string;
  @Input() actor: string;
  @Input() role: string;
  @Input() runSource: string;
  @Input() movie: IMovieDataResponse;
  @Input() id: number;
  @Input() isSeries: boolean;

  link;

  faHeart = faHeart;

  constructor(private router:Router, private movieService: MovieService) {
    this.link = this.movieTitle;
  }

  

}
