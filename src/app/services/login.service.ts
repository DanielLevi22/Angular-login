import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  login(name: string, password: string) {
    return this.http.post<LoginResponse>("/login", {
      name,
      password
    }).pipe(
      tap((value) => {
        sessionStorage.setItem("tokens",value.token )
        sessionStorage.setItem("username",value.name)

      })
    )
  }
}
