import { Component } from '@angular/core';
import { API_KEY } from 'src/config/config';
import { AuthenticationService } from 'src/services/authentication.service';
import { MovieService } from 'src/services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Showify';

  // request() {
  //   this.movieService.getMovieUpdates('1264577045');
  // }

  // login() {
  //   this.authService.getJWTToken({ apikey: API_KEY }).subscribe(o => {
  //     localStorage.setItem('token', o.token);
  //   })
  // }
}
