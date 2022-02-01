import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(email,password)
  {
return this.http.post("http://localhost:56622/api/User/login",{"email":email, "password":password});
  }
}
