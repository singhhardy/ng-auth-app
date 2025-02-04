import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './core/components/layout/layout.component';
import { SidebarComponent } from "./core/components/sidebar/sidebar.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LayoutComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'auth-app';
}
