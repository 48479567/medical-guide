import { Injectable } from '@angular/core';
import { IInmunization } from '../../shared/models';

@Injectable({ providedIn: 'root' })
export class InmunizationService {
  private inmunizations: IInmunization[] = [];
  private selectedInmunization: IInmunization = null;

  constructor(
  ) { }

  public getInmunizations(): IInmunization[] {
    return this.inmunizations.slice();
  }

  public setInmunizations(externalInmunizations: IInmunization[]): void {
    this.inmunizations = externalInmunizations;
  }

  public getSelectedInmunization(): IInmunization {
    if (this.selectedInmunization) {
      return Object.assign({}, this.selectedInmunization);
    }
    return null;
  }

  public setSelectedInmunization(externalInmunization: IInmunization): void {
    this.selectedInmunization = externalInmunization;
  }

}
