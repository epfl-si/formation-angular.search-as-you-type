import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap, map, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { HttpClient, HttpParams } from "@angular/common/http";

@Component({
  selector: 'app-search-as-you-type',
  templateUrl: './search-as-you-type.component.html',
  styleUrls: ['./search-as-you-type.component.css']
})
export class SearchAsYouTypeComponent implements OnInit {
  constructor(private http : HttpClient) { }

  private searchString = new Subject<string>();
  searchStringDebounced = this.searchString.pipe(
    debounceTime(400),
    distinctUntilChanged(),
    tap(console.log)
  );

  searchResults = this.searchStringDebounced.pipe(
      switchMap((q) => searchEPFL(this.http, q))
  );

  ngOnInit() {
  }

  search(value: string) {
    this.searchString.next(value);
  }
}

function searchEPFL(http : HttpClient, q : string) : Observable<any[]> {
  const url = "https://search-api.epfl.ch/api/ldap";
  const params = new HttpParams()
    .set('q', q)
    .set('showall', '0')
    .set('hl', 'fr')
    .set('pagesize', 'all')
    .set('siteSearch', 'formation Angular IDEV');
  return http.get<any[]>(url, {
    responseType:"json",
    withCredentials: false,
    params});
};
