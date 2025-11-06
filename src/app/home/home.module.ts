import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularDelegate, IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MatCardModule } from '@Angular/material/card';
import { CompanyLibreriaComponent } from '../company-libreria/company-libreria.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MatCardModule,
    CompanyLibreriaComponent 
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
