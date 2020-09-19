import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {parseHttpResponse} from "selenium-webdriver/http";


@Injectable({
  providedIn: 'root'
})

export class FoodServiceService {

  constructor(public http: HttpClient) {
  }

  baseUrl = 'https://api-beta.bite.ai/';
  apiKey = 'fa89c094d59e6e3b88c1ac55bac573d0a6948f9b';

  getAllFood(name: string) {
    const url = this.baseUrl + 'items/search/?query=' + name + '&has_nutrition_facts=true&nutrition=true';
    const header = new HttpHeaders();
    header.append('Authorization', 'Bearer ' + this.apiKey);
    this.http.get(url, {headers: header}).subscribe(response => console.log(response));
  }

}
