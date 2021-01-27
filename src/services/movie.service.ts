import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { API_BASE_URL } from 'src/config/config';

@Injectable() 
export class MovieService {

    constructor(private httpClient: HttpClient) {}

    getMovieUpdates(since: string) {
        let headers = new HttpHeaders();
        headers = headers.append("Authorization", "Bearer " + localStorage.getItem("token"));
        let params = new HttpParams();
        params = params.append('since', since);
        this.httpClient.get(API_BASE_URL + "movieupdates", {
            headers,
            params
        }).subscribe(o => {
            console.log(o);
        })
    }
}
