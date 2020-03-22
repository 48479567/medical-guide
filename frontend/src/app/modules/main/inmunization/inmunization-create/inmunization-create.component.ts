import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators as vl } from '@angular/forms';
import { IInmunization } from '../../../../shared/models';
import { InmunizationHttpService } from '../../../../core/http/inmunization.http.service';

@Component({
  selector: 'app-inmunization-create',
  templateUrl: './inmunization-create.component.html',
  styleUrls: ['./inmunization-create.component.sass']
})
export class InmunizationCreateComponent implements OnInit {
  public inmunizationForm: FormGroup = this.fb.group({
    inmunization: this.fb.control('', [vl.required])
  });

  constructor(
    private fb: FormBuilder,
    private inmunizationHttpService: InmunizationHttpService
  ) { }

  ngOnInit(): void {
  }

  public submitInmunization(): void {
    const inmunizationToSend = JSON.parse(this.inmunizationForm.value.inmunization);
    console.log(inmunizationToSend);
    this.inmunizationHttpService.postInmunization(inmunizationToSend).subscribe(
      (inmunization: IInmunization) => {
      }
    );
  }
}
