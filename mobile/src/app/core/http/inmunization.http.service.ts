// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
// import { IInmunization } from '../../shared/models';
// import { API_URI } from './api-uri';
// import { InmunizationService } from '../services/inmunization.service';
// import { tap } from 'rxjs/operators';

// @Injectable({ providedIn: 'root' })
// export class InmunizationHttpService {
//   constructor(
//     private http: HttpClient,
//     private inmunizationService: InmunizationService
//   ) {}

//   public getInmunizations(): Observable<IInmunization[]> {
//     return this.http.get<IInmunization[]>(`${API_URI}/inmunization`).pipe(
//       tap((inmunizations: IInmunization[]) => {
//         console.log('http - Inmunization');
//         this.inmunizationService.setInmunizations(inmunizations);
//       })
//     );
//   }

// }
