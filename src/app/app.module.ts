import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CdTimerModule } from 'angular-cd-timer';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';

// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import { InfoComponent } from './info/info.component';
import { ProductsComponent } from './products/products.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MtbComponent } from './mtb/mtb.component';
import { RoadComponent } from './road/road.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent,
    ProductsComponent,
    ContactsComponent,
    MtbComponent,
    RoadComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        CdTimerModule,
        YouTubePlayerModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
