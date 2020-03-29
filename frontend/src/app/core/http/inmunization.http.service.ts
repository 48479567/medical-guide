import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IInmunization } from '../../shared/models';
import { API_URI } from './api-uri';
import { InmunizationService } from '../services/inmunization.service';
import { tap, catchError } from 'rxjs/operators';
import { LoggerService } from '../logger.service';
import { HandleErrorService } from '../handle-error.service';

@Injectable({ providedIn: 'root' })
export class InmunizationHttpService {
  constructor(
    private http: HttpClient,
    private inmunizationService: InmunizationService,
    private loggerService: LoggerService,
    private handleErrorService: HandleErrorService
  ) { }

  public getInmunizations(): Observable<IInmunization[]> {
    return this.http.get<IInmunization[]>(`${API_URI}/inmunization`).pipe(
      tap((inmunizations: IInmunization[]) => {
        this.inmunizationService.setInmunizations(inmunizations);
        return this.loggerService.log(`Get ${inmunizations.length} inmunizations !!`, 'bg-primary');
      }),
      catchError(
        this.handleErrorService.handleError<IInmunization[]>(
          'Get Inmunization(s)', [], this.loggerService)
      )
    );
  }

  public postInmunization(newInmunization: IInmunization): Observable<IInmunization> {
    return this.http.post<IInmunization>(`${API_URI}/inmunization`, newInmunization).pipe(
      tap((inmunization: IInmunization) => {
        this.inmunizationService.addInmunization(inmunization);
        return this.loggerService.log(`
          Created Inmunization with selector: ${inmunization.selector}`,
          'bg-success');
      }),
      catchError(
        this.handleErrorService.handleError<IInmunization>(
          `Create Inmunization`, null, this.loggerService)
      )
    );
  }

  public editInmunization(
    entryInmunization: IInmunization,
    idEntryInmunization: string): Observable<any> {

    return this.http.put<any>(`${API_URI}/inmunization/${idEntryInmunization}`, entryInmunization).pipe(
      tap(
        (inmunization: IInmunization) => {
          this.inmunizationService.editInmunization(entryInmunization);
          return this.loggerService.log(`
            Edit Inmunization with selector: ${inmunization.selector}`);
        }),
      catchError(
        this.handleErrorService.handleError<any>(
          'Update Inmunization', entryInmunization, this.loggerService)
      )
    );
  }

}
