import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { tap, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

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

  searchResults = this.searchStringDebounced.pipe(
      switchMap(searchEPFL)
  );

  constructor() { }

  ngOnInit() {
  }

  search(value: string) {
    this.searchString.next(value);
  }
}

// Copy-pasted from https://stackblitz.com/edit/epfl-angular-exercice4-jquery?file=index.js
function searchEPFL(q) /* returns Promise<Object[]> */ {
  const url = "https://search-api.epfl.ch/api/ldap?q=" + q +
     "&showall=0" +
     "&hl=fr" +
     "&pagesize=all" +
     "&siteSearch=formation+Angular+IDEV";
  return fetch(url, {
      "credentials": "omit",
      "mode": "cors"
      }).then(function(r) {
        return r.json();
      });
};
