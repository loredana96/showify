import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { API_BASE_URL } from 'src/config/config';
import { LoginAPIKey } from 'src/types/LoginAPIKey.interface';
import { LoginAPIKeyResponse } from 'src/types/LoginAPIKeyResponse.interface';

@Injectable() 
export class AuthenticationService {

    constructor(private httpClient: HttpClient) {}

    getJWTToken(body: LoginAPIKey) {
       return this.httpClient.post<LoginAPIKeyResponse>(API_BASE_URL + "login", body);
    }
}

