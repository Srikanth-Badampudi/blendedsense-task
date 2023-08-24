import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class BusinessServiceService {
  constructor(private http: HttpClient) {}
  baseURL: string = 'https://stage.blendedsense.com/api/';

  //GET BUSINESS TYPES
  getBusinessTypes() {
    return this.http.get(`${this.baseURL}preferences/executive_preferences`);
  }

  //GET ALL BUSINESS
  getAllBusiness() {
    return this.http.get(`${this.baseURL}projects/businesses/list?status=1`);
  }
}
