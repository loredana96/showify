import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { API_BASE_URL } from 'src/config/config';
import { IMovie, ITranslation, } from 'src/types/Movies.interface';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: [ './movie-card.component.scss' ]
})

export class MovieCardComponent implements OnInit{

    @Input() movie: IMovie;
    public releaseDate: string;
    public movieTitle: string[];
    public overview: string[];
    public image: string;
    httpClient: any;

    ngOnInit() {
        this.releaseDate = this.movie.release_dates[0].date.replace(/-/g, " ");
        this.movieTitle = this.movie.translations.filter(language => language.language_code === "eng").map(lang => lang.name);
        this.overview = this.movie.translations.filter(overview => overview.language_code === "eng").map(description => description.overview);
        this.image = this.movie.artworks[0].url;
    }
}
