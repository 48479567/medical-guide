import { Component, OnInit } from '@angular/core';
import { IChildLink, IContainerChildLink } from '../../shared/models/route.model';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit, IContainerChildLink {
  public childLinks: IChildLink[] = [];

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public getChildLinks(outletComponet: IContainerChildLink) {
    this.childLinks = outletComponet.childLinks;
  }

  public logOut(): void {
    this.authService.signOut();
    this.router.navigate(['/auth']);
  }

}
