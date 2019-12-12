import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of, from } from 'rxjs';
import { Iboards } from '../Models/Iboards';

export const httpOptions =  {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class BoardsService {

  private _url :string = "http://localhost:8000/boards"

  constructor(private http: HttpClient) {   
  }

  getBoards():Observable<Iboards[]> {
    return this.http.get<Iboards[]>(this._url)
  }

  ShowBoardById(id):Observable<Iboards> {
    return this.http.get<Iboards>(`${this._url}/find/${id}`);
    }


    addBoard(_id,BoardName,Speed,Range,Warranty,Price,ShippingTime) {
      const obj = {
        _id: _id,
        BoardName: BoardName,
        Speed: Speed,
        Range: Range,
        Warranty: Warranty,
        Price: Price,
        ShippingTime: ShippingTime
      };
      this.http.post(`${this._url}/add`, obj)
          .subscribe(res => console.log('Done'));
    }
    DeleteBoard(id) {
      return this
                .http
                .get(`${this._url}/delete/${id}`);
    }
    editBoard(BoardName,Speed,Range,Warranty,Price,ShippingTime, id) {

        const obj = {
          BoardName: BoardName,
          Speed: Speed,
          Range: Range,
          Warranty: Warranty,
          Price: Price,
          ShippingTime: ShippingTime
          };
        this
          .http
          .post(`${this._url}/edit/${id}`, obj)
          .subscribe(res => console.log('Done'));
      }
}
