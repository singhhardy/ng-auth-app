import { Component } from '@angular/core';
import { UsersTableComponent } from "../users/usersTable/users-table/users-table.component";

@Component({
  selector: 'app-dashboard',
  imports: [UsersTableComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {


}
