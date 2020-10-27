import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const UrlBase = "https://localhost:44365/api/game?Id=";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }
  GetGameList(Id: number){
    const Url = `${ UrlBase }${Id}`;
    return this.http.get(Url);
  }
}
