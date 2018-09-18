import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ContactViewComponent } from './contact-view/contact-view.component';

const routes: Route[] = [
  { path: '', redirectTo: 'Contacts/Search', pathMatch: 'full' },
  { path: 'Contacts/Search', component: ContactViewComponent }
];

@NgModule({
  declarations: [AppComponent, ContactViewComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }), // Includes all basic angular directives
    HttpClientModule, // Includes angular http providers
    FormsModule, // Form/input directives
    RouterModule.forRoot(routes), // Register routes,
    FlexLayoutModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
