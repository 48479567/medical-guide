import { Component, OnInit } from '@angular/core';
import { IInmunization } from '../../shared/models';
import { Observable, of } from 'rxjs';
import { InmunizationService } from '../../core/services/inmunization.service';
import { InmunizationHttpService } from '../../core/http/inmunization.http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inmunizations',
  templateUrl: './inmunizations.component.html',
  styleUrls: ['./inmunizations.component.css']
})
export class InmunizationsComponent implements OnInit {
  public inmunizations$: Observable<IInmunization[]>;

  constructor(
    private inmunizationService: InmunizationService,
    private inmunizationHttpService: InmunizationHttpService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.inmunizations$ = this.getInmunizations();
  }

  private getInmunizations(): Observable<IInmunization[]> {
    const localInmunizations: IInmunization[] = this.inmunizationService.getInmunizations();

    if (localInmunizations.length !== 0) {
      return of(localInmunizations);
    }
    return this.inmunizationHttpService.getInmunizations();
  }

  public goToInmunization(templateInmunization: IInmunization): void {
    this.inmunizationService.setSelectedInmunization(templateInmunization);
    this.router.navigate(['./inmunization'], { relativeTo: this.route });
  }

}