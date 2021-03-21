import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoadorRoutingModule } from './doador-routing.module';
import { UploadComponent } from './upload/upload.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MaterialFileInputModule} from 'ngx-material-file-input';
import {MatButtonModule} from '@angular/material/button';
import { ConsultaComponent } from './consulta/consulta.component';
import {ChartsModule} from 'ng2-charts';


@NgModule({
  declarations: [UploadComponent, ConsultaComponent],
    imports: [
        CommonModule,
        DoadorRoutingModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MaterialFileInputModule,
        ChartsModule
    ]
})
export class DoadorModule { }
