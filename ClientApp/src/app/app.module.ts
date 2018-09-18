import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactFilterComponent } from './contact-filter/contact-filter.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { ContactService } from './contact.service';

const routes: Route[] = [
  { path: '', redirectTo: 'Contacts/Search', pathMatch: 'full' },
  { path: 'Contacts/Search', component: ContactViewComponent }
];

@NgModule({
  declarations: [AppComponent, ContactViewComponent, ContactListComponent, ContactFilterComponent],
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
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    BrowserAnimationsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule {}
