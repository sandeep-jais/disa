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
import { AccordionModule } from 'primeng/accordion';
import { BottomTabsComponent } from "../../components/common/bottom-tabs/bottom-tabs.component";
import { FooterComponent } from "../../components/common/footer/footer.component";
import { ImageModule } from 'primeng/image';
import { ImageLightBoxComponent } from '../../components/image-light-box/image-light-box.component';

@Component({
    selector: 'app-product-detail',
    standalone: true,
    imports: [StyleClassModule, InputOtpModule, ButtonModule, BadgeModule, FormsModule, ToolbarModule, AvatarModule,
        InputGroupModule, InputGroupAddonModule, InputTextModule, AccordionModule, ImageModule, ImageLightBoxComponent,
        ContextMenuModule, CommonModule, RippleModule, KnobModule, HeaderComponent, BottomTabsComponent, FooterComponent],
    templateUrl: './product-detail.component.html',
    styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
    router = inject(Router);
    items: MenuItem[] | undefined;
    visible: boolean = false;
    selectedImage:any;
    
    navigate(path: string) {
        this.router.navigate([path])
    }
    pendingOutlets: number = 8;
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
            status: "completed",
            distance: 90
        },
        {
            id: '1002',
            name: 'Lala Pharmacy',
            description: '3/9 Mohali punjab',
            status: "completed",
            distance: 70
        },
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
            status: "completed",
            distance: 90
        },
        {
            id: '1002',
            name: 'Lala Pharmacy',
            description: '3/9 Mohali punjab',
            status: "completed",
            distance: 70
        },
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
            status: "completed",
            distance: 90
        },
        {
            id: '1002',
            name: 'Lala Pharmacy',
            description: '3/9 Mohali punjab',
            status: "completed",
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

    onContextMenu(event: any) {
        this.cm.target = event.currentTarget;
        this.cm.show(event);
    }

    onHide() {
        this.selectedId = undefined;
    }

    openPreview(fileName: any) {
        this.selectedImage = fileName;
        this.visible = true;
    }
    hideLightBox() {
        this.visible = false;
        this.selectedImage = null;
    }
}
