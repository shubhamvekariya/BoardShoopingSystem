import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of, from } from 'rxjs';
import { Iaccessories } from '../Models/Iaccessories';

export const httpOptions =  {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AccessoriesService {

  private _url :string = "http://localhost:8000/accessories"

  constructor(private http: HttpClient) {   
  }

  getAccessories():Observable<Iaccessories[]> {
    return this.http.get<Iaccessories[]>(this._url)
  }

  ShowAccessoryById(id):Observable<Iaccessories> {
    return this.http.get<Iaccessories>(`${this._url}/find/${id}`);
    }
    addAccessory(_id,AccessoryName,Description1,Description2,Description3,Description4,Description5,Price,ShippingTime) {
      const obj = {
        _id: _id,
        AccessoryName: AccessoryName,
        Description1: Description1,
        Description2: Description2,
        Description3: Description3,
        Description4: Description4,
        Description5: Description5,
        Price: Price,
        ShippingTime: ShippingTime
      };
      this.http.post(`${this._url}/add`, obj)
          .subscribe(res => console.log('Done'));
    }
    DeleteAccessory(id) {
      return this
                .http
                .get(`${this._url}/delete/${id}`);
    }
    editAccessory(AccessoryName,Description1,Description2,Description3,Description4,Description5,Price,ShippingTime, id) {

        const obj = {
          AccessoryName: AccessoryName,
          Description1: Description1,
          Description2: Description2,
          Description3: Description3,
          Description4: Description4,
          Description5: Description5,
          Price: Price,
          ShippingTime: ShippingTime
          };
        this
          .http
          .post(`${this._url}/edit/${id}`, obj)
          .subscribe(res => console.log('Done'));
      }
}
