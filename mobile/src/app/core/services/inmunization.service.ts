import { Injectable } from "@angular/core";
import { IInmunization } from "../../shared/models";
import { Observable, of } from "rxjs";

@Injectable({ providedIn: 'root' })
export class InmunizationService {
  private inmunizations: IInmunization[] = [];
  private selectedInmunization: IInmunization;

  constructor(
  ) { }

  public getInmunizations(): IInmunization[] {
    return this.inmunizations.slice();
  }

  public setInmunizations(externalInmunizations: IInmunization[]): void {
    this.inmunizations = externalInmunizations;
  }

  public getSelectedInmunization(): IInmunization {
    return Object.assign({}, this.selectedInmunization);
  }

  public setSelectedInmunization(externalInmunization: IInmunization): void {
    this.selectedInmunization = externalInmunization;
  }
}
