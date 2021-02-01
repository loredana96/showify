import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { API_BASE_URL } from 'src/config/config';
import { IMovie, IMovieUpdates, IMovieDataResponse, ISearchedMovieDataResponse, ISerieByIdDataResponse, ISerieEpisodesDataResponse } from 'src/types/Movies.interface';
import { debounceTime, throttleTime } from 'rxjs/operators';

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
        return this.httpClient.get<IMovieDataResponse>(API_BASE_URL + "movies/" + id, {
            headers,
            params
        })
    }

    getSearchedMovie(name: string) {
        let headers = new HttpHeaders();
        headers = headers.append("Authorization", "Bearer " + localStorage.getItem("token"));
        let params = new HttpParams();
        params = params.append("name", name);
        return this.httpClient.get<ISearchedMovieDataResponse>(API_BASE_URL + "search/series", {
            headers,
            params
        })
    }

    getSerieById(id: string) {
        let headers = new HttpHeaders();
        headers = headers.append("Authorization", "Bearer " + localStorage.getItem("token"));
        let params = new HttpParams();
        params = params.append("id", id);
        return this.httpClient.get<ISerieByIdDataResponse>(API_BASE_URL + "series/" + id, {
            headers,
            params
        })
    }

    getSerieEpisodes(id: string) {
        let headers = new HttpHeaders();
        headers = headers.append("Authorization", "Bearer " + localStorage.getItem("token"));
        let params = new HttpParams();
        params = params.append("id", id);
        return this.httpClient.get<ISerieEpisodesDataResponse>(API_BASE_URL + "series/"+id+"/episodes", {
            headers,
            params
        })
    }

}
