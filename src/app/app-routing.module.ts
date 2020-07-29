import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { ServiceBusServicesComponent } from './components/service-bus-services/service-bus-services.component';
import { ServiceBusServiceComponent } from './components/service-bus-service/service-bus-service.component';

const routes: Routes = [
  { path: '',   redirectTo: 'subscriptions', pathMatch: 'full' },
  {
    path: 'subscriptions',
    component: SubscriptionsComponent,
    canActivate: [
       MsalGuard
    ]
  },
  {
    path:'subscriptions/:subscriptionId',
    component: SubscriptionComponent,
    canActivate: [
      MsalGuard
    ],
    children:[
      { path: '',   redirectTo: 'service-bus-services', pathMatch: 'full' },
      {
        path: 'service-bus-services',
        component: ServiceBusServicesComponent
      },
      {
        path: 'service-bus-services/:serviceBusId',
        component: ServiceBusServiceComponent
      }  
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
