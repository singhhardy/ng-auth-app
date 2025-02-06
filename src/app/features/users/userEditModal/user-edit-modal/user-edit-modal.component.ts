import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../../../core/services/users.service';

@Component({
  selector: 'app-user-edit-modal',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-edit-modal.component.html',
  styleUrl: './user-edit-modal.component.css'
})
export class UserEditModalComponent {
  @Input() user: any;
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  address: string = ''

  constructor(public activeModal: NgbActiveModal, private userService: UsersService){}

  ngOnInit(){
    this.firstName = this.user.firstName
    this.lastName = this.user.lastName
    this.email = this.user.email
    this.address = this.user.address.address
  }

  onSubmit(){
    const updatedUser = {
      firstName:this.user.firstName = this.firstName,
      lastName: this.user.lastName = this.lastName,
      email:this.user.email = this.email,
      address:this.user.address.address = this.address
    }

    console.log(updatedUser);
    
    this.userService.updateUser(this.user.id, updatedUser).subscribe({
      next: (res) => {
        console.log(res)
        this.activeModal.close()
      },
      error: (err) => {
        console.log(err)
      }
    })
 
  }

}
