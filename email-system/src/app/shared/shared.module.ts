import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputComponent} from './input/input.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from './header/header.component';
import {RouterLinkActive, RouterLinkWithHref} from "@angular/router";
import {ModelComponent} from './model/model.component';


@NgModule({
  declarations: [
    InputComponent,
    HeaderComponent,
    ModelComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLinkWithHref,
    RouterLinkActive
  ],
  exports: [
    InputComponent,
    HeaderComponent,
    ModelComponent
  ]
})
export class SharedModule {
}
