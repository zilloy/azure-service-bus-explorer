import { Component } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private authService: MsalService, router: Router){
    router.events.subscribe(val => {
      this.buildBreadcrumb();
    });
  }

  logout(){
    this.authService.logout();
  }

  public breadcrumb: Array<any> = [];

  buildBreadcrumb(): void { 
    this.breadcrumb = [];
    const p = window.location.hash.substring(2).split('/');
    this.breadcrumb.push({name: 'Subscriptions', url: '/#/subscriptions'});

    if (p.length > 2) {
      this.breadcrumb.push({name: p[1], url: '/#/subscriptions/' + p[1] + '/service-bus-services/'});
    }
    if (p.length > 3) {
      this.breadcrumb.push({name: p[3].substring(0, p[3].indexOf('?')), url: '/#/subscriptions/' + p[1] + '/service-bus-services/' + p[3]});
    }

  }
}
