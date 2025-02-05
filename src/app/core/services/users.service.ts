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

}
