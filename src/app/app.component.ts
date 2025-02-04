import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './core/components/layout/layout.component';
import { SidebarComponent } from "./core/components/sidebar/sidebar.component";
import { AuthServiceService } from './core/services/auth-service.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LayoutComponent, SidebarComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'auth-app';
  isLoggedIn = false;

  constructor(private authService: AuthServiceService){}

  ngOnInit(){
    this.authService.currentUser.subscribe(user => {
      this.isLoggedIn = !!user;
    })
  }

}
