import { Component, OnInit, Input } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators as vl,
  FormArray
} from '@angular/forms';

import { IInmunization } from '../../../../shared/models';
import { InmunizationHttpService } from '../../../../core/http/inmunization.http.service';
import { FormService } from '../../../../core/services/form/form.service';
import { MatDialog } from '@angular/material/dialog';
import {
  InmunizationDetailDialogComponent
} from '../inmunization-detail/inmunization-detail.dialog.component';

@Component({
  selector: 'app-inmunization-create',
  templateUrl: './inmunization-create.component.html',
  styleUrls: ['./inmunization-create.component.sass'],
  providers: [FormService]
})
export class InmunizationCreateComponent implements OnInit {

  public inmunizationForm: FormGroup = this.fb.group({
    selector: ['', vl.required],
    title: ['', vl.required],
    group: ['', vl.required],
    kind: ['', vl.required],
    description: this.fb.array([
      ['', vl.required]
    ]),
    composition: this.fb.group({
      subtitle: ['', vl.required],
      list: this.fb.array([
        ['', vl.required]
      ]),
      type: ['', vl.required]
    }),
    presentation: this.fb.array([
      ['', vl.required]
    ]),
    indications: this.fb.array([
      ['', vl.required]
    ]),
    scheme: this.fb.array([
      this.groupScheme()
    ]),
    dose: this.fb.array([
      ['', vl.required]
    ]),
    conservation: this.fb.array([
      ['', vl.required]
    ]),
    administration: this.fb.group({
      subtitle: ['', vl.required],
      list: this.fb.array([
        ['', vl.required]
      ])
    }),
    sideEffects: this.fb.array([
      this.groupSideEffects()
    ]),
    contraindications: this.fb.array([
      ['', vl.required]
    ]),
    simultaneousUse: ['', vl.required]
  });

  public scheme: FormArray = this.fs.getArrCtrl('scheme', this.inmunizationForm);
  public sideEffects: FormArray = this.fs.getArrCtrl('sideEffects', this.inmunizationForm);

  constructor(
    private fb: FormBuilder,
    private inmunizationHttpService: InmunizationHttpService,
    public fs: FormService,
    public dialog: MatDialog
  ) {
    fs.formGroup = this.inmunizationForm;
  }

  ngOnInit(): void {
  }

  public submitInmunization(): void {
    this.inmunizationHttpService.postInmunization(
      this.inmunizationForm.value).subscribe(
      (inmunization: IInmunization) => {
      }
    );
  }

  public groupScheme(): FormGroup {
    return this.fb.group({
      condition: ['', vl.required],
      applications: this.fb.array([
        ['', vl.required]
      ]),
      additional: ['']
    });
  }

  public groupSideEffects(): FormGroup {
    return this.fb.group({
      subtitle: ['', vl.required],
      list: this.fb.array([
        ['', vl.required]
      ])
    });
  }

  log(source: any) {
    console.log(source);
  }

  public deleteGroupControl(formArray: FormArray, index: number): void {
    formArray.removeAt(index);
  }

  public openDialogPreview(): void {
    const dialogRef = this.dialog.open(InmunizationDetailDialogComponent, {
      data: this.inmunizationForm.value as IInmunization,
      panelClass: 'complete'
    });
  }

}
