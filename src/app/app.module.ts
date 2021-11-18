import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsComponent } from './forms/forms.component';
import { AddFormsComponent } from './forms/add-forms/add-forms.component';
import { ListFormsComponent } from './forms/list-forms/list-forms.component';
import { DetailFormsComponent } from './forms/detail-forms/detail-forms.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './navbar/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormsComponent,
    AddFormsComponent,
    ListFormsComponent,
    DetailFormsComponent,
    NavbarComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
