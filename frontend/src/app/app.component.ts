import { Component, Inject } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { WINDOW } from './core/api-local/window.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor(
    @Inject(WINDOW) private windowRef: Window,
    private router: Router
  ) {
    this.onNavigationEnd();
  }

  private onNavigationEnd(): void {
    this.router.events.subscribe(
      (navigationEvent: Event) => {
        if (navigationEvent instanceof NavigationEnd) {
          // this.windowRef.scroll(0, 0);
          this.windowRef.document.getElementById('preloader').className = 'content-spinner hide';
        }
      }
    );
  }
}
