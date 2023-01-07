import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyNgClassDirective } from './my-ng-class.directive';
import { MyNgForDirective } from './my-ng-for.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyNgClassDirective,
    MyNgForDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
