import { Component } from '@angular/core';
import { faFilm, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { API_KEY } from 'src/config/config';
import { AuthenticationService } from 'src/services/authentication.service';
import { MovieService } from 'src/services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  faHome = faHome;
  faFilm = faFilm;
  faSearch = faSearch;
  
  title = 'Showify';
}
