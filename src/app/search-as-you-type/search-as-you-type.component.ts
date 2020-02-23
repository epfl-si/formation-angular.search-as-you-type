import { Component, OnInit } from '@angular/core';
import { Subscription, Subject } from 'rxjs';

@Component({
  selector: 'app-search-as-you-type',
  templateUrl: './search-as-you-type.component.html',
  styleUrls: ['./search-as-you-type.component.css']
})
export class SearchAsYouTypeComponent implements OnInit {
  private searchString = new Subject<string>();

  constructor() { }

  private subscribed : Subscription;

  ngOnInit() {
    this.subscribed = this.searchString.subscribe(console.log);
  }

  ngOnDestroy() {
    this.subscribed.unsubscribe();
  }

  search(value: string) {
    this.searchString.next(value);
  }
}
