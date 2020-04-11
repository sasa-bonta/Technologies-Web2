import { NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {InfoComponent} from './info/info.component';
import {ProductsComponent} from './products/products.component';
import {ContactsComponent} from './contacts/contacts.component';
import {MtbComponent} from './mtb/mtb.component';
import {RoadComponent} from './road/road.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'info', component: InfoComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'mtb', component: MtbComponent },
  { path: 'road', component: RoadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
