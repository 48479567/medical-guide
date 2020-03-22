import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { Tab2RoutingModule } from './tab2-routing.module';
import { InmunizationsComponent } from './inmunizations/inmunizations.component';
import { InmunizationComponent } from './inmunization/inmunization.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2RoutingModule
  ],
  declarations: [Tab2Page, InmunizationsComponent, InmunizationComponent]
})
export class Tab2PageModule {}
