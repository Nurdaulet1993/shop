import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { SharedModule } from "@shared/shared.module";

import { CustomerDefaultComponent } from './customer-default.component';

@NgModule({
  declarations: [
    CustomerDefaultComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    CustomerDefaultComponent
  ]
})
export class CustomerDefaultModule {}
