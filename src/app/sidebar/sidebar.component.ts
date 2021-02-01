import { Component, OnInit } from '@angular/core';
import { faBookmark, faCouch, faFilm, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: [ './sidebar.component.scss' ]
})
export class SidebarComponent {

    faHome = faHome;
    faFilm = faFilm;
    faCouch = faCouch;
    faBookmark = faBookmark;
}