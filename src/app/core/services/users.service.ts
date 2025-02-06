import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = environment.baseUrl

  constructor(private http: HttpClient) { }
  
  getAllUsers(): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/users`)
  }

  getSingleUser(userId: Number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users/${userId}`)
  }

  updateUser(userId: Number, userData: any): Observable<any[]>{
    return this.http.put<any[]>(`${this.apiUrl}/users/${userId}`, userData)
  }

  deleteUser(userId: Number): Observable<any[]>{
    return this.http.delete<any[]>(`${this.apiUrl}/users/${userId}`)
  }

}
