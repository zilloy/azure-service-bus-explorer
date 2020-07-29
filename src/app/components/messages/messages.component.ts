import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {MsalService} from "@azure/msal-angular";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(private http: HttpClient, private auth: MsalService) { }

  ngOnInit(): void {

    // BrokerProperties: {"DeliveryCount":1,"EnqueuedSequenceNumber":0,"EnqueuedTimeUtc":"Tue, 28 Jul 2020 18:28:31 GMT","MessageId":"1bdb3cd8752a4466901715b938d92a09","SequenceNumber":1,"State":"Active"}
    // Content-Type: text/plain
    // Next-Message: https://test00.servicebus.windows.net/test1/messages?timeout=5&PreviousSequenceNumber=2&api-version=2015-01
    // https://test00.servicebus.windows.net/test1/messages?api-version=2015-01&_=1595886721432
    // https://test00.servicebus.windows.net/test1/messages?timeout=5&PreviousSequenceNumber=1&api-version=2015-01&_=1595886721432
    // POST: http{s}://{serviceNamespace}.servicebus.windows.net/{queuePath}/messages/head
    this.http.get<any>('https://test00.servicebus.windows.net/test1/messages?api-version=2015-01').subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
