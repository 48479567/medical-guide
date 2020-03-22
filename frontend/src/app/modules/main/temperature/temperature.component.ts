import { Component, OnInit } from '@angular/core';
import { IContainerChildLink, IChildLink } from '../../../shared/models/route.model';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.sass']
})
export class TemperatureComponent implements OnInit, IContainerChildLink {
  public childLinks: IChildLink[] = [
    { title: 'Temperature Links', path: '/main/temperature', icon: 'event' },
    { title: 'Temperature Update', path: '/main/inmunization/inmunization-create', icon: 'system_update' },
  ];

  ngOnInit(): void {
  }

}
