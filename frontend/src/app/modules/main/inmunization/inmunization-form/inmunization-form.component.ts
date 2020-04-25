import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators as vl,
  FormArray
} from '@angular/forms';

import { IInmunization, ISchemeInmunization, IAdministrationInmunization } from '../../../../shared/models';
import { InmunizationHttpService } from '../../../../core/http/inmunization.http.service';
import { FormService } from '../../../../core/services/form/form.service';
import { MatDialog } from '@angular/material/dialog';
import {
  InmunizationDetailDialogComponent
} from '../inmunization-detail/inmunization-detail.dialog.component';
import { InmunizationService } from '../../../../core/services/inmunization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inmunization-form',
  templateUrl: './inmunization-form.component.html',
  styleUrls: ['./inmunization-form.component.sass'],
  providers: [FormService]
})
export class InmunizationFormComponent implements OnInit, OnDestroy {
  title = 'Create Inmunization';
  idExternalInmunization: string;

  private internalInmunization: IInmunization = {
    selector: '',
    title: '',
    group: 0,
    kind: '',
    description: [''],
    composition: {
      subtitle: '',
      list: [''],
      type: ''
    },
    presentation: [''],
    indications: [''],
    scheme: [
      {
        condition: '',
        applications: [''],
        additional: ''
      }
    ],
    dose: [''],
    conservation: [''],
    administration: [{
      subtitle: '',
      list: ['']
    }],
    sideEffects: [
      {
        subtitle: '',
        list: ['']
      }
    ],
    contraindications: [''],
    simultaneousUse: ''
  };

  public inmunizationForm: FormGroup;

  public scheme: FormArray;
  public sideEffects: FormArray;
  public administration: FormArray;

  constructor(
    private fb: FormBuilder,
    private inmunizationHttpService: InmunizationHttpService,
    private inmunizationService: InmunizationService,
    public fs: FormService,
    public dialog: MatDialog,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    setTimeout(() => this.getForm(), 0);
  }

  ngOnDestroy(): void {
    this.inmunizationService.setSelectedInmunization(null);
  }

  public getForm(): void {
    const externalInmunization = this.inmunizationService.getSelectedInmunization();
    if (externalInmunization) {
      this.title = 'Edit Inmunization';
      this.idExternalInmunization = externalInmunization._id;
      this.inmunizationForm = this.generationInmunizationForm(externalInmunization);
    } else {
      this.inmunizationForm = this.generationInmunizationForm(this.internalInmunization);
    }
    this.fs.formGroup = this.inmunizationForm;
    this.scheme = this.fs.getArrCtrl('scheme', this.inmunizationForm);
    this.sideEffects = this.fs.getArrCtrl('sideEffects', this.inmunizationForm);
    this.administration = this.fs.getArrCtrl('administration', this.inmunizationForm);
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

  private generationInmunizationForm(inmunizationObject: IInmunization): FormGroup {
    return this.fb.group({
      selector: [inmunizationObject.selector, vl.required],
      title: [inmunizationObject.title, vl.required],
      group: [inmunizationObject.group, vl.required],
      kind: [inmunizationObject.kind, vl.required],
      description: this.fb.array(
        inmunizationObject.description.map(
          (itemDescription: string) => [itemDescription, vl.required]
        )),
      composition: this.fb.group({
        subtitle: [inmunizationObject.composition.subtitle, vl.required],
        list: this.fb.array(
          inmunizationObject.composition.list.map(
            (itemList: string) => [itemList, vl.required]
          )),
        type: [inmunizationObject.composition.type, vl.required]
      }),
      presentation: this.fb.array(
        inmunizationObject.presentation.map(
          (itemPresentation: string) => [itemPresentation, vl.required]
        )),
      indications: this.fb.array(
        inmunizationObject.indications.map(
          (indicationItem: string) => [indicationItem, vl.required]
        )),
      scheme: this.fb.array(
        inmunizationObject.scheme.map(
          (schemeItem: ISchemeInmunization) => this.fb.group({
            condition: [schemeItem.condition, vl.required],
            applications: this.fb.array(
              schemeItem.applications.map(
                (schemeApplicationItem) => [schemeApplicationItem, vl.required]
              )),
            additional: [schemeItem.additional, vl.required]
          })
        )
      ),
      dose: this.fb.array(
        inmunizationObject.dose.map(
          (doseItem: string) => [doseItem, vl.required]
        )),
      conservation: this.fb.array(
        inmunizationObject.conservation.map(
          (conservationItem: string) => [conservationItem, vl.required]
        )),
      administration: this.fb.array(
        inmunizationObject.administration.map(
          (administrationItem: IAdministrationInmunization) => this.fb.group({
            subtitle: administrationItem.subtitle,
            list: this.fb.array(
              administrationItem.list.map(
                (listItem: string) => [listItem, vl.required]
              ))
          })
        )),
      sideEffects: this.fb.array(
        inmunizationObject.sideEffects.map(
          (sideEffectItem: IAdministrationInmunization) => this.fb.group({
            subtitle: [sideEffectItem.subtitle, vl.required],
            list: this.fb.array(
              sideEffectItem.list.map(
              (listItem: string) => [listItem, vl.required]
            ))
          })
        )
      ),
      contraindications: this.fb.array(
        inmunizationObject.contraindications.map(
          (contraIndicationItem: string) => [contraIndicationItem, vl.required]
        )
      ),
      simultaneousUse: [inmunizationObject.simultaneousUse, vl.required]
    });
  }

  public openDialogPreview(): void {
    const dialogRef = this.dialog.open(InmunizationDetailDialogComponent, {
      data: this.inmunizationForm.value as IInmunization,
      panelClass: 'complete'
    });
  }

  public submitInmunization(): void {
    if (this.idExternalInmunization) {
      this.inmunizationHttpService.editInmunization(
        this.inmunizationForm.value,
        this.idExternalInmunization).subscribe(
          (inmunization: IInmunization) => this.performAfterSubmit());
      return;
    }

    this.inmunizationHttpService.postInmunization(
      this.inmunizationForm.value).subscribe(
        (inmunization: IInmunization) => this.performAfterSubmit());
  }

  private performAfterSubmit(): Promise<boolean> {
    return this.router.navigateByUrl('/main/inmunization/inmunization-list');
  }

}
