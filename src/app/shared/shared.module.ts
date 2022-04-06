import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialUiModule } from "./material-ui.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialUiModule
  ],
  exports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialUiModule
  ]
})
export class SharedModule { }
