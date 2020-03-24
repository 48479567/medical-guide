import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from '../../shared/shared.module';
import { FormService } from '../../core/services/form/form.service';


@NgModule({
  declarations: [MainComponent],
  imports: [
    MainRoutingModule,
    SharedModule,
  ],
  providers: [FormService]
})
export class MainModule { }
