import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search-as-you-type',
  templateUrl: './search-as-you-type.component.html',
  styleUrls: ['./search-as-you-type.component.css']
})
export class SearchAsYouTypeComponent implements OnInit {
  private searchString = new Subject<string>();
  searchStringDebounced = this.searchString.pipe(
    debounceTime(400),
    distinctUntilChanged(),
    tap(console.log)
  );

  constructor() { }

  ngOnInit() {
  }

  search(value: string) {
    this.searchString.next(value);
  }
}
