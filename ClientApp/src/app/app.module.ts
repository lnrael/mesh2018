import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Route[] = [
  // { path: '', redirectTo: '', pathMatch: 'full' },
  // { path: '', component: },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }), // Includes all basic angular directives
    HttpClientModule, // Includes angular http providers
    FormsModule, // Form/input directives
    RouterModule.forRoot(routes), // Register routes,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
