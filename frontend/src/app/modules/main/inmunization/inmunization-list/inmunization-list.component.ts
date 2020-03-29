import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { InmunizationService } from '../../../../core/services/inmunization.service';
import { InmunizationHttpService } from '../../../../core/http/inmunization.http.service';
import { IInmunization } from '../../../../shared/models';
import { ColorService } from '../../../../core/services/styles/color.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-inmunization-list',
  templateUrl: './inmunization-list.component.html',
  styleUrls: ['./inmunization-list.component.sass'],
})
export class InmunizationListComponent implements OnInit {
  public inmunizations$: Observable<IInmunization[]>;
  public selectedInmunization: IInmunization;
  public indexSelectedInmunization: number;

  constructor(
    private inmunizationService: InmunizationService,
    private inmunizationHttpService: InmunizationHttpService,
    private router: Router,
    public colorService: ColorService,
    public dialog: MatDialog
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

  public viewInmunizationDetail(
    templateInmunization: IInmunization,
    indexTemplateInmunization: number): void {

    this.indexSelectedInmunization = indexTemplateInmunization;
    this.selectedInmunization = templateInmunization;
  }

  public goEditInmunization(): void {
      this.inmunizationService.setSelectedInmunization(this.selectedInmunization);
      this.router.navigate(['/main/inmunization/inmunization-form']);
  }
}
