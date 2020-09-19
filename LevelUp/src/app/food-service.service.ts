import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FoodItem} from './models/FoodItem';


@Injectable({
  providedIn: 'root'
})

export class FoodServiceService {

  res: FoodItem[];
  constructor(public http: HttpClient) {
  }

  baseUrl = 'https://api-beta.bite.ai/';
  apiKey = '16d3f5e94d6a7f5cd6d987277d4b6a537070097b';

  getAllFood(name: string){
    const promise = new Promise((resolve, reject) => {
      const url = this.baseUrl + 'items/search/?query=' + name;
      const header = new HttpHeaders().set('Authorization', 'Bearer ' + this.apiKey);
      this.http.get(url, {headers: header}).toPromise().then(response =>
      {
        console.log(response);

        resolve(response);
      });
    });
    return promise;
    }

  getFoodDetails(id: string){
    const promise = new Promise((resolve, reject) => {
      const url = this.baseUrl + 'items/' + id + '/';
      const header = new HttpHeaders().set('Authorization', 'Bearer ' + this.apiKey);
      this.http.get(url, {headers: header}).toPromise().then(response =>
      {
        console.log(response);

        resolve(response);
      });
    });
    return promise;
  }
}
