import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-service-bus-services',
  templateUrl: './service-bus-services.component.html',
  styleUrls: ['./service-bus-services.component.scss']
})
export class ServiceBusServicesComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient) { }
  namespaces: Array<any> = [];

  ngOnInit(): void {
    this.route.parent.url.subscribe((urlPath) => {
      const subId = urlPath[1].path;
      console.log('Sub ID:', subId);
      this.getNamespaces(subId);
    });
  }

  getNamespaces(subId: string): void {
    this.http.get<any>('https://management.azure.com/subscriptions/' + subId + '/providers/Microsoft.ServiceBus/namespaces?api-version=2017-04-01').subscribe(
      (result) => {
        this.namespaces = result.value;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
