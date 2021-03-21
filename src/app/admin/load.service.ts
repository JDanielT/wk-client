import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadService {

  emitter: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  load(status: boolean): void {
    this.emitter.emit(status);
  }

}
