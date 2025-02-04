import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private apiUrl = environment.baseUrl;
  private currentUserSubject = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) { 
    this.loadUserFromStorage();
  }

  private loadUserFromStorage(){
    const user = localStorage.getItem('user')
    if(user){
      this.currentUserSubject.next(JSON.parse(user))
    }
  }

  get currentUser(){
    return this.currentUserSubject.asObservable();
  }

  login(credentials: {username: string, password: string}): Observable<any>{
    return this.http.post(`${this.apiUrl}/auth/login`, credentials).pipe(
      tap((res: any) => {
        localStorage.setItem('accessToken', res.accessToken);
        localStorage.setItem('refreshToken', res.refreshToken);
        localStorage.setItem('user', JSON.stringify(res));
        this.currentUserSubject.next(res)
      })
    )
  }

  getCurrentUser(): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/me`, {refreshToken: localStorage.getItem('refreshToken')}).pipe(
      tap((res: any) => {
        localStorage.setItem('refreshToken', res.refreshToken)
      })
    )
  }

  refreshToken(): Observable<any> {
    return this.http.post(`${this.apiUrl}/refresh`, { refreshToken: localStorage.getItem('refreshToken') }).pipe(
      tap((res: any) => {
        localStorage.setItem('token', res.token);
      })
    );
  }

  logout(){
    localStorage.clear();
    this.currentUserSubject.next(null)
  }

}
