import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class FoodServiceService {

  constructor(public http: HttpClient) {
  }

  baseUrl = 'https://api-beta.bite.ai/';
  apiKey = '16d3f5e94d6a7f5cd6d987277d4b6a537070097b';

  getAllFood(name: string) {
    const url = this.baseUrl + 'items/search/?query=' + name;
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + this.apiKey);
    this.http.get(url, {headers: header}).subscribe(response => console.log(response));
  }

}
