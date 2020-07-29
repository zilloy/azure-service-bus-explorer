import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-service-bus-service',
  templateUrl: './service-bus-service.component.html',
  styleUrls: ['./service-bus-service.component.scss']
})
export class ServiceBusServiceComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient) { }
  public namespaceName = '';
  public namespaceId = '';
  queues: Array<any>[];
  topics: Array<any>[];

  ngOnInit(): void {
    this.route.url.subscribe((urlPath) => {
      this.namespaceName = urlPath[0].path;
      console.log('Namespace:', this.namespaceName);
      this.route.queryParams.subscribe((q) => {
        this.namespaceId = q['namespaceId'];
        console.log('Namespace ID:', this.namespaceId);
        this.getQueues();
        this.getTopics();
      });
    });
  }

  getQueues(): void {
    this.http.get<any>('https://management.azure.com' + this.namespaceId + '/queues?api-version=2017-04-01').subscribe(
      (result) => {
        this.queues = result.value;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getTopics(): void {
    this.http.get<any>('https://management.azure.com' + this.namespaceId + '/topics?api-version=2017-04-01').subscribe(
      (result) => {
        this.topics = result.value;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
