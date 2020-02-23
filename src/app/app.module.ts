import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchAsYouTypeComponent } from './search-as-you-type/search-as-you-type.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchAsYouTypeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
