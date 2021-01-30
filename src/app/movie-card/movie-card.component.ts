import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MovieService } from 'src/services/movie.service';
import { IMovie, ITranslation, } from 'src/types/Movies.interface';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: [ './movie-card.component.scss' ]
})

export class MovieCardComponent implements OnInit{

  @Input() releaseDate: string;
  @Input() movieTitle: string[];
  @Input() overview: string[];
  @Input() image: string;
  @Input() actor: string;
  @Input() role: string;
  @Input() runSource: string;


  constructor(private movieService: MovieService) {}

  ngOnInit() {
    
  }


}
