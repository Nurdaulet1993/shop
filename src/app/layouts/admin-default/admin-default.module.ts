import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "@shared/shared.module";
import { AdminDefaultRoutingModule } from "@layouts/admin-default/admin-default-routing.module";

@NgModule({
  declarations: [
    AdminDefaultRoutingModule.components
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminDefaultRoutingModule
  ],
  exports: []
})
export class AdminDefaultModule {}
