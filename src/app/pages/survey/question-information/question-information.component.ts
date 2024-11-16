import { Component, EventEmitter, inject, Input, Output, ViewChild } from '@angular/core';
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
import { ContextMenuModule } from 'primeng/contextmenu';
import { MenuItem } from 'primeng/api';
import { KnobModule } from 'primeng/knob';
import { AccordionModule } from 'primeng/accordion';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-question-information',
  standalone: true,
  imports: [StyleClassModule, InputOtpModule, ButtonModule, BadgeModule, FormsModule, ToolbarModule, AvatarModule,
    InputGroupModule, InputGroupAddonModule, InputTextModule, AccordionModule,ImageModule,
    ContextMenuModule, CommonModule, RippleModule, KnobModule],
  templateUrl: './question-information.component.html',
  styleUrl: './question-information.component.scss'
})
export class QuestionInformationComponent {
  router= inject(Router);
  items: MenuItem[] | undefined;
  
  @Input('question') question:any;
  @Output() answer = new EventEmitter<any>();


  navigate(path:string){
    this.router.navigate([path])
  }

}
