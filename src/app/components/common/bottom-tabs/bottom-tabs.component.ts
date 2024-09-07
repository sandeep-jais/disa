import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottom-tabs',
  standalone: true,
  imports: [],
  templateUrl: './bottom-tabs.component.html',
  styleUrl: './bottom-tabs.component.scss'
})
export class BottomTabsComponent {
    router= inject(Router);

    navigate(path:string){
      this.router.navigate([path])
    }
}
