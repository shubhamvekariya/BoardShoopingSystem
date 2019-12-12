import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of, from } from 'rxjs';
import { Ilogin } from '../../Models/Ilogin';
export const httpOptions =  {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _url :string = "http://localhost:8000/admin"

  constructor(private http: HttpClient) {   
  }


  loginCheck(id):Observable<Ilogin> {
    return this.http.get<Ilogin>(`${this._url}/login/${id}`);
    }
    getAdmin():Observable<Ilogin[]> {
      return this.http.get<Ilogin[]>(this._url)
    }
    
  ShowAdminById(id):Observable<Ilogin> {
    return this.http.get<Ilogin>(`${this._url}/find/${id}`);
    }

      editAdmin(AdminID,Password, id) {
  
          const obj = {
            AdminID: AdminID,
            Password: Password
            };
          this
            .http
            .post(`${this._url}/edit/${id}`, obj)
            .subscribe(res => console.log('Done'));
        }
}