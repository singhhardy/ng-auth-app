import { Component } from '@angular/core';
import { UsersService } from '../../core/services/users.service';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [NgFor, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
 UsersList: any = { users: [] };

 constructor(private userService: UsersService){}
 
 ngOnInit(){
  this.getAllUsers()
 }

 getAllUsers(): void{
  this.userService.getAllUsers().subscribe(data => {
    this.UsersList = data
    console.log(this.UsersList.users)  
  })
 }

}
