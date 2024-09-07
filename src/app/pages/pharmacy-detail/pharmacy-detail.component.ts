import { Component, inject, ViewChild } from '@angular/core';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputOtpModule } from 'primeng/inputotp';
import { Router } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { ToolbarModule } from 'primeng/toolbar';
import { BadgeModule } from 'primeng/badge';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { CommonModule } from '@angular/common';
import { ContextMenu, ContextMenuModule } from 'primeng/contextmenu';
import { MenuItem } from 'primeng/api';
import { KnobModule } from 'primeng/knob';
import { HeaderComponent } from "../../components/common/header/header.component";
import { NameSorterPipe } from '../../pipes/name-sorter.pipe';


@Component({
  selector: 'app-pharmacy-detail',
  standalone: true,
  imports: [StyleClassModule, InputOtpModule, ButtonModule, BadgeModule, FormsModule, ToolbarModule, AvatarModule,
    InputGroupModule, InputGroupAddonModule, InputTextModule,
    ContextMenuModule, CommonModule, RippleModule, KnobModule, HeaderComponent,NameSorterPipe],
  templateUrl: './pharmacy-detail.component.html',
  styleUrl: './pharmacy-detail.component.scss'
})
export class PharmacyDetailComponent {
  router= inject(Router);
  items: MenuItem[] | undefined;
  pendingOutlets:number= 8;
    @ViewChild('cm') cm!: ContextMenu;

    selectedId!: string|undefined;

    data = [
        {
            id: '1000',
            name: 'Sita Pharmacy',
            description: '3/5 Mohali punjab',
            status:"pending",
            distance: 65
        },
        {
            id: '1001',
            name: 'Go Site Pharmacy',
            description: '3/5 Mohali punjab',
            status:"completed",
            distance: 90
        },
        {
            id: '1002',
            name: 'Lala Pharmacy',
            description: '3/9 Mohali punjab',
            status:"completed",
            distance: 70
        },
        {
          id: '1000',
          name: 'Sita Pharmacy',
          description: '3/5 Mohali punjab',
          status:"pending",
          distance: 65
      },
      {
          id: '1001',
          name: 'Go Site Pharmacy',
          description: '3/5 Mohali punjab',
          status:"completed",
          distance: 90
      },
      {
          id: '1002',
          name: 'Lala Pharmacy',
          description: '3/9 Mohali punjab',
          status:"completed",
          distance: 70
      },
      {
        id: '1000',
        name: 'Sita Pharmacy',
        description: '3/5 Mohali punjab',
        status:"pending",
        distance: 65
    },
    {
        id: '1001',
        name: 'Go Site Pharmacy',
        description: '3/5 Mohali punjab',
        status:"completed",
        distance: 90
    },
    {
        id: '1002',
        name: 'Lala Pharmacy',
        description: '3/9 Mohali punjab',
        status:"completed",
        distance: 70
    },
        
    ];

    ngOnInit() {
        this.items = [
            {
                label: 'Favorite',
                icon: 'pi pi-star',
                shortcut: '⌘+D'
            },
            {
                label: 'Add',
                icon: 'pi pi-shopping-cart',
                shortcut: '⌘+A'
            },
            {
                separator: true
            },
            {
                label: 'Share',
                icon: 'pi pi-share-alt',
                items: [
                    {
                        label: 'Whatsapp',
                        icon: 'pi pi-whatsapp',
                        badge: '2'
                    },
                    {
                        label: 'Instagram',
                        icon: 'pi pi-instagram',
                        badge: '3'
                    }
                ]
            }
        ];
    }

    onContextMenu(event:any) {
        this.cm.target = event.currentTarget;
        this.cm.show(event);
    }

    onHide() {
        this.selectedId = undefined;
    }
}
