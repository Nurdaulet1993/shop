import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { CustomerDefaultComponent } from "@layouts/customer-default/customer-default.component";

const routes: Routes = [
  {
    path: '',
    component: CustomerDefaultComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      }
    ]
  },
  {
    path: 'admin',
    loadChildren: () => import('@layouts/admin-default/admin-default.module').then(m => m.AdminDefaultModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
