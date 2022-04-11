import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { SharedModule } from "@shared/shared.module";
import { HeaderModule } from "@shared/layout/header/header.module";
import { FooterModule } from "@shared/layout/footer/footer.module";

import { CustomerDefaultComponent } from './customer-default.component';

@NgModule({
  declarations: [
    CustomerDefaultComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HeaderModule,
    FooterModule,
    RouterModule
  ],
  exports: [
    CustomerDefaultComponent
  ]
})
export class CustomerDefaultModule {}
