import { Component, OnInit } from '@angular/core';
import { IContainerChildLink, IChildLink } from '../../../shared/models/route.model';

@Component({
  selector: 'app-inmunization',
  templateUrl: './inmunization.component.html',
  styleUrls: ['./inmunization.component.sass'],
})
export class InmunizationComponent implements OnInit, IContainerChildLink {
  public childLinks: IChildLink[] = [
    {
      title: 'Inmunization List',
      path: '/main/inmunization/inmunization-list',
      icon: 'view_list'
    },
    {
      title: 'Inmunization Create',
      path: '/main/inmunization/inmunization-form',
      icon: 'add_box'
    },
  ];

  ngOnInit(): void {

  }

}
