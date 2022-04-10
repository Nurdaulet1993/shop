import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminDefaultComponent } from "@layouts/admin-default/admin-default.component";

const routes: Routes = [
  {
    path: '',
    component: AdminDefaultComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@app/dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDefaultRoutingModule {
  static components = [AdminDefaultComponent]
}
