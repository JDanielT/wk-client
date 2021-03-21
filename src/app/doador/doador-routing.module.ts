import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UploadComponent} from './upload/upload.component';
import {ConsultaComponent} from './consulta/consulta.component';

const routes: Routes = [
  {path: 'upload', component: UploadComponent},
  {path: 'consulta', component: ConsultaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoadorRoutingModule {
}
