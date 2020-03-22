import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { InmunizationService } from 'src/app/core/services/inmunization.service';
import { InmunizationHttpService } from 'src/app/core/http/inmunization.http.service';
import { IInmunization } from 'src/app/shared/models';
import { ColorService } from 'src/app/core/services/styles/color.service';

@Component({
  selector: 'app-inmunization-list',
  templateUrl: './inmunization-list.component.html',
  styleUrls: ['./inmunization-list.component.sass']
})
export class InmunizationListComponent implements OnInit {
  public inmunizations$: Observable<IInmunization[]>;
  public selectedInmunization: IInmunization;
  public indexSelectedInmunization: number;

  constructor(
    private inmunizationService: InmunizationService,
    private inmunizationHttpService: InmunizationHttpService,
    private router: Router,
    public colorService: ColorService
  ) { }

  ngOnInit(): void {
    this.inmunizations$ = this.getInmunizations();
  }

  public getInmunizations(): Observable<IInmunization[]> {
    const inmunizationLocal: IInmunization[] = this.inmunizationService.getInmunizations();

    if (inmunizationLocal.length > 0) {
      return of(inmunizationLocal);
    }
    return this.inmunizationHttpService.getInmunizations();
  }

  public goToInmunizationDetail(
    templateInmunization: IInmunization,
    indexTemplateInmunization: number): void {

    // this.inmunizationService.setSelectedInmunization(templateInmunization);
    // this.router.navigate(['/main/inmunization/inmunization-detail', indexTemplateInmunization]);
    this.indexSelectedInmunization = indexTemplateInmunization;
    this.selectedInmunization = templateInmunization;
  }
}
