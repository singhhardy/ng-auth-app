import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCollapse, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NgbCollapse, NgbModule, CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  isCollapsed = true; 

  constructor(private authService: AuthServiceService, private router: Router){}

  onLogout(){
    this.authService.logout()
    this.router.navigate(['/'])
  }

}
