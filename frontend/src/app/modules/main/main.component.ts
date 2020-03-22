import { Component, OnInit } from '@angular/core';
import { IChildLink, IContainerChildLink } from '../../shared/models/route.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit, IContainerChildLink {
  public childLinks: IChildLink[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public getChildLinks(outletComponet: IContainerChildLink) {
    console.log(outletComponet);
    this.childLinks = outletComponet.childLinks;
  }

}
