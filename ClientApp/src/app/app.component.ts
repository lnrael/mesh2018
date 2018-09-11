import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  viewProviders: [MatIconRegistry]
})
export class AppComponent {
  title = 'app';

  constructor(iconReg: MatIconRegistry, sanitizer: DomSanitizer) {
    // For offline use, we need to register the icons in the asset folder to use them with mat-icon
    iconReg.addSvgIcon('person-add', sanitizer.bypassSecurityTrustResourceUrl('assets/person-add.svg'));
    iconReg.addSvgIcon('account-circle', sanitizer.bypassSecurityTrustResourceUrl('assets/account-circle.svg'));
    iconReg.addSvgIcon('delete', sanitizer.bypassSecurityTrustResourceUrl('assets/delete.svg'));
    iconReg.addSvgIcon('search', sanitizer.bypassSecurityTrustResourceUrl('assets/search.svg'));
    iconReg.addSvgIcon('clear', sanitizer.bypassSecurityTrustResourceUrl('assets/clear.svg'));
    iconReg.addSvgIcon('person', sanitizer.bypassSecurityTrustResourceUrl('assets/person.svg'));
    iconReg.addSvgIcon('phone', sanitizer.bypassSecurityTrustResourceUrl('assets/phone.svg'));
    iconReg.addSvgIcon('email', sanitizer.bypassSecurityTrustResourceUrl('assets/email.svg'));
  }
}
