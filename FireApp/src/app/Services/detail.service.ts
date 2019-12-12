import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of, from, Subject } from 'rxjs';
import { Idetail } from '../Models/Idetail';
import { IpaymentDetail } from '../Models/IpaymentDetail';
import { Iissue } from '../Models/Iissue';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  uri = 'http://localhost:8000/detail';
  uri1 = 'http://localhost:8000/payment';
  uri2 = 'http://localhost:8000/issue';

  constructor(private http: HttpClient) { }

  getDetail():Observable<Idetail[]> {
    return this.http.get<Idetail[]>(this.uri)
  }
  
  getPaymentDetail():Observable<IpaymentDetail[]> {
    return this.http.get<IpaymentDetail[]>(this.uri1)
  }
  getIssue():Observable<Iissue[]> {
    return this.http.get<Iissue[]>(this.uri2)
  }
  
  addDetail(email,fname,lname,pnumber,address) {
    const obj = {
      Email: email,
      Fname: fname,
      Lname: lname,
      Phone_Number: pnumber,
      Address: address
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }
  addPayment(email,fname,nameoncard,cardno,edate,bid,item) {
    const obj = {
      Email: email,
      Fname: fname,
      NameOnCard: nameoncard,
      CardNo: cardno,
      EDate: edate,
      Board_id: bid,
      NoOfItem:  item
    };
    console.log(obj);
    this.http.post(`${this.uri1}/add`, obj)
        .subscribe(res => console.log('Done'));
  }
  addIssue(email,subject,issue,fname,pnumber,orderno) {
    const obj = {
      Email: email,
      Subject: subject,
      Issue: issue,
      Fname: fname,
      Phone_Number: pnumber,
      Order_No: orderno
    };
    this.http.post(`${this.uri2}/add`, obj)
        .subscribe(res => console.log('Done'));
  }
}


