import { Component, OnInit, Input } from '@angular/core';
import { IInmunization } from 'src/app/shared/models';
import { InmunizationService } from 'src/app/core/services/inmunization.service';
import { InmunizationHttpService } from 'src/app/core/http/inmunization.http.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-inmunization-detail',
  templateUrl: './inmunization-detail.component.html',
  styleUrls: ['./inmunization-detail.component.sass']
})
export class InmunizationDetailComponent implements OnInit {
  @Input() public inmunization: IInmunization;


  constructor(
    private route: ActivatedRoute,
    private inmunizationService: InmunizationService,
    private inmunizationHttpService: InmunizationHttpService
  ) { }

  ngOnInit(): void {
    // this.route.paramMap.subscribe(
    //   (params: ParamMap) => this.getInmunizationBySelector(+params.get('id'))
    // );
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
