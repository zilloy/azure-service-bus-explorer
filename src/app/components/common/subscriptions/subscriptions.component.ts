import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubscriptionsComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private changeDetector: ChangeDetectorRef
    ) { }
  subscriptions: Array<any> = [];

  ngOnInit(): void {
    this.http.get<any>('https://management.azure.com/subscriptions?api-version=2020-01-01').subscribe(
      (result) => {
        this.subscriptions = result.value;
        this.changeDetector.markForCheck();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
