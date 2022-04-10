import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

import { FlexBoxComponent } from './flex-box.component';

const routes: Routes = [
  { path: '', component: FlexBoxComponent }
]


@NgModule({
  declarations: [
    FlexBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FlexBoxModule { }
