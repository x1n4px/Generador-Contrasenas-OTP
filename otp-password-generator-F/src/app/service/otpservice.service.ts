import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OTPServiceService {

  constructor(private http: HttpClient) { }


  public changePassword(email: string, codigo: string) {
    const body = { email: email, codigo: codigo };
    return this.http.post("http://localhost:8080/generate", body);
  }


}
