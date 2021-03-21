import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin/admin.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      {path: 'doadores', loadChildren: () => import('./doador/doador.module').then(d => d.DoadorModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
