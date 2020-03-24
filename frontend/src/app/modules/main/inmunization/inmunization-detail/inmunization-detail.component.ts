import { Component, OnInit, Input, Inject } from '@angular/core';
import { IInmunization } from '../../../../shared/models';
import { InmunizationService } from '../../../../core/services/inmunization.service';
import { InmunizationHttpService } from '../../../../core/http/inmunization.http.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { inmunizationDetailTemplate } from './inmunization-detail.template';

@Component({
  selector: 'app-inmunization-detail',
  template: inmunizationDetailTemplate,
  styleUrls: ['./inmunization-detail.component.sass']
})
export class InmunizationDetailComponent implements OnInit {
  @Input() public inmunization: IInmunization;

  constructor(
    protected route: ActivatedRoute,
    protected inmunizationService: InmunizationService,
    protected inmunizationHttpService: InmunizationHttpService,
  ) { }

  ngOnInit(): void {
  }

  private getInmunizationBySelector(indexInmunization: number): void {
    const localInmunization = this.inmunizationService.getSelectedInmunization();

    if (localInmunization) {
      this.inmunization = localInmunization;
    } else if (this.inmunizationService.getInmunizations().length) {
      this.inmunization = this.inmunizationService.getInmunizations()[indexInmunization];
    } else {
      this.inmunizationHttpService.getInmunizations().subscribe(
        (inmunizations: IInmunization[]) => {
          console.log(inmunizations);
          this.inmunization = inmunizations[indexInmunization];
        }
      );
    }
  }

}
