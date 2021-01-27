import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { API_BASE_URL } from 'src/config/config';
import { IMovie, IMovieUpdates } from 'src/types/Movies.interface';

@Injectable() 
export class MovieService {

    constructor(private httpClient: HttpClient) {}

    getMovieUpdates(since: string) {
        let headers = new HttpHeaders();
        headers = headers.append("Authorization", "Bearer " + localStorage.getItem("token"));
        let params = new HttpParams();
        params = params.append('since', since);
        return this.httpClient.get<IMovieUpdates>(API_BASE_URL + "movieupdates", {
            headers,
            params
        })
    }

    getMovie(id: string) {
        let headers = new HttpHeaders();
        headers = headers.append("Authorization", "Bearer " + localStorage.getItem("token"));
        let params = new HttpParams();
        params = params.append("id", id);
        return this.httpClient.get<IMovie>(API_BASE_URL + "movies/" + id, {
            headers,
            params
        })
    } 
}
