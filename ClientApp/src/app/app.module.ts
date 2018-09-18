import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatToolbarModule,
  MatCardModule,
  MatListModule,
  MatIconModule,
  MatDividerModule,
  MatButtonModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { ContactService } from './contact.service';
import { ContactListComponent } from './contact-list/contact-list.component';

const routes: Route[] = [
  { path: '', redirectTo: 'Contacts/Search', pathMatch: 'full' },
  { path: 'Contacts/Search', component: ContactViewComponent }
];

@NgModule({
  declarations: [AppComponent, ContactViewComponent, ContactListComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }), // Includes all basic angular directives
    HttpClientModule, // Includes angular http providers
    FormsModule, // Form/input directives
    RouterModule.forRoot(routes), // Register routes,
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule {}
