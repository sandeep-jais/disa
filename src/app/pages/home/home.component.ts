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
import { BottomTabsComponent } from '@components/common/bottom-tabs/bottom-tabs.component';
import { NameSorterPipe } from '@pipes/name-sorter.pipe';
import { FooterComponent } from '@components/common/footer/footer.component';
import { HeaderComponent } from '@components/common/header/header.component';
import { UserService } from '@services/user.service';
import { getGreetingTime } from 'helpers/greetings';
import { StoreService } from '@services/store/store.service';
import { ArraySearchFilterPipe } from '@pipes/arraySearchFilter.pipe';
@Component({
    selector: 'app-home',
    standalone: true,
    imports: [StyleClassModule, InputOtpModule, ButtonModule, BadgeModule, FormsModule, ToolbarModule, AvatarModule,
        InputGroupModule, InputGroupAddonModule, InputTextModule, BottomTabsComponent,ArraySearchFilterPipe,
        ContextMenuModule, CommonModule, RippleModule, KnobModule, NameSorterPipe, FooterComponent, HeaderComponent],
    providers: [NameSorterPipe,ArraySearchFilterPipe],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
    router = inject(Router);
    items: MenuItem[] | undefined;
    pendingOutlets: number = 8;
    date: Date = new Date();
    greeting= getGreetingTime();
    @ViewChild('cm') cm!: ContextMenu;

    selectedId!: string | undefined;

    data = [
        {
            id: '1000',
            name: 'Sita Pharmacy',
            description: '3/5 Mohali punjab',
            status: "pending",
            distance: 65
        },
        {
            id: '1001',
            name: 'Go Site Pharmacy',
            description: '3/5 Mohali punjab',
            status: "pending",
            distance: 90
        },
        {
            id: '1002',
            name: 'Lala Pharmacy',
            description: '3/9 Mohali punjab',
            status: "pending",
            distance: 70
        },

    ];
  userService = inject(UserService);
  storeService = inject(StoreService);
  userDetail: any;
  stores:any[]=[];
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
        this.userDetail= this.userService.getUserInfo();
        this.storeService.getAllStores({page:1,limit:100}).subscribe((resp:any) => {
             this.stores= resp;
        })
    }

    onContextMenu(event: any) {
        this.cm.target = event.currentTarget;
        this.cm.show(event);
    }

    onHide() {
        this.selectedId = undefined;
    }
}
