import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MsalModule, MsalInterceptor } from '@azure/msal-angular';

import { SubscriptionsComponent } from './components/common/subscriptions/subscriptions.component';
import { HomeComponent } from './components/home/home.component';

const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

@NgModule({
  declarations: [
    AppComponent,
    SubscriptionsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MsalModule.forRoot({
      auth: {
        clientId: environment.Msal.auth.clientId,
        authority: 'https://login.microsoftonline.com/organizations/'
      },
      cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: isIE
      }
    },
      {
        popUp: false,
        consentScopes: [
          'user.read',
          'https://management.azure.com/user_impersonation'
        ],
        unprotectedResources: [],
        protectedResourceMap: [
          ['graph.microsoft.com', ['user.read']],
          ['management.azure.com', ['https://management.azure.com/user_impersonation']],
        ],
        extraQueryParameters: {}
      })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
