import { Component, inject } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { SidebarModule } from 'primeng/sidebar';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ToolbarModule,
    SidebarModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  sidebarVisible: boolean = false;
  userService = inject(UserService);
  router= inject(Router);
  userDetail: any;

  ngOnInit() {
    this.userDetail = this.userService.getUserInfo();
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/'])
  }
}
