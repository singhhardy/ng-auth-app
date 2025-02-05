import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-edit-modal',
  imports: [],
  templateUrl: './user-edit-modal.component.html',
  styleUrl: './user-edit-modal.component.css'
})
export class UserEditModalComponent {
  @Input() user: any;

  constructor(public activeModal: NgbActiveModal){}

  ngOnInit(){
    console.log(this.user)
  }

  onSubmit(){
    console.log(this.user)
    // this.activeModal.close(this.user);
  }

}
