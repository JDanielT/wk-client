import {Component, OnInit} from '@angular/core';
import {LoadService} from './load.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  loading = false;

  constructor(protected loadService: LoadService) {}

  ngOnInit(): void {
    this.loadService.emitter.subscribe(status => {
      this.loading = status;
    });
  }

}
