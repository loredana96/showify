import { Component } from '@angular/core';
import { faFilm, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  faHome = faHome;
  faFilm = faFilm;
  
  
  title = 'Showify';
}
