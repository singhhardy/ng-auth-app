import { Component } from '@angular/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-sidebar',
  imports: [NgbCollapse],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isCollapsed = false; 
  isSubMenuCollapsed = true; 
  isSubSubMenuCollapsed = true;

  constructor(private authService: AuthServiceService){}

  ngOnInit(){
    // this.authService.getCurrentUser().subscribe()
  }

}
