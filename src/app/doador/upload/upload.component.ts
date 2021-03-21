import {Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import {DoadorService} from '../doador.service';
import {LoadService} from '../../admin/load.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  json: File = null;

  constructor(protected router: Router,
              protected loadService: LoadService,
              protected doadorService: DoadorService) {
  }

  ngOnInit(): void {
  }

  onChange(files: FileList): void {
    this.json = files.item(0);
    const fileReader = new FileReader();
    fileReader.readAsText(this.json);
    fileReader.onload = (e) => {
      this.loadService.load(true);
      this.doadorService.upload(fileReader.result as string).subscribe(data => {
        Swal.fire({
          title: 'Sucesso!',
          confirmButtonText: 'Ver dados importados',
          icon: 'success'
        }).then((result) => {
          this.router.navigate(['/doadores/consulta']);
        });
        this.loadService.load(false);
      });
    };
  }

}
