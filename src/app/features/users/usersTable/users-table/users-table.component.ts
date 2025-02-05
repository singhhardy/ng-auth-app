import { Component } from '@angular/core';
import { UsersService } from '../../../../core/services/users.service';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserEditModalComponent } from '../../userEditModal/user-edit-modal/user-edit-modal.component';

@Component({
  selector: 'app-users-table',
  imports: [NgFor, CommonModule],
  templateUrl: './users-table.component.html',
  styleUrl: './users-table.component.css'
})
export class UsersTableComponent {
  UsersList: any = { users: [] };

  constructor(private userService: UsersService, private modalService: NgbModal){}
  
  ngOnInit(){
   this.getAllUsers()
  }
 
  getAllUsers(): void{
   this.userService.getAllUsers().subscribe(data => {
     this.UsersList = data
   })
  }
 
  editUser(user: any){
    const modalRef = this.modalService.open(UserEditModalComponent, {size: 'lg', backdrop: 'static'})
    modalRef.componentInstance.user = user
  }

  deleteUser(user: any){
    console.log(user)
  }

}
